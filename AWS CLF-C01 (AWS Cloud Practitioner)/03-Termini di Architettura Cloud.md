# Termini di Architettura Cloud

## Solution Architect (Architetto di Soluzioni)

Un Solution Architect è un ruolo all'interno di un'organizzazione che si occupa di progettare soluzioni tecniche utilizzando sistemi multipli, comprese la ricerca, la documentazione e l'implementazione.


## Cloud Architect (Architetto Cloud)

Un Cloud Architect è essenzialmente un Solution Architect, ma si concentra esclusivamente sull'utilizzo dei servizi cloud.

Un Cloud Architect deve essere familiare con i seguenti termini e deve tenerli in considerazione durante la progettazione dell'architettura, in base ai requisiti aziendali:

- **Disponibilità**: la capacità di garantire che un servizio rimanga sempre accessibile.
- **Scalabilità**: la capacità di far crescere un sistema rapidamente o senza intoppi.
- **Elasticità**: la capacità di adattarsi e scalare automaticamente per rispondere alla domanda.
- **Fault Tolerance**: la capacità di prevenire e gestire i guasti.
- **Disaster Recovery**: la capacità di recuperare da un evento di fallimento.

Un Solution Architect deve sempre considerare anche i fattori di sicurezza (quanto è sicura la soluzione) e i costi (quanto costerà).


## Alta Disponibilità (High Availability)

L'alta disponibilità si riferisce alla capacità di garantire che un servizio sia sempre accessibile. Ciò viene ottenuto eliminando i "single point of failure" e garantendo un certo livello di prestazioni.


## Bilanciamento del Carico Elastico (Elastic Load Balancer)

Un bilanciamento del carico elastico consente di distribuire il traffico su più server in uno o più data center. Se un server o un data center diventa inaccessibile, il bilanciatore di carico instrada il traffico solo verso le risorse disponibili.


## Alta Scalabilità (High Scalability)

L'alta scalabilità si riferisce alla capacità di aumentare la capacità di gestione di un sistema in base all'aumento del traffico, della memoria e della potenza di calcolo. Ci sono due approcci principali per la scalabilità:

- **Scalabilità Verticale ("Scaling up")**: migliorare le prestazioni di un singolo server.
- **Scalabilità Orizzontale ("Scaling Out")**: aggiungere più server della stessa dimensione.


## Alta Elasticità (High Elasticity)

L'alta elasticità si riferisce alla capacità di aumentare o diminuire automaticamente la capacità in risposta al traffico, alla memoria e alla potenza di calcolo. Le due principali modalità di elasticità sono:

- **Scalabilità Orizzontale ("Scaling Out")**: aggiungere più server della stessa dimensione.
- **Scalabilità Inversa ("Scaling In")**: rimuovere server non utilizzati della stessa dimensione.

La scalabilità verticale è spesso difficile da implementare nelle architetture tradizionali, quindi di solito ci si affida principalmente alla scalabilità orizzontale per descrivere l'elasticità.


## Gruppi di Auto Scaling (Auto Scaling Groups - ASG)

ASG è una funzionalità di AWS che aggiunge o rimuove automaticamente server in base alle regole di scalabilità definite dalle metriche.


## Fault Tolerance (Tolleranza ai Guasti)

La fault tolerance si riferisce alla capacità di un servizio di prevenire e gestire i guasti, eliminando i "single point of failure".

**Failover** è il processo di instradamento del traffico verso un sistema ridondante nel caso in cui il sistema primario fallisca.


## RDS Multi-AZ (Amazon RDS Multi-Availability Zone)

RDS Multi-AZ implica l'esecuzione di un database duplicato in standby in un'altra Availability Zone per evitare il fallimento del database primario.


## Alta Durabilità (High Durability)

L'alta durabilità si riferisce alla capacità di recuperare da disastri e prevenire la perdita di dati. Le soluzioni di alta durabilità sono conosciute come "Disaster Recovery (DR)".


## CloudEndure Disaster Recovery

CloudEndure Disaster Recovery replica continuamente le tue macchine in una zona a basso costo, consentendo un rapido e affidabile ripristino del sistema in caso di guasto del data center IT.


## Piano di Continuità Operativa (BCP - Business Continuity Plan)

Un piano di continuità operativa è un documento che descrive come un'azienda continuerà a operare durante un'interruzione imprevista dei servizi.


## Obiettivo di Punto di Recupero (RPO - Recovery Point Objective)

RPO rappresenta il massimo accettabile periodo di tempo in cui i dati possono essere persi durante un incidente di perdita di dati imprevisto.


## Obiettivo di Tempo di Recupero (RTO - Recovery Time Objective)

RTO rappresenta il massimo periodo di tempo di inattività tollerabile per un'azienda senza subire significative perdite finanziarie.


## Opzioni di Disaster Recovery

Esistono diverse opzioni per il ripristino dei servizi, ognuna con trade-off tra costi e tempo di ripristino.

- **Backup e Ripristino**: è un approccio costoso in termini di tempo, in cui si effettua il backup dei dati e si esegue il ripristino su una nuova infrastruttura.

  - Low-priority use cases
  - Restore data after event
  - Deploy resources after event
  - Cost $

- **Pilot Light**: implica la replica dei dati su un'altra regione che contiene solo i servizi minimi necessari per l'avvio. 

  - Less stringed RTO & RPO
  - Core Services
  - Start & scale resource after event
  - Cost $$

- **Warm Standby**: comporta il dimensionamento verso il basso delle copie dell'infrastruttura, pronte per il dimensionamento verso l'alto.

  - Business critical services
  - Scale resources after event
  - Cost $$$

- **Multi-site Active/Active**: rappresenta la scalabilità verso l'alto delle copie dell'infrastruttura in un'altra regione, eliminando i tempi di inattività.

  - Zero downtime
  - Near zero loss
  - Mission critical services
  - Cost $$$$


## RTO (Recovery Time Objective)

Il Recovery Time Objective (RTO) rappresenta il massimo ritardo accettabile tra l'interruzione dei servizi e il loro completo ripristino. In altre parole, l'RTO definisce la finestra temporale massima entro cui un servizio o un sistema deve essere riportato in funzione dopo un'interruzione. Questa finestra di tempo è stabilita dall'organizzazione in base alle sue esigenze e ai requisiti di continuità operativa.


## RPO (Recovery Point Objective)

Il Recovery Point Objective (RPO) rappresenta il massimo periodo di tempo accettabile tra l'ultimo punto di ripristino dei dati disponibili e un'interruzione dei servizi. In termini più semplici, l'RPO definisce quanto tempo di dati è accettabile perdere in caso di un evento di interruzione dei servizi. L'obiettivo è determinare il livello accettabile di perdita di dati tra l'ultimo punto in cui i dati sono stati copiati o archiviati e l'evento di interruzione dei servizi. Anche questo parametro viene definito dall'organizzazione in base alle sue esigenze e ai requisiti di continuità operativa.
