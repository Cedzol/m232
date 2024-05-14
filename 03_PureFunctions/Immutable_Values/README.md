# Immutable Values
Immutable bedeutet unveränderlich. Unveränderliche Werte sind bei der funktionalen Programmierung eines der zentralen Themen. Die Unveränderlichkeit kann dabei - wie Sie bereits gelernt haben - auf zwei Arten umgesetzt werden:
* **Kopie der Daten:** Die ursprünglichen Daten (Original) wird unverändert gelassen. Es wird eine Kopie der Daten erstellt, die dann verändert wird.
* **Rekursion:** Die Methode wird rekursiv aufgerufen und mit jedem neuen Aufruf werden neue "Kopien" der lokalen Variablen angelegt.

## Kopie der Daten
Sie können zwar in vielen unterschiedlichen Sprachen funktional programmieren. Aber nicht alle Sprachen unterstützen Sie gleich stark dabei. Wenn Sie beispielsweise mit JavaScript funktional programmieren, dann müssen Sie selbst im Code dafür sorgen, dass niemand die Variablen verändert bzw. dass Sie jeweils mit Kopien arbeiten. Bei funktionalen Programmiersprachen wie beispielsweise Scala oder Haskel bietet Ihnen die Sprache selbst unveränderliche Datentypen, die Sie verwenden können. Wird dann im Code versucht ein unveränderlicher Datentyp zu ändern, löst dies eine Fehlermeldung beim Compiler aus. Dadurch haben Sie einfacher die Kontrolle darüber, dass wirklich keine bestehenden Daten verändert werden.

Wichtig ist auch, dass die Funktionen stets via [call by value](../../01_Einführung/Fachbegriffe.md#call-by-value) aufgerufen werden (und nicht call by reference), damit eine Kopie der Daten übergeben wird und nicht nur eine Referenz auf das Original. Funktionale Programmiersprachen können den [call by reference](../../01_Einführung/Fachbegriffe.md#call-by-reference) auch ganz verhindern, um die Entwickler beim richtigen Anwenden des funktionalen Paradigmas zu unterstützen.

## Rekursion
Von Rekursion wird gesprochen, wenn eine Funktion sich selbst innerhalb des Funktionsbody aufruft. Damit keine Endlos-Loops entstehen, braucht jede rekursive Funktion ein Abbruchkriterium. Wenn die Rekursion zu tief verschachtelt ist, kann die Applikation zudem bei einer Speicherlimite anstossen, weil jede Stufe der Rekursion wieder ein komplettes Set an Daten enthält. Wenn die einzelnen Datensätze nun sehr gross sind und es sehr viele sind, dann sind schnell die dem Prozess zugewiesenen Ressourcen an Zwischenspeicher ausgeschöpft.

Bei der Verwendung von rekursiven Funktionen ist auf folgendes zu achten:
* **Abbruchkriterium:** Fehlt das Abbruchkriterium oder ist es vorhanden, aber kann niemals eintreten, dann führt dies zu einem Endlos-Loop.
* **Grösse der Daten:** Für ganz grosse Datenmengen ist Rekursion unter Umständen ungeeignet. Grosse Listen können allenfalls in Portionen aufgeteilt werden, um die Thematik etwas zu entschärfen.

### Beispiele
Um Beispielsweise die Fakultät einer Zahl zu berechnen, ist eine rekursive Funktion geeignet. 

Zur Erinnerung hier einige Beispiele einer Fakultät: 
* 5! = 5 * 4! = 5 * 4 * 3 * 2 * 1 = 120 
* 4! = 4 * 3! = 4 * 3 * 2 * 1 = 24
* 3! = 3 * 2! = 3 * 2 * 1 = 6 
* 2! = 2 * 1! = 2 * 1 = 2
* 1! = 1 * 0! = 1
* 0! = 1 -> Abbruchkriterium

Eine Funktion, die die Fakultät berechnen kann, könnte folglich wie folgt aussehen:

In JavaScript:
```JavaScript
// Rekursive Funktion zur Berechnung der Fakultät einer Zahl
function factorial(n) {
    // Abbruchkriterium: Bei n = 0, ist die Fakultät 1
    if (n === 0) { // sollte diese Bedingung nie wahr werden führt das zum Endlos-Loop
        // hier endet die Rekursion
        return 1;
    } else {
        // Rekursiver Fall: n! = n * (n-1)!
        return n * factorial(n - 1);
    }
}

// Beispielaufruf der Funktion
console.log(factorial(5)); // Ausgabe: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
```

In Scala:
```Scala
// Rekursive Funktion zur Berechnung der Fakultät einer Zahl
def factorial(n: Int): Int = {
    // Abbruchkriterium: Bei n = 0, ist die Fakultät 1
    if (n == 0) { // sollte diese Bedingung nie wahr werden führt das zum Endlos-Loop
        // hier endet die Rekursion
        1
    } else {
        // Rekursiver Fall: n! = n * (n-1)!
        n * factorial(n - 1)
    }
}

// Beispielaufruf der Funktion
println(factorial(5)) // Ausgabe: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
```

Würde der rekursive Call anstatt mit `n - 1` mit `n + 1` als Parameter aufgerufen, dann hätten Sie bereits einen Endlos-Loop geschaffen, weil `n` dann nie zu `0` wird. Sie sehen anhand des kleinen Beispiels, dass es entscheidend ist, das Abbruchkriterium wie auch den rekursiven Aufruf genau zu prüfen, damit keine Endlos-Loops entstehen können.

Rekursive Funktionen können auch bei anderen Arten von Problemen geeignet sein - beispielsweise für die Sortierung von Listen, zum traversieren von baumartigen Strukturen, zum Zusammenführen von mehreren Werten in ein resultat (z. B. Summenbildung). Diese Liste an Beispielen ist nicht abschliessend, sondern soll Ihnen mögliche Anwendungsgebiete aufzeigen.

Für einige Dinge, die Sie mit Rekursion lösen können, bieten die verschiedenen Programmiersprachen vorgefertigte Methoden an. Einige davon werden Sie im Kapitel [Functions as values](../../04_FunctionsAsValues) kennenlernen. Das Schreiben von rekursiven Funktionen benötigt etwas Übung. Deshalb befasst sich die [Aufgabe 3](../Aufgaben/README.md#aufgabe-3---eigene-pure-functions-schreiben) ausschliesslich mit rekursiven Problemstellungen, um Ihnen ein Übungsfeld zu geben.