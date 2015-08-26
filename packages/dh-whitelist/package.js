Package.describe({
  summary: 'Whitelist - controls access to application ',
  version: '0.1.0',
  name: 'dh:whitelist'
});

Package.onUse(function (api) {

  // ---------------------------------- 1. Core dependency -----------------------------------

    api.versionsFrom('METEOR@1.0.2');
    api.use('iron:router@1.0.5', 'server');
    api.use('webapp', 'server');
    api.use('underscore','server');
    api.use('mrt:redis@0.1.3','server');    
    // make sure we come after livedata, so we load after the sockjs
    // server has been instantiated.
    api.add_files('lib/server/ip_blocker_config.js', 'server');
    api.export('IP_BLOCKER', 'server');
    api.add_files('lib/server/ip_blocker.js', 'server');

  // ---------------------------------- 2. Files to include ----------------------------------

  // server

  api.addFiles([
    'lib/server/whitelist.js'
  ], ['server']);


});