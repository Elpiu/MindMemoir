### What is Cloud Computing ?

Pratica di utilizzo di una rete di server remoti ospitati su Internet per archiviare, gestire ed elaborare dati, piuttosto che un server locale o un personal computer


* On-Premise
  - You own the servers
  - You hire the IT people
  - You pay or rent the real-estate
  - You take all the risk
* Cloud Providers
  - Someone else own the server
  - Someone else hires the IT people
  - Someone else pays or rent the real-estate
  - You are responible for your configuration cloud services and code, someone else take care of the rest

### The evolution of Cloud Hosting
- Dedicate Server: singola macchina fisica dedicata per un singolo bussines. Runs una singola web-app o sito. [Very Expensive, High Maintenance, Hight Security]
- Virtual Private Server (VPS): singola macchina fisica dedicata per un singolo bussines. La macchina fisica è virtualizzata dentro una sottomacchina. Runs multiple web-app/site [Better utilization and Isolation of resources]
- Shared Hosting: singola macchina fiscia condivisa da centinaia di bussines affidati a tenant che ne utilizzano le risorse. [Very Cheap, Limited functionality, Poor Isolation]
- Cloud Hosting: Multiple macchine fisice che agiscono come un unico sistema. Il sistema è astratto in più servizi cloud. [Flexible, Scalable, Secure, Cost-Effective, High Configurability]

### What is AWS ? 
AWS = Cloud provider service, collezione di servizi cloud che possono esser e utilizzati insieme con una singola unificata api per costruire dei workloads.

### What is a cloud service provider (CSP) ?
Un cloud service provider è una company che:
-    provvede dei servizi cloud (da una decina a centinaia)
-    questi servizi cloud possono essere concatenati insieme per creare una architettura cloud
-    questi servizi sono accessibili via Single Unified API (es AWS API)
-    questi servizi cloud sono metered billing sull uso per secondi, ore, numero di cpu, storage ecc..
-    questi servizi cloud hanno un ricco sistema di monitornig al loro interno (es AWS CloudTrail)
-    questi servizi cloud offrono un infrastruttura as a Service (Iaas) 
-    questi servizi cloud oggrono automazioni Infrastructure as Code (IaC)

Tier-1 
Amazon Web Service , Microsoft Azure, Google Cloud Platform, Alibaba Cloud

Tier-2
IBM Cloud, Oracle Cloud, Rackspace

Tier-3
Vulte, Digital Ocean, Linode, 

---
Un cloud Service provider puo avere centinaia di servizi cloud, questi venogono raccolti in diversi tipi di servizio.
I 4 più comuni tipi di servizi cloud (the 4 core) per Infrastructure as a Service sono:

- Compute: Imagine avere un computer virtuale che puo far girare applicazioni, programmi e codice.
- Networking: Imagine avere una rete internet virtuale o un network isolato tra servizi o in uscita sulla rete internet.
- Storage: Imagine avere un hard-drive virtuale che può savlare file
- Databases: Imagine avere un database virtuale per salvare dei report data o un database general purpose per una web-application

Il termine Cloud Computing può essere usato per riferirsi a tutte le categorie, anche se presenta "Compute" nel suo nome.


### Types of Cloud Computing
- SaaS Software as a service (For Customers) prodotto che gira e gestito dal serice provider. Non ci si preoccuma di come il servizio è camntenuto. Funziona e rimane disponibile.
- PaaS Platform as a Service (For Developers) Focus sul deployment e managment della tua app. Non ci si preoccupa dell' approvigionamento, configurazione o capire l'hardware o il sistema operativo.
- IaaS Infrastrucure as a Service (For Admins) Il blocco principale per gli IT cloud. Provvede a fornire funzionalità networking, computers e spazi data storage.

###  Cloud Computing Deployment Models
+ Public Cloud: Tutto (Workload o progetto) è costrutio su un CSP; chiamato anche Cloud-Native o Cloud First
+ Private Cloud: Tutto costruito su un datacenter della company; chiamato anche On-Premise
+ Hybrid: Usa entrambi On-Premise e CSP.
+ Cross-Cloud: Utilizzare multipli CSP (Aka Multi-cloud)

### The Benefits of Cloud
 + Agility: Migliorare la velocità e l'agilità
 + Pay as-you go pricing: Scabiare le spese capitale con una spesa variabile
 + Economy of scale: Beneficio per l'economia di scala
 + Global Reach: Globale in pochi minuti
 + Security
 + Reliability: Nessuna spesa per mantenere attivi i data centers
 + Hight Availability
 + Scalability
 + Elasticity
  To add
  + Fault Tolerance
  + Disaster Recovery


### Six Advantaget to Cloud
1:30



#### Glossario

##### Tenant

A tenant is a group of users who share a common access with specific privileges to the software instance. Multi-tenancy is an architecture wherein a single occurrence of a software application serves numerous clients. Every client is known as a tenant.

###### Workload
A cloud workload is a specific application, service, capability or a specific amount of work that can be run on a cloud resource. Virtual machines, databases, containers, Hadoop nodes and applications are all considered cloud workloads.
