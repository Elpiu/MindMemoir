import * as fs from 'fs';
import * as path from 'path'

/**
 * Script che sposta e rinonima le cartelle generate da 'npm run docs ...'.
 * @param sourcePath parh della cartella in cui sono presenti le cartelle
 * @param targetPath path della cartella di destinazione
 */

function moveUnderscoreDirectories(
  sourcePath: string,
  targetPath: string
): void {
  try {
    // Ottieni l'elenco delle directory nella directory sorgente
    const directories = fs.readdirSync(sourcePath);

    // Filtra e sposta le directory che iniziano con '_'
    directories.forEach((directory) => {
      const sourceDir = path.join(sourcePath, directory);
      const targetDir = path.join(targetPath, directory);

      if (fs.statSync(sourceDir).isDirectory() && directory.startsWith("_")) {
        fs.renameSync(sourceDir, targetDir);
        console.log(`Spostata la directory ${directory} in ${targetPath}`);
      }
    });
  } catch (error) {
    console.error(
      "Si è verificato un errore durante lo spostamento delle directory:",
      error
    );
  }
}

function renameUnderscoreDirectories(sourcePath: string): void {
  try {
    // Ottieni l'elenco delle directory nella directory sorgente
    const directories = fs.readdirSync(sourcePath);

    // Rinomina le directory che iniziano con '_'
    directories.forEach((directory) => {
      const sourceDir = path.join(sourcePath, directory);

      if (fs.statSync(sourceDir).isDirectory() && directory.startsWith("_")) {
        const newDirectoryName = directory.slice(1); // Rimuovi il carattere '_' dall'inizio
        const targetDir = path.join(sourcePath, newDirectoryName);

        fs.renameSync(sourceDir, targetDir);
        console.log(
          `Rinominata la directory ${directory} in ${newDirectoryName}`
        );
      }
    });
  } catch (error) {
    console.error(
      "Si è verificato un errore durante il rinominare delle directory:",
      error
    );
  }
}

const sourcePath = process.cwd(); // Percorso corrente
const targetPath = path.join(process.cwd(), "docs"); // Percorso della cartella 'docs'

moveUnderscoreDirectories(sourcePath, targetPath);
renameUnderscoreDirectories(targetPath);
