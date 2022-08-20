var Turn = 1;
var CData = [{ name: "patiant 1", age: 60, phone: "01026712003", Address: "cairo, Egypt", blood_type: "B+", Case: "dyapities", treatments: "test", NIL: Turn },
    { name: "Abdelrahman Mohamed Mohamed", age: 23, phone: "01060800469", Address: "Egypt", appointment_date: "07/26/2022", History: false, NIL: 2, chronic_condition: ["Heart Disease and Stroke", "Diabetes and Prediabetes"], Case: "", treatments: "" },
    { name: "Dina Samy Abdelraouf", age: 50, phone: "01142323253", Address: "Egypt", appointment_date: "08/1/2022", History: false, NIL: 3, chronic_condition: ["Heart Disease and Stroke", "Diabetes and Prediabetes"], Case: "", treatments: "" }
];
localStorage.setItem("pataints", JSON.stringify(CData))
export { Turn, CData }