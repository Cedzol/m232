# Übungen zur Filter-Funktion

## Einleitung
Die `filter`-Funktion ist ein wesentliches Werkzeug in der funktionalen Programmierung. Sie ermöglicht es, Elemente aus einer Liste (oder einer anderen Sammlung) auszuwählen, die eine bestimmte Bedingung erfüllen, und daraus eine neue Liste mit diesen Elementen zu erstellen.

## Übungen

### Übung 1
Gegeben ist eine Liste von Zahlen: `List(1, 2, 3, 4, 5)`. Wenden Sie die `filter`-Funktion an, um nur die geraden Zahlen zu behalten.

#### Erwartete Ausgabe
`List(2, 4)`

### Übung 2
Gegeben ist eine Liste von Namen: `List("Alice", "Bob", "Charlie", "Diana")`. Verwenden Sie `filter`, um Namen auszuwählen, die mehr als vier Buchstaben haben.

Erwartete Ausgabe
`List("Alice", "Charlie", "Diana")`

### Übung 3
Gegeben ist eine Liste von Zahlen: `List(12, 45, 68, 100)`. Benutzen Sie `filter`, um alle Zahlen zu behalten, die grösser als 50 sind.

Erwartete Ausgabe
`List(68, 100)`

### Übung 4
Gegeben ist eine Liste von Wörtern: `List("Scala", "ist", "fantastisch")`. Verwenden Sie `filter`, um alle Wörter zu behalten, die mit "S" beginnen.

#### Erwartete Ausgabe
`List("Scala")`

### Übung 5 (filter und map)
Gegeben:
```scala
case class Buch(titel: String, autor: String, jahr: Int)

val buecher = List(
  Buch("1984", "George Orwell", 1949),
  Buch("Brave New World", "Aldous Huxley", 1932),
  Buch("Fahrenheit 451", "Ray Bradbury", 1953)
)
```

Verwenden Sie `filter` und `map`, um eine Liste der Titel aller Bücher zu erstellen, die vor 1950 veröffentlicht wurden.

Erwartete Ausgabe
`List("1984", "Brave New World")`
