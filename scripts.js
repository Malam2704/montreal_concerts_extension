async function fetchData() {
    const url = 'https://concerts-artists-events-tracker.p.rapidapi.com/location?name=Montreal&minDate=2023-08-17&maxDate=2023-08-20&page=1';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': my_api_key,
            'X-RapidAPI-Host': my_api_host
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        document.getElementById("concerts").innerHTML = result.data.map(item => `<li>${item.name}, ${item.date}</li>`)
    } catch (error) {
        console.error(error);
    }


}
fetchData()