
//diclarations
const BASE_URL= " https://v6.exchangerate-api.com/v6/ed3c0df1ed99287ef2ab164c/pair"
const dropDowns=document.querySelectorAll(".drop-down select");
const btn =document.querySelector("#btn");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const rslt=document.querySelector("#result #value");

//other operations

for(let select of dropDowns){
    for(codes in countryList){
        const options=document.createElement("option");
        options.innerText=codes;
        options.value=codes;
        select.appendChild(options);
        if(select.name==="from" && codes==="USD"){
            options.selected="selected";
        }
        if(select.name==="to" && codes==="INR"){
            options.selected="selected";
        }
    }
    select.addEventListener("change",(event)=>{
        updateFlag(event.target);
    })
}


//functions

function updateFlag(element){
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let imageSource=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=imageSource;
}

btn.addEventListener("click", async (e)=>{
    e.preventDefault();
    const amt_val=document.querySelector("#input-box").value;
   const url=`${BASE_URL}/${fromCurr.value}/${toCurr.value}/${amt_val}`;
   let response= await fetch(url);
    let data= await response.json();
   //console.log(data["conversion_result"]);
   rslt.innerHTML=data["conversion_result"]
})