// Prod Settings

// IP_BLOCKER={
//     redis_enabled:true,//By default IP blocker tries to use REDIS. If you don't wish to use REDIS you can switch to an in memory hashmap by setting this to false.
//     redis_host:"SCALINGO_REDIS_URL",//Your redis hostname. To be changed when using production environments like HEROKU
//     redis_port:"30627",//Your redis port. To be changed when using production environments like HEROKU
//     default_rule:"blacklist",//The default rule is to allow all except blacklisted. Change this to whitelist if you wish to allow some and block all.
//     secret_key:"KkPoI3zD9Ho53kpRqlhtWq66G76p2x5Uqh3nbzXZkZ8S6SeB8T4cLbQnrZC43sN3",//The secret key. Change this to an A-Za-z0-9 string
//     default_expiry:0,//0 to never expire or in milliseconds the amount of time to block a user for.
//     redirect_url:'http://www.google.com/',//The redirect URL
//     on_error:'allow',//If there's an error allow the request through or block it
//     push_ip_route:'push_ip',//The route through which you can push IP addresses to your whitelist or blacklist
//     pull_ip_route:'pull_ip',//The route through which you can pull IP addresses to your whitelist or blacklist
//     on_auth_error:'block',//If a user tries to push or pull an IP and the authorization fails block the user and redirect.
//     on_auth_limit:3,//The max number of times an auth request can fail.
//     interval_duration:7200000, //In milliseconds the interval at which the server checks for expired keys and deletes them.
//     redis_password:'C5SI2mM06K25f52F1Vdv' //No password for localhost
// };

// Dev Settings

IP_BLOCKER={
    redis_enabled:true,//By default IP blocker tries to use REDIS. If you don't wish to use REDIS you can switch to an in memory hashmap by setting this to false.
    redis_host:"127.0.0.1",//Your redis hostname. To be changed when using production environments like HEROKU
    redis_port:"6379",//Your redis port. To be changed when using production environments like HEROKU
    default_rule:"whitelist",//The default rule is to allow all except blacklisted. Change this to whitelist if you wish to allow some and block all.
    secret_key:"SJ4tk6nv35WS8b6PT3K799K86d549m535Sfm8gHY6y6zAm97928896283S568n5S",//The secret key. Change this to an A-Za-z0-9 string
    default_expiry:0,//0 to never expire or in milliseconds the amount of time to block a user for.
    redirect_url:'http://www.google.com',//The redirect URL
    on_error:'allow',//If there's an error allow the request through or block it
    push_ip_route:'push_ip',//The route through which you can push IP addresses to your whitelist or blacklist
    pull_ip_route:'pull_ip',//The route through which you can pull IP addresses to your whitelist or blacklist
    on_auth_error:'block',//If a user tries to push or pull an IP and the authorization fails block the user and redirect.
    on_auth_limit:3,//The max number of times an auth request can fail.
    interval_duration:7200000, //In milliseconds the interval at which the server checks for expired keys and deletes them.
    redis_password:null //No password for localhost
};