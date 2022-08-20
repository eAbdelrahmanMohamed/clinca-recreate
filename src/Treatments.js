//export default treatments = { Asperin: { name: "Asperin" } }
import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://myhealthbox.p.rapidapi.com/search/updatedDocuments',
    params: { sd: '2020-06-01', c: 'us', l: 'en' },
    headers: { 'X-RapidAPI-Key': 'null', 'X-RapidAPI-Host': 'myhealthbox.p.rapidapi.com' }
};

axios.request(options).then(function(response) {
    console.log(response.data);
}).catch(function(error) {
    console.error(error);
});