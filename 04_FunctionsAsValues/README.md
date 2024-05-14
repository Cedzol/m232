![TBZ Logo](../x_gitres/tbz_logo.png)
# Funktionen als Werte in der funktionalen Programmierung

### Einleitung
Arbeiten Sie diese Unterlagen sorgfältig durch und führen Sie alle Übungen durch. Fragen Sie Ihre Lehrperson bei Unklarheiten.

### Wichtige Konzepte

#### Pure Funktionen
Reine (pure) Funktionen zeichnen sich durch folgende Eigenschaften aus:
1. **Einzelner Rückgabewert:** Eine pure Funktion gibt nur einen Wert zurück.
2. **Argumentbasierte Berechnung:** Der Rückgabewert wird ausschliesslich auf Basis der übergebenen Argumente bestimmt.
3. **Keine Seiteneffekte:** Es erfolgt keine Modifikation existierender Werte.

Die Details dazu haben Sie im Kapitel [Pure Functions](../03_PureFunctions) bereits kennengelernt (dient hier lediglich der Auffrischung).

#### Java Streams vs. Scala
- **Java Streams:** Beliebt für funktionale Paradigmen in Java, aber oft umfangreicher in der Code-Struktur.
- **Scala:** Bietet Unveränderlichkeit (immutable lists) und prägnanten, deklarativen Code.

### Funktionen in Scala

#### Funktionssignatur
- Eine Funktion sollte nur **eine Aufgabe** erfüllen, was Lesbarkeit und Wartbarkeit verbessert.

#### Higher Order Functions (HOF) - Übergeben von Funktionen
Eine HOF (High Order Function) in Scala ist einfach eine Funktion, die eine andere Funktion als Argument annimmt und/oder eine Funktion zurückgibt.
 
- Übergeben von Funktionen bedeutet, **spezifisches Verhalten** (z.B. Punktezählung) zu übergeben.


Ein einfaches Beispiel für eine HOF wäre eine Funktion, die eine Liste von Zahlen nimmt und eine Operation auf jedes Element der Liste anwendet. Diese Operation wird als Funktion an die HOF übergeben.

```scala
def applyOperation(numbers: List[Int], operation: Int => Int): List[Int] = {
  numbers.map(operation)
}
```

In diesem Beispiel ist `applyOperation` eine HOF, da sie eine Funktion `operation` als Parameter annimmt und auf jedes Element der Liste anwendet. Sie können verschiedene Operationen durch Übergeben verschiedener Funktionen an `applyOperation` ausführen.

Beispiele, wie `applyOperation` verwendet werden kann:

```scala
val numbers = List(1, 2, 3, 4, 5)

// Eine Funktion, die eine Zahl verdoppelt
def double(x: Int): Int = x * 2

// Eine Funktion, die eine Zahl quadriert
def square(x: Int): Int = x * x

// Eine Funktion, die eine Zahl filtert, um nur gerade Zahlen zu behalten
def filterEven(x: Int): Boolean = x % 2 == 0

val doubledNumbers = applyOperation(numbers, double)
val squaredNumbers = applyOperation(numbers, square)
val evenNumbers = applyOperation(numbers.filter(filterEven), double)

println(doubledNumbers) // Ausgabe: List(2, 4, 6, 8, 10)
println(squaredNumbers) // Ausgabe: List(1, 4, 9, 16, 25)
println(evenNumbers)    // Ausgabe: List(4, 8)
```

#### Anonyme Funktionen
- Zentral in Scala: erlauben prägnanten und effizienten Code.
- Oft innerhalb anderer Funktionen definiert, ohne explizite `def`-Deklaration.

# Wichtige Funktionen und Konzepte in Scala

## Die Map-Funktion in Scala

### Überblick
Die `map`-Funktion ist ein fundamentales Konzept in der funktionalen Programmierung. Sie ermöglicht es, eine Operation auf jedes Element einer Liste (oder einer anderen Collection) anzuwenden und daraus eine neue Liste mit den bearbeiteten Elementen zu erstellen.


### Funktionsweise
Die `map`-Funktion nimmt eine Funktion als Argument. Diese Funktion wird auf jedes Element der Liste angewendet. Das Ergebnis ist eine neue Liste, in der jedes Element das Ergebnis der Anwendung dieser Funktion ist.

### Syntax
Die grundlegende Syntax in Scala sieht wie folgt aus:

```scala
val neueListe = alteListe.map(funktion) // A => B
```

### Beispiele

```scala
val zahlen = List(1, 2, 3, 4)
val quadrate = zahlen.map(x => x * x) 
// Ausgabe: List(1, 4, 9, 16)

val worte = List("hallo", "welt")
val grossbuchstaben = worte.map(wort => wort.toUpperCase)
// Ausgabe: List("HALLO", "WELT")

val worte = List("Scala", "Programmierung")
val laengen = worte.map(wort => wort.length)
// Ausgabe: List(5, 13)
```

### Fazit
Die map-Funktion ist ein mächtiges Werkzeug in Scala und ermöglicht es, Operationen auf **Collections** auf eine saubere und effiziente Weise durchzuführen.


## Die Filter-Funktion in Scala

### Überblick
Die `filter`-Funktion ist ein weiteres zentrales Konzept in der funktionalen Programmierung. Sie ermöglicht es, Elemente aus einer Liste (oder einer anderen Collection) auszuwählen, die eine bestimmte Bedingung erfüllen, und daraus eine neue Liste mit diesen Elementen zu erstellen.


### Funktionsweise
Die `filter`-Funktion nimmt eine Prädikatfunktion (Entscheidungsfunktion) als Argument. Diese Funktion wird auf jedes Element der Liste angewendet. Nur die Elemente, für die das Prädikat (Entscheidung) `true` ergibt, werden in die neue Liste aufgenommen.

### Syntax
Die grundlegende Syntax in Scala sieht wie folgt aus:

```scala
val gefilterteListe = alteListe.filter(praedikat) // A => Boolean
```

### Beispiele

```scala
val zahlen = List(1, 2, 3, 4, 5)
val geradeZahlen = zahlen.filter(x => x % 2 == 0)
// Ausgabe: List(2, 4)

val worte = List("Hallo", "Welt", "Scala", "Programmierung")
val kurzeWorte = worte.filter(wort => wort.length <= 5)
// Ausgabe: List("Hallo", "Welt")

val zahlen = List(10, 25, 30, 45, 50)
val groesserAls20 = zahlen.filter(zahl => zahl > 20)
// Ausgabe: List(25, 30, 45, 50)
```

### Fazit
Die `filter`-Funktion ist ein wesentliches Werkzeug in Scala, das es ermöglicht, Elemente einer Collection basierend auf spezifischen Kriterien zu filtern und zu selektieren.

## Die FoldLeft-Funktion in Scala

### Überblick
Die `foldLeft`-Funktion ist ein wichtiges Werkzeug in der funktionalen Programmierung. Sie wird verwendet, um eine Liste (oder eine andere Sammlung) von Elementen zu einem einzelnen Wert zu reduzieren, indem sie eine Akkumulatorfunktion sequenziell auf die Elemente der Liste anwendet.
- **Übungen:** Seite 127.

### Funktionsweise
Die `foldLeft`-Funktion beginnt mit einem Anfangswert und wendet eine Akkumulatorfunktion auf jedes Element der Liste an, wobei das Ergebnis jedes Schrittes als Eingabe für den nächsten Schritt verwendet wird. Das Endergebnis ist ein einziger Wert.

### Syntax
Die grundlegende Syntax in Scala sieht wie folgt aus:

```scala
val endwert = liste.foldLeft(anfangswert)(akkumulatorfunktion) // (B, A) => B
```

### Beispiele

```scala
val zahlen = List(1, 2, 3, 4)
val summe = zahlen.foldLeft(0)((sum, x) => sum + x)
// Ausgabe: 10

val worte = List("Scala", "ist", "toll")
val gesamtLaenge = worte.foldLeft(0)((sum, wort) => sum + wort.length)
// Ausgabe: 13

val zahlen = List(2, 3, 4, 5)
val produkt = zahlen.foldLeft(1)((prod, x) => prod * x)
// Ausgabe: 120
```

### Fazit 
Die foldLeft-Funktion ist ein nützliches Werkzeug in Scala, das die Reduzierung von Collections auf einen einzigen Wert ermöglicht. Sie ist besonders hilfreich bei der Aggregation von Daten oder der Berechnung von Summen, Produkten und anderen kumulativen Werten.

## Funktionen, die Funktionen zurückgeben
In der funktionalen Programmierung sind Funktionen sogenannte "First-Class Citizens". Das bedeutet, dass Funktionen wie jede andere Variable behandelt werden können. Sie können als Argumente an andere Funktionen übergeben, von Funktionen zurückgegeben und in Variablen gespeichert werden. Ein besonders mächtiges Konzept ist dabei die Möglichkeit, dass Funktionen andere Funktionen als Rückgabewert haben. 



### Bedeutung
Das Zurückgeben von Funktionen durch andere Funktionen ermöglicht:
- **Höhere Abstraktionsstufen:** Erstellung komplexerer Funktionen durch Kombination einfacherer Funktionen.
- **Currying und Partial Application:** Schaffung von Funktionen, die einige Argumente vorab festlegen und den Rest bei späteren Aufrufen erwarten.
- **Funktionale Komposition:** Zusammensetzung mehrerer Funktionen zu einer neuen Funktion.

### Anwendungsbereiche
- **Event Handling:** Funktionen, die aufgrund bestimmter Ereignisse aktiviert werden.
- **Callbacks:** Funktionen, die als Parameter übergeben und später ausgeführt werden.

## Praktisches Beispiel

### Beispiel: Multiplikator-Funktion

```scala
def multiplikator(multiplikand: Int): Int => Int = {
  x => x * multiplikand
}
```
Diese Funktion multiplikator nimmt einen Int-Wert multiplikand entgegen und gibt eine Funktion zurück, die jeden übergebenen Wert mit multiplikand multipliziert.

### Anwendung
```scala
val verdoppeln = multiplikator(2)
val verdreifachen = multiplikator(3)

println(verdoppeln(5))  // Ausgabe: 10
println(verdreifachen(5))  // Ausgabe: 15

```

## Produkttypen (Product Types)
Produkttypen (wie z.B. **Case Classes**) sind in Scala eine bequeme Möglichkeit, Datenstrukturen zu definieren, die mehrere Werte zusammenfassen. Case Classes werden auch verwendet, um komplexe Datenstrukturen zu definieren.

### Beispiele von Map, Filter und FoldLeft mit Case Classes

```scala
case class Student(name: String, averageGrade: Double)

val students = List(
  Student("Alice", 4.3),
  Student("Bob", 5.6),
  Student("Charlie", 3.5),
  Student("Diana", 5.1)
)

// Alle Studentennamen grossgeschrieben
val upperCaseNames = students.map(student => student.name.toUpperCase)
// Ergebnis: List("ALICE", "BOB", "CHARLIE", "DIANA")

// Studenten, die über eine 5.0 haben
val aboveAverageStudents = students.filter(student => student.averageGrade > 5.0)
// Ergebnis: List(Student("Bob", 5.6), Student("Diana", 5.1))

// Durchschnittsnote berechnen
val totalGrade = students.foldLeft(0.0)((sum, student) => sum + student.averageGrade)
val averageGrade = totalGrade / students.length
// Ergebnis: Durchschnittsnote
```

## Currying
Currying ist ein Konzept in der funktionalen Programmierung, bei dem eine Funktion mit mehreren Argumenten in eine Folge von Funktionen umgewandelt wird, die jeweils genau ein Argument nehmen. Dies ermöglicht eine höhere Flexibilität und Modularität im Code.


### Bedeutung
Currying bietet folgende Vorteile:
- **Teilweise Anwendung:** Ermöglicht es, einige Argumente einer Funktion vorab zu binden und die restlichen später zu übergeben.
- **Funktionale Komposition:** Vereinfacht das Zusammensetzen von Funktionen.
- **Code-Wiederverwendbarkeit:** Fördert das Schreiben von generischen und wiederverwendbaren Funktionen.

### Anwendungsbereiche
- **Dynamische Funktionsgenerierung:** Erstellung spezifischer Funktionen basierend auf Kontext oder Bedingungen.
- **Asynchrone Programmierung:** Verzögerung der Ausführung von Funktionen bis alle erforderlichen Argumente verfügbar sind.

### Praktisches Beispiel: Textformatierung
Stellen Sie sich vor, Sie möchten eine Funktion erstellen, die Text in verschiedenen Stilen formatiert, z.B. in Grossbuchstaben, kursiv oder unterstrichen. Anstatt für jeden Stil eine separate Funktion zu schreiben, können Sie eine curried Funktion verwenden, die den gewünschten Stil als erstes Argument nimmt und eine Funktion zurückgibt, die den Text entsprechend formatiert.

```scala
// match ist ein mächtigeres switch-Statement, welches sie bereits von Java kennen.
def format(style: String)(text: String): String = {
  style match {
    case "uppercase" => text.toUpperCase
    case "italic" => s"_${text}_"
    case "underline" => s"__${text}__"
    case _ => text
  }
}
```
In diesem Beispiel ist `format` eine curried Funktion. Sie nimmt zuerst einen Stil-String entgegen und gibt eine Funktion zurück, die einen Text-String nimmt und diesen je nach Stil formatiert.

### Anwendung
```scala
val formatAsUppercase = format("uppercase")
val formatAsItalic = format("italic")

println(formatAsUppercase("Hello, World!"))  // Ausgabe: HELLO, WORLD!
println(formatAsItalic("Hello, World!"))  // Ausgabe: _Hello, World!_
```
Hier wird `format` zweimal mit unterschiedlichen Stilen aufgerufen, was zu zwei verschiedenen Funktionen führt: `formatAsUppercase` und `formatAsItalic`. Diese Funktionen können dann auf beliebige Texte angewendet werden, um sie entsprechend zu formatieren.

## Die FlatMap-Funktion in Scala

### Überblick und Funktionsweise
Die Operation, die von flatMap durchgeführt wird, ist somit eine Kombination aus map (Anwendung einer Funktion auf jedes Element) und flatten (Vereinigung aller resultierenden Listen in eine einzige Liste).

### Syntax
Die grundlegende Syntax in Scala sieht wie folgt aus:

```scala
val neueListe = alteListe.flatMap(funktion) // A => List[B]
```

### Beispiele

```scala
val listen = List(List(1, 2, 3), List(4, 5), List(6))
val vereinigt = listen.flatMap(x => x)
// Ausgabe: List(1, 2, 3, 4, 5, 6)

val worte = List("hallo welt", "scala programmierung")
val einzelneWorte = worte.flatMap(wort => wort.split(" "))
// Ausgabe: List("hallo", "welt", "scala", "programmierung")
```

### Fazit
FlatMap ist nützlich, wenn z.B mit Listen von Listen oder anderen komplexen Datenstrukturen gearbeitet wird.


## For Comprehensions in Scala
For Comprehensions in Scala sind eine mächtige und ausdrucksstarke Art, über Collections (wie Listen, Optionen, Futures usw.) zu iterieren, Transformationen durchzuführen und Werte zu filtern. Sie sind "syntactic suger", die das Schreiben von verschachtelten Funktionsaufrufen wie `map`, `flatMap` und `filter` vereinfachen. For Comprehensions verbessern die Lesbarkeit des Codes, indem sie eine deklarative Art der Datenmanipulation ermöglichen.

### Grundlegendes Beispiel
```scala
val numbers = List(1, 2, 3, 4, 5)
val doubled = for (n <- numbers) yield n * 2
```

Hier iterieren wir über `numbers` und verdoppeln jeden Wert. Das `yield`-Schlüsselwort sammelt die Ergebnisse und gibt eine neue Liste zurück. Das obige Beispiel entspricht `numbers.map(n => n * 2)`

### Beispiel mit Filter (Bedingung)

```scala
val numbers = List(1, 2, 3, 4, 5)
val evenDoubled = for {
  n <- numbers
  if n % 2 == 0
} yield n * 2
```

Dieser Code verdoppelt nur die geraden Zahlen in der Liste. Die Bedingung `if n % 2 == 0` filtert ungerade Zahlen aus, bevor die Transformation angewendet wird. Es entspricht `numbers.filter(n => n % 2 == 0).map(n => n * 2).`

### Wahre Stärke: Kombination von Collections
For Comprehensions zeigen ihre wahre Stärke bei der Kombination mehrerer Collections oder bei Operationen, die verschachtelte `flatMap` und `map`-Aufrufe erfordern:

```scala
val a = List(1, 2)
val b = List("a", "b")

val combinations = for {
  x <- a
  y <- b
} yield (x, y)
```

Das Ergebnis, combinations, ist eine Liste aller möglichen Kombinationen von Zahlen aus a und Buchstaben aus b: `List((1, "a"), (1, "b"), (2, "a"), (2, "b"))`. Es demonstriert, wie `flatMap` (für das erste <-) und `map` (für das zweite <-) unter der Haube verwendet werden.

Ohne For Comprehension würde das Beispiel wie folgt aussehen.

```scala
val combinations = a.flatMap(x => b.map(y => (x, y)))
```

### Komplexeres Szenario
Stellen Sie sich vor, Sie entwickeln eine Anwendung, in der Sie Daten aus mehreren Datenquellen kombinieren müssen, wobei jede Abhängigkeiten von der vorherigen hat:

```scala
case class User(id: Int, name: String)
case class Product(name: String, price: Double)
case class Order(user: User, product: Product, quantity: Int)

val users = List(User(1, "Alice"), User(2, "Bob"))
val products = List(Product("Book", 30.0), Product("Game", 60.0))

val orders = for {
  user <- users
  product <- products if product.price < 50
} yield Order(user, product, quantity = 2)

```

In diesem Beispiel erstellen wir Bestellungen für jeden Benutzer mit Produkten unter einem bestimmten Preis. For Comprehensions ermöglichen es, solche Logik klar und deklarativ auszudrücken.

Ohne For Comprehension würde das Beispiel wie folgt aussehen.

```scala
val orders = users.flatMap(user => 
  products.filter(product => product.price < 50).map(product => 
    Order(user, product, quantity = 2)
  )
)
```