import { generateMap } from "/5C_BrambillaBianchinDiDonna_POI/src/components/map.js";
import { createLogin } from "/5C_BrambillaBianchinDiDonna_POI/src/components/login.js";
import { fetchComponent } from "/5C_BrambillaBianchinDiDonna_POI/src/components/fetch.js";
import { createTable } from "/5C_BrambillaBianchinDiDonna_POI/src/components/table.js";
import { createNavigator } from "/5C_BrambillaBianchinDiDonna_POI/src/components/navigator.js";
let invioButton = document.querySelector("#invioButton");

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
let currentId;
let map = generateMap(document.getElementById("map"));
let table = createTable(document.querySelector("#tabella"));
let count=0;
const nav = createNavigator(document.getElementById("contenitore"));
let places ;
let f = fetchComponent();
f.build("a0280b00-7412-4acb-9722-ec76f61c5634");
let currentPlaces;
map.build();
//f.setData("luoghi",map.getPlaces());
const refresh =()=>{
places = f.getData("luoghi").then(res =>{
    currentPlaces=res;
    map.addAllPlaces(res);
    let array=map.getPlaces();
    let tmp2 =[];
    array.forEach(e =>{
        tmp2.push([e.img,e.name])
    })
    renderTable(document.querySelector("#tabellaLuoghiAzioni"),tmp2);
    console.log(res);
   // map.build();
    map.render();
    let tmp =[];
    array.forEach(e =>{
        tmp.push([e.name,e.descrizione])
    })
    
    table.build(tmp);
    table.render()
})
}
refresh();


alpiCarnicheButton.onclick = () => {
    refresh();
    let alpiCarniche = document.querySelector("#alpiCarniche");
        alpiCarniche.innerHTML = `
            <img src="${map.getPlaces()[0].img}" alt="Immagine Alpi Carniche" style="width: 50%;" />
            <p>${map.getPlaces()[0].descrizione}</p>
        `;
        console.log(alpiCarniche);
    
};
alpiGiulieButton.onclick = () => {
    refresh();
    let alpiGiulie = document.querySelector("#alpiGiulie");
    console.log("ckdò")
        alpiGiulie.innerHTML = `
            <img src="${map.getPlaces()[1].img}" alt="" style="width: 50%;" />
            <p>${map.getPlaces()[1].descrizione}</p>
        `;
    
};
gardaAltipianiButton.onclick = () => {
    refresh();
    let gardaAltipiani = document.querySelector("#gardaAltipiani");
    console.log("ckdò")
    gardaAltipiani.innerHTML = `
            <img src="${map.getPlaces()[2].img}" alt="" style="width: 50%;" />
            <p>${map.getPlaces()[2].descrizione}</p>
        `;
    
};
medioBassoPiaveButton.onclick = () => {
    refresh();
    let medioBassoPiave = document.querySelector("#medioBassoPiave");
    console.log("ckdò")
    medioBassoPiave.innerHTML = `
            <img src="${map.getPlaces()[3].img}" alt="" style="width: 50%;" />
            <p>${map.getPlaces()[3].descrizione}</p>
        `;
    
};
monteGrappaButton.onclick = () => {
    refresh();
    let monteGrappa = document.querySelector("#monteGrappa");
    console.log("ckdò")
    monteGrappa.innerHTML = `
            <img src="${map.getPlaces()[4].img}" alt="" style="width: 50%;" />
            <p>${map.getPlaces()[4].descrizione}</p>
        `;
    
};
monteSanMicheleButton.onclick = () => {
    refresh();
    let monteSanMichele = document.querySelector("#monteSanMichele");
    console.log("ckdò")
    monteSanMichele.innerHTML = `
            <img src="${map.getPlaces()[5].img}" alt="" style="width: 50%;" />
            <p>${map.getPlaces()[5].descrizione}</p>
        `;
    
};
ortlesCevedaleAdamelloButton.onclick = () => {
    refresh();
    let ortlesCevedaleAdamello = document.querySelector("#ortlesCevedaleAdamello");
    console.log("ckdò")
    ortlesCevedaleAdamello.innerHTML = `
            <img src="${map.getPlaces()[6].img}" alt="" style="width: 50%;" />
            <p>${map.getPlaces()[6].descrizione}</p>
        `;
    
};
console.log(triesteButton);

triesteButton.onclick = () => {
    refresh();
    let trieste = document.querySelector("#trieste");
    console.log("ckdò")
    trieste.innerHTML = `
            <img src="${map.getPlaces()[7].img}" alt="" style="width: 50%;" />
            <p>${map.getPlaces()[7].descrizione}</p>
        `;
    
};

villaGiustiButton.onclick = () => {
    refresh();
    let villaGiusti = document.querySelector("#villaGiusti");
    console.log("ckdò")
    villaGiusti.innerHTML = `
            <img src="${map.getPlaces()[8].img}" alt="" style="width: 50%;" />
            <p>${map.getPlaces()[8].descrizione}</p>
        `;
    
};
vittorioVenetoButton.onclick = () => {
    refresh();
    let vittorioVeneto = document.querySelector("#vittorioVeneto");
    console.log("ckdò")
    vittorioVeneto.innerHTML = `
            <img src="${map.getPlaces()[9].img}" alt="" style="width: 50%;" />
            <p>${map.getPlaces()[9].descrizione}</p>
        `;
    
};
function renderTable(container, dataArray) {


    let tableHTML = '<table>   <thead><tr><th>Luogo</th>   <th></th> <th>Azioni</th><th></th> </tr> </thead>';

    dataArray.forEach((row, index) => {
        tableHTML += `
            <tr>
                <td><img src="${row[0]}" alt="${row[1]}" style="width: 50px;"></td>
                <td style="padding: 10px;">${row[1]}</td>
                <td>  <a href="#admin" style="text-decoration: none;"> 
                <button class="btn modifica" id="modifica${index}">Modifica</button>
                </a>
                </td>
                <td><button class="btn elimina" id="elimina${index}">Elimina</button></td>
            </tr>
        `;
    });

    tableHTML += '</table>';

    container.innerHTML = tableHTML;
    let confermaButtons = document.querySelectorAll(".modifica");
    
  confermaButtons.forEach((button) => {
    button.onclick = () => {
    currentId = parseInt(button.id.replace("modifica", ""));
      
    
    };
  });
  console.log(document.querySelectorAll(".modifica"))
}
invioButton.onclick=()=>{
    let title =document.querySelector("#title");
    let esito = document.querySelector("#esito")
    let morti = document.querySelector("#morti");
    let desc = document.querySelector("#description")
   currentPlaces[currentId].name=title.value;
   let descrizione = desc.value+"\nesito: "+esito.value+"\nmorti: "+morti.value;
   currentPlaces[currentId].descrizione=descrizione;
   f.setData("luoghi",currentPlaces);
   refresh();
   console.log(descrizione);
}


createLogin();