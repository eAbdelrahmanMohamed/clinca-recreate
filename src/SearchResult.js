import Nav from "./Nav"
import doctors from "./Doctors"
import departments from "./Departments"
import Ophthalmology from "./Ophthalmology"
export default function SearchResult(props) {
    //function Found() {
    departments.map((e) => e.name === JSON.parse(localStorage.getItem("input")) === true ?
        window.location.href = "/Ophthalmology" : "")

    doctors.map((e) => e.name === JSON.parse(localStorage.getItem("input")) === true ?
        window.location.href = "/Dpage" : "")

    //console.log(doctors[1].name === )


    //}




    //    return ( <
    //        div >
    //        <
    //        p >
    //        Welcome frome Search Result { JSON.parse(localStorage.getItem("input")) } <
    //        /p> 

    //        <
    //        button type = "button"
    //        onClick = {
    //            () => Found()
    //        } > search < /button>

    //        <
    //        /
    //        div >
    //    )

}