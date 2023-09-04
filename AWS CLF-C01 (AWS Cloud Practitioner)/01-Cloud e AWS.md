# Cloud e AWS

## Cos'è il Cloud Computing?

Il "Cloud Computing" è la pratica di utilizzare una rete di server remoti ospitati su Internet per archiviare, gestire ed elaborare dati, anziché fare affidamento su un server locale o un personal computer.


### On-Premise

- Possiedi i server
- Assumi il personale IT
- Paghi l'immobile o ne affitti uno
- Affronti tutti i rischi


### Cloud Providers

- Qualcun altro possiede i server
- Qualcun altro assume il personale IT
- Qualcun altro paga o affitta l'immobile
- Tu sei responsabile della configurazione dei servizi cloud e del codice, mentre qualcun altro si occupa del resto


## L'evoluzione dell'Hosting Cloud

- **Dedicate Server**: Una singola macchina fisica dedicata a un singolo business. Esegue un'unica applicazione web o sito. (Costoso, richiede molta manutenzione, alta sicurezza)

<!---->

- **Virtual Private Server (VPS)**: Una singola macchina fisica dedicata a un singolo business, ma virtualizzata in sottounità. Esegue più applicazioni web/siti. (Migliore utilizzo e isolamento delle risorse)

<!---->

- **Shared Hosting**: Una singola macchina fisica condivisa da centinaia di business affittuari che ne utilizzano le risorse. (Economico, funzionalità limitate, scarso isolamento)

<!---->

- **Cloud Hosting**: Più macchine fisiche che operano come un singolo sistema, astratto in diversi servizi cloud. (Flessibile, scalabile, sicuro, conveniente, alta configurabilità)


## Cos'è AWS?

AWS è un fornitore di servizi cloud, una raccolta di servizi cloud che possono essere utilizzati insieme attraverso un'unica API unificata per costruire workload.


## Cos'è un Cloud Service Provider (CSP)?

Un Cloud Service Provider (CSP) è un'azienda che offre una vasta gamma di servizi cloud. Ecco alcuni punti chiave che caratterizzano un CSP:

**Offerta di Servizi Cloud**: I CSP offrono una varietà di servizi cloud, che possono andare da una decina a centinaia di servizi differenti.

**Architettura Cloud**: Questi servizi cloud possono essere combinati insieme per creare un'architettura cloud personalizzata per le esigenze del cliente.

**API Unificata**: Gli utenti possono accedere a questi servizi attraverso una singola API unificata, semplificando notevolmente l'interazione con i servizi.

**Billing a Consumo**: La fatturazione dei servizi cloud è basata sull'uso effettivo, misurato in unità come secondi, ore, numero di CPU, spazio di archiviazione, ecc.

**Sistema di Monitoraggio**: I CSP incorporano sistemi di monitoraggio avanzati all'interno dei loro servizi, come ad esempio AWS CloudTrail, per tracciare e registrare le attività.

**Infrastruttura come Servizio (IaaS)**: Forniscono servizi cloud che includono infrastruttura come servizio, consentendo agli utenti di utilizzare risorse di rete, computer, e spazio di archiviazione su richiesta.

**Automazioni Infrastructure as Code (IaC)**: I CSP spesso supportano approcci di automazione basati su codice per la gestione delle risorse cloud.


### Livelli di CSP

Esistono diverse categorie di CSP, suddivise in tre livelli principali:

**Tier-1**: CSP di primo livello, tra cui Amazon Web Service, Microsoft Azure, Google Cloud Platform e Alibaba Cloud. Sono noti per la vasta gamma di servizi e la presenza globale.

**Tier-2**: CSP di secondo livello, tra cui IBM Cloud, Oracle Cloud e Rackspace. Offrono una serie di servizi cloud ma potrebbero avere una presenza meno estesa rispetto ai Tier-1.

**Tier-3**: CSP di terzo livello, come Vultr, Digital Ocean e Linode. Sono spesso noti per la semplicità e l'accessibilità dei loro servizi cloud.


### Tipi di Servizi Cloud Principali

I CSP offrono una varietà di servizi cloud, ma ci sono quattro tipi principali di servizi cloud, noti come i "4 core" per l'infrastruttura come servizio (IaaS):

**Compute**: Fornisce macchine virtuali in cui è possibile eseguire applicazioni, programmi e codice.

**Networking**: Offre servizi di rete, tra cui reti virtuali o reti isolate per collegare servizi o fornire connettività verso Internet.

**Storage**: Mette a disposizione spazio di archiviazione virtuale per salvare file e dati.

**Databases**: Fornisce database virtuali per l'archiviazione e la gestione di dati, da report a database di uso generale per applicazioni web.

È importante notare che il termine "Cloud Computing" può essere utilizzato in riferimento a tutte queste categorie, anche se il termine "Compute" è incluso nel nome.


## Tipi di Cloud Computing

**SaaS (Software as a Service)**: Questo è rivolto ai clienti. Si tratta di un prodotto gestito dal provider del servizio. Gli utenti non devono preoccuparsi di come viene mantenuto il servizio. Funziona e rimane disponibile per l'uso.

**PaaS (Platform as a Service)**: Questo è rivolto agli sviluppatori. Il focus è sul deployment e sulla gestione delle applicazioni. Gli sviluppatori non devono preoccuparsi dell'approvvigionamento, della configurazione o dell'infrastruttura sottostante, come hardware o sistema operativo.

**IaaS (Infrastructure as a Service)**: Questo è rivolto agli amministratori IT. Fornisce funzionalità di networking, computer e spazio di archiviazione. È il fondamento principale per la gestione dell'infrastruttura cloud.


## Modelli di Distribuzione del Cloud Computing

**Public Cloud**: In questa modalità, tutto, dall'ambiente di lavoro ai progetti, è costruito su un CSP (Cloud Service Provider). Questo è spesso chiamato approccio "Cloud-Native" o "Cloud First".

**Private Cloud**: In questo caso, tutto è costruito all'interno del datacenter di un'azienda, spesso chiamato anche approccio "On-Premise".

**Hybrid**: Questo modello combina sia l'infrastruttura cloud sia l'infrastruttura on-premise. Gli utenti utilizzano entrambi in base alle esigenze.

**Cross-Cloud**: In questo modello, vengono utilizzati più CSP diversi, noto anche come "Multi-cloud".


## I Vantaggi del Cloud

**Agilità**: Migliorare la velocità e l'agilità operativa.

**Pricing Pay-as-You-Go**: Cambiare da costi iniziali a una spesa variabile basata sull'uso effettivo.

**Economie di Scala**: Beneficiare delle economie di scala offerte dai grandi CSP.

**Raggiungibilità Globale**: Distribuire servizi globalmente in pochi minuti.

**Sicurezza**: Sicurezza fisica fornita dal cloud, ma possibilità di personalizzare le configurazioni di sicurezza.

**Affidabilità**: Disponibilità di backup, ripristino da disastro, replicazione dati e tolleranza ai guasti.

**Scalabilità**: Aumentare o diminuire risorse e servizi in base alle necessità.

**Elasticità**: Scalare automaticamente durante i picchi e i cali della domanda.

**Fault Tolerance**: La capacità di un sistema cloud di tollerare guasti hardware o software senza subire interruzioni significative dei servizi. Ciò contribuisce a garantire la continuità operativa e la disponibilità dei servizi anche in caso di problemi tecnici.

**Disaster Recovery**: La capacità di ripristinare rapidamente i dati e i servizi in caso di eventi catastrofici o perdite di dati. Il cloud offre soluzioni di disaster recovery efficaci che consentono di proteggere i dati e ripristinare i servizi in tempi brevi.
