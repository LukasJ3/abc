for(let skaicius=0; skaicius < 5; skaicius++) {
    console.log(skaicius);
}
for(let skaicius=0; skaicius <= 10; skaicius+=2) {
    console.log(skaicius);
}

const obj = {
    name: "Lukas",
    age: 17,
    occupying: "student",
};
for (let key in obj) {
    console.log(key);
}
let skaicius = 0;
while(skaicius <= 12)  {
    console.log(skaicius);
    skaicius++;
}
1
let number = 10;
while(number >= 1) {
    console.log(number);
    number--;
}

let number2 = 1;
while(number2 <= 10) {
    if(number2 % 2 !== 0) {
        console.log(number2);
    }
    number2++;
}
let suma = 0;
let kiekis = 0;
let ivestis = parseInt(prompt("Įveskite skaičių:"));

while (ivestis >= 0) {
    suma += ivestis;
    kiekis++;
    ivestis = parseInt(prompt("Įveskite skaičių :"));
}

if (kiekis > 0) {
    const vidurkis = suma / kiekis;
    console.log("Įvestų skaičių vidurkis: " + vidurkis);
} else {
    console.log("Nebuvo įvesta teigiamų skaičių.");
}

let atsitiktinisSkaicius = Math.floor(Math.random() * 10) + 1;
let spejimas = parseInt(prompt("Spėkite skaičių nuo 1 iki 10:"));

while (spejimas !== atsitiktinisSkaicius) {
    if (spejimas > atsitiktinisSkaicius) {
        spejimas = parseInt(prompt("Per didelis! Spėkite dar kartą:"));
    } else {
        spejimas = parseInt(prompt("Per mažas! Spėkite dar kartą:"));
    }
}

console.log("Sveikiname! Atspėjote teisingą skaičių: " + atsitiktinisSkaicius);

const masyvas = [1, 2, 3, 4, 5, "kitm", true];

for (const elementas of masyvas) {
    console.log(elementas);
}




const knygos = ["Altorius", "Metai", "Dievu miskas"];

function trumposKnygos(knyguMasyvas) {
    return knyguMasyvas.filter(knyga => knyga.length < 10);
}

console.log(trumposKnygos(knygos));



const motociklas = {
    marke: "Honda",
    tipas: "Sport",
    spalva: "Raudona",
    informacija: function() {
        return `Motociklas: ${this.marke}, Tipas: ${this.tipas}, Spalva: ${this.spalva}`;
    }
};

console.log(motociklas.informacija());
