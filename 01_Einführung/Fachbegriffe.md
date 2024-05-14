# Wichtige Fachbegriffe
In der Theorie werden wir immer wieder Fachbegriffe verwenden. Die Idee dieses Dokuments ist es, dass Sie hier nachschlagen können, wenn Sie einen Fachbegriff nicht kennen. Wir führen hier jedoch nur eine Auswahl der wichtigsten Fachbegriffe auf. Wenn Sie weitere Begriffe nicht kennen / verstehen sollten, recherchieren Sie dazu im Internet und / oder fragen Sie Ihre Lehrperson.

Zwecks einfacherer Übersicht sind die Fachbegriffe alphabetisch geordnet.

[TOC]

## Call by reference
Call by reference bedeutet, dass der Funktion / Methode die Parameter beim Aufruf als Referenz auf die Daten übergeben werden. D. h. im Umkehrschluss: wenn der Inhalt der Parameter verändert wird, dann ändern die nicht nur innerhalb des Kontexts der Funktion, sondern dauerhaft (auch ausserhalb der Funktion). Dies kann zu schwer zu lokalisierenden Seiteneffekten führen. Deshalb wird in der funktionalen Programmierung "call by value" bevorzugt.

## Call by value
Call by value bedeutet, dass der Funktion / Methode die Parameter beim Aufruf als Kopie der Originaldaten übergeben werden. D. h. wenn innerhalb der Funktion / Methode die Daten der Parameter angepasst werden, hat dies keine Auswirkungen / Seiteneffekte auf Daten die Ausserhalb der Funktion / Methode liegen. Deshalb sollten in der funktionalen Programmierung die Funktionen / Methoden immer mit "call by value" aufgerufen werden.

## Eager evaluation
Eager evaluation ist das Gegenteil von [lazy evaluation](#lazy-evaluation). Ausdrücke werden während dem Sie definiert werden auch sofort ausgewertet (und nicht erst dann, wenn sie tatsächlich gebraucht werden).

## Impure functions
Ist das Gegenteil von pure functions - d. h. wenn eine Funktion eine oder mehrere der drei Regeln für pure functions nicht erfüllt.

## Lazy evaluation
Bei lazy evaluation geht es darum, dass Ausdrücke im Code erst dann ausgewertet werden, wenn sie wirklich gebraucht werden. Dies kann helfen die Performance zu steigern, weil nicht immer alle Teile eines Programms durchlaufen werden und so rechenarbeit gespart werden kann. Das Gegenteil von lazy evaluation ist [eager evaluation](#eager-evaluation).

[Weitere Details](https://de.wikipedia.org/wiki/Lazy_Evaluation)

## Pure functions
Pure functions sind Funktionen die drei Regeln erfüllen:
* Nur ein Rückgabewert
* Rückgabewert nur abhängig von den Aufrufparametern
* Verändert keine existierenden Werte

[Zur ausführlichen Theorie](../03_PureFunctions/README.md)

## Referenzielle Transparenz
Man spricht dann von referenzieller Transparenz einer Funktion, wenn anstelle des Funktionsaufrufs auch nur der Return-Wert im Code angegeben werden könnte und sich das Programm dennoch exakt gleich verhält. Ein Beispiel:

```
val mySum = (x: Int, y: Int) => x + y
println("Sum of 4+5: " + mySum(4, 5))  // Ausgabe: Sum of 4+5: 9
println("Sum of 4+5: " + 9)  // Ausgabe: Sum of 4+5: 9
```

Eine Funktion, die **nicht** referenziell transparent ist, wäre beispielsweise today() die das Datum von heute zurückgibt. Wenn nun morgen ist, dann würde die Funktion beim gleichen Aufruf einen anderen Rückgabewert haben. D. h. der Rückgabewert hängt nicht alleine von den Input-Parametern ab.

## Rekursion
Von Rekursion oder rekursiver Funktion wird gesprochen, wenn eine Funktion sich selbst aufruft. Damit das nicht in Endlosschleifen endet, braucht jede rekursive Funktion ein Abbruchkriterium - also ein Fall in dem die Funktion sich selbst nicht mehr weiter aufruft.

[Zur ausführlichen Theorie](../03_PureFunctions/Immutable_Values/README.md#rekursion)