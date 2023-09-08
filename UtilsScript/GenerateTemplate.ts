import * as fs from "fs";
import { JSDOM } from "jsdom";
import * as path from "path";

/**
 * Ritorna contenuto html di un itemlist
 * @param nomeFolder path e nome dell'item list
 */
function returnNewListItem(nomeFolder: string) {
  return `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <a href="./${nomeFolder}/00-Intro.html">${nomeFolder}
            <span class="badge badge-primary badge-pill">${nomeFolder.substring(
              0,
              nomeFolder.indexOf(" ")
            )}</span>
        </a>.
    </li>
    `;
}

export function generateTemplate(
  sourcePath: string,
  direcoriesNames: string[]
) {
  // Leggi il contenuto del file HTML dal tuo template
  const templateFilePath = "docs/statics/template/template1.html";
  const html = fs.readFileSync(path.join(sourcePath, templateFilePath), "utf8");

  // Creare un DOM virtuale
  const dom = new JSDOM(html);
  const document = dom.window.document;

  // Trova la <ul> con id="addHere" nel documento
  const ulElement = document.getElementById("addHere");
  //console.log("ulElement is:", ulElement);
  if (ulElement) {
    // Aggiungi gli elementi <li> generati dalla funzione returnNewListItem
    for (const directoryName of direcoriesNames) {
      ulElement.innerHTML += returnNewListItem(directoryName);
      //console.log(ulElement.innerHTML);
    }
  } else {
    console.error('Elemento con id="addHere" non trovato nel template.');
  }

  // Serializza il documento HTML
  const newHtml = dom.serialize();

  // Salva il documento HTML nella cartella "docs" con il nome "index.html"
  const outputFilePath = "./docs/index.html";
  fs.writeFileSync(outputFilePath, newHtml, "utf8");
  console.log("File generato e salvato in: ", outputFilePath);
}
