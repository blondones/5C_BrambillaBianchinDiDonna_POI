
import { generateMap } from "/5C_BrambillaBianchinDiDonna_POI/src/components/map.js";
import { createLogin } from "/5C_BrambillaBianchinDiDonna_POI/src/components/login.js";
import { fetchComponent } from "/5C_BrambillaBianchinDiDonna_POI/src/components/fetch.js";
import { createTable } from "/5C_BrambillaBianchinDiDonna_POI/src/components/table.js";
import { createNavigator } from "/5C_BrambillaBianchinDiDonna_POI/src/components/navigator.js";
console.log("osafj")
let map = generateMap();
map.build()
map.render();
let loginDiv = document.querySelector("#login")

function fhide(parentElement){
    parentElement.classList.add("hide")
    parentElement.classList.remove("show")
}
function fshow(parentElement){
    parentElement.classList.add("show")
    parentElement.classList.remove("hide")
}
fhide(loginDiv)

