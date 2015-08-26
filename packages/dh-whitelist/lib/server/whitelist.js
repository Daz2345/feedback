// Prod settings


// Meteor.startup(function () {
//     IP_BLOCKER.redis_enabled = true
//     IP_BLOCKER.redis_host = "dhpulsev2-6587.redis.dbs.appsdeck.eu"//Your redis hostname. To be changed when using production environments like HEROKU
//     IP_BLOCKER.redis_port = "30627"//Your redis port. To be changed when using production environments like HEROKU
//     IP_BLOCKER.default_rule = "blacklist"//The default rule is to allow all except blacklisted. Change this to whitelist if you wish to allow some and block all.
//     IP_BLOCKER.default_expiry = 0
//     IP_BLOCKER.secret_key = "KkPoI3zD9Ho53kpRqlhtWq66G76p2x5Uqh3nbzXZkZ8S6SeB8T4cLbQnrZC43sN3"//The secret key. Change this to an A-Za-z0-9 string
//     IP_BLOCKER.redirect_url = 'http://www.google.com/'//The redirect URL
//     IP_BLOCKER.redis_password = "C5SI2mM06K25f52F1Vdv" //No password for localhost. Put your password here if you're using a production setup.
// });

// Dev settings

// Meteor.startup(function () {
//     IP_BLOCKER.redis_enabled = true
//     IP_BLOCKER.redis_host = "$IP"//Your redis hostname. To be changed when using production environments like HEROKU
//     IP_BLOCKER.redis_port = "6379"//Your redis port. To be changed when using production environments like HEROKU
//     IP_BLOCKER.default_rule = "whitelist"//The default rule is to allow all except blacklisted. Change this to whitelist if you wish to allow some and block all.
//     IP_BLOCKER.default_expiry = 0    
//     IP_BLOCKER.secret_key = "KkPoI3zD9Ho53kpRqlhtWq66G76p2x5Uqh3nbzXZkZ8S6SeB8T4cLbQnrZC43sN3"//The secret key. Change this to an A-Za-z0-9 string
//     IP_BLOCKER.redirect_url = 'http://www.google.com/'//The redirect URL
//     IP_BLOCKER.redis_password = null //No password for localhost. Put your password here if you're using a production setup.
// });