// import fetch from 'node-fetch';
//TOKKEN : UnBnWEsYR3AaY3bVZAL1nACrJN8eqZHT1efAY5oa
function showdata(data){
    console.log(data[0])
    for (var i = 0; i < data.length; i++){
        
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






