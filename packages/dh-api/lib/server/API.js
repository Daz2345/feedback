Meteor.startup(function () {

    // All values listed below are default
    collectionApi = new CollectionAPI({
      // Dev key - needs to be updated for live!
      authToken: "NmM5FsS2A45qLY6Hq7tt1Q23uCs8c9Gs0Z58DjdN2E31P1172SJFTV2Uy2wpBHk2",      // Require this string to be passed in on each request
      apiPath: 'api',                    // API path prefix
      standAlone: false,                 // Run as a stand-alone HTTP(S) server
      allowCORS: false,                  // Allow CORS (Cross-Origin Resource Sharing)
      sslEnabled: false,                 // Disable/Enable SSL (stand-alone only)
      listenPort: 3005,                  // Port to listen to (stand-alone only)
      listenHost: undefined,             // Host to bind to (stand-alone only)
      privateKeyFile: 'privatekey.pem',  // SSL private key file (only used if SSL is enabled)
      certificateFile: 'certificate.pem' // SSL certificate key file (only used if SSL is enabled)
    });

    // Add the collection categories to the API "/categories" path
    collectionApi.addCollection(Categories, 'categories');
    // Add the collection posts to the API "/posts" path    
    collectionApi.addCollection(Posts, 'posts');

    // Starts the API server
    collectionApi.start();
  });