# Shared Responsibility Model

Lo "Shared Responsibility Model" è un framework che definisce le responsabilità di sicurezza del cliente nei confronti del Cloud Service Provider (CSP).

Ogni CSP ha la propria variante del modello di condivisione di responsabilità, ma in generale seguono la stessa logica.

Per AWS, il modello di condivisione di responsabilità si suddivide tra AWS e il cliente come segue:

##### AWS
- **Hardware / Global Infrastructure**: Regioni, Zone di Disponibilità, Punti di Presenza, Sicurezza Fisica.
- **Software**: Calcolo, Archiviazione, Database, Rete.

##### Cliente
- **Configurazione dei Servizi Gestiti o Software di Terze Parti**: Piattaforme, Applicazioni, Gestione delle Identità e degli Accessi (IAM).
- **Configurazione dell'Infrastruttura Virtuale e dei Sistemi**: Sistema Operativo, Rete, Firewall.
- **Configurazione di Sicurezza dei Dati**: Crittografia dei Dati Lato Cliente, Crittografia dei Dati Lato Server, Protezione del Traffico di Rete, Dati del Cliente.

In breve, AWS è responsabile della sicurezza del cloud, mentre i clienti AWS sono responsabili della sicurezza nel cloud. Ciò significa che AWS si prende cura della sicurezza dell'infrastruttura sottostante, mentre i clienti sono responsabili della corretta configurazione e gestione delle risorse e dei dati che piazzano sul cloud AWS.

### Types of Cloud Computing Responsibility

Ecco un elenco delle responsabilità dell'utente in base al tipo di Cloud Computing:

- **On-Premise**:
    - Applicazioni
    - Dati
    - Runtime
    - Middleware
    - Sistema Operativo
    - Virtualizzazione
    - Server
    - Archiviazione
    - Networking

- **Infrastructure as a Service (IaaS)**:
    - Applicazioni
    - Dati
    - Runtime
    - Middleware
    - Sistema Operativo
- **Platform as a Service (PaaS)**:
    - Applicazioni
    - Dati
- **Software as a Service (SaaS)**:
    - (In genere non vi sono responsabilità dirette per l'utente, in quanto il servizio è completamente gestito dal provider SaaS)

### Shared Responsibility Model - Compute

###### Bare Metal (EC2 Bare Metal Instance)
Cliente: 

    - Configurazione del sistema operativo ospite (Guest OS)
    - Hypervisor
AWS: 

    - Macchine fisiche

###### Macchine Virtuali (Virtual Machine - Elastic Cloud Compute EC2)
Cliente: 

    - Configurazione del sistema operativo guest (Guest OS)
    - Esecuzione di container (Container Runtime)
AWS:

    - Hypervisor, Macchina fisica

###### Contenitori (AWS Elastic Container Service ECS)
Cliente:

    - Configurazione del contenitore
    - Distribuzione del contenitore
    - Gestione dello storage del contenitore

AWS: 

    - Sistema operativo, Hypervisor, Esecuzione di contenitori (Container Runtime)

##### Platform as a Service (PaaS)

- **Piattaforma Gestita (AWS Elastic Beanstalk)**
Cliente:
    
    - Caricamento del tuo codice  
    - Alcune configurazioni del tuo ambiente    
    - Strategie di deployment 
    - Configurazione dei servizi associati
AWS:

    - Server, Sistema Operativo, Networking, Archiviazione, Sicurezza

##### Software as a Service (SaaS)

- **Collaborazione per i Contenuti** Amazon WorkDocs

Cliente:
    - Contenuti dei documenti
    - Gestione dei file
    - Configurazione dei controlli di accesso alla condivisione
AWS: 

    - Server, Sistema Operativo, Networking, Archiviazione, Sicurezza


##### Function as a Service (FaaS)

- Funzioni (AWS Lambda) 

Cliente:
    - Caricare il propio codice

AWS: 

    - Deployment, Esecuzione dei container (Container Runtime), Networking, Archiviazione, Sicurezza, Macchina fisica (praticamente tutto)


Il modello di condivisione delle responsabilità è uno strumento utile per definire chi è responsabile di cosa quando si tratta di sicurezza e gestione dell'infrastruttura e dei servizi cloud. Chiarezza e comprensione delle responsabilità sono fondamentali per garantire una corretta implementazione e una gestione sicura delle risorse cloud.

### Shared Responsibility Model - Architeture

![Shared Responsibility Model](https://github.com/Elpiu/MindMemoir/blob/main/AWS%20CLF-C01%20(AWS%20Cloud%20Practitioner)/imgs/AWS_responsability_model.png?raw=true)





