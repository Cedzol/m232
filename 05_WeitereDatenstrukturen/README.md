![TBZ Logo](../x_gitres/tbz_logo.png)
# Weitere Datenstrukturen


<!-- TOC -->
- [Weitere Datenstrukturen](#weitere-datenstrukturen)
  - [Lernziele:](#lernziele)
  - [Bemerkung vorweg](#bemerkung-vorweg)
  - [Nebst der Liste gibt es noch weitere Datenstrukturen](#nebst-der-liste-gibt-es-noch-weitere-datenstrukturen)
  - [Mit Listen arbeiten - `for comprehension`](#mit-listen-arbeiten---for-comprehension)
  - [Mit der Datenstruktur Set arbeiten](#mit-der-datenstruktur-set-arbeiten)
  - [Mit der Datenstruktur Map arbeiten](#mit-der-datenstruktur-map-arbeiten)
  - [Mit Tupel arbeiten](#mit-tupel-arbeiten)
    - [Tupel und Pattern Matching](#tupel-und-pattern-matching)
    - [Verwendung von Tupel](#verwendung-von-tupel)
    - [Liste mit Tupel](#liste-mit-tupel)
  - [Quellen](#quellen)
 
<!-- TOC -->


## Lernziele:
* Ich kenne die Datenstruktur Set und kann diese anwenden
* Ich kenne die Datenstruktur Map und kann diese anwenden
* Ich kenne Tupel und kann diese anwenden, z.Bsp. mit Pattern Matching
* Ich kann die *for comprehension* auf diese Datenstrukturen anwenden

## Bemerkung vorweg
Datenstrukturen / Datentypen sind ein wichtiger Aspekt des funktionalen Paradigmas. Wenn Sie wissen wollen wieso, beschäftigen Sie sich mit dem Exkurs [Typensicherheit - type safety](./TypeSafety.md).

## Nebst der Liste gibt es noch weitere Datenstrukturen

Sie kennen das bereits aus anderen Programmier-Modulen: nebst der Liste (oder dem Array) gibt es auch andere Formen, wie man Daten strukturiert ablegen und bearbeiten kann.
Wir wollen hier Varianten anschauen, die sich vorallem in der funktionalen Programmierung gut eignen.
Vorallem wollen wir auch untersuchen, wie wir die Datenstrukturen via Funktionen bearbeiten.

## Mit Listen arbeiten - `for comprehension`

<!-- aus kapitel 5 -->
Wir haben bereits gesehen (unter [die Map-Funktion in Scala](../04_FunctionsAsValues/README.md#die-map-funktion-in-scala) bei functions as value), dass mit der `map`-Funktion die Elemente einer bestehende Liste durchgearbeitet werden. Die Resultate werden dann in einer neuen Liste gespeichert.

Wir haben auch gesehen (unter [for comprehensions](../04_FunctionsAsValues/README.md#for-comprehensions-in-scala) bei functions as value), dass wir mit `for comprehension` lesbaren Code schreiben können, die es uns erlauben, über Elemente zu iterieren und diese mit einem Funktions-Aufruf zu bearbeiten. Mit `for comprehension` können wir die drei Funktionen `flatMap`, `map` und `filter` ersetzen.

Achtung: `for` ist in Scala ein **Ausdruck**. Wenn auf eine Collection angewendet, wird eine weitere Collection zurückgegeben, mit den bearbeiteten Elementen. (im Vergleich: im imperativen Code ist `for` eine **Anweisung** um Schleifen zu bilden).


Ein Beispiel:
```
for {
  a <- List[Int](1,2)
  b <- List[Int](10, 100)
   
} yield (a * b).toString + "km"
```
Die Ausgabe ist eine neue Liste:

```
List(10km, 100km, 20km, 200km)
```



## Mit der Datenstruktur Set arbeiten

Wir können die `for comprehension` auch auf **Sets** anwenden. Ein Set unterscheidet sich nicht gross von einer Liste. Während eine Liste alle Elemente in der Reihenfolge speichert, wie sie hinzugefügt wurden, haben Sets nur *unique values*, d.h. jedes Element kommt nur einmal vor.

Ein Beispiel:

```
for {
  greeting <- Set("Hello", "Hi there")
  name <- Set("Alice", "Bob")
  
} yield s"$greeting, $name!"

```
**Führen Sie diesen Code aus: wie sieht der Output aus?**

Wir können unterschiedliche Collections in einem `for comprehension` ausführen. Die Ausgabe entspricht dem Collection Type, der als *erster* in der `for comprehension` bearbeitet wird.



## Mit der Datenstruktur Map arbeiten

<!-- aus kapitel 9 -->
Eine weitere Datenstruktur, die wir verwenden können, ist die Map.
Wie in anderen Programmiersprachen, entspricht die Map stets einem **Wertepaar**:  wir haben ein Mapping von einem *key* zu einem *value*:

```
Map[Currency, BigDecimal]

```
entspricht einer Datenstruktur, wo der *key* ein Currency ist und der *value* ein BigDecimal.

Entsprechend mit Daten:
```
val usdRates: Map[String, BigDecimal] = 
Map(("Eur") -> (0.82))
println(usdRates)
```

Wie bei Listen und Sets, wird eine neue Map erstellt, wenn z.Bsp. ein neues Werte-Paar hinzugefügt wird. (Zur Erinnerung: die Datenstrukturen sind **immutable** , damit die Regeln von [pure functions](../03_PureFunctions/README.md) nicht gebrochen werden. Das gilt auch für die Map).

Mittels `updated` kann eine bestehende Map erweitert werden - aber Achtung: es wird eine neue Map erstellt mit den entsprechenden zusätzlichen Elementen.
Syntax:

```
newMap[String, String] = oldMap.updated("newKey", "newValue")
```

Mittels `removed` wird ein Wertepaar entfernt aus der Map.
<!-- Syntax für update zeigen --->

## Mit Tupel arbeiten

Die Datenstruktur Tupel haben Sie bereits im [Kapitel 04](../04_FunctionsAsValues/Aufgaben/04_FoldLeftUebungen.md#tuples) angetroffen.
Zur Erinnerung: 
*Ein Tupel ist ähnlich wie eine Liste, aber im Gegensatz dazu können Tupel verschiedene Typen von Elementen enthalten, und die Anzahl der Elemente im Tupel ist festgelegt und kann nicht geändert werden.*

Ein typisches Format:
```
val tuple: (String, Int) = ("Joe", 34)
```
oder auch so:
```
val tuple: (String, Int) = "Joe" -> 34
```

Wir können auch mehr als zwei Elemente in ein Tupel verpacken, jedoch werden wir uns hier auf *Paare* oder auf *2er Tupel* beschränken. (in Scala können Tupels mit bis zu 22 Elementen erstellt werden)


### Tupel und Pattern Matching

Nehmen wir an, wir haben eine Liste von Tupel, wobei jeder Tupel eine Person mit Alter abbildet.
Wir wollen eine Funktion, welche uns alle Personen ausgibt, die entweder "Joe" heissen oder dann älter als 18 sind.

Somit können wir mit einem *match* - *case* eine Art switch-Case in einer Funktion abbilden:

```
val person1 = ("Joe", 25);
val person2 = ("Max", 16);
val person3 = ("Joe", 12);
val person4 = ("Kirstin", 20)
val personList = List(person1, person2, person3, person4)

val ageLimitAndName = personList.foreach { tuple => {
  tuple match {
    case e if e._1 == "Joe" => println(s"found Joe!")
    case d if d._2 >= 18 => println(d._1)
    case _ => None
    }
  }
}
```
Falls es mehrere Ausdrücke gibt, die zutreffen, verwendet Scala den Ersten.
Die Ausgabe hier ist:
`
found Joe!
found Joe!
Kirstin
`


### Verwendung von Tupel
Tupel eignen sich gut für einen Use Case, wo wir eine Funktion wollen, die uns *mehrere Werte* zurückgeben kann.
Siehe dazu die [Aufgaben](../05_WeitereDatenstrukturen/Aufgaben/02_DatenstrukturTupel.md) wo wir diesen Use Case umsetzen.


### Liste mit Tupel
Wir können natürlich auch eine Liste von Tupels haben. ZBsp.:

```
List((1, "a"), (2, "b"), (3, "c"))

```
Hier arbeiten wir mit einer Liste, welche jeweils ein Tupel mit *Int* und *String* enthält.
Dieses Beispiel ist das Produkt von zwei Listen, welche mittels der **zip** Funktion zusammengesetzt werden:

```
val ints: List[Int] = List(1,2,3)
val strings: List[String] = List("a", "b", "c")
ints.zip(strings)

```

Die *zip* Funktion ähnelt einem Reissverschluss (in English: zip). Wir setzen aus zwei Listen ein 2er Tupel zusammen.




## Quellen

Weiterführende Erklärungen und Tutorials finden Sie hier:
* https://www.baeldung.com/scala/for-comprehension
* https://www.geeksforgeeks.org/scala-tuple/
* Ein Tutorial zu Tuples und Option: https://www.youtube.com/watch?v=pYeeYNcFyrI
  
