import { getFirestore, collection, getDocs, onSnapshot } from 'firebase/firestore'
import { useState, useEffect } from 'react';
import departments from './Departments';
import { initializeApp } from "firebase/app";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dpage from './Dpage';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    const firebaseConfig = {
        apiKey: "AIzaSyD65fv_oL7GxQle0DZf20gArXrNALbv_Y4",
        authDomain: "clinica-6605e.firebaseapp.com",
        databaseURL: "https://clinica-6605e-default-rtdb.firebaseio.com",
        projectId: "clinica-6605e",
        storageBucket: "clinica-6605e.appspot.com",
        messagingSenderId: "429290259040",
        appId: "1:429290259040:web:08fbf3fdbc9ef6ad68b905",
        measurementId: "G-B4NRH3RKV1"
    };
    initializeApp(firebaseConfig);

    const db = getFirestore();
    const Departments_ref = collection(db, 'Departments');
    const [Dimages, setImages] = useState([{ imag: "https://clinika.modeltheme.com/wp-content/uploads/2017/11/Clinika-member-4.jpg", Name: "Dr Jimmy Larsen", cat: "Cardiologist" },
            { imag: "https://clinika.modeltheme.com/wp-content/uploads/2017/11/Clinika-Team2.jpg", Name: "Dr Antonio Irving", cat: "Orthodontist" },
            { imag: "https://clinika.modeltheme.com/wp-content/uploads/2020/05/Clinika-Team01.jpg", Name: "Dr Jimmy Larsen", cat: "Cardiologist" },
            { imag: "https://clinika.modeltheme.com/wp-content/uploads/2017/11/Clinika-member-3.jpg", Name: "Dr Jimmy Larsen", cat: "Cardiologist" }
        ])
        //console.log(departments)
        //useEffect(() =>
        //getDocs(Departments_ref).then((snaoshot) => {
        //    //departments = [];
        //    GetDepartments(() => {
        //        snaoshot.docs.map((doc) => {
        //            //departments = [];
        //            departments.push(doc.data())
        //            console.log(departments)

    //        })
    //    })

    //    console.log(departments)
    //}).catch(err => { console.log(err) });
    //onSnapshot(Departments_ref, (snaoshot) => {
    //        //GetDepartments(() => {
    //        snaoshot.docs.map((doc) => {
    //                var [departments, GetDepartments] = useState(["test"])
    //                    //departments = [];
    //                departments.push(doc.data())
    //                console.log(doc.data())
    //                console.log(departments)

    //            })
    //            //console.log(departments)
    //            //})

    //    })
    //[departments])

    //console.log(departments)
    return ( <
            div >
            <
            div className = 'Section-one' >
            <
            img src = 'https://clinika.modeltheme.com/wp-content/uploads/2020/06/home_img_wrap.png' / >
            <
            div >
            <
            h2 > Clinika - Best Medical Clinic,
            Thousands of specialities
            for any type diagnostic. < /h2> <
            p > Aenean volutpat, sem sit amet ullamcoer gravida, molestie risus enim nulla.Pellentesqu velit faucibus kodale dolor rhoncu.Curabituring laciniam efficitur porttitor.Predefined chuniks. < /p> <
            button type = "button" > Browse through diagnostic < /button> < /
            div > <
            /div> <
            div className = 'Section-two' >
            <
            div >
            <
            h2 > Specialized medical checkup tailored to the patient < /h2> <
            div className = 'Side' >
            <
            div >
            <
            img src = 'https://clinika.modeltheme.com/wp-content/uploads/2020/09/Clinka-service-1.png'
            className = 'Icons' / >
            <
            h3 > All medical facility < /h3> <
            p > Entreaties unpleasant sufficient few pianoforte discovered. < /p> < /
            div > <
            div >
            <
            img src = 'https://clinika.modeltheme.com/wp-content/uploads/2020/09/Clinka-service-2.png'
            className = 'Icons' / >
            <
            h3 > Lowest fees in city <
            /h3> <
            p > May find some redeeming value with wait
            for it, dummy copy. < /p> < /
            div > < div > <
            img src = 'https://clinika.modeltheme.com/wp-content/uploads/2020/09/Clinika-service-3.png'
            className = 'Icons' / >
            <
            h3 > Experienced Doctor < /h3> <
            p > A client that’ s unhappy
            for ants reason is problem is worse. < /p> < /
            div > < div > <
            img src = 'https://clinika.modeltheme.com/wp-content/uploads/2020/09/Clinka-service-4.png'
            className = 'Icons' / >
            <
            h3 > 5000 + Happy Patient < /h3> <
            p > Even
            if your less into design and more in content strategy. < /p> < /
            div > <
            /
            div > <
            /div> <
            div className = 'Bc' >
            <
            img src = "https://clinika.modeltheme.com/wp-content/uploads/2020/09/Clinika-bebeftis-image-1-768x801.png"
            alt = "" / >
            <
            /
            div > <
            /div> 

            <
            h1 > Specialities available at Clinika <
            /h1> {
            departments.map((e) => {
                return (

                    <
                    div className = 'Body' >

                    <
                    div className = 'dContanier'
                    key = { e.name }
                    onClick = {
                        () => {
                            window.location.href = "/Dpage"
                        }
                    } >

                    <
                    img src = { e.image }
                    alt = "" / >
                    <
                    p className = "cat" > { e.name } < /p>  < /
                    div >
                    <
                    /
                    div >
                )
            })
        } <
        div className = 'sectionThree' >
        <
        h1 > Our experienced doctors <
        /h1> <
    p > A team of expert doctors that are leading our clinic!Meet our staff and visit us
    for your next problem! < /p>  <
    div className = 'team' > {
            Dimages.map((e) =>
                <
                div className = 'td' >
                <
                div id = 'contacts' >
                <
                i class = "material-icons" > email < /i> <
                i class = "material-icons" > phone < /i> <
                i class = "material-icons" > chat < /i>

                <
                /div> <
                img src = { e.imag }
                alt = "" / >
                <
                h3 > { e.Name } < /h3> <
                p > { e.cat } < /p> < /
                div >

            )
        } <
        /div> < /
    div >

        <
        div className = 'section_four' >
        <
        h1 > Subscribe Now to Our Newsletter!
        <
        /h1>    <
    p > A team of expert doctors that are leading our clinic!Meet our staff and visit us
    for your next problem!

        <
        /p> <div> <
    input type = "text"
    placeholder = 'Enter Your Email....' / >
        <
        button type = "button" > SubScribe < /button > < /
    div > < /
    div >

        <
        /div> )
}