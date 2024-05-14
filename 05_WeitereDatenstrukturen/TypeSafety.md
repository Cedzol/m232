# Exkurs: Typensicherheit - type safety
Von typensicheren Programmiersprachen wird dann geredet, wenn entweder durch den Compiler oder die Laufzeitumgebung nicht gestattete Konvertierungen von Typen erkannt werden und entsprechende Fehlermeldungen geworfen werden.

Bei typensicheren Programmiersprachen kann die IDE während dem Schreiben des Codes den Entwickler darauf hinweisen, wenn dieser eine Methode nicht so verwendet wie dies vorgesehen wäre. Das hat den grossen Vorteil, dass viele Fehler bereits beim Schreiben von Code auffallen. Verwenden Sie eine nicht typensichere Sprache wie JavaScript, dann verlieren Sie diesen Vorteil und Sie müssen selbst dafür sorgen, dass alle Funktionen auch korrekt verwendet werden.

Beim funktionalen Programmieren liegt der Fokus des Programmierers darauf, Funktionen zu schaffen, die keine "versteckte" Logik beinhalten oder für die nicht erst im Code nachgeschaut werden muss, wie die Funktion verwendet werden muss. Aber typensicherheit alleine reicht noch nicht, um dies zu erreichen.

Stellen Sie sich eine Klasse vor, die eine Person mit Name, Herkunftsland, Geburtstag und Todestag umfassen soll. Zusätzlich wollen Sie den Zustand speichern ob die Person aktuell noch lebt. Die Klasse könnte in Scala wie folgt aussehen:
```
case class Person(
    name: String,
    originCountry: String,
    birthday: String,
    isAlive: Boolean,
    deathday: String
)
```

Wenn nun ein konkretes Objekt erzeugt werden soll, muss der Programmierer die Reihenfolge der Parameter richtig angeben und darf nichts verwechseln - denn wir verwenden für fast alles einen String als Datentyp. Deshalb können hier bei der Reihenfolge problemlos Fehler vorliegen, die durch den Compiler nicht zur Laufzeit erkannt werden. Ebenso ist nicht klar, welche Werte für die Business-Logik gültig sind. Es ist beispielsweise nicht klar, ob bei originCountry das Land ausgeschrieben werden soll oder ob es sich nur um das Länderkürzel handelt. Auch ist unklar - wenn es das Länderkürzel wäre - ob es zwei oder drei Zeichen lange sein darf. Weiter muss isAlive auf false gesetzt sein, wenn der deathday gesetzt wurde und auf true, wenn der deathday nicht gesetzt wurde.

Das gegebene Beispiel ist ein negativ-Beispiel. Wenn typensichere Programmiersprachen nicht sinnvoll verwendet werden, können diese ihr positives Potenzial nicht richtig entfalten.

Aus diesem Grund werden durch funktionale Programmiersprachen neben den einfachen Datentypen ganz viele weitere Datenkonstrukte geschaffen, die es erlauben, eine Klasse wie die obenstehende sinnvoller zu formulieren. Beispielsweise könnte der Datentyp Option verwendet werden, um den deathday zu modellieren. Beispielsweise könnte mit ``Option[String]`` ein Datentyp geschaffen werden, der entweder ein String enthält oder aber None. Dadurch wäre der Status isAlive auch nicht mehr nötig separat modelliert zu werden.

Beim originCountry gibt es beispielsweise eine endliche Anzahl an gültigen Optionen. Auch hier könnte sinnvollerweise mit einem enum gearbeitet werden, mit dem die Werte so stark eingegrenzt werden, dass der Compiler bereits dafür sorgt, dass unsere Klasse nicht falsch befüllt werden kann. Dadurch verschwinden viele weitere Probleme. Auch beim Geburts- und Todestag wäre beispielsweise der date-Datentyp passender.

## Fazit
Typensichere Programmiersprachen helfen den Code klarer zu formulieren. Sie helfen zudem, den Compiler als "Helferlein" einzuspannen, damit dieser beim Programmieren bereits auf mögliche nicht Bestimmungsgemässe Verwendung von Funktionen und Objekten hinweisen kann. Dadurch wird der Code wesentlich robuster.

**Wichtig:** der Vorteil von typensicheren Programmiersprachen hält sich aber stark in Grenzen, wenn die Typen zu offen (zu wenig restriktiv) formuliert werden - wie beispielsweise überall String zu verwenden.

Das Kapitel 5 soll Ihnen helfen weitere Datentypen / Datenstrukturen kennenzulernen, damit Sie für jeden Anwendungsfall im Alltag die dazu passende Datenstruktur finden können.

[Exkurs beenden -> Zurück zur Theorie](./README.md)

## Quellen
* https://de.wikipedia.org/wiki/Typsicherheit