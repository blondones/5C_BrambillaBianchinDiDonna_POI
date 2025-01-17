
import { generateMap } from "/5C_BrambillaBianchinDiDonna_POI/src/components/map.js";
import { createLogin } from "/5C_BrambillaBianchinDiDonna_POI/src/components/login.js";
import { fetchComponent } from "/5C_BrambillaBianchinDiDonna_POI/src/components/fetch.js";
import { createTable } from "/5C_BrambillaBianchinDiDonna_POI/src/components/table.js";
import { createNavigator } from "/5C_BrambillaBianchinDiDonna_POI/src/components/navigator.js";
const alpiCarniche = document.querySelector("#alpiCarniche")
console.log("osafj")
let map = generateMap(document.getElementById("map"));
map.build();
map.render();
const nav = createNavigator(document.getElementById("contenitore"));
alpiCarniche.onclick=()=>{
   
}

