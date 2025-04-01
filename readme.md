
# Links

Figma: https://www.figma.com/design/QvfR55jU1uQq6CpMOZVMgp/Design-Space-2024?node-id=209-3877&t=bYCr4UNFvwDbQQSg-1 

Github hosting: https://pxdsp.github.io/javascript/ 

<br/>

# Concept:

Het concept is dat de gebruiker het bekende spelletje kan spelen waarbij die via de blaadjes van een madeliefje ontdekt of hun crush van hen houdt of niet, maar de online! De gebruiker kan kiezen om een naam de vermelden, of het spel te spelen met een voornaamwoord als he, she of they. Bij elk geplukte blaadje switched de tekst van "They love me" naar "They love me not" en uiteindelijk wordt er een uitkomst gegenereerd bij het laatste blaadje (at random bij elke heropstand van het spel).

<br/>

# Code uitleg

### 1. Opslaan van Gender of Naam; regel 1-40

De gebruiker kiest om een gender-button aan te duiden, of een naam mee te geven via inputveld. Wanneer de gebruiker een button aanklikt, wordt de string "she", "he" of "they" onthouden als gender. Als die een naam als input geeft, wordt de naam als crush onthouden. Nu kiezen we om in 'let subject' de crush op te slaan, tenzij die geen input heeft, dan wordt het gender he/she/they opgeslagen. Wanneer de gebruiker helemaal niets ingeeft en direct het spel begint, wordt de string "they" gebruikt.


### 2. Clicked button krijgt styling; regel 41-57

Zodat het duidelijk is op welke button gedrukt is en die dus een enkele waarde meekrijgt, wordt de aangeklikte button gestyled.


### 3. Voorbereiding spelcode - alle variabelen; regel 58-73

Opslaan van alle benodigde variabelen uit de HTML code.

Ook gaan we zorgen dat de result at random true of false is, door te controleren of een random getal tussen 0-1 die kleiner is dan 0,5 of niet.

We zetten een timer op het aantal bladeren, zodat we later een actie laten gebeuren wanneer die afloopt.


### 4. Start van het spel; regel 74-90

Wanneer de gebruiker op "begin game" drukt, verdwijnt het pop-up kader. Ook de key 'enter' kan hiervoor gebruikt worden!


### 5. Spelverloop; regel 91-146

Wanneer je op 1 pedal drukt: (regel 91-109)
- wordt er een animatie toegevoegd door een klasse toe te voegen
- gaat het result switchen tussen true en false
- wordt er een kort geluidje afgespeeld
- wordt er gezorgd dat je niet een 2de keer op datzelfde blaadje kan drukken
- wordt de message "They love me" bij true en "They love me not" bij false.
- gaat de timer 1x naar beneden


Wanneer de timer afloopt: (regel 110-122)
- er wordt ook gecheckt of het resultaat op dat moment true of false is, en op basis daarvan gaat er een positieve of negatieve popup message verschijnen
- de hartjes animatie wordt afgespeeld 


Uitzondering met "They": (regel 123-146)
- Aangezien de zin een aanpassing nodig heeft wanneer het onderwerp "They" is (love-s), schrijf ik hier een uitzondering voor deze string.

### 6. Opnieuw opstarten spel; regel 147-168

Wanneer het spel is afgelopen en weer wordt gerestart:
- wordt de eerste pop-up weer getoont en de andere verwijderd
- verwijdert de klasse op de blaadjes, waardoor ze weer zichtbaar zijn
- start de timer weer opnieuw
- genereren we een nieuwe result (true of false)


7. Animatie hartjes na uitkomst spel; regel 169-198

Wanneer de game ten einde is en de pop-up verschijnt met het resultaat, verschijnt er een emoji-regen animatie over het scherm. Als het resultaat true is, is de emoji een hartje en wanneer die false is is het een gebroken hartje. De functie heeft ook een timer. 

<br/>

# Hulpmiddelen:

- Hartanimatie bij afloop spel is gebaseerd op deze code die ik online vond: https://codesandbox.io/p/sandbox/heart-rain-id0oy?file=%2Fsrc%2Findex.js%3A23%2C5-23%2C10 
- Ik heb ai gebruikt om gedetaileerde keyframe animaties te genereren in CSS, en heb die dan aangepast waar nodig. 
- Ik heb mijn pixel-waarden in CSS in 1x naar rem overgezet, via chatgpt. 

