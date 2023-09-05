# AWS Infrastructure

## Infrastruttura Globale AWS

L'infrastruttura globale di AWS è costituita da una vasta rete di data center e risorse hardware connessi tramite una rete globale, che agisce come una singola risorsa globale per gli utenti finali. La struttura di AWS Global Infrastructure include:

- 25 regioni operative
- 81 zone di disponibilità (Availability Zone)
- 108 posizioni di connessione diretta (Direct Connection Locations)
- Più di 275 punti di presenza (Point of Presence)
- 11 Local Zone
- 17 Wavelength Zone


## Regioni

Le regioni AWS sono aree geografiche separate, ognuna delle quali consiste in una o più zone di disponibilità. Generalmente, ogni regione ha almeno 3 zone di disponibilità, sebbene i nuovi utenti possano avere accesso a 2 di esse inizialmente. Nuovi servizi di solito vengono resi disponibili nella prima zona di disponibilità. Non tutti i servizi AWS sono disponibili in tutte le regioni, e i costi dei servizi possono variare da una regione all'altra.

Quando si sceglie una regione, è importante considerare quattro fattori:

- Conformità normativa nella regione.
- Costi dei servizi AWS nella regione.
- Disponibilità dei servizi nella regione.
- Distanza o latenza per gli utenti finali.


## Zone di Disponibilità (AZ)

Una zona di disponibilità è un'area fisica che contiene uno o più data center. Ogni data center è un edificio sicuro che ospita centinaia di migliaia di server. In genere, una regione AWS ha tre zone di disponibilità, e questi data center sono separati e isolati fisicamente, ma sono sufficientemente vicini da garantire una bassa latenza (meno di 10 ms). È una pratica comune distribuire i carichi di lavoro in almeno tre zone di disponibilità per garantire l'alta disponibilità in caso di guasti in uno o due data center.

Ogni sottorete (subnet) è associata a una zona di disponibilità, ma quando si lanciano risorse, si sceglie la sottorete piuttosto che la zona di disponibilità.


## Fault Tolerance (Tolleranza ai guasti)

### Fault Domain

Un fault domain è una parte della rete che è vulnerabile a guasti hardware o a danni a dispositivi. L'obiettivo del fault domain è limitare al massimo i danni in caso di failure, in modo che non si verifichi una cascata di guasti. I fault domain possono essere nidificati all'interno di altri fault domain, e ciò può comportare diversi livelli di tolleranza ai guasti, con scope che possono essere specifici server in un rack, l'intero rack in un data center, un'intera stanza in un data center o persino l'intero data center. La definizione dei confini del dominio di errore è responsabilità del fornitore di servizi cloud (CSP).

Ogni regione AWS è progettata per essere completamente isolata dalle altre regioni, il che offre la massima possibilità di tolleranza ai guasti e stabilità. Ogni zona di disponibilità è isolata ma è collegata con collegamenti a bassa latenza alle altre regioni, e ciascuna regione ha un piano indipendente per le zone di errore (failure zone).


### Failure Zone

Ogni zona di disponibilità è fisicamente separata dalle altre e di solito è situata in una città diversa, spesso in aree a basso rischio di eventi come alluvioni. Ogni zona di disponibilità dispone di un'alimentazione ininterrotta (UPS Uninterruptible power supply) e di un sito di backup per la generazione di energia. Inoltre, le zone di disponibilità sono connesse in modo ridondante ai provider di rete tier-1.


## Rete Globale

La rete globale di AWS rappresenta l'interconnessione dell'intera infrastruttura globale di AWS ed è spesso chiamata "la spina dorsale di AWS". Questa rete è progettata come un'autostrada privata per consentire un rapido transito dei dati tra i data center.


## Point of Presence (PoP)

Un Point of Presence, o PoP, è una posizione intermedia tra una regione AWS e l'utente finale. Un PoP può essere costituito da un data center o da una collezione di hardware. Per AWS, un PoP può essere un data center di proprietà di AWS o di un partner fidato, utilizzato per la distribuzione di contenuti o per il caricamento accelerato dei dati. I tipi di risorse PoP includono le edge location e le regional edge caches.

**Edge Locations**: sono data center che fungono da cache per i file più popolari, come pagine web, immagini e video, al fine di ridurre il tempo di consegna all'utente finale.

**Regional Edge Locations**: sono data center che mantengono una cache di file meno popolari, contribuendo a ridurre i costi di trasferimento dei dati.

I PoP sono situati ai bordi delle interconnessioni tra reti e spesso sono collegati a reti tier-1, che possono raggiungere tutte le altre reti senza dover pagare per gli indirizzi IP di transito o le tariffe di peering.


## AWS Direct Connect

AWS Direct Connect è un servizio che offre connessioni private e dedicate tra il tuo data center, il tuo ufficio, i tuoi spazi di co-location e AWS. Direct Connect offre due opzioni di connessione a velocità elevate:

- Banda larga inferiore (50-500 Mbps)
- Banda larga superiore (1-10 Gbps)

Questo servizio aiuta a ridurre i costi di rete e migliora la coerenza e la sicurezza delle connessioni rispetto a una connessione Internet tipica.


## Direct Connect Locations

Le Direct Connect Locations sono partner di data center verificati dove è possibile stabilire connessioni ad alta velocità dedicate e a bassa latenza tra la tua infrastruttura locale (on-premis) e AWS.


## AWS Local Zones

Le Local Zones sono data center situati in prossimità di aree densamente popolate per garantire una latenza estremamente bassa, nell'ordine dei millisecondi. Queste strutture sono progettate per supportare applicazioni altamente esigenti che richiedono bassa latenza, tra cui:

- Media & Intrattenimento
- Automazione del Design Elettronico
- Advertising Technology (Ad-Tech)
- Machine Learning


## Wavelength Zones

Le Wavelength Zones abilitano l'edge computing sulle reti 5G. Sono progettate per applicazioni che richiedono una latenza ultra-bassa e devono essere più vicine possibile agli utenti finali. AWS ha stretto collaborazioni con diverse aziende di reti 5G per offrire queste zone. Puoi creare una sottorete nelle Wavelength Zones e lanciare macchine virtuali (VM) sull'edge delle reti 5G.


## Data Residency

**Cosa è la Data Residency?**

La Data Residency si riferisce alla posizione fisica o geografica in cui un'organizzazione o le risorse cloud risiedono.

**Cosa sono le Compliance Boundaries?**

Le Compliance Boundaries sono normative legali stabilite da un governo o da un'organizzazione che specificano dove i dati e le risorse cloud possono essere ospitati e archiviati in conformità con le leggi e i regolamenti.

**Cosa è la Data Sovereignty?** 

La Data Sovereignty riguarda il controllo giurisdizionale o l'autorità legale che si applica ai dati a causa della loro posizione fisica entro i confini giurisdizionali.

Per i carichi di lavoro che richiedono rigorose restrizioni di conformità in termini di posizione dei dati e risorse cloud su AWS, è possibile utilizzare diverse soluzioni:

- **AWS Config**: AWS Config è un servizio di Policy as Code che consente di definire regole per verificare continuamente la conformità delle configurazioni delle risorse AWS. In caso di violazioni, è possibile ricevere notifiche o, in alcuni casi, AWS Config può correggere automaticamente la configurazione errata.

<!---->

- **AWS Outposts**: AWS Outposts è un servizio che offre un rack di server fisici forniti da Amazon che è possibile collocare nel proprio data center. Questi server mantengono i dati nella posizione fisica in cui si trova l'Outpost.

<!---->

- **IAM Policies**: Le IAM (Identity and Access Management) Policies possono essere utilizzate per rifiutare l'accesso a specifiche regioni AWS. Le Service Control Policies (SCP) sono autorizzazioni applicate a livello di organizzazione che possono limitare l'accesso alle regioni specifiche.


## AWS for Government

**Cos'è il Settore Pubblico?** 

Il settore pubblico comprende servizi governativi come l'esercito, le forze dell'ordine, le infrastrutture, i servizi pubblici, l'istruzione pubblica, l'assistenza sanitaria e il governo stesso. AWS può essere utilizzato sia dal settore pubblico che dalle organizzazioni per ospitare carichi di lavoro destinati al settore pubblico. AWS ha raggiunto questo obiettivo attraverso programmi di conformità normativa specifici e controlli di sicurezza rigorosi.

**GovCloud:** GovCloud è una regione AWS speciale progettata per soddisfare le esigenze del governo degli Stati Uniti. Si basa sul programma Federal Risk and Authorization Management Program (FedRAMP), che stabilisce standard di sicurezza, valutazioni, autorizzazioni e monitoraggio continuo per i prodotti e i servizi cloud.


### AWS in Cina

AWS in Cina è la versione di AWS progettata specificamente per il mercato cinese. È completamente isolata dalla rete globale di AWS per conformarsi alle regolamentazioni cinesi. Per operare in una regione AWS in Cina, è necessaria una licenza di business chiamata China Business License (ICP license). Non tutti i servizi AWS sono disponibili in Cina, ad esempio Route 53. Utilizzando AWS in Cina, è possibile evitare di attraversare il "Great Firewall" cinese. AWS ha due regioni in Cina, entrambe fornite da partner cinesi.


## Sustainability

AWS si impegna a raggiungere l'obiettivo di zero emissioni nette di carbonio entro il 2040 in tutte le attività Amazon, compreso AWS. Gli obiettivi di sostenibilità di AWS sono suddivisi in tre parti:

- Energia rinnovabile: AWS sta lavorando per alimentare l'intera infrastruttura globale con fonti di energia rinnovabile al 100% entro il 2025.

<!---->

- Efficienza del cloud: L'infrastruttura di AWS è 3,6 volte più efficiente dal punto di vista energetico rispetto alla media dei data center negli Stati Uniti.

<!---->

- Gestione dell'acqua: AWS utilizza diverse strategie per gestire l'acqua in modo sostenibile, tra cui l'evaporazione diretta dell'acqua per il raffreddamento dei data center, l'uso di acqua non potabile (acqua riciclata), il trattamento per rimuovere i minerali e il riutilizzo dell'acqua per più cicli.


## AWS Ground Station

AWS Ground Station è un servizio che consente di controllare le comunicazioni satellitari, elaborare i dati e scalare senza dover costruire e gestire un'infrastruttura a terra. Questo servizio è utile per una serie di casi d'uso, tra cui previsioni meteorologiche, imaging della superficie terrestre, comunicazioni e trasmissioni video.


## AWS Outposts

**AWS Outposts:** AWS Outposts è un servizio che consente di estendere l'infrastruttura AWS nel proprio data center, nello spazio di co-location o in una struttura on-premise. Questo servizio offre la stessa infrastruttura AWS, servizi AWS, API e strumenti che sono disponibili nelle regioni AWS, consentendo di creare un ambiente ibrido che combina l'infrastruttura locale con le capacità scalabili e flessibili di AWS.
