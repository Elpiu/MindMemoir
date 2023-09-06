"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
/**
 * Script che sposta e rinonima le cartelle generate da 'npm run docs ...'.
 * @param sourcePath parh della cartella in cui sono presenti le cartelle
 * @param targetPath path della cartella di destinazione
 */
function moveUnderscoreDirectories(sourcePath, targetPath) {
    try {
        // Ottieni l'elenco delle directory nella directory sorgente
        var directories = fs.readdirSync(sourcePath);
        // Filtra e sposta le directory che iniziano con '_'
        directories.forEach(function (directory) {
            var sourceDir = path.join(sourcePath, directory);
            var targetDir = path.join(targetPath, directory);
            if (fs.statSync(sourceDir).isDirectory() && directory.startsWith("_")) {
                fs.renameSync(sourceDir, targetDir);
                console.log("Spostata la directory ".concat(directory, " in ").concat(targetPath));
            }
        });
    }
    catch (error) {
        console.error("Si è verificato un errore durante lo spostamento delle directory:", error);
    }
}
function renameUnderscoreDirectories(sourcePath) {
    try {
        // Ottieni l'elenco delle directory nella directory sorgente
        var directories = fs.readdirSync(sourcePath);
        // Rinomina le directory che iniziano con '_'
        directories.forEach(function (directory) {
            var sourceDir = path.join(sourcePath, directory);
            if (fs.statSync(sourceDir).isDirectory() && directory.startsWith("_")) {
                var newDirectoryName = directory.slice(1); // Rimuovi il carattere '_' dall'inizio
                var targetDir = path.join(sourcePath, newDirectoryName);
                fs.renameSync(sourceDir, targetDir);
                console.log("Rinominata la directory ".concat(directory, " in ").concat(newDirectoryName));
            }
        });
    }
    catch (error) {
        console.error("Si è verificato un errore durante il rinominare delle directory:", error);
    }
}
function deleteOldDirectoriesIfExists(targetPath) {
    try {
        // Ottieni l'elenco delle directory nella directory 
        var directories = fs.readdirSync(targetPath);
        if (!directories)
            return;
        directories.forEach(function (directory) {
            if (directory !== "statics") {
                var sourceDir = path.join(targetPath, directory);
                console.log("Removing... ", sourceDir);
                fs.rmSync(sourceDir, { force: true, recursive: true });
            }
        });
    }
    catch (error) {
        console.error("Si è verificato un errore durante la cancellazione delle directory:", error);
    }
}
var sourcePath = process.cwd(); // Percorso corrente
var targetPath = path.join(process.cwd(), "docs"); // Percorso della cartella 'docs'
deleteOldDirectoriesIfExists(targetPath);
moveUnderscoreDirectories(sourcePath, targetPath);
renameUnderscoreDirectories(targetPath);
