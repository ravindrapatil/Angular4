// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyB-8oimi46kKzidcZqfUBd_otukDrM0IH0",
    authDomain: "blogs-94f89.firebaseapp.com",
    databaseURL: "https://blogs-94f89.firebaseio.com",
    projectId: "blogs-94f89",
    storageBucket: "blogs-94f89.appspot.com",
    messagingSenderId: "796838379102"
  }
  // firebase.initializeApp(config);
};
