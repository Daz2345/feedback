Package.describe({
  summary: 'dunnhumby charting package',
  version: '0.1.0',
  name: 'dh:chart'
});

Package.onUse(function (api) {


  var packages = [
    'telescope:core',
    'peernohell:c3@1.1.3',
    'harrison:papa-parse@1.1.0'
  ];

  api.use(packages);
  api.imply(packages);

  // ---------------------------------- 2. Files to include ----------------------------------

  // client & server

  api.addFiles([
    'lib/custom_fields.js',
  ], ['client', 'server']);

  // client

  api.addFiles([
    'lib/client/templates/chart.html',
    'lib/client/templates/chart.js',
  ], ['client']);


});
