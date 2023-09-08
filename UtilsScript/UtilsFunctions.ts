import exp from "constants";
import * as fs from "fs";
import * as path from "path";

/** Prende tutti i file della cartella */
export function getAllFiles(sourcePath: string) {
  return fs.readdirSync(sourcePath);
}

/** Prende tutte le cartelle */
export function getAllDirectories(sourcePath: string): string[] {
  return getAllFiles(sourcePath).filter((file) =>
    fs.statSync(path.join(sourcePath, file)).isDirectory()
  );
}

export function getAllDirectoriesStartWith(sourcePath: string, token = "_") {
  return getAllDirectories(sourcePath).filter((file) => file.startsWith("_"));
}

/**  Ritorna gli items presenti solo in allList e non nel filtro */
export function getOnlyItemsNotPresentInFilter(
  allList: string[],
  toFilter: string[]
) {
  return allList.filter((file) => !toFilter.includes(file));
}

export function deleteDirectoriesFromTarget(
  targetPath: string,
  listDirectoryToDelate: string[]
) {
  try {
    if (listDirectoryToDelate) {
      listDirectoryToDelate.forEach((directory) => {
        const sourceDir = path.join(targetPath, directory);
        console.log("Removing... ", sourceDir);
        fs.rmSync(sourceDir, { force: true, recursive: true });
      });
    }
  } catch (error) {
    console.error(
      "Si è verificato un errore durante la cancellazione delle directory:",
      error
    );
  }
}

export function renameUnderscoreDirectoriesFromTarget(sourcePath: string) {
  try {
    let directories = getAllDirectories(sourcePath);
    directories = directories.filter((dir) => dir.startsWith("_"));

    directories.forEach((directory) => {
      const sourceDir = path.join(sourcePath, directory);
      const newDirectoryName = directory.slice(1); // Rimuovi il carattere '_' dall'inizio
      const targetDir = path.join(sourcePath, newDirectoryName);

      fs.renameSync(sourceDir, targetDir);
      console.log(
        `Rinominata la directory ${directory} in ${newDirectoryName}`
      );
    });
  } catch (error) {
    console.error(
      "Si è verificato un errore durante il rinominare delle directory:",
      error
    );
  }
}

export function moveUnderscoreDirectories(
  sourcePath: string,
  targetPath: string,
  directories: string[]
): void {
  try {
    directories.forEach((directory) => {
      const sourceDir = path.join(sourcePath, directory);
      const targetDir = path.join(targetPath, directory);
      fs.renameSync(sourceDir, targetDir);
      console.log(`Spostata la directory ${directory} in ${targetPath}`);
    });
  } catch (error) {
    console.error(
      "Si è verificato un errore durante lo spostamento delle directory:",
      error
    );
  }
}
