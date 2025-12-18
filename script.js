const URL1="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"

const dropdowns = document.querySelectorAll(".dropdown select");
const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const iTag = document.querySelector(".fa-solid")


for(let select of dropdowns){
    for(let code in countryList){
    let newOptions = document.createElement("option");
    newOptions.innerText = code;
    newOptions.value=code;
    if (select.name === "from" && code === "USD"){
        newOptions.selected = "selected";
    }else if (select.name === "to" && code === "INR"){
        newOptions.selected = "selected";
    }
    select.append(newOptions);

    }
    select.addEventListener("change" , (evt) =>{
        updateFlag(evt.target);
    });
}

const updateExchange = async() =>{
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal === ""  || amtVal < 1){
        amtVal = 1;
        amount.value = "1";

    }

    const URL=`${URL1}/${fromcurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = await data[fromcurr.value.toLowerCase()][tocurr.value.toLowerCase()]
     let finalAmount = rate * amtVal;

    msg.innerText=`${amtVal} ${fromcurr.value} = ${finalAmount} ${tocurr.value}`

}

async function btn(evt){
    evt.preventDefault();
    updateExchange();
    
}


const updateFlag = (element) =>{
    let code = element.value;
    let countryCode= countryList[code];
    let newSRC=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src=newSRC;

}

iTag.addEventListener("click" , () =>{
    const curr = fromcurr.value;
    fromcurr.value = tocurr.value;
    tocurr.value = curr;
    updateExchange();
    updateFlag(fromcurr);
    updateFlag(tocurr);
})

window.addEventListener("load", () => {
updateExchange();
});

