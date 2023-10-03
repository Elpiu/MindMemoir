# Managment and Development Tools

### AWS API
L'Application Programming Interface (API) di AWS, è un software che permette a due applicazioni o server di comunicare tra di loro. Il tipo di API più comune avviene tramite richieste HTTP/S.

L'API di AWS è basata su HTTP, il che significa che è possibile interagire con essa inviando richieste HTTPS. Questo può essere fatto utilizzando un'applicazione o strumenti come Postman.

Ogni servizio di AWS ha i suoi punti di accesso (endpoints) a cui è possibile inviare richieste. Il metodo di autorizzazione solitamente coinvolge una richiesta di login che fornisce un token per le chiamate successive. Sarà anche necessario specificare un'AZIONE (ACTION) e fornire eventuali parametri nel payload della richiesta.

Di solito, gli utenti non inviano direttamente le richieste HTTP. È molto più comune interagire con AWS utilizzando vari strumenti per sviluppatori come 'AWS Management Console' (interfaccia web), l'interfaccia API 'AWS SDK' che supporta diversi linguaggi di programmazione o 'AWS CLI' che consente di interagire con le API tramite il terminale o la shell.


### AWS SDK
Un SDK (Software Development Kit) è una raccolta di strumenti per lo sviluppo software confezionati in un unico pacchetto installabile.

L'AWS SDK consente di creare, modificare, eliminare o interagire con le risorse di AWS in modo programmatico. È disponibile in diversi linguaggi di programmazione.

---

## Infrastructure as Code (IaC)

Infrastructure as Code (IaC)
L'Infrastructure as Code (IaC) ti consente di scrivere uno script di configurazione per automatizzare la creazione, l'aggiornamento o la distruzione di un'infrastruttura cloud.

L'IaC funge da "progetto pilota" per la tua infrastruttura, consentendoti di definirla in modo dettagliato e replicabile.

Inoltre, l'IaC ti abilita facilmente a condividere, versionare e tenere traccia delle modifiche alla tua infrastruttura cloud.

AWS offre due servizi principali per l'IaC:

- **AWS CloudFormation (CFN)**: 
    - Modalità dichiarativa: ciò che vedi è ciò che ottieni. È più verboso, ma elimina le possibilità di errori di configurazione. Usa linguaggi come JSON, YAML, XML.
- **AWS Cloud Development Kit (CDK)**: 
    - Modalità imperativa: dici cosa vuoi e il resto viene gestito implicitamente. È meno verboso, ma potresti incorrere in configurazioni errate. Consente di fare di più rispetto a quanto possibile con la dichiarativa.
    - Utilizza linguaggi di programmazione come Python, Ruby, Javascript.
    - Genera template CloudFormation.
    - Dispone di una libreria di componenti cloud riutilizzabili chiamati "CDK Construct".
    - Offre strumenti per velocizzare la configurazione di CI/CD per progetti CDK.
    - Fornisce un framework per il testing, sia unitario che di integrazione.


#### CloudFormation
AWS CloudFormation ti consente di scrivere codice IaC utilizzando JSON o YAML.

CloudFormation è un modo semplice ma potente per definire l'infrastruttura cloud. Tuttavia, può portare a file di configurazione di grandi dimensioni e potrebbe avere alcune limitazioni rispetto a CDK quando si tratta di creare infrastrutture altamente dinamiche o ripetibili.

CloudFormation è generalmente più accessibile per un DevOps Engineer che non ha un background nei linguaggi di programmazione web.

È importante sottolineare che, poiché CDK genera CloudFormation, è comunque essenziale saper leggere e comprendere il codice CloudFormation per eseguire il debug dello stack IaC.

### Access Keys
Un access key, comunemente chiamato anche credenziali AWS, è una chiave segreta richiesta quando si utilizzano le risorse AWS in modo programmatico, ad esempio interagendo con le API al di fuori della Console di Gestione AWS. Un utente deve abilitare questo tipo di credenziali per garantire l'accesso alle Access Keys.

Ecco alcune best practice per la gestione delle Access Keys:

Mai condividere le chiavi di accesso con altri.
Mai includere le chiavi di accesso nella codebase di un progetto.
Puoi attivare fino a due Access Keys per ogni utente.
Le Access Keys forniscono agli utenti l'accesso alle risorse AWS.
Le Access Keys vengono generalmente salvate nel file ~/.aws/credentials in un formato come TOML o YAML, a seconda della configurazione del tuo ambiente.

---


## Documentazione AWS
La documentazione AWS è una vasta collezione di risorse tecniche che fornisce istruzioni dettagliate su come utilizzare i servizi offerti da AWS. Essa copre una vasta gamma di argomenti e fornisce guide, esempi di codice, tutorial e altro ancora per aiutare gli sviluppatori, gli amministratori di sistema e altri professionisti a sfruttare al massimo i servizi AWS.


