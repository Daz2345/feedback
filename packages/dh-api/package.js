Package.describe({
  summary: 'dunnhumby API package',
  version: '0.1.0',
  name: 'dh:api'
});

Package.onUse(function (api) {

  // ---------------------------------- 1. Core dependency -----------------------------------

  var packages = [
    'telescope:core',
    'xcv58:collection-api@0.2.4'
  ];

  api.use(packages);
  api.imply(packages);

  // ---------------------------------- 2. Files to include ----------------------------------

  // server

  api.addFiles([
    'lib/server/API.js'
  ], ['server']);

});


