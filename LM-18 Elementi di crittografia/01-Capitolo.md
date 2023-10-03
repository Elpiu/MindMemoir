### Modern Cryptography

Storicamente, la crittografia veniva definita come "l'arte di scrivere o risolvere codici". Questa definizione è corretta dal punto di vista storico, ma non cattura l'ampiezza della scienza moderna della crittografia.

Oggi, la crittografia moderna comprende meccanismi che assicurano l'integrità dei dati, tecniche per lo scambio di chiavi segrete, protocolli per l'autenticazione dell'utente, votazioni elettroniche, criptovalute e molto altro. Possiamo dire che la crittografia moderna coinvolge lo studio di tecniche matematiche per garantire la sicurezza delle informazioni digitali, dei sistemi e dei sistemi distribuiti contro attaccanti avversari.

La crittografia non è più limitata, come lo era storicamente, al governo o alle organizzazioni militari; oggi la troviamo ovunque.

In breve, la crittografia è evoluta da un insieme di tecniche euristiche per garantire comunicazioni segrete a una scienza che contribuisce a garantire sistemi più sicuri per le persone comuni in tutto il mondo.

### The Setting of Private-Key Encryption
I codici sono chiamati "encryption schemes". Per tutte le classi di schemi di crittografia, fanno affidamento su una chiave condivisa tra le parti comunicanti, nota come "private-key". Una parte che desidera inviare un messaggio al suo corrispettivo cifra il messaggio con questa chiave, mentre il destinatario decripta il messaggio per leggerlo.

La stessa chiave viene utilizzata sia per convertire il plaintext in ciphertext che viceversa; questa configurazione è chiamata symmetric-key. Questo si contrappone alla cifratura asimmetrica, o public-key.

Si assuma che i due utenti possono comunicare in modo sicuro la chiave per la loro comunicazione.

---

#### Sintassi di crittografia

Formalmente una crittografia mediante schema private-key è definita specificando lo spazio di messaggi M lungo 3 algoritmi: 

- **Gen** generatore di chiavi
- **Enc** produce il cifrato
- **Dec** decifra il cifrato

Lo spazio dei messaggi M definisce il set di messaggi 'legali' supportati dallo schema.
L'algoritmo Gen è un algoritmo probabilistico che produce una chiave k secondo qualche distribuzione.
L'algoritmo Enc prende in input la chaive k e il messaggio m e produce in output il cifrato c. Denotato come Enc_k(m) il cifrato del testo m usando la chaive k.
L'algoritmo Dec prende in input la chaive k e il cifrato c e produce in output il testo in chiaro m. Denotato come Dec_K(c).

Uno schema crittografico deve soddisfare il seguente requisito di corretteza: per ogni chiave k data da Gen e ogni messaggio m £ M, vale **Dec_K(Enc_K(m)) = m**.

Ciò significa che il messaggio cifrato e poi decifrato deve risultare essere lo stesso testo in chiaro se è stata utilizzata la stessa chiave. Questo è un principio fondamentale nella crittografia.
Lo spazio di tutte le possibili chiavi che l'algoritmo Gen può dare in output è chiamato 'key space' e denotato con K.

#### Kerckhoffs' principe

Nel contesto della crittografia, si afferma che il metodo di cifratura non deve necessariamente essere segreto e può essere pubblicamente disponibile senza causare problemi di sicurezza. Questo concetto è in contrasto con l'idea di "security by obscurity", che suggerisce che la sicurezza dipenda dal mantenere segreto l'algoritmo.

Il vantaggio di avere algoritmi pubblici risiede nel fatto che esperti indipendenti possono analizzarli e cercare possibili vulnerabilità. Ciò contribuisce a una maggiore fiducia nella sicurezza del sistema.

#### Historical Cipher and Their Cryptanalysis

Il testo in chiaro viene scritto in minuscolo (lowercase), mentre i caratteri del testo cifrato vengono scritti in maiuscolo (uppercase).

##### Shift chipher
Il cifrario di trasposizione sposta le lettere del testo in chiaro di una posizione numerica. Lo spazio delle chiavi k, è un numero compreso tra 0 e 25.
L'algoritmo Gen estituisce una chiave che appartiene all'insieme k £ {0,....,25}. 
L'algoritmo di Enc prende in input la chaive k e il testo in chiaro e shifta ogni lettera del testo in chiaro in avenati di k posizioni. L'algorimto Dec prende in input la chaive e il cifrato e shifta indietro di k posizioni ogni lettera.

- Enc_k(m1,m2,...ml) = c1....cl dove ci = [(mi + k) mod 26]

- Dec_k(c1,c2,...cl) = m1....ml dove mi = [(ci - k) mod 26]

Recuperare il messaggio in chiaro senza conoscere k risulta semplice poiché ci sono solo 26 chiavi. Questo tipo di attacco è noto come 'brute force', ovvero provare tutte le possibili chiavi o 'exhaustive-search attack'. Questa osservazione è conosciuta come 'sufficient key-space principle', ogni schema crittografico deve avere uno spazio delle chiavi sufficientemente grande da rendere l'attacco esaustivo infattibile.

Al giorno d'oggi, gli attaccanti possono utilizzare supercomputer, centinaia di server cloud o GPU per accelerare un attacco brute force. 
Al giorno d'oggi 2^80 rappresenta la base minima da considerare per lo spazio delle chiavi; tuttavia, lo spazio delle chiavi costituisce una condizione necessaria ma non sufficiente per garantire la sicurezza (come vedremo nel prossimo esempio). 

##### The mono-alphabetic substitution cipher

Nel cifrario di trasposizione, la chiave definisce una mappatura per ogni lettera del testo in chiaro a un'altra lettera del testo cifrato, dove la mappatura è determinata dallo shift k. Nel 'cifrario di sostituzione monoalfabetica', la chiave definisce una mappatura sull'alfabeto, ma questa mappatura non è arbitraria e deve rispettare il vincolo di essere uno a uno. Lo spazio delle chiavi consiste in tutte le biezioni e permutazioni dell'alfabeto.
 
Assumendo l'utilizzo dell'alfabeto inglese, lo spazio delle chiavi è 26! che è approssimamente 2^88. 

Il cifrario di sostituzione monoalfabetica può essere attaccato utilizzando le statistiche della lingua inglese. L'attacco si basa sui seguenti due fatti:

- Per ogni chiave, la mappatura di ciascuna lettera è fissa. Ad esempio, se 'e' è mappata come 'D', allora ogni occorrenza di 'e' nel testo in chiaro sarà convertita in 'D' nel testo cifrato.

- La frequenza di distribuzione delle singole lettere nella lingua inglese è ben nota. Anche se testi brevi possono deviare dalla distribuzione, con solo alcune frasi la tendenza della distribuzione può essere approssimata in modo accurato.

##### Improved attack on the shift cipher

Descriviamo un attacco che è possibile automatizzare. Sia p_i, con 0 <= p_i <= 1, denotiamo la frequenza della i-esima lettera del testo inglese.

La sommatoria di p^2_i == 0.065 con i che va da 0 a 25.

Denotaimo con q_i la frequenza della i-esima lettera del cifrato, q_i rappresenta semplicemente il numero di occorrenze della i-esima lettera dell'alfabeto nel cifrato, diviso per la lunghezza del cifrato.

Se la chiave è k allora p_i dovrebbe essere approssimativamente uguale a q_i + k per tutte le i perchè la i-esima lettera è mappata alla (i + k)esima lettera.

I_j = sommatoria per i che va da 0 a 25 di p_i * q_i+j

Per ogni vlaore di J £ {0,....,25} ci aspettiamo che I_k = 0.065, dove k è la chiave, dove I_j per j diverso da k sarà differente il valore 0.065.

##### The Vigenère cipher


working in progress.....










