var admin = require("firebase-admin");
var serviceAccount = require("./servicio-jason.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://login-ng-53c33.firebaseio.com/"
  });