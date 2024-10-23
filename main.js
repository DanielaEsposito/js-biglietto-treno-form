// # RACCOLTA ELEMENTI

const fullNameImput = document.getElementById("input-fullname");
const kmiImput = document.getElementById("input-km");
const ageImput= document.getElementById("input-age");
const formImput = document.getElementById("imput-form");
const cancelImput=document.getElementById("btn-cancel")
// # RACCOLTA OUTPUT
const outputName =document.getElementById("name")
const outputTiket =document.getElementById("tiket")
const outputCarrozza = document.getElementById("carrozza")
const outputPrice = document.getElementById("price")
const outputCode = document.getElementById("code")
//console.log(fullNameImput);
//console.log(kmiImput);
//console.log(ageImput);
//console.log(formImput);


// ! Raccolta dati fissi su sconti e km
// raccolgo i dati di partenza
const discount18=20;
const discount65=40;
const priceForKm = 0.21;
//console.log(priceForKm);

const optionElement = document.getElementById("input-age")
for(let i = 1 ; i <= 100; i++){
    const listOptionElement = document.createElement("option");
    listOptionElement.innerHTML=i;
    optionElement.appendChild(listOptionElement);
}
formImput.addEventListener('submit', (event) => {
    event.preventDefault();
    const fullName = fullNameImput.value;
    const km = parseInt(kmiImput.value);
    const age = ageImput.value; 
    //calcolo del prezzo finale con lo sconto e annuncio che tipo di biglietto avrà l'utente
    const totalPriceForKm = km * priceForKm;
    let finalPrice = 0;
    let tiketType ="";
    if(age > 65){
        finalPrice = totalPriceForKm * (1-discount65 / 100) ;
        tiketType ="Biglietto Ridotto";
        
    }
    else if(age > 18){
        finalPrice = totalPriceForKm * discount18 / 100 ;
        tiketType ="Biglietto Ridotto";
    }
    else{
        finalPrice = totalPriceForKm ;
        tiketType ="Biglietto Standard";
    }

    //numero random per la carrozza
    const carrozza = Math.floor(Math.random() * (10-1+1)+ 1);
    //numero random per il codice del treno
    const code = Math.floor(Math.random() * (9999-9000+1)+ 9000);
   
    
    console.log(fullName);
    console.log(age);
    console.log(km) ;
    
    
outputName.innerHTML= fullName;
outputPrice.innerHTML= finalPrice.toFixed(2) + "€";
outputCarrozza.innerHTML = carrozza;
outputCode.innerHTML = code;
outputTiket.innerHTML =tiketType;


    
 fullNameImput.value="".value
 ageImput.value="";
 kmiImput.value ="";
 outputName.value ="";
 outputPrice.value ="";
 outputCarrozza.value ="";
 outputCode.value ="";
 outputTiket.value ="";

})

cancelImput.addEventListener("click", (event) =>{
    fullNameImput.value="".value
    ageImput.value="";
    kmiImput.value ="";
    outputName.value ="";
    outputPrice.value ="";
    outputCarrozza.value ="";
    outputCode.value ="";
    outputTiket.value ="";
})

