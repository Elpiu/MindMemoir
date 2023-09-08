import * as fs from "fs";
import * as path from "path";
import { exec } from "child_process";

import {
  deleteDirectoriesFromTarget,
  getAllDirectories,
  getAllDirectoriesStartWith,
  getAllFiles,
  getOnlyItemsNotPresentInFilter,
  moveUnderscoreDirectories,
  renameUnderscoreDirectoriesFromTarget,
} from "./UtilsFunctions";
import { generateTemplate } from "./GenerateTemplate";

function executeScript(scriptCommand: string): Promise<void> {
  return new Promise((resolve, reject) => {
    exec(scriptCommand, (error, stdout, stderr) => {
      if (error) {
        reject(`Errore durante l'esecuzione dello script: ${error}`);
        return;
      }
      console.log(`Output dello script: ${stdout}`);
      resolve();
    });
  });
}

async function runMultipleScripts(scriptCommands: string[]) {
  const promises = scriptCommands.map((script) => executeScript(script));

  try {
    await Promise.all(promises);
    console.log("Tutti gli script sono stati eseguiti con successo.");

    // Continua con il flusso normale di esecuzione qui
  } catch (error) {
    console.error(error);
  }
}

const sourcePath = process.cwd(); // Percorso corrente
const targetPath = path.join(process.cwd(), "env\\environment.env");
const jsonEnv = JSON.parse(fs.readFileSync(targetPath, "utf-8"));

let deployFolder: string = jsonEnv["deployFolder"];
let foldersToSkipInRoot: string[] = jsonEnv["foldersToSkipInRoot"];
let foldersToSkipInDocs: string[] = jsonEnv["foldersToSkipInDocs"];
let scriptToExecuteGenerate = jsonEnv["scriptToExecuteGenerate"];
let scriptToExecuteAfter = jsonEnv["scriptToExecuteAfter"];
let deployPath: string = path.join(sourcePath, deployFolder);

console.log("DeployFolder Targhet is: ", deployFolder);
console.log("Folders to skip in root are: ", foldersToSkipInRoot);
console.log("Folders to skip in docs: ", foldersToSkipInDocs);

// Per ogni cartella presente nella root escldendo le cartelle foldersToSkipInDocs chiama lo script docs
let scriptCommands: string[] = [];
getOnlyItemsNotPresentInFilter(
  getAllDirectories(sourcePath),
  foldersToSkipInRoot
).forEach((element) => {
  scriptCommands.push(`${scriptToExecuteGenerate} "${element}"`);
});
console.log(scriptCommands);

runMultipleScripts(scriptCommands).then(() => {
  console.log("Delete Old directories");
  deleteDirectoriesFromTarget(
    deployPath,
    getOnlyItemsNotPresentInFilter(
      getAllDirectories(deployPath),
      foldersToSkipInDocs
    )
  );
  console.log("Moving and Renaming Directories");
  moveUnderscoreDirectories(
    sourcePath,
    deployPath,
    getAllDirectoriesStartWith(sourcePath)
  );
  renameUnderscoreDirectoriesFromTarget(deployPath);

  //executeScript(scriptToExecuteAfter)
  generateTemplate(
    sourcePath,
    getOnlyItemsNotPresentInFilter(
      getAllDirectories(deployPath),
      foldersToSkipInDocs
    )
  );
});
