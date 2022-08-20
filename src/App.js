import About from "./About";
import Nav from "./Nav";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { red } from "@material-ui/core/colors";
import Form from "./Form";
import Dpage from "./Dpage";
import Ophthalmology from "./Ophthalmology";
import Ali from "./Ali";
import SearchResult from "./SearchResult";
import Services from "./Services";
import Footer from "./footer";
import Render from "./Render";
import Corona from "./Corona";
import Contacts from "./Contacts";
export default function App() {
    let [bkimgs, setimg] = useState(["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qrtfdU3GdKh3U-wl_O1EpwHaE_%26pid%3DApi&f=1", 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.XQO8JjENykLWoYPLmL1C6wHaDd%26pid%3DApi&f=1', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.F4iIZ05d-SDUlxxTNaOJEAHaEK%26pid%3DApi&f=1']);
    useEffect(() => {
            setimg(() => {
                for (let i = 0; i <= bkimgs.length; i++) {
                    i == bkimgs.length ? i = 0 : i = i;
                    return bkimgs[i]
                }
            })
        }

    )
    return ( <
        Router >
        <
        div ClassName = "App" >
        <
        Nav / >
        <
        Switch >
        <
        Route exact path = "/" > <
        Home / > < /Route> <
        Route path = "/about" >
        <
        About / >
        <
        /Route>   <
        Route path = "/Dpage" >
        <
        Dpage / >
        <
        /Route>  <
        Route path = "/form" >
        <
        Form / >
        <
        /Route> <
        Route path = "/Ophthalmology" >
        <
        Ophthalmology doctor = "" / >

        <
        /Route>  <
        Route path = "/Ali" >
        <
        Ali / >
        <
        /Route> <
        Route path = "/Search" >
        <
        SearchResult Value = "" / >
        <
        /Route>  <
        Route path = "/Services" >
        <
        Services / >
        <
        /Route> <
        Route path = "/corona" >
        <
        Corona / >
        <
        /Route> 

        <
        Route path = "/contacts" >
        <
        Contacts / >
        <
        /Route> < /
        Switch >
        <
        Footer / >
        <
        /
        div > <
        /Router>
    )
}