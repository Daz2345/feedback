Package.describe({
  summary: 'Tesco Customer Feedback Package',
  version: '0.1.0',
  name: 'dh:tesco'
});

Package.onUse(function (api) {

  // ---------------------------------- 1. Core dependency -----------------------------------

  var packages = [
    'telescope:core',    
    'telescope:users',
    'fastclick',
    'force-ssl',
    '255kb:meteor-status',
    'meteorhacks:zones',
    'mixmax:smart-disconnect'
  ];

  api.use(packages);
  api.imply(packages);

  // ---------------------------------- 2. Files to include ----------------------------------

  // i18n config (must come first)

  api.addFiles([
    'package-tap.i18n'
  ], ['client', 'server']);

  // client & server

  api.addFiles([
    'lib/custom_fields.js',
    'lib/template_modules.js'
    // 'lib/callbacks.js'
  ], ['client', 'server']);

  // client

  api.addFiles([
    'lib/client/templates/Assigned.html',
    'lib/client/templates/tesco_tabs.html',
    'lib/client/templates/main.html',
    'lib/client/templates/main.js',
    'lib/client/templates/custom_post_title.html',
    'lib/client/templates/custom_post_title.js',
    'lib/client/stylesheets/custom.scss',
    'lib/client/custom_templates.js'
  ], ['client']);

  // server

  // api.addFiles([
  //   'lib/server/templates/custom_emailPostItem.handlebars'
  // ], ['server']);

  // i18n languages (must come last)

  // api.addFiles([
  //   'i18n/en.i18n.json'
  // ], ['client', 'server']);

});
