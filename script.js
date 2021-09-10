function showdata(data) {
    for (var i = 0; i < data.length; i++) {
        $("#showdatas").append(`<apod>
                    <h1>Title: ${data[i].title}</h1>
                    <h2>Date: ${data[i].date}</h2>
                    <div class="container">
                        <a href="${data[i].hdurl}">
                            <img src="${data[i].url}" class="picstyle" width="600x400px"</img>
                        </a>
                        <h3>Description : ${data[i].explanation}</h3>
                    </div>
                </apod>
            <hr>`)
    }
}

async function fetchinformation() {
    let apiresponse = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2021-09-03")
    if (apiresponse.ok) {
        let data = await apiresponse.json()
        showdata(data);
    } else {
        console.log("API ERROR: " + apiresponse.statusText)
    }
}
fetchinformation()
