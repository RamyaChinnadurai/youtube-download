import firebase from 'firebase/app'
import "firebase/storage";
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const config = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID
};

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

const storage = firebase.storage();

export { storage, firebase as default };
