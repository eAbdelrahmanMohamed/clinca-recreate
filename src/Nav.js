import React, { useState, useEffect } from "react";
import departments from "./Departments";
import doctors from "./Doctors";
import { CData } from "./clients"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import SearchResult from "./SearchResult";
export default function Nav(props) {
    var [Class, setClass] = useState("overlay-closed");
    var [Data, Search] = useState(departments.map((e) => e.name).concat(doctors.map((e) => e.name), CData.map((e) => e.name)));
    Data.sort();
    var [Input, setInput] = useState("");
    //    Data.map((e) => {
    //            var count = 0;
    //            //console.log(e[0], Data[Data.indexOf(e) + 1][0])

    //            //e[0] === Data[Data.indexOf(e) + 1][0] ? count++ : count;
    //            //console.log(Data)
    //        })
    //        //function ConCat() {

    //    //    Data.concat(departments)


    //    //}
    //    //ConCat()
    //    //function Works() {
    //    //    Input ;
    //    //    window.location.href = "/Search"
    //}
    return ( <
        nav className = "Nav" >

        <
        div onClick = {
            () => window.location.href = "/"
        } > < img src = "https://clinika.modeltheme.com/wp-content/themes/clinika/images/theme_clinika_logo.png"
        alt = ""

        /
        >
        <
        /div > <
        ul className = "Ul" >

        <
        li onClick = {
            () => window.location.href = "/" } > Home < /li > <
        li > About < /li> <
        li > Reviews < /li> <
        li onClick = {
            () => window.location.href = "/Contacts" } > Contacts < /li>  <
        li > < a href = "/Services" > Services < /a>  </li > < /
        ul > <
        div >
        <
        i class = "fa fa-search"
        onClick = {
            () => setClass((prevClass) => prevClass = "overlay")
        } > < /i> <
        div id = "myOverlay"
        className = { Class } >
        <
        span className = "closebtn"
        onClick = {
            () => setClass((Class) => Class === "overlay" ? "overlay-closed" : "overlay")
        }
        title = "Close Overlay" > x < /span> <
        div class = "overlay-content" >
        <
        form action = "" >
        <
        input type = "text"
        placeholder = "Search.."
        name = "search"
        onChange = {
            (e) => {
                setInput(Input = e.target.value)
                localStorage.setItem("input", JSON.stringify(Input))
                props.value = Input;

            }
        }
        / > <
        button type = "button"
        onClick = {
            () => SearchResult()
            //Data.includes(Input) === true ? window.location.href = "/Search" : console.log("not fiunded", Data, Input)
        } > < i class = "fa fa-search" > < /i></button >
        <
        /form> < /
        div > <
        /div> < /
        div > < /
        nav >
    )


}