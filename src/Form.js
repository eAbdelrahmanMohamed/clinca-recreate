import React, { useState, useEffect } from "react"
//import Treatments from "./Treatments"
import { Turn, CData } from "./clients";
export default function Form(props) {
    //var [CData, setdata] = useState();
    var [turn, setTurn] = useState(Turn)
    var [Pataint, setPataint] = useState({ name: "", age: 0, phone: "", Address: "", appointment_date: "", History: false, NIL: Turn, chronic_condition: [] });
    var [Class, setClass] = useState("Form");
    var [Form, setForm] = useState("Form");
    const arr = [Form, Class]

    //useEffect(
    //    () => {
    //        setTurn((turn) => turn++)

    //    }, [turn])

    localStorage.setItem("pataints", JSON.stringify(CData))
    return ( <
        div >


        <
        div >
        <
        form className = { Class } >
        <
        div id = "S1" >
        <
        label > Name < /label> <
        input type = "text"

        onChange = {
            (e) => {
                setPataint(Pataint, Pataint.name = e.target.value);
                //console.log(Pataint)
            }
        }
        placeholder = "Your Name.."
        required max = { 100 }
        min = { 3 }
        / >

        <
        label > Age < /label>  <
        input type = "nubmer"

        onChange = {
            (e) => {
                setPataint(Pataint, Pataint.age = e.target.value);
                //console.log(Pataint)
            }
        }
        placeholder = "Your Age.."
        required max = { 100 }
        min = { 1 }
        / > <
        label > Phone < /label>  <
        input type = "nubmer"

        onChange = {
            (e) => {
                setPataint(Pataint, Pataint.phone = e.target.value);
                //console.log(Pataint)
            }
        }
        placeholder = "Phone"
        required / > <
        label > Address < /label>  <
        input type = "text"

        onChange = {
            (e) => {
                setPataint(Pataint, Pataint.Address = e.target.value);
                //console.log(Pataint)
            }
        }
        placeholder = "Address"
        required max = { 100 }
        min = { 3 }
        required / >
        <
        /div>

        <
        div id = "S2" >
        <
        label > Appointment Date < /label>  <
        input type = "date"

        onChange = {
            (e) => {
                setPataint(Pataint, Pataint.appointment_date = e.target.value);
                //console.log(Pataint)
            }
        }
        required / >
        <
        /div>

        <
        div id = "S3" >
        <
        label > have an experiance with us < /label>  <
        div >

        <
        label > yes < /label>  <
        input type = "radio"
        name = "history"
        onChange = {
            (e) => {
                setPataint(Pataint, Pataint.History = true);
                //console.log(Pataint)
            }
        }
        />  <
        label > No < /label>  <
        input type = "radio"
        name = "history"
        onChange = {
            (e) => {
                setPataint(Pataint, Pataint.History = false);
                //console.log(Pataint)
            }
        }
        />  <br/ > <
        label
        for = "" > chronic condition < /label> <
        div >
        <
        label
        for = "" > Heart Disease and Stroke < /label>

        <
        input type = "checkbox"
        name = "chronic condition"
        onChange = {
            (e) => {
                setPataint(Pataint, Pataint.chronic_condition = [...Pataint.chronic_condition, "Heart Disease and Stroke"]);
                //console.log(Pataint)
            }
        }
        /> <br/ > <
        label
        for = "" > Diabetes and Prediabetes < /label>

        <
        input type = "checkbox"
        name = "chronic condition"
        onChange = {
            (e) => {
                setPataint(Pataint, Pataint.chronic_condition = [...Pataint.chronic_condition, "Diabetes and Prediabetes"]);
                //console.log(Pataint)
            }
        }
        />  < /
        div > <
        /
        div >


        <
        /
        div > <
        button type = "submit"
        onClick = {
            () => {
                setTurn((turn) => turn++)
                Pataint.NIL = turn;
                CData.push(Pataint);
                localStorage.setItem("pataints", JSON.stringify(CData))
                    //Turn++;
                window.location.href = "/Ali"
                console.log(CData, Turn)
            }
        } > Reserve < /button> < /
        form > <
        /div>  <
        button onClick = {
            () => setClass((Class) => Class === "Form" || "Form xswip" ? "Form swip" : "Form")
        }
        className = "Next" > Next < /button> <
        button onClick = {
            () => setClass((Class) => Class === "Form" ? "Form Xswip" : "Form")
        }
        className = "Next" > Back < /button> < /
        div >


    )

}