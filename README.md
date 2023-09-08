# MindMemoir template

MindMemoir ti permette di creare delle wiki dal tuo markdown e raggrupparle in un inco sito web. 

![img]()

![img]()

### Genera wiki 

##### Solo la prima volta 
` 
npm i

` 
Installare tutte le dipendenze necessarie.

##### Compilare le modifiche
` 
npm run start
` 

Per compilare in maniera automatica le cartelle con il markdown. Verranno convertite e spostate in nella cartella docs. Verrà poi generato un template contenente la lista (puntando al primo markdown con nome '00-Intro.md').

#### Limitazione foto
Per le immagini è importante che siano già uploadate da qualche parte esempio repository o altrove sul web. Basterà poi inserire il link web all'interno del markdown.

esempio:

```markdown
![Roadmap](https://github.com/Elpiu/MindMemoir/blob/main/docs/AWS%20CLF-C01%20(AWS%20Cloud%20Practitioner)/imgs/image-roadmap-aws.png?raw=true) 
```

#### Se si aggiungono cartelle....
Lo script ha delle configurazioni presenti nella cartella env, environment.env; se si aggiungono delle cartelle che non sono Wiki è importante segnalarle nelle configurazioni aggiungendo la cartella, se è stata aggiunta nella cartella principale (Mindmemoir) va aggiunta in 'foldersToSkipInRoot'; se è stata aggiunta sotto docs 'foldersToSkipInDocs'; **è imporante farlo poichè lo script effettua delle cancellazioni**, e potreste ritrovarvi con la cartella cancellata.

---


#### Link Utili

##### Convertitore
Convertitore Google Doc in Markdown [MarkdownConverter](https://gdoc2md.com/); non è perfetto e con i link e le immagini commette errori.

##### MarkdownToFolderHTML
Questo framework utilizza [MarkdownToFolderHTML](https://github.com/joakin/markdown-folder-to-html) per trasformare i file .md in html.


