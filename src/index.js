import { generateMap } from "/5C_BrambillaBianchinDiDonna_POI/src/components/map.js";
import { createLogin } from "/5C_BrambillaBianchinDiDonna_POI/src/components/login.js";
import { fetchComponent } from "/5C_BrambillaBianchinDiDonna_POI/src/components/fetch.js";
import { createTable } from "/5C_BrambillaBianchinDiDonna_POI/src/components/table.js";
import { createNavigator } from "/5C_BrambillaBianchinDiDonna_POI/src/components/navigator.js";

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

/*let map = generateMap(document.getElementById("map"));
map.build();
map.render();*/

const nav = createNavigator(document.getElementById("contenitore"));

let places =[ 
     {
        descrizione: "sulle alpi carniche ci furono le Le portatrici carniche che furono quelle donne che nel corso della prima guerra mondiale operarono, lungo il fronte della Carnia, trasportando con le loro gerle rifornimenti e munizioni fino alle prime linee italiane, dove combattevano i reparti alpini.",
        img: "/5C_BrambillaBianchinDiDonna_POI/data/placesImage/Dolomiti-Alpi Carniche.jpg",
    },
    {
        descrizione: `Il generale Cadorna pianificò dal Comando supremo militare italiano un'offensiva divisa in tre parti:

Offensiva principale: sul fronte della Venezia-Giulia il regio esercito doveva superare la linea dell'Isonzo e raggiungere la linea della Sava, tra Kranj e Lubiana
Offensiva secondaria: l'esercito italiano doveva eseguire un'offensiva in Cadore e in Carnia i cui obiettivi erano Dobbiaco e l'apertura di uno sbocco che portasse in Carinzia.
Difensiva strategica sul fronte tridentino`,
        img: "/5C_BrambillaBianchinDiDonna_POI/data/placesImage/Alpi Giulie-Isonzo-Basso Friuli.jpg",
    },
     {
        descrizione: "qui si svolge la battaglia degli altipiani",
        img: "/5C_BrambillaBianchinDiDonna_POI/data/placesImage/garda altipiani.jpg",
    },
     {
        descrizione: `La prima battaglia del Piave si svolse durante la prima guerra mondiale (nel novembre 1917) al confine tra Trentino e Veneto, tra il Regio Esercito italiano da una parte e le forze dell'Impero tedesco e dell'Impero austro-ungarico dall'altra.

Le truppe italiane, credute vinte e moralmente distrutte anche dagli stessi vertici militari dopo la battaglia di Caporetto, opposero invece una tenace resistenza nei dintorni del monte Grappa tra le rive del Brenta e del Piave, permettendo così alla linea difensiva impostata lungo quest'ultimo fiume di continuare a resistere all'offensiva nemica, che dovette pertanto ridimensionarsi alla guerra di trincea.`,
        img: "/5C_BrambillaBianchinDiDonna_POI/data/placesImage/medi-basso piave.jpg",
    },
     {
        descrizione: "La seconda battaglia del monte Grappa fu uno scontro verificatosi nell'ambito della battaglia di Vittorio Veneto, iniziato per mano italiana con l'obiettivo di attaccare l'esercito austro-ungarico su un altro fronte (quello del Grappa, appunto) oltre a quello del Piave. Il Regio Esercito, dopo giorni di attacchi logoranti per entrambe le parti, riuscì ad avere la meglio quando il nemico iniziò una ritirata che si trasformò in rotta.",
        img: "/5C_BrambillaBianchinDiDonna_POI/data/placesImage/monte grappa.jpg",
    },
    {
        descrizione: "La sua fama è legata al fatto che esso fu teatro di numerose battaglie durante la prima guerra mondiale. Ancora oggi la zona tra Fogliano Redipuglia e Sagrado è disseminata di trincee, camminamenti, caverne e gallerie nonché di molti piccoli monumenti spontanei sorti dopo il conflitto. Fu teatro del primo attacco condotto con i gas sul fronte italiano: il 29 giugno del 1916 l'esercito austroungarico attaccò di sorpresa l'esercito italiano utilizzando una miscela di cloro e fosgene con relativo successo.",
        img: "/5C_BrambillaBianchinDiDonna_POI/data/placesImage/monte san michele.jpg",
    },
    {
        descrizione: "L'espressione guerra Bianca (in tedesco Gebirgskrieg, ovvero una guerra in montagna) o fronte alpino individua il particolare contesto e l'insieme degli eventi militari avvenuti nei settori alpini del fronte italiano della prima guerra mondiale. Tra il 1915 e il 1918 sulle Alpi nei settori operativi delle Dolomiti, e dei gruppi dell'Ortles-Cevedale e dell'Adamello-Presanella, videro le truppe del Regno d'Italia contrapposte a quelle dell'Impero austro-ungarico. Questo fronte fu caratterizzato da combattimenti svolti in scenari di media ed alta quota, lungo il confine meridionale della regione storica del Tirolo (che coincide con l'attuale limite amministrativo della provincia autonoma di Trento), che per più di due terzi correva su una linea al di sopra dei 2000 metri di quota, fino a toccare i 3905 metri dell'Ortles.",
        img: "/5C_BrambillaBianchinDiDonna_POI/data/placesImage/ortles cevedale adamello.jpg",
    },
    {
        descrizione: ` il 3 novembre 1918 fu un giorno veramente speciale nella storia del giovane Regno d'Italia: alle 16.30, il cacciatorpediniere Audace apparve all'orizzonte ed attraccò sul Molo San Carlo (ribattezzato poi proprio Molo Audace), di fronte a Piazza Grande (l'odierna Piazza Unità). Fu la prima nave italiana ad arrivare a Trieste, abbandonata dal governatore austro-ungarico già da due giorni.
In mezzo ad una folla entusiasta il generale Petitti di Roreto scese dalla nave e, in nome di Vittorio Emanuele III, prese possesso della città.`,
        img: "/5C_BrambillaBianchinDiDonna_POI/data/placesImage/trieste.jpg",
    },
    {
        descrizione: "A Villa Giusti viene firmato l’armistizio che dichiara la vittoria dell’italia contro l’Austria",
        img: "/5C_BrambillaBianchinDiDonna_POI/data/placesImage/villa giusti.jpg",
    },
    {
        descrizione: "La battaglia di Vittorio Veneto fu caratterizzata da una fase iniziale duramente combattuta, durante la quale l'esercito austro-ungarico fu ancora in grado di opporre valida resistenza sia sul Piave sia nel settore del monte Grappa, a cui seguì un improvviso e irreversibile crollo della difesa, con la progressiva disgregazione dei reparti e defezioni tra le minoranze nazionali, che favorirono la rapida avanzata finale dell'esercito italiano fino a Trento e Trieste.",
        img: "/5C_BrambillaBianchinDiDonna_POI/data/placesImage/vittorio veneto.jpg",
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


