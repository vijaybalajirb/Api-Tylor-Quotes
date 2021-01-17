
document.getElementById("Quotes").innerText="And I'm highly suspicious that everyone who sees you wants you...";

async function changeQuote(){
    let x = await fetch(`https://api.taylor.rest/`);
    let data=await x.json()
    console.log(data)
    displayData(data);
    }
   
    function displayData(data){
        document.getElementById("Quotes").innerText=data.quote;
    }


    