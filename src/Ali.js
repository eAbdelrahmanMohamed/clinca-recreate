import Form from "./Form"
import { useState } from "react"
import { Turn, CData } from "./clients"
export default function Ali() {
    var [CaseTreat, setCase] = useState([]);
    var [Stored_Pataint, Update] = useState(JSON.parse(localStorage.getItem("pataints")))
    var [suc, setSuc] = useState("hide")
    return ( <
        div className = "Docs" >
        <
        div id = { suc } >
        Updated Succesfully <
        /div> {
        CData.map((e) =>




            <
            div className = "pa" >

            <
            img src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.uaJwmRNexTmBZjyl3DF6cwHaHa%26pid%3DApi&f=1"
            alt = "" / >
            <
            div className = "txt" >
            <
            p > pataint name: { e.name } < /p>  <
            p > Number In Line: { e.NIL } < /p> < /
            div >
            <
            div id = "case" >
            <
            label
            for = "" > Case < /label> <
            textarea rows = "5"
            cols = "50"
            onChange = {
                (e) => Update(Stored_Pataint, Stored_Pataint[2].Case = e.target.value)
            } > < /textarea>                    <label for="">Treatment</label >
            <
            input type = "text"
            name = ""
            value = ""
            placeholder = "Treatment"
            onChange = {
                (e) => Update(Stored_Pataint, Stored_Pataint[2].treatments = e.target.value)
            }
            / > <
            button type = "button"
            onClick = {
                () => {
                    localStorage.setItem("pataints", JSON.stringify(Stored_Pataint));
                    suc === "Suc" ? setSuc(suc = "hide") : setSuc(suc = "Suc")
                }

            } > update < /button> < /
            div >

            <
            /div > 
        )
    }

    <
    /
    div >
)

}