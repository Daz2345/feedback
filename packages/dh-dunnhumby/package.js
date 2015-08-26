Package.describe({
  summary: 'dunnhumby specific package',
  version: '0.1.0',
  name: 'dh:dunnhumby'
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

  // api.addFiles([
  //   'package-tap.i18n'
  // ], ['client', 'server']);

  // // client & server

  api.addFiles([
    'lib/custom_fields.js',
    'lib/users.js',
    // 'lib/template_modules.js',
    // 'lib/callbacks.js'
  ], ['client', 'server']);

  // // client

  api.addFiles([
    'lib/client/templates/dh_post_edit.html', 
    'lib/client/templates/dh_post_submit.html',    
    'lib/client/templates/dh_tabs.html',  
    'lib/client/templates/dh_layout.html',   
    'lib/client/templates/dh_submit_button.html',    
    'lib/client/templates/main.html',
    'lib/client/templates/main.js',
    'lib/client/templates/dh_users_dashboard.html',
    'lib/client/templates/dh_users_dashboard.js',    
    'lib/client/templates/dh_post_page.html',
    'lib/client/templates/dh_users_list_actions.html',
    'lib/client/templates/dh_users_list_actions.js',    
    'lib/client/templates/dh_user_menu_label.html',
    'lib/client/custom_templates.js'  
    // 'lib/client/templates/custom_post_title.html',
    // 'lib/client/templates/custom_post_title.js',
    // 'lib/client/stylesheets/custom.scss',
  ], ['client']);

  // // server

  // api.addFiles([
  //   'lib/server/templates/custom_emailPostItem.handlebars'
  // ], ['server']);

  // // i18n languages (must come last)

  // api.addFiles([
  //   'i18n/en.i18n.json'
  // ], ['client', 'server']);

});
