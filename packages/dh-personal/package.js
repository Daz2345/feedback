Package.describe({
  summary: 'dunnhumby personalisation package',
  version: '0.1.0',
  name: 'dh:personal'
});

Package.onUse(function (api) {

  // ---------------------------------- 1. Core dependency -----------------------------------

  api.use("telescope:core");

  // ---------------------------------- 2. Files to include ----------------------------------

  // client & server

  api.addFiles([
    'lib/custom_fields.js',
    'lib/permissions.js'
  ], ['client', 'server']);

});


// There are also changes within telescope:posts that need to be checked