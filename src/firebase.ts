import { FirebaseApp, initializeApp } from "firebase/app" ;
import { Database, getDatabase } from "firebase/database" ;

const firebaseConfig: object = 
{
  apiKey: "AIzaSyDy6-1KB73euTirNRe60NdFtQFiwQ0ZZ_U",
  authDomain: "custcssolutions.firebaseapp.com",
  databaseURL: "https://custcssolutions-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "custcssolutions",
  storageBucket: "custcssolutions.appspot.com",
  messagingSenderId: "717510233925",
  appId: "1:717510233925:web:c47de060218c31a818b82c",
  measurementId: "G-E7F8SKK7DB"
} ;

const app: FirebaseApp = initializeApp(firebaseConfig) ;
const database: Database = getDatabase(app) ;

// Export Database
export { database } ;