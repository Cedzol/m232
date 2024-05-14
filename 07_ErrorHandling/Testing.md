# Property-based Tests
Wie bereits gelernt dreht sich beim funktionalen Paradigma alles darum, den Zielzustand zu beschreiben und nicht den Weg dahin. Dasselbe wird auch beim Testing gemacht. 

Die Bibliothek `scalatest` bietet die Möglichkeit Unit-Tests zu schreiben. Diese Bibliothek bietet die Möglichkeit, wie klassische Unit-Testing-Frameworks auch, Testcases mit Beispieldaten zu schreiben. Man spricht von "example-based testing" und entspricht eher dem klassischen nicht funktionalen Ansatz.

Die Bibliothek kann aber noch mehr. Sie ermöglicht auch ein "property-based testing". Dabei übernimmt die Testbibliothek die Generierung von Beispieldaten aufgrund der festgelegten Eigenschaften, die der Parameter haben darf (beispielsweise eine zufällige Zahl zwischen 1 und 50 oder ein String der 30 - 100 Zeichen lang ist). Den Möglichkeiten sind hier keine Grenzen gesetzt, weil auch eigene "Generator"-Funktionen verwendet werden können. Das Testing-Framework verwendet dann diese bei der Ausführung der unterschiedlichen Testcases.

Mit dem `forAll`-Konstrukt von `scalatest` wird die Testlibrary angewiesen mehrere Testcases mit unterschiedlichsten Parametern beim Funktionsaufruf zu generieren. Wenn ein Test mit gewissen Parametern fehlschlägt, gibt einem die Bibliothek an, mit welchen Parametern genau getestet wurde und versucht die Parameter für den User sogar noch etwas einzugrenzen. Der Programmierer gibt also im Code an, was getestet werden soll. Die Library kümmert sich um alle weiteren Details.

## Beispiel
Um Property-based testing selbst auszuprobieren sind die Bibliotheken `scalatest` und `scalacheck` nötig. Diese können bei Verwendung von sbt als Bibliotheksverwaltung wie folgt in Ihr Projekt eingebunden werden:
```
libraryDependencies += "org.scalatest" %% "scalatest" % "3.2.18" % "test"
libraryDependencies += "org.scalatestplus" %% "scalacheck-1-17" % "3.2.18.0" % "test"
```

Erstellen Sie die folgende Klasse:
```
class SomeMath {
  def add(a: Int, b: Int): Int = {
    a + b
  }
}
```

Die Funktion add in der Klasse addiert zwei Integer-Werte. Erstellen Sie nun die folgende Testklasse in Ihrem "test"-Verzeichnis:
```
import org.scalatest.funsuite.AnyFunSuiteLike
import org.scalatestplus.scalacheck.ScalaCheckPropertyChecks

class SomeMathTest extends AnyFunSuiteLike with ScalaCheckPropertyChecks {

  test("testAdd") {
    forAll((a: Int, b: Int) => {
      assert(SomeMath().add(a, b) == a + b)
    })
  }

}
```

Die Methode prüft nun für zufällige Werte von a und b, ob die Methode das richtige rechnet. Lassen Sie den Test laufen. Der Test sollte erfolgreich sein.

Modifizieren Sie nun die Klasse `SomeMath` wie folgt:
```
class SomeMath {
  def add(a: Int, b: Int): Int = {
    if (a > 5)
      a - b
    else
      a + b
  }
}
```

Im Falle von a > 5 wird nun anders gerechnet. Lassen Sie den Test erneut laufen. Er sollte fehlschlagen. Die forAll sollte Parameter-Kombinationen finden, mit denen die Methode nicht das tut, was der Test erwartet. Was passiert aber, wenn Sie im if-Statement beispielsweise die Bedingung `a == 5` verwenden? Abhängig davon welche Parameter die Bibliothek wählt, kann es sein, dass dieser Spezialfall nicht entdeckt wird. Das testing mit zufälligen Werten hilft eine etwas breitere Testabdeckung zu kriegen. Mit wenig code kann deklariert werden, dass das Testsystem zufällige Int-Werte als Parameter durchtesten soll. Es wird dann nicht nur ein Aufruf getestet, sondern Aufrufe mit vielen verschiedenen Parameter-Kombinationen - aber eben auch nicht mit allen möglichen Parameter-Kombinationen. Deshalb ist wichtig, dass Sie Spezialfälle immer noch separat testen (mit example-based testing oder mit table-based testing, wo Sie die zu verwendenden Testwerte in einer Tabelle vorgeben).

## Aufgabe
Bringen Sie das oben gezeigte Beispiel bei sich in der Entwicklungsumgebung zum Laufen. Spielen Sie mit unterschiedlichen Bedingungen im if-Statement. Welche Anpassungen werden erkannt, welche nicht?

Bei Interesse probieren Sie das Property-based testing mit eigenen Beispielen aus. Inspiration was Sie testen könnten liefern Ihnen die unten angegebenen Quellen. Sie können aber auch ChatGPT hier zurate ziehen und sich einige Beispiele von ihm generieren lassen, die Sie dann ausprobieren, aber auch modifizieren, um ein Gespür dafür zu kriegen, wie die arbeit mit der Testbibliothek funktioniert.

## Quellen & weitere Details
- Property-based testing: https://www.scalatest.org/user_guide/property_based_testing
- `scalatest` Bibliothek: https://www.scalatest.org/