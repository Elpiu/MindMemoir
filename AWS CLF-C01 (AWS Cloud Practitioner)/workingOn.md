

### AWS Global Infrastrucutre
Global Infrastructure: sono delle strutture globali hardware e datacenters connesse fisicamente dalla rete, per agire come un unica grande risorsa all'utente finale.
AWS Global Infrastructures is made up of the following resources:
- 25 Launched Regions
- 81 Availability Zone
- 108 Direct Connection Locations
- 275+ Point of Presence
- 11 Local Zone
- 17 Wavelenght Zone

### Regions
Le regioni sono are geografiche distinte, consistono in una o più Availability Zones

Ogni regione di solito ha 3 Availability Zones
I nuovi utenti sono limitati a 2.
I nuovi servizi quasi sempre vengono resi disponibili alla 1.
Non tutti i servizi AWS sono disponibili in tutte le regioni.
Il costo per i servizi AWS variano per regione.

Quando si sceglie una regione ci sono 4 fattori da tenere in considerazione:

1) La regolamentazione della regione
2) Il costo dei servizi AWS in quella regione
3) I servizi disponibili in quella regione
4) La distanza o latenza all'utente finale

### Availability Zones (AZ)
Una zona di disponibilità è una zona fisica dove sono presenti uno o più datacenter.

Un datacenter è un edeificio sicuro che contiente centinaia di migliaia di computers.

Una regione di solito contiente 3 AZ, i datacenters sono isolati (in edifici differenti), ma sono abbastanza vicini da abbassare la latenza a (<10ms). è una pratica comune lanciare workloads in almeno 3 AZs per essere sicuri che il servizio rimanga accessibile in caso di uno o due datacenter non disponibili (Hight Availability).

Una sottorete (subnet) è associata a un AZ.
Non sceglierai mai l'AZ quando lanci le risorse,
quello che sceglierai è la sottorete.


### Fault Tolerance

##### Fault Domain
Un fault domain è una sezione della rete che è vulnerabile a un fail di sistema o danno di un device.  Lo scopo del fault domain è che se accade una failure, essa non farà cadere in cascata il dominio, limitando il danno il più possibile.

Si possono avere fault domain innestate in altre fault domain.

Si parla di fault level, quando si hanno diversi livelli di fault, una collezione di fault domains. 
Gli scope possono essere: uno specifico server in un rack, un intero rack in un datacenter, un intera stanza in un datacenter, l'intero datacenter.
Sta al CSP definire i confini del dominio.

Ogni regione amazon è designata per esser completamente isolata dalle altre Regioni amazon. Questo fa si che si abbia la maggior possibilità di dault tolerance e stability. Ogni AZ è isolata ma connessa con link low-latency alle altre regioni, e ogni regione ha un suo piano indipendente di failure zone.

#### Failure zone
Ogni AZ è fisicamente separata dalle altre e tipicamente in altre cittò, queste sono localizzate in are poco a ricschio (esempio alluvione).
Ogni AZ ha la sua UPS uninterruptible power supply e un suo sito di backup per generare energia.
Le AZ sono localizzate in zone indipendenti da altre AZ dall'infrastruttura della rete elettrica in modo da evitare eventi di blackout.
Le AZ sono connesse in modo ridondante a provider tier-1.

### Global Network

