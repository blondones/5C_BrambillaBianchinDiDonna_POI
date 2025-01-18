import { generateMap } from "/src/components/map.js";
import { createLogin } from "/src/components/login.js";
import { fetchComponent } from "/src/components/fetch.js";
import { createTable } from "/src/components/table.js";
import { createNavigator } from "/src/components/navigator.js";

const alpiCarnicheButton = document.querySelector("#alpiCarnicheButton");
const alpiGiulieButton = document.querySelector("#alpiGiuliebutton");
const ortlesCevedaleAdamelloButton = document.querySelector("#ortlesCevedaleAdamelloButton");
const gardaAltipianiButton = document.querySelector("#gardaAltipianiButton");
const monteSanMicheleButton = document.querySelector("#monteSanMicheleButton");
const medioBassoPiaveButton = document.querySelector("#medioBassoPiaveButton");
const monteGrappaButton = document.querySelector("#monteGrappaButton");
const vittorioVenetoButton = document.querySelector("#vittorioVenetoButton");
const triesteButton = document.querySelector("#triesteButton");
const villaGiustiButton = document.querySelector("#villaGiustiButton");
console.log("osafj");

let map = generateMap(document.getElementById("map"));
map.build();
map.render();

const nav = createNavigator(document.getElementById("contenitore"));

let places =[ 
     {
        descrizione: "descrizione alpi carniche",
        img: "/data/placesImage/Dolomiti-Alpi Carniche.jpg",
    },
    {
        descrizione: "descrizione alpi giulie",
        img: "/data/placesImage/Alpi Giulie-Isonzo-Basso Friuli.jpg",
    },
     {
        descrizione: "descrizione garda altipiani",
        img: "/data/placesImage/garda altipiani.jpg",
    },
     {
        descrizione: " descrizione medio basso piave",
        img: "/data/placesImage/medi-basso piave.jpg",
    },
     {
        descrizione: "descrizione monte grappa",
        img: "/data/placesImage/monte grappa.jpg",
    },
    {
        descrizione: "descrizione monte san michele",
        img: "/data/placesImage/monte san michele.jpg",
    },
    {
        descrizione: "descrizione ortles cevedale adamello",
        img: "/data/placesImage/ortles cevedale adamello.jpg",
    },
    {
        descrizione: "descrizione trieste",
        img: "/data/placesImage/trieste.jpg",
    },
    {
        descrizione: "descrizione villa giusti",
        img: "/data/placesImage/villa giusti.jpg",
    },
    {
        descrizione: "descrizione vittorio veneto",
        img: "/data/placesImage/vittorio veneto.jpg",
    },
]

alpiCarnicheButton.onclick = () => {
    let alpiCarniche = document.querySelector("#alpiCarniche");
    if (alpiCarniche) {
        alpiCarniche.innerHTML = `
            <img src="${places[0].img}" alt="Immagine Alpi Carniche" style="width: 50%;" />
            <p>${places[0].descrizione}</p>
        `;
        console.log(alpiCarniche);
    } else {
        console.error("Elemento #alpiCarniche non trovato.");
    }
};
alpiGiulieButton.onclick = () => {
    let alpiGiulie = document.querySelector("#alpiGiulie");
    console.log("ckdò")
        alpiGiulie.innerHTML = `
            <img src="${places[1].img}" alt="" style="width: 50%;" />
            <p>${places[1].descrizione}</p>
        `;
    
};
gardaAltipianiButton.onclick = () => {
    let gardaAltipiani = document.querySelector("#gardaAltipiani");
    console.log("ckdò")
    gardaAltipiani.innerHTML = `
            <img src="${places[2].img}" alt="" style="width: 50%;" />
            <p>${places[2].descrizione}</p>
        `;
    
};
medioBassoPiaveButton.onclick = () => {
    let medioBassoPiave = document.querySelector("#medioBassoPiave");
    console.log("ckdò")
    medioBassoPiave.innerHTML = `
            <img src="${places[3].img}" alt="" style="width: 50%;" />
            <p>${places[3].descrizione}</p>
        `;
    
};
monteGrappaButton.onclick = () => {
    let monteGrappa = document.querySelector("#monteGrappa");
    console.log("ckdò")
    monteGrappa.innerHTML = `
            <img src="${places[4].img}" alt="" style="width: 50%;" />
            <p>${places[4].descrizione}</p>
        `;
    
};
monteSanMicheleButton.onclick = () => {
    let monteSanMichele = document.querySelector("#monteSanMichele");
    console.log("ckdò")
    monteSanMichele.innerHTML = `
            <img src="${places[5].img}" alt="" style="width: 50%;" />
            <p>${places[5].descrizione}</p>
        `;
    
};
ortlesCevedaleAdamelloButton.onclick = () => {
    let ortlesCevedaleAdamello = document.querySelector("#ortlesCevedaleAdamello");
    console.log("ckdò")
    ortlesCevedaleAdamello.innerHTML = `
            <img src="${places[6].img}" alt="" style="width: 50%;" />
            <p>${places[6].descrizione}</p>
        `;
    
};
triesteButton.onclick = () => {
    let trieste = document.querySelector("#trieste");
    console.log("ckdò")
    trieste.innerHTML = `
            <img src="${places[7].img}" alt="" style="width: 50%;" />
            <p>${places[7].descrizione}</p>
        `;
    
};
villaGiustiButton.onclick = () => {
    let villaGiusti = document.querySelector("#villaGiusti");
    console.log("ckdò")
    villaGiusti.innerHTML = `
            <img src="${places[8].img}" alt="" style="width: 50%;" />
            <p>${places[8].descrizione}</p>
        `;
    
};
vittorioVenetoButton.onclick = () => {
    let vittorioVeneto = document.querySelector("#vittorioVeneto");
    console.log("ckdò")
    vittorioVeneto.innerHTML = `
            <img src="${places[9].img}" alt="" style="width: 50%;" />
            <p>${places[9].descrizione}</p>
        `;
    
};


