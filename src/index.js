
import { generateMap } from "/src/components/map.js";
import { createLogin } from "/src/components/login.js";
import { fetchComponent } from "/src/components/fetch.js";
import { createTable } from "/src/components/table.js";
import { createNavigator } from "/src/components/navigator.js";
console.log("osafj")
let map = generateMap(document.getElementById("map"));
map.build()
map.render();
const nav = createNavigator(document.getElementById("contenitore"));
