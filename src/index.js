import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore'
ReactDOM.render( < App / > , document.getElementById("root"))
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD65fv_oL7GxQle0DZf20gArXrNALbv_Y4",
    authDomain: "clinica-6605e.firebaseapp.com",
    databaseURL: "https://clinica-6605e-default-rtdb.firebaseio.com",
    projectId: "clinica-6605e",
    storageBucket: "clinica-6605e.appspot.com",
    messagingSenderId: "429290259040",
    appId: "1:429290259040:web:08fbf3fdbc9ef6ad68b905",
    measurementId: "G-B4NRH3RKV1"
}; { /*initializeApp(firebaseConfig);*/ } {
    /*const db = getFirestore(); 

        const Departments_ref = collection(db, 'Departments');
        getDocs(Departments_ref).then((snaoshot) => {
            let departments = [];
            snaoshot.docs.forEach((doc) => {
                departments.push(doc.data())


            })
            console.log(departments)
        }).catch(err => { console.log(err) })*/
}

export default firebaseConfig;