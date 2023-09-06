"use strict";
exports.__esModule = true;
var fs = require("fs");
var jsdom_1 = require("jsdom");
var path = require("path");
/**
 * 1. Prendi il file nella cartella template con nome template1.html
 * 2. Prendi il contenuto del file e crea un virtual dom
 * 3. Cerca la ul con id="addHere" e inserisci un list item per ogni elemento nella variable direcories names
 * 4. Salva tutto l'html nella cartella docs e chiama il file input.html
 */
// TODO prendere con uno script sulla folder docs, tutte le cartelle eccetto 'statics'
var sourcePath = path.join(process.cwd(), "docs"); // Percorso corrente
console.log("sourcePath:", sourcePath);
// Ottieni l'elenco delle directory nella directory sorgente
var direcoriesNames = fs.readdirSync(sourcePath);
direcoriesNames = direcoriesNames.filter(function (name) { return fs.statSync(path.join(sourcePath, name)).isDirectory(); });
var directoryToExclude = "statics";
console.log("directories: ", direcoriesNames);
/**
 * Ritorna contenuto html di un itemlist
 * @param nomeFolder path e nome dell'item list
 */
function returnNewListItem(nomeFolder) {
    return "\n    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n        <a href=\"./".concat(nomeFolder, "/00-Intro.html\">").concat(nomeFolder, "\n            <span class=\"badge badge-primary badge-pill\">").concat(nomeFolder.substring(0, nomeFolder.indexOf(" ")), "</span>\n        </a>.\n    </li>\n    ");
}
// Leggi il contenuto del file HTML dal tuo template
var templateFilePath = "statics/template/template1.html";
var html = fs.readFileSync(path.join(sourcePath, templateFilePath), "utf8");
// Creare un DOM virtuale
var dom = new jsdom_1.JSDOM(html);
var document = dom.window.document;
// Trova la <ul> con id="addHere" nel documento
var ulElement = document.getElementById("addHere");
console.log("ulElement is:", ulElement);
if (ulElement) {
    // Aggiungi gli elementi <li> generati dalla funzione returnNewListItem
    for (var _i = 0, direcoriesNames_1 = direcoriesNames; _i < direcoriesNames_1.length; _i++) {
        var directoryName = direcoriesNames_1[_i];
        // Filtra le directory per escludere quelle specificate
        if (directoryName !== directoryToExclude) {
            ulElement.innerHTML += returnNewListItem(directoryName);
            console.log(ulElement.innerHTML);
        }
    }
}
else {
    console.error('Elemento con id="addHere" non trovato nel template.');
}
// Serializza il documento HTML
var newHtml = dom.serialize();
// Salva il documento HTML nella cartella "docs" con il nome "input.html"
var outputFilePath = "./docs/input.html";
fs.writeFileSync(outputFilePath, newHtml, "utf8");
console.log("File generato e salvato in: ", outputFilePath);
