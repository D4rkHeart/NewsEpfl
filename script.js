// import fetch from 'node-fetch';
//TOKKEN : UnBnWEsYR3AaY3bVZAL1nACrJN8eqZHT1efAY5oa
var element = document.getElementById("showdatas");
//element.append("Some text");


function showdata(data){
    console.log(data[0])
    for (var i = 0; i < data.length; i++){
        console.log(data[i].date)
        console.log(data[i].title)

        let title = document.createElement("p")
        title.append("Title: "+data[i].title)
        element.append(title)

        let date = document.createElement("p")
        date.append("date: "+data[i].date)
        element.append(date)

        let picoftheday = document.createElement("img")
        picoftheday.width=240
        picoftheday.toto = "tata"
        picoftheday.src = data[i].url
        element.append(picoftheday)
    }
    
}

async function fetchinformation() {
    let apiresponse = await fetch("https://api.nasa.gov/planetary/apod?api_key=UnBnWEsYR3AaY3bVZAL1nACrJN8eqZHT1efAY5oa&start_date=2021-09-03")
    if(apiresponse.ok){
        let data = await apiresponse.json()
        showdata(data);
    
    }
    else{
        console.log("API ERROR : " + apiresponse.statusText)
    }
}
fetchinformation()

//displays information






//contain editor permet d'append, ou autre le contenu sous forme d'html
//1. afficher les datas sur l'html avec "insert child etc... modifier le dom" 2.mise en page 
