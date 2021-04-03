import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCv0Xs8sOK9Zb2NPAlUCSjJ8O2A-tIcXuU",
    authDomain: "budgetwise-e3d9c.firebaseapp.com",
    projectId: "budgetwise-e3d9c",
    storageBucket: "budgetwise-e3d9c.appspot.com",
    messagingSenderId: "30108612484",
    appId: "1:30108612484:web:eca4d6d392b549f8988fd1",
    measurementId: "G-ERN5GFQ251"

}

const fire = firebase.initializeApp(config);

export default fire;