
--- COMPUTE
### EC2 Overview

Elastic Compute CLoud (EC2) abilita a lanciare Virtual Machines (VM).

Una macchina virtuale è un emulazione di un computer fisico usando il software. La virtualizzazione dei server abilita a facilitare la creazione, copia, ridimensione o migrazione del server. Più istanze di VM possono girare sullo stesso server fisico, quindi è possibile condividere i costi con gli altri clienti. (Immagina che il tuo server/computer sia un file eseguibile sulla tua macchina).

Quando lanci una macchina virtuale questa è chiamata **istanza**. 
I server EC2 sono altamente configurabili, dove si può scegliere opzioni del tipo: 
- Numero di CPU
- Memoria RAM
- Network Bandwidth
- Sitema operativo
- Attaccare multipli virtual-hard-drives per lo storage

AMI è la configurazione predefinita per le macchine virtuali. EC2 è anche considerata la spina dorsale di AWS poichè la maggior parte dei servizi AWS fanno uso di EC2 come sottostante (es. S3, RDS, DynamoDB, Lambdas).

Altri tipi di Computing Services
- Amazon LightSail è la versioen friendly di EC2 Virtual Machine.

- Elastic Container Service (ECS) è un container orchestrator service che supporta i Docker containers. Lancia un cluster di servizi su EC2 con Docker install.

- Elastic Container Registry (ECR) è iuna repository per contenere immagini di container. In modo da lanciare un container hai bisogno di un immagine. Un immagine è semplicemente una copia salvata. Una repository significa uno storage che ha versuon control

- ECS Fargate è un serverless orchestation container service. è la stessa cosa di ECS solo che ha il pay-on-demand sui running container. (Con ECS i server gireranno anche se non ci sono container startati) AWS controlla i server sottostante, quindi non avrai bisogno di scalare o migliorare un EC2 server.

- Elastic Kubernetics Service (EKS) è un fully managed Kubernatics service. Kubernetics K8 è un orchestratore software open-source che è stato creato da Google ed è in generale uno standard per la gestioen di microservizi.

- AWS Lambda è un serveless functions service. Puoi far girare il codice senza approvigionamento o gestire il server. Farai upload di uno piccolo pezzo di codice, scegliere quanta memoria e quanto a lungo la funzionalità è abilitata a girare prima di un timeout. Sei addebbitato basato al runtime della funzionalità servelless con arrotondamento di 100ms.

### Higher Performance Computing Servics

Nitro System, una combinazionee di hardware dedicato e lightweight hypervisor che consentendo un’innovazione più rapida e una maggiore sicurezza. Tutte le nuove istanze di EC2 utilizzano Nitro System.

- Nitro Cards, specializzate per VPC, EBS e instanze di storgage e controlled card.

- Nitro Security Chips, integrato nella scheda madre, protegge le risorse hardware. 

- Nitro Hypervisor, lightwieght hypervisor per la memoria e la CPU allcoata Bare Metal-like performance.

Bare Metal Instance puoi lanciare instanze EC2 che non hanno hypervisor quindi puoi girare i tuoi workload direttamente sull'hardware per massimizzare le performance e controllo. M5 e R5 EC2 instance are bare metal.

#### Bottlerocket
Una Linux-based open-source operation system costruito per AWS per lanciare containers in virtual machine o bare metal hosts.

#### AWS ParallelCluster 
è un AWS-supported open source cluster management tool che rende facile il deploy e gestire l'High performance computing (HPC) cluster su AWS.

---

##### AWS Wavelength 
Abilita a costruire e lanciare le tue applciazioni in un datacenter telecom. Facendo questo la tua applicazione avrà una latenza ultra-low, e sarà più vicina al cliente finale.

##### VMWare Cloud on AWS 
abilita a gestire on-premis virtual machine usando VMWare come un istanza EC2

##### AWS Local Zone
è un datacenter è un datacenter situato al bordo di un AWS region, in questo modo è possibile usare AWS vicino alla destinazione finale.



5:26:00




