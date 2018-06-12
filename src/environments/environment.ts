// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyC3Ktde6IzKNlDKmBsbh9yI432OdAO5nQE",
    authDomain: "faas-dtis.firebaseapp.com",
    databaseURL: "https://faas-dtis.firebaseio.com",
    projectId: "faas-dtis",
    storageBucket: "faas-dtis.appspot.com",
    messagingSenderId: "426738839146"
  }

};
