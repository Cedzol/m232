# Erste Übungen mit Funktionen

<!-- TOC -->
- [Erste Übungen mit Funktionen](#erste-übungen-mit-funktionen)
  - [Bevor Sie mit den Aufgaben beginnen .....](#bevor-sie-mit-den-aufgaben-beginnen-)
  - [Lösen der Aufgaben](#lösen-der-aufgaben)
  - [Aufgabe 1 - imperativ vs. deklarativ](#aufgabe-1---imperativ-vs-deklarativ)
  - [Aufgabe 2 - Umsetzung einer Shopping Cart Funktion](#aufgabe-2---umsetzung-einer-shopping-cart-funktion)
  - [Aufgabe 3 – TipCalculator](#aufgabe-3--tipcalculator)
  
<!-- TOC -->



## Bevor Sie mit den Aufgaben beginnen .....

* Sie haben ein Repository erstellt, wo Sie Ihre Lösungen zu den Aufgaben hochladen.
* Erstellen Sie für *jedes Kapitel* ein entsprechendes Verzeichnis in Ihrem Repository.
* Sie haben das Scala-Plugin installiert, gem. der Anleitung des Videos (siehe hier: https://www.youtube.com/watch?v=-8V6bMjThNo)


## Lösen der Aufgaben

* Diese Übungen werden als Einzelarbeit durchgeführt.
* Zeigen Sie Ihre Lösungen der Lehrperson (Zugriff auf Repository).

## Aufgabe 1 - imperativ vs. deklarativ

In dieser Übung geht es darum, unseren imperative Code-Stil und deklarativen Code-Stil auszubauen. Wir werden dabei sehen, wie einfach es ist, wenn wir die deklarative Lösung verwenden.
Wir verwenden nochmals den Code aus den Unterlagen:
Der imperative Code-Stil:

```
public static int calculateScore(String word){
    int score = 0;
    for (char c : word.toCharArray()) {
        score++;
    }
    return score;
}
```


Und nochmals der deklarative Stil:

```
public static int wordScore(String word){
    return word.length();
}
```


**Anforderung: Wir wollen die Funktion so erweitern, dass die Punktzahl nur Zeichen zählt, ohne das Zeichen «a».**

Wir wollen somit folgende Ausgaben:

```
calculateScore("imperative") == 9
calculateScore("no") = 2
wordScore("declarative") == 9
wordScore("yes") == 3
```

* Erweitern Sie jeweils die imperative Lösung und deklarative Lösung. Zeigen Sie Ihre Lösungen der Lehrperson.


## Aufgabe 2 - Umsetzung einer Shopping Cart Funktion

Anforderungen:
*Wir wollen eine Shopping-Cart (Warenkorb), wobei jedes Element (als String) in den Warenkorb hinzugefügt werden kann. Falls ein Buch hinzugefügt wurde, erhalten wir 5% Rabatt. Falls kein Buch hinzugefügt wurde, ist der Rabatt 0%. Die Elemente im Warenkorb können zu jeder Zeit ausgelesen werden. Die Elemente im Warenkorb können auch zu jeder Zeit wieder entfernt werden.*

**Erster Schritt:**
In diesem Beispiel wollen wir zuerst «falsch» programmieren, indem wir so programmieren, wie wir es imperativ umsetzen.
Schreiben Sie dazu eine Klasse *ShoppingCart*, welche als Klassenvariablen eine Liste führt, sowie einen boolean *bookAdded*. Sie können diese in Java schreiben.
Hinweis: Auf was müssen wir achten, wenn sich der Zustand im Warenkorb ändert? Was geschieht, falls wir ein Buch aus dem Warenkorb entfernen?


**Zweiter Schritt:**
Nun wollen wir funktional programmieren, indem wir darauf achten, dass wir nur *eine Funktion* haben: 
Die Funktion *getDiscountPercentage* berechnet den Rabatt, falls ein Buch im Warenkorb ist.
Die Funktion wird aufgerufen und eine Liste (der Warenkorb) wird als Parameter übergeben.
Zeigen Sie Ihre Lösung der Lehrperson.


## Aufgabe 3 – TipCalculator

Der TipCalculator berechnet das Trinkgeld, der eine Gruppe von Gästen dem Kellner zahlt. Das Trinkgeld ist 10% des Betrags, wenn es sich um eine Gruppe von 1-5 Personen handelt. Falls die Gruppe grösser ist, ist das Trinkgeld 20%. Wenn es keine Gruppe ist, wird 0% berechnet.
Wandeln Sie folgenden Code so um, dass wir eine «pure Funktion» haben.

Zur Erinnerung:

Pure Funktion bedeutet:
* Funktion gibt einen Wert zurück
* Funktion berechnet den Rückgabewert aufgrund der erhaltenen Parameter
* Funktion ändert nicht den Zustand von bestehenden Werten

```
class TipCalculator { 
    private List<String> names = new ArrayList<>();
    private int tipPercentage = 0;

    public void addPerson(String name) {
        names.add(name);
        if(names.size() > 5) {
            tipPercentage = 20;
        } else if(names.size() > 0) {
            tipPercentage = 10;
        }
    }

    public List<String> getNames() {
        return names;
    }

    public int getTipPercentage() {
        return tipPercentage;
    }
}

```