// # RACCOLTA ELEMENTI

const fullNameImput = document.getElementById("input-fullname");
const kmiImput = document.getElementById("input-km");
const ageImput= document.getElementById("input-age");
const formImput = document.getElementById("imput-form");
//console.log(fullNameImput);
//console.log(kmiImput);
//console.log(ageImput);
//console.log(formImput);





// ! Raccolta dati fissi su sconti e km
// raccolgo i dati di partenza
const discount18=20;
const discount65=40;
const priceForKm = 0.21;
console.log(priceForKm);


formImput.addEventListener('submit', (event) => {
    event.preventDefault();
    const fullName = fullNameImput.value;
    const km = kmiImput.value;
    const age = ageImput.value;
    const totalPriceForKm = km * priceForKm;
    finalPrice=0;
    if(age > 18){
        finalPrice = (totalPriceForKm * discount18) / 100 ;
    }
    else if(age > 65){
        finalPrice = (totalPriceForKm * discount65) / 100 ;
    }
    else{
        finalPrice = totalPriceForKm;
    }
    const price = finalPrice.toFixed(2)
    console.log(fullName);
    console.log(age);
    console.log(km) ;
    console.log(finalPrice);
    

})

