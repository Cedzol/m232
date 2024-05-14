## Übungen zur FoldLeft-Funktion

### Übung 1

Gegeben ist eine Liste von Zahlen: `List(1, 2, 3, 4, 5)`. Berechnen Sie die Summe aller Zahlen mithilfe von `foldLeft`.

#### Erwartete Ausgabe
`15`

### Übung 2
Gegeben ist eine Liste von Strings: `List("Hallo", " ", "Welt", "!")`. Kombinieren Sie alle Strings zu einem einzigen String mithilfe von `foldLeft`.

#### Erwartete Ausgabe
Die erwartete Ausgabe ist ein einziger String, der alle Elemente der Liste kombiniert, also `"Hallo Welt!"`.

### Tuples
Vor Übung 3 werden nachstehend **Tuples** vorgestellt, um die Übung verständlicher zu machen.

Ein Tupel ist eine grundlegende Datenstruktur in Scala, die verwendet wird, um eine feste Anzahl von Elementen *unterschiedlicher Typen* zu gruppieren. Es ist ähnlich wie ein Array oder eine Liste, aber im Gegensatz dazu können Tupel verschiedene Typen von Elementen enthalten, und die Anzahl der Elemente im Tupel ist festgelegt und kann nicht geändert werden.

```scala
// Ein Tupel mit zwei Elementen: eine Zeichenkette und eine Zahl
val meinTupel1 = ("Hallo", 42)

// Ein Tupel mit drei Elementen: eine Zeichenkette, eine Zahl und ein Boolean-Wert
val meinTupel2 = ("Scala", 3.14, true)

// Ein Tupel mit einem einzigen Element: eine Zahl
val meinTupel3 = (42,)

// Ein Tupel kann auch benannte Elemente haben
val person = (name = "Max", alter = 30)

// Zugriff auf die Elemente eines Tupels
val name = meinTupel1._1 // Zugriff auf das erste Element des Tupels (Index beginnt bei 1)
val zahl = meinTupel1._2 // Zugriff auf das zweite Element des Tupels

// Tupel können auch in Funktionen verwendet werden, um mehrere Werte zurückzugeben
def teileZahl(x: Int, y: Int): (Int, Int) = (x / y, x % y)
val (ergebnis, rest) = teileZahl(10, 3) // Destrukturierung des Tupels
```

### Übung 3
Gegeben ist eine Liste von Punkten in einem zweidimensionalen Raum.

`val points = List((1, 3), (2, 5), (4, 8), (6, 2))`

Jeder Punkt wird durch ein Tupel `(x, y)` repräsentiert, wobei `x` und `y` die Koordinaten des Punktes sind. Ihre Aufgabe ist es, den Schwerpunkt (den durchschnittlichen Punkt) aller Punkte in der Liste zu berechnen.

#### Erwartete Ausgabe
Die erwartete Ausgabe ist ein Tupel `(x, y)`, das den Schwerpunkt aller Punkte in der Liste repräsentiert.
