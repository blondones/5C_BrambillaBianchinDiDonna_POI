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
let table = createTable(document.querySelector("#tabella"));

const nav = createNavigator(document.getElementById("contenitore"));

let f = fetchComponent();
f.build("a0280b00-7412-4acb-9722-ec76f61c5634");
//f.setData("luoghi",map.getPlaces());
let places = f.getData("luoghi").then(res =>{
    map.addAllPlaces(res);
    console.log(res);
    map.build();
    map.render();
    let array=map.getPlaces();
    let tmp =[];
    array.forEach(e =>{
        tmp.push([e.name,e.descrizione])
    })
    table.build(tmp);
    table.render()
})


alpiCarnicheButton.onclick = () => {
    let alpiCarniche = document.querySelector("#alpiCarniche");
        alpiCarniche.innerHTML = `
            <img src="${map.getPlaces()[0].img}" alt="Immagine Alpi Carniche" style="width: 50%;" />
            <p>${map.getPlaces()[0].descrizione}</p>
        `;
        console.log(alpiCarniche);
    
};
alpiGiulieButton.onclick = () => {
    let alpiGiulie = document.querySelector("#alpiGiulie");
    console.log("ckdò")
        alpiGiulie.innerHTML = `
            <img src="${map.getPlaces()[1].img}" alt="" style="width: 50%;" />
            <p>${map.getPlaces()[1].descrizione}</p>
        `;
    
};
gardaAltipianiButton.onclick = () => {
    let gardaAltipiani = document.querySelector("#gardaAltipiani");
    console.log("ckdò")
    gardaAltipiani.innerHTML = `
            <img src="${map.getPlaces()[2].img}" alt="" style="width: 50%;" />
            <p>${map.getPlaces()[2].descrizione}</p>
        `;
    
};
medioBassoPiaveButton.onclick = () => {
    let medioBassoPiave = document.querySelector("#medioBassoPiave");
    console.log("ckdò")
    medioBassoPiave.innerHTML = `
            <img src="${map.getPlaces()[3].img}" alt="" style="width: 50%;" />
            <p>${map.getPlaces()[3].descrizione}</p>
        `;
    
};
monteGrappaButton.onclick = () => {
    let monteGrappa = document.querySelector("#monteGrappa");
    console.log("ckdò")
    monteGrappa.innerHTML = `
            <img src="${map.getPlaces()[4].img}" alt="" style="width: 50%;" />
            <p>${map.getPlaces()[4].descrizione}</p>
        `;
    
};
monteSanMicheleButton.onclick = () => {
    let monteSanMichele = document.querySelector("#monteSanMichele");
    console.log("ckdò")
    monteSanMichele.innerHTML = `
            <img src="${map.getPlaces()[5].img}" alt="" style="width: 50%;" />
            <p>${map.getPlaces()[5].descrizione}</p>
        `;
    
};
ortlesCevedaleAdamelloButton.onclick = () => {
    let ortlesCevedaleAdamello = document.querySelector("#ortlesCevedaleAdamello");
    console.log("ckdò")
    ortlesCevedaleAdamello.innerHTML = `
            <img src="${map.getPlaces()[6].img}" alt="" style="width: 50%;" />
            <p>${map.getPlaces()[6].descrizione}</p>
        `;
    
};
console.log(triesteButton);

triesteButton.onclick = () => {
    let trieste = document.querySelector("#trieste");
    console.log("ckdò")
    trieste.innerHTML = `
            <img src="${map.getPlaces()[7].img}" alt="" style="width: 50%;" />
            <p>${map.getPlaces()[7].descrizione}</p>
        `;
    
};

villaGiustiButton.onclick = () => {
    let villaGiusti = document.querySelector("#villaGiusti");
    console.log("ckdò")
    villaGiusti.innerHTML = `
            <img src="${map.getPlaces()[8].img}" alt="" style="width: 50%;" />
            <p>${map.getPlaces()[8].descrizione}</p>
        `;
    
};
vittorioVenetoButton.onclick = () => {
    let vittorioVeneto = document.querySelector("#vittorioVeneto");
    console.log("ckdò")
    vittorioVeneto.innerHTML = `
            <img src="${map.getPlaces()[9].img}" alt="" style="width: 50%;" />
            <p>${map.getPlaces()[9].descrizione}</p>
        `;
    
};


createLogin();