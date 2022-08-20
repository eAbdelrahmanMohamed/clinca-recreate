import doctors from "./Doctors"
import Ali from "./Ali"
import Render from "./Render"
export default function Ophthalmology() {



    return ( < div className = "Docs" > {
                doctors.map((e) => {
                        //e.major === "Ophthalmology" ?
                        return <a href = "/Ali" >
                            <
                            div className = "Dcard" >

                            <
                            img src = "https://www.masrdoctors.com/includes/lib/thumb.php?src=https://www.masrdoctors.com/templates/default/ar/images/nopic.png&w=250&h=250&zc=0"
                        alt = "" / >
                            <
                            div className = "txt" >
                            <
                            p > Doctor 's name :{e.name}</p> <
                        p > Doctor address: { e.address } < /p> {
                        e.major.map((m) => {
                            return <ul >
                                <
                                li > { m.name } < /li> < /
                            ul >
                        })
                    } <
                    p > Details: { e.Details } < /p> <
                    p > Appointments: { e.Appointments } < /p> < /
                    div > < /div >< /a >

                })
        } <
        /div>

)

}