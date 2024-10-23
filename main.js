// # RACCOLTA ELEMENTI

const fullNameImput = document.getElementById("input-fullname");
const kmiImput = document.getElementById("input-km");
const ageImput= document.getElementById("input-age");
const formImput = document.getElementById("imput-form");
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




formImput.addEventListener('submit', (event) => {
    event.preventDefault();
    const fullName = fullNameImput.value;
    const km = parseInt(kmiImput.value);
    const age = ageImput.value; 
    //calcolo del prezzo finale con lo sconto e annuncio che tipo di biglietto avrà l'utente
    const totalPriceForKm = km * priceForKm;
    const finalPrice= 0;
    const tiketType ="";
    if(age > 65){
        finalPrice = totalPriceForKm * discount65 / 100 ;
        tiketType ="Biglietto Ridotto";
        
    }
    else if(age > 18){
        finalPrice = totalPriceForKm * discount18 / 100 ;
        tiketType ="Biglietto Ridotto";
        console.log(finalPrice);
        console.log(tiketType); 
    }
    else{
        finalPrice = km * priceForKm ;
        tiketType ="Biglietto Standard";
    }

    //numero random per la carrozza
    const carrozza = Math.floor(Math.random() * (10-1+1)+ 1);
    //numero random per il codice del treno
    const code = Math.floor(Math.random() * (9999-9000+1)+ 9000);
   
    console.log(fullName);
    console.log(age);
    console.log(km) ;
    console.log(finalPrice);
    
outputName.innerHTML= fullName;
outputPrice.innerHTML= finalPrice + "€";
outputCarrozza.innerHTML = carrozza;
outputCode.innerHTML = code;
outputTiket.innerHTML =tiketType;
})

