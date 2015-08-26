Package.describe({
  summary: 'dunnhumby heatmap package',
  version: '0.1.0',
  name: 'dh:heatmap'
});

Package.onUse(function (api) {


  var packages = [
    'telescope:core',
    'pauloborges:mapbox@2.1.5',
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
    'lib/client/templates/heatmap.html',
    'lib/client/templates/heatmap.js',
    'lib/client/templates/main.js',
    'lib/client/stylesheets/custom.css'    
  ], ['client']);

});