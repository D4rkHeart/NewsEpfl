function showdata(data){
    console.log(data[0])
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].date)
        console.log(data[i].title)
        $("#showdatas").append(`<apod>Title: ${data[i].title}<br>Date: ${data[i].date}<br><img src="${data[i].url}" width="240px" /></apod><hr>`)
    }
}

async function fetchinformation() {
    let apiresponse = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2021-09-03")
    if (apiresponse.ok) {
        let data = await apiresponse.json()
        showdata(data);
    } else {
        console.log("API ERROR : " + apiresponse.statusText)
    }
}
fetchinformation()
