import doctors from "./Doctors"
import { lazy } from "react"
import Form from "./Form"
import { useState, useEffect } from "react"
import { propTypes } from "react-bootstrap/esm/Image"
import { render } from "@testing-library/react"
const test = lazy(() =>
    import ("./Form"))

export default function Dpage(props) {
    //console.log(doctors[0].major.map((e) => console.log(e.name)))
    var [Clss, setClss] = useState("show")
    return ( <
        div > {
            doctors.map((e) => {

                    return <div >
                        <
                        div className = "Doctors" >
                        <
                        img src = "https://www.masrdoctors.com/includes/lib/thumb.php?src=https://www.masrdoctors.com/templates/default/ar/images/nopic.png&w=250&h=250&zc=0"
                    alt = "" / >
                        <
                        div className = "txt" >
                        <
                        p > Doctor 's name :{e.name}</p> <
                    p > Doctor 's address :{e.address}</p> {
                    e.major.map((m) => {
                        return <ul >
                            <
                            li > < a href = "/Ophthalmology" > { m.name } < /a> < /li > < /
                        ul >
                    })
                } <
                p > Details: { e.Details } < /p> <
                p > Appointments: { e.Appointments } < /p> < /
                div > <
                button type = "button"
                onClick = {
                    () =>
                    //setClss((Clss) => Clss === "show" ? "hide" : "show")

                    //(props) => props.Cls === "show" ? "hide" : "show"
                    window.location.href = "/form"

                } > Book < /button>  < /
                div >
                <
                /
                div >
            }


        )
    }

    <
    /div>

)
}