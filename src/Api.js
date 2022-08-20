export default function getdata() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
            'X-RapidAPI-Host': 'myhealthbox.p.rapidapi.com'
        }
    };


    fetch('https://myhealthbox.p.rapidapi.com/search/updatedDocuments?sd=2020-06-01&c=us&l=en', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}