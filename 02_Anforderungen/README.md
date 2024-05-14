![TBZ Logo](../x_gitres/tbz_logo.png)
# Probleme deklarativ umsetzen

<!-- TOC -->
- [Probleme deklarativ umsetzen](#probleme-deklarativ-umsetzen)
  - [Lernziele:](#lernziele)
  - [Anforderungen sollen das WAS beschreiben](#anforderungen-sollen-das-was-beschreiben)
    - [Aufgabe:](#aufgabe)
  - [Anforderungen als Funktionen erkennen](#anforderungen-als-funktionen-erkennen)
 
<!-- TOC -->

## Lernziele:

* Ich kann den Unterschied zwischen Anforderungen der imperativen Programmierung und der deklarativen Programmierung erklären
* Ich kann Anforderungen aus der imperativen Programmierung in Anforderungen der deklarativen Programmierung transferieren
* Ich kann Anforderungen als Funktionen erkennen und umsetzen
* Ich kann aus Beschreibungen das WAS ableiten

## Anforderungen sollen das WAS beschreiben

Wir haben kennengelernt, dass in der funktionalen Programmierung nicht das WIE im Vordergrund steht, sondern das WAS.
Nochmals zur Wiederholung: beim WIE beschreiben wir, wie wir ein Problem in Code programmieren. Wir beschreiben die einzelnen Schritte, um das Problem zu lösen.
Wenn wir nur das WAS beschreiben, dann ist das deklarativ. Wir beschreiben das Endergebnis. Wir können dann daraus die entsprechenden Funktionen ableiten.

**Dazu ein einfaches Beispiel:**

*Ich möchte ein Programm, welches 5% Rabatt vom Totalbetrag berechnet.*

Dies ist eine Anforderung, die nicht beschreibt, WIE wir etwas umsetzen sollen, sondern nur das WAS.
Wir können aus dieser Beschreibung eine Funktion ableiten:

```
f(x) = x * 95 / 100

```

Für jeden Preis x wird uns diese Funktion den korrekten Preis abzgl. Rabatt berechnen.

### Aufgabe:
Setzen Sie diese mathematische Funktion in Code um und zeigen Sie Ihre Lösung der Lehrperson.


## Anforderungen als Funktionen erkennen

Wir wollen zwei Beispiele von Anforderungen betrachten und daraus die möglichen Funktionen ableiten.

**Beispiel 1: Eine Reise planen**

Wir planen eine Reise durch Europa und möchten, dass der Benutzer jeweils die Destinationen für die Reise eingibt.
Zudem soll es möglich sein, eine bereits festgelegte Route zu ändern (z.Bsp. wenn Ihr Freund noch einen anderen Zwischenaufenthalt möchte).


**Beispiel 2: Autorennen**

Wir möchten eine App, welche für ein Auto-Rennen die gesamte Zeit für alle Runden berechnet. Die App soll auch die Durchschnittszeit pro Auto berechnen. Die erste Runde wird nicht mitgezählt, da es sich hier um eine "Warm-up" Runde handelt.


**Auftrag: Identifizieren Sie die möglichen Funktionen aus dieser Beschreibung. Sie können diese auch schematisch zeichnen.**




