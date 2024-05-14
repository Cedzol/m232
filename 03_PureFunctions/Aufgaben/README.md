# Aufgaben pure functions

## Lernziele
* Ich kann bei bestehenden Funktionen beurteilen, ob es sich um eine [pure function](../01_Einführung/Fachbegriffe.md#pure-functions) oder [impure function](../01_Einführung/Fachbegriffe.md#impure-functions) handelt
* Ich kann impure functions so umschreiben, dass diese zu pure functions werden
* Ich kann selbst pure functions implementieren

## Bevor Sie mit den Aufgaben beginnen...
* Sie haben ein Repository erstellt, wo Sie Ihre Lösungen zu den Aufgaben hochladen.
* Erstellen Sie für *jedes Kapitel* ein entsprechendes Verzeichnis in Ihrem Repository.
* Sie haben das Scala-Plugin installiert, gem. der Anleitung des Videos (siehe hier: https://www.youtube.com/watch?v=-8V6bMjThNo)


## Lösen der Aufgaben
* Diese Übungen können Sie als Einzelarbeit oder Gruppenarbeit lösen.
* Zeigen Sie Ihre Lösungen der Lehrperson.

## Aufgabe 1 - pure vs impure
Beurteilen Sie für folgende gegeben Funktionen, ob diese pure oder impure sind. Schreiben Sie dafür bei jeder Funktion auf, welche der drei Regeln erfüllt / nicht erfüllt sind. Dokumentieren Sie die Resultate in Ihrem Repository.

Tipp: Erstellen Sie für die Dokumentation Ihrer Lösungen am besten eine Tabelle, die beispielsweise so aussehen könnte:

| Aufgabe | Nur ein Rückgabewert | Resultat nur Abhängig von übergebenen Parametern | Verändert keine existierenden Werte | pure oder impure |
|---------|----------------------|--------------------------------------------------|-------------------------------------|------------------|
| 1.x     | Ja                   | Nein                                             | Ja                                  | impure           |
| 1.y     | Ja                   | Ja                                               | Ja                                  | pure             |


Der Code bei den einzelnen Aufgabenstellungen ist jeweils in JavaScript und Scala angegeben. Sie dürfen da die Programmiersprache wählen, die Ihnen besser liegt.

### Aufgabe 1.1
JavaScript:
```
let cartItems = [];

function addToCart(item) {
    cartItems.push(item);
    return cartItems;
}

console.log(addToCart('Apple'));  // Ausgabe: ['Apple']
console.log(addToCart('Banana')); // Ausgabe: ['Apple', 'Banana']
console.log(addToCart('Orange')); // Ausgabe: ['Apple', 'Banana', 'Orange']
```

Scala:
```
val cartItems = ListBuffer[String]()

def addToCart(item: String): List[String] = {
    cartItems += item
    cartItems.toList
}

println(addToCart("Apple"))   // Ausgabe: List(Apple)
println(addToCart("Banana"))  // Ausgabe: List(Apple, Banana)
println(addToCart("Orange"))  // Ausgabe: List(Apple, Banana, Orange)
```

### Aufgabe 1.2
JavaScript:
```
function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // Ausgabe: 8
console.log(add(2, 4)); // Ausgabe: 6
```

Scala:
```
def add(a: Int, b: Int): Int = {
    a + b
}

println(add(5, 3)) // Ausgabe: 8
println(add(2, 4)) // Ausgabe: 6
```

### Aufgabe 1.3
JavaScript:
```
function firstCharacter(str) {
    return str.charAt(0);
}

console.log(firstCharacter("Hello")); // Ausgabe: H
console.log(firstCharacter("JavaScript")); // Ausgabe: J
```

Scala:
```
def firstCharacter(str: String): Char = {
    str.head
}

println(firstCharacter("Scala")) // Ausgabe: S
println(firstCharacter("OpenAI")) // Ausgabe: O
```

### Aufgabe 1.4
JavaScript:
```
// Methode, um eine Zahl mit einem zufälligen Wert zu multiplizieren
function multiplyWithRandom(number) {
    const randomValue = Math.random(); // Generiert einen zufälligen Wert zwischen 0 und 1
    return number * randomValue;
}

console.log(multiplyWithRandom(5)); // Ausgabe: Eine zufällige Zahl zwischen 0 und 5
console.log(multiplyWithRandom(10)); // Ausgabe: Eine zufällige Zahl zwischen 0 und 10
```

Scala:
```
import scala.util.Random

// Methode, um eine Zahl mit einem zufälligen Wert zu multiplizieren
def multiplyWithRandom(number: Double): Double = {
  val randomValue = Random.nextDouble() // Generiert einen zufälligen Wert zwischen 0 und 1
  number * randomValue
}

println(multiplyWithRandom(5)) // Ausgabe: Eine zufällige Zahl zwischen 0 und 5
println(multiplyWithRandom(10)) // Ausgabe: Eine zufällige Zahl zwischen 0 und 10
```

### Aufgabe 1.5
JavaScript:
```
// Funktion zum Teilen einer Zahl durch eine andere
function divideNumbers(dividend, divisor) {
    return dividend / divisor;
}

console.log(divideNumbers(10, 2)); // Ausgabe: 5
console.log(divideNumbers(8, 4));  // Ausgabe: 2
```

Scala:
```
// Funktion zum Teilen einer Zahl durch eine andere
def divideNumbers(dividend: Double, divisor: Double): Double = {
  dividend / divisor
}

println(divideNumbers(10, 2)) // Ausgabe: 5.0
println(divideNumbers(8, 4))  // Ausgabe: 2.0
```

### Aufgabe 1.6
JavaScript:
```
// Methode zum Ausgeben und Rückgeben einer Zeichenkette
function printAndReturnString(str) {
    console.log(str); // Ausgabe der Zeichenkette auf der Konsole
    return str;      // Rückgabe der Zeichenkette
}

console.log(printAndReturnString("Hello")); // Ausgabe: Hello
```

Scala:
```
// Methode zum Ausgeben und Rückgeben einer Zeichenkette
def printAndReturnString(str: String): String = {
  println(str) // Ausgabe der Zeichenkette auf der Konsole
  str          // Rückgabe der Zeichenkette
}

println(printAndReturnString("Hello")) // Ausgabe: Hello
```

### Challenge (optional)
Erstellen Sie (oder verwenden Sie bestehende) eigene Funktionen (pure oder impure) und lassen Sie von jemand anderem Ihre erstellten Funktionen beurteilen. Kontrollieren Sie dabei, ob die andere Person Ihre Funktion richtig beurteilt hat. Wechseln Sie anschliessend die Rollen - nun erstellt die andere Person eine Funktion und Sie beurteilen, ob diese pure oder impure ist. 

Tipp: versuchen Sie es Ihrem Gegenüber möglichst schwer zu machen. Sie können auch ChatGPT verwenden, um eine Funktion generieren zu lassen.

## Aufgabe 2 - umschreiben von impure in pure functions
Nehmen Sie die impure functions aus Aufgabe 1 und formulieren diese so um, dass daraus pure functions werden. Stellen Sie sicher, dass die Funktionalität möglichst nahe an der ursprünglichen Implementation bleibt. Bei einigen Beispielen wird es Ihnen nicht gelingen, die Funktionalität exakt beizubehalten. Überlegen Sie wieso und notieren Sie sich Ihre Erkenntnisse und die angepassten Funktionen in Ihrem Repository.

## Aufgabe 3 - eigene pure functions schreiben
Bei dieser Übungsaufgabe geht es darum, dass Sie eigene pure functions schreiben - Funktionen, die sich an alle Regeln für pure functions halten. Damit es auch genügend herausfordernd ist für Sie, sollen Sie die gestellten Aufgaben mit rekursiven Funktionen lösen. Wenn Sie das Kapitel [immutable Values](../Immutable_Values/README.md) noch nicht gelesen haben bisher, wäre jetzt der richtige Zeitpunkt, bevor Sie mit der Übung starten. Dort wird insbesondere erklärt, auf was Sie bei der Rekursion achten müssen.

Schreiben Sie für die folgenden Problemstellungen / Aufgabenstellungen rekursive Funktionen, die die gestellten Anforderungen erfüllen:
* **Aufgabe 3.1:** Eine Funktion, die aus einer Liste von Zahlen die Summe aller Listenelemente berechnet.
* **Aufgabe 3.2:** Eine Funktion, die aus einer Liste von Zahlen den Mittelwert aller Listenelemente berechnet.
* **Aufgabe 3.3:** Eine Funktion, die eine gegebene Liste von Strings alphabetisch sortiert.
* **Aufgabe 3.4:** Eine Funktion, die eine Liste von Objekten anhand einer eigenen Sort-Funktion sortiert. Die Objekte sollen dabei die Properties Datum, Priorität und Titel enthalten. Die Funktion soll eine sortierte Liste der Objekte zurückgeben, wobei als Sortierkriterium zuerst das Datum, dann die Priorität und zum Schluss der Titel verwendet werden.
* **Aufgabe 3.5:** Eine Funktion, die aus einer Baumstruktur mit unterschiedlich tiefer Verschachtelung alle Blätter (Elemente ohne weitere Kinder) ausliest und in einer flachen Liste von Blättern zurückgibt.
