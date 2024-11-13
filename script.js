
let para = document.querySelector(".para");
let jokebtn = document.querySelector(".jokebtn");

//function used for fetching joke from API

async function fetchJoke(){
    try{
        let data = await fetch("https://api.api-ninjas.com/v1/dadjokes", {
            method:"GET" ,
            headers: {
                "X-Api-Key" : "twYHDFIvloPVZdAx/G9S7Q==CI16kiFfl9m8cSOp"}
        });
        if(!data.ok){
            throw new Error(`HTTP error Status : ${data.status}`);
        }

        // converting the api in json format
        let response = await data.json();

        return response[0].joke;

    }catch(error){
        return ("error" , error);
    }
}

jokebtn.addEventListener("click" ,async () =>{
    para.innerText = "Updating...";
    let showJoke = await fetchJoke();
    para.innerText = showJoke;
})