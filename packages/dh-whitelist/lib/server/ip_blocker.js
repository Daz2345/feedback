var url = Npm.require("url");


var ip_blocker_hashmap={};
function push_ip(){
    var forwarded_for=this.request.headers['x-forwarded-for'];
    try{
        var req=this.request;
        var auth_key=req.query.secret_key;
        var ip_address=req.query.ip_address;
        var request_ip =
            req.connection.remoteAddress || req.socket.remoteAddress; //The default request address
        //In most cases since meteor creates a transparent proxy before your app, all requests get
        // an x-forwarded header. So we set the default IP above and then update this if the x-forwarded-for
        // header exists
        var headers=req.headers;
        if (headers['x-forwarded-for']){
            request_ip=headers['x-forwarded-for'].split(",")[0];
        }
        //If the auth key matches then insert the IP address.
        if(auth_key===IP_BLOCKER.secret_key){
            var date=Date.now();
            date+=IP_BLOCKER.default_expiry;
            date=new Date(date);
            if(IP_BLOCKER.redis_enabled){

                client.hset("ip_blocker_hashmap",ip_address,date.getTime())
            }
            else{
                ip_blocker_hashmap[ip_address]=date.getTime();
            }
            this.response.write("1");
            this.response.end();
        }
        else{
            //Block this IP from further requests to your app
            //if the number of attempts is greater than the limit defined.
            //Blocking happens only if the default action is set to block
            console.info("Authorization Error to Block an IP Address from:"+request_ip+" for IP Address:"+ip_address+" with secret_key:"+auth_key);
            if(IP_BLOCKER.on_auth_error==='block'){
                client.hincrby("ip_blocker_auth_hashmap",request_ip,1);
                client.hget("ip_blocker_auth_hashmap",request_ip,function(error,object){
                    if(error){
                        console.info("There was an error fetching from REDIS for:"+request_ip);
                    }
                    else{
                        if(parseInt(object)>=IP_BLOCKER.on_auth_limit){
                            var date=Date.now();
                            date+=IP_BLOCKER.default_expiry;
                            date=new Date(date);
                            //This user's subsequent requests will forwarded to your redirect URI!
                            client.hset("ip_blocker_hashmap",request_ip,date.getTime())
                        }
                    }
                });
                this.response.write("0");
                this.response.end();
            }
            else{
                //If the default action isn't block then, just return 0
                this.response.write("0");
                this.response.end();
            }
        }
    }
    catch(ex){
        console.info("An exception occured when processing a request from: "+forwarded_for+":"+ex);
        this.response.write("0");
        this.response.end();
    }

}

function pull_ip(){
    var forwarded_for=this.request.headers['x-forwarded-for'];
    try{
        var req=this.request;
        var auth_key=req.query.secret_key;
        var ip_address=req.query.ip_address;
        var request_ip =
            req.connection.remoteAddress || req.socket.remoteAddress; //The default request address
        //In most cases since meteor creates a transparent proxy before your app, all requests get
        // an x-forwarded header. So we set the default IP above and then update this if the x-forwarded-for
        // header exists
        var headers=req.headers;
        if (headers['x-forwarded-for']){
            request_ip=headers['x-forwarded-for'].split(",")[0];
        }
        //If the auth key matches then insert the IP address.
        if(auth_key===IP_BLOCKER.secret_key){
            if(IP_BLOCKER.redis_enabled){
                client.hdel("ip_blocker_hashmap",ip_address)
            }
            else{
                delete ip_blocker_hashmap[ip_address];
            }
            this.response.write("1");
            this.response.end();
        }
        else{
            //Block this IP from further requests to your app
            //if the number of attempts is greater than the limit defined.
            //Blocking happens only if the default action is set to block
            console.info("Authorization Error to Block an IP Address from:"+request_ip+" for IP Address:"+ip_address+" with secret_key:"+auth_key);
            if(IP_BLOCKER.on_auth_error==='block'){
                client.hincrby("ip_blocker_auth_hashmap",request_ip,1);
                client.hget("ip_blocker_auth_hashmap",request_ip,function(error,object){
                    if(error){
                        console.info("There was an error fetching from REDIS for:"+request_ip);
                    }
                    else{
                        if(parseInt(object)>=IP_BLOCKER.on_auth_limit){
                            var date=Date.now();
                            date+=IP_BLOCKER.default_expiry;
                            date=new Date(date);
                            //This user's subsequent requests will forwarded to your redirect URI!
                            client.hset("ip_blocker_hashmap",request_ip,date.getTime())
                        }
                    }
                });
                this.response.write("0");
                this.response.end();
            }
            else{
                //If the default action isn't block then, just return 0
                this.response.write("0");
                this.response.end();
            }
        }
    }
    catch(ex){
        console.info("An exception occured when processing a request from: "+forwarded_for+":"+ex);
        this.response.write("0");
        this.response.end();
    }

}
Meteor.startup(function() {
    if(IP_BLOCKER.redis_enabled){
        console.info("Connecting to REDIS HOST: "+IP_BLOCKER.redis_host);
        client = redis.createClient(IP_BLOCKER.redis_port, IP_BLOCKER.redis_host);
        if(IP_BLOCKER.redis_password!==null){
            client.auth(IP_BLOCKER.redis_password)
        }

    }
    flush_expired();
    if(IP_BLOCKER.default_expiry!==0){

        setInterval(flush_expired,IP_BLOCKER.interval_duration);
    }
    Router.map(function() {
        this.route("ip_blocker_push_ip", {
            path: "/"+IP_BLOCKER.push_ip_route,
            where: "server",
            action: push_ip
        });
        this.route("ip_blocker_pull_ip", {
            path: "/"+IP_BLOCKER.pull_ip_route,
            where: "server",
            action: pull_ip
        });
    });
});

function flush_expired(){
    if(IP_BLOCKER.redis_enabled){
        client.hgetall("ip_blocker_hashmap",function(err,obj){
           if(err){
               console.info("There was an error cleaning up old keys in ip_blocker");
           }
            else{
               var current_time=new Date();
               current_time=current_time.getTime();
               for(var key in obj){
                   if(parseInt(obj[key])<=current_time){
                       console.info("IP_BLOCKER deleting key:"+key);
                       client.hdel("ip_blocker_hashmap",key);
                   }
               }
           }
        });
    }
    else{
        var current_time=new Date();
        current_time=current_time.getTime();
        for(var key in ip_blocker_hashmap){
            if(parseInt(ip_blocker_hashmap[key])<=current_time){
                console.info("IP_BLOCKER deleting key:"+key);
                delete ip_blocker_hashmap[key];
            }
        }
    }
}




var httpServer = WebApp.httpServer;
var oldHttpServerListeners = httpServer.listeners('request').slice(0);
httpServer.removeAllListeners('request');
httpServer.addListener('request', function (req, res) {
    //Modifying the HTTP server listener to validate requests based on the IP address
    //And then based on the result either forwarding the user to the redirect url specified
    //or processing the request.
    var args = arguments;
    try{
        var remoteAddress =
            req.connection.remoteAddress || req.socket.remoteAddress; //The default request address
        //In most cases since meteor creates a transparent proxy before your app, all requests get
        // an x-forwarded header. So we set the default IP above and then update this if the x-forwarded-for
        // header exists
        var headers=req.headers;
        if (headers['x-forwarded-for']){
            remoteAddress=headers['x-forwarded-for'].split(",")[0];
        }
        //The IP address now is user's actual IP address
        if(IP_BLOCKER.redis_enabled){
            //If you have enabled REDIS then this package will use your redis config.
            //The name of the hashmap in which ip addresses are stored is  ip_blocker_hashmap
            //So we check if the key exists in the system. If it exists then proceed to route the user
            //based on the behaviour you have configured.
            client.hexists("ip_blocker_hashmap",remoteAddress,function(error,obj){
                if(error!==undefined && error!==null){
                    //On error, based on configuration either allow or block requests.
                    if(IP_BLOCKER.on_error==='allow'){
                        _.each(oldHttpServerListeners, function(oldListener) {
                            oldListener.apply(httpServer, args);
                        });
                    }
                    else{
                        res.writeHead(302, {
                            'Location': IP_BLOCKER.redirect_url
                        });
                        res.end();
                        return;
                    }
                }
                else{
                    if(IP_BLOCKER.default_rule==="blacklist"){
                        //If you're blacklisting IPs i.e. allow all except some then the logic is here
                        if(obj===0){
                            //The key doesn't exist.Forward the request to the other http listeners.
                            _.each(oldHttpServerListeners, function(oldListener) {
                                oldListener.apply(httpServer, args);
                            });
                        }
                        else{
                            //The key exists - redirect the user.
                            res.writeHead(302, {
                                'Location': IP_BLOCKER.redirect_url
                            });
                            res.end();
                            return;
                        }
                    }
                    else{
                        //You are whitelisting IPs i.e. allow some, block the rest
                        if(obj===0){
                            //The key doesnt exist so redirect the user.
                            res.writeHead(302, {
                                'Location': IP_BLOCKER.redirect_url
                            });
                            res.end();
                            return;

                        }
                        else{
                            //The IP address exists - so allow the user to proceed
                            _.each(oldHttpServerListeners, function(oldListener) {
                                oldListener.apply(httpServer, args);
                            });
                        }
                    }

                }
            });
        }
        else{
            //You are not using REDIS. THis approach is not recommended as the hashmap remains in memory and can become very large and unwieldy.
            //The rest of the behaviour is the same as for REDIS above.
            if(ip_blocker_hashmap.hasOwnProperty(remoteAddress)){
                if(IP_BLOCKER.default_rule==="blacklist"){
                    res.writeHead(302, {
                        'Location': IP_BLOCKER.redirect_url
                    });
                    res.end();
                    return;
                }
                else{
                    _.each(oldHttpServerListeners, function(oldListener) {
                        oldListener.apply(httpServer, args);
                    });
                }

            }
            else{
                if(IP_BLOCKER.default_rule==="blacklist"){
                    _.each(oldHttpServerListeners, function(oldListener) {
                        oldListener.apply(httpServer, args);
                    });
                }
                else{
                    res.writeHead(302, {
                        'Location': IP_BLOCKER.redirect_url
                    });
                    res.end();
                    return;
                }

            }
        }
    }
    catch(ex){
        //This exception may occur due to incorrect parsing of the IP address or due to REDIS connection errors.
        // In such cases if the default behaviour is to allow then allow else block.
        console.info("There was an exception:"+ex);
        if(IP_BLOCKER.on_error==='allow'){
            _.each(oldHttpServerListeners, function(oldListener) {
                oldListener.apply(httpServer, args);
            });
        }
        else{
            res.writeHead(302, {
                'Location': IP_BLOCKER.redirect_url
            });
            res.end();
            return;
        }

    }


});

