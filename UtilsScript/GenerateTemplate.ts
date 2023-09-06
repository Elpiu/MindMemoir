import * as fs from 'fs';
import { JSDOM } from 'jsdom';
import * as path from 'path';

/**
 * 1. Prendi il file nella cartella template con nome template1.html
 * 2. Prendi il contenuto del file e crea un virtual dom
 * 3. Cerca la ul con id="addHere" e inserisci un list item per ogni elemento nella variable direcories names
 * 4. Salva tutto l'html nella cartella docs e chiama il file input.html
 */

// TODO prendere con uno script sulla folder docs, tutte le cartelle eccetto 'statics'
const sourcePath = path.join(process.cwd(), "docs"); // Percorso corrente
console.log("sourcePath:", sourcePath)
// Ottieni l'elenco delle directory nella directory sorgente
let direcoriesNames = fs.readdirSync(sourcePath);
direcoriesNames = direcoriesNames.filter(name => fs.statSync(path.join(sourcePath, name)).isDirectory())
const directoryToExclude = "statics";

console.log("directories: " ,direcoriesNames)

/**
 * Ritorna contenuto html di un itemlist
 * @param nomeFolder path e nome dell'item list
 */
function returnNewListItem(nomeFolder) {
  return `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <a href="./${nomeFolder}/00-Intro.html">${nomeFolder}
            <span class="badge badge-primary badge-pill">${nomeFolder.substring(0, nomeFolder.indexOf(" "))}</span>
        </a>.
    </li>
    `;
}

// Leggi il contenuto del file HTML dal tuo template
const templateFilePath = "statics/template/template1.html";
const html = fs.readFileSync(path.join(sourcePath, templateFilePath), "utf8");

// Creare un DOM virtuale
const dom = new JSDOM(html);
const document = dom.window.document;

// Trova la <ul> con id="addHere" nel documento
const ulElement = document.getElementById("addHere");
console.log("ulElement is:", ulElement)
if (ulElement) {
  // Aggiungi gli elementi <li> generati dalla funzione returnNewListItem
  for (const directoryName of direcoriesNames) {
    // Filtra le directory per escludere quelle specificate
    if(directoryName !== directoryToExclude){
        ulElement.innerHTML += returnNewListItem(directoryName);
    console.log(ulElement.innerHTML)
    }
  }
} else {
  console.error('Elemento con id="addHere" non trovato nel template.');
}

// Serializza il documento HTML
const newHtml = dom.serialize();

// Salva il documento HTML nella cartella "docs" con il nome "index.html"
const outputFilePath = "./docs/index.html";
fs.writeFileSync(outputFilePath, newHtml, "utf8");
console.log("File generato e salvato in: ", outputFilePath)