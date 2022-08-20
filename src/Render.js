import doctors from "./Doctors"
export default function Render() {
    return (
        doctors.map((e) => { <
                a href = "/Ali" >
                    <
                    div ClassName = "Docs" >

                    <
                    img src = "https://www.masrdoctors.com/includes/lib/thumb.php?src=https://www.masrdoctors.com/templates/default/ar/images/nopic.png&w=250&h=250&zc=0"
                alt = "" / >
                    <
                    div ClassName = "txt" >
                    <
                    p > Doctor name: { e.name } < /p> <
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
        }))

}