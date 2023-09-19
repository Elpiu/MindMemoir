# Managment and Development Tools

### AWS API
AWS Application Programming Interface (API), un API è un pezzo di software che abilita due applicazioni/server a parlare tra loro.
Il più famoso tipo di API sono quelle via richieste HTTP/S.

AWS API è un API di tipo HTTP, dove è possibile interagire mandando richieste HTTPS, usando un applicazione o ad esempio Postman.

Ogni servizio AWS ha i suoi endpoints dove è possibile inviare richieste. Il metodo di autorizzazione è una login request che provvederà a fornire un token per le chiamate. Ci sarà bisogn anche di provvedere un ACTION e accompagnarla da parametri nel payload della richiesta.
Raramente l'utente invia direttamente le richieste http; è molto più semplice interagire con i vari Developer Tools come 'AWS Management Console' web interface, 'AWS SDK' api interface che supporta vari linguaggi di programmazione , 'AWS CLI' interagisce con le API via terminale o shell.

### AWS SDK
Un SDK è una collezione di sofware development ottls in un solo pacchetto installabile.

AWS SDK permette di creare, modificare, eliminare o interagire con le risorse AWS in modo programmatico. AWS SDK è offerto in vari linguaggi di programazione.




## Infrastructure as COde (IaC)
 Iac ti permette di scrivere uno script di configurazione per automatizzare la creazione, updateing o distruggere un infrastruttura cloud.

 IaC è un blueprint della tua infrastruttura.
 IaC ti abilita facilmente a condividere, versionare o fare l'inventario della tua infrastruttura cloud.

AWS offre 2 servizi per l'IaC.
- AWS CloudFoundation (CFN): modo dichiarativo, quello che vedi è quello che ottieni, è più verboso ma non ci sono chance di miss-configuration, usa come linguaggio JSON, YAML, XML. 
- AWS Cloud Development Kit (CDK): modo imperativo, dici quello che vuoi e il resto viene riempito in modo implicito, meno verboso ma potresti incombere in una miss-configurazione, puoi fare di più di quello dichiarativo, usa linguaggi di programmazione come Python, Ruby, Javascript.
    - genera template CloudFormation
    - ha una libreria riusabile di componenti cloud chiamati CDK Construct
    - pipelines per velocizzare il suetup di CI/CD per progetti CDK
    - ha un framework per il testing, sia unitario che di inegrazione


### Cloud Formation
AWS CloudFormation ti abilita a scrivere IaC come JSON o YAML.

CloudFormation è semplice ma può portare a file di grandi dimensioni o è limitato in qualche modo alla creazione di infrastrutture dinamiche o ripetibili rispetto a CDK 

CloudFoundation è facilmente capibile per un DevOps Engineer che non ha un background nel web programming languages.

Poiché CDK genera CloudFormation, è comunque importante essere in grado di leggere e comprendere CloudFormation per eseguire il debug dello stack Uac


### Access Keys

4:08:00