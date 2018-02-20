// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCMbVqqjurVo2s-REhJx-3oYYWu8dOqi_c",
    authDomain: "runstudies.firebaseapp.com",
    databaseURL: "https://runstudies.firebaseio.com",
    projectId: "runstudies",
    storageBucket: "runstudies.appspot.com",
    messagingSenderId: "1000328689637"
  },
  mongodbConfig: {
    database: 'mongodb://localhost:27017/runStudies'
  }
};
