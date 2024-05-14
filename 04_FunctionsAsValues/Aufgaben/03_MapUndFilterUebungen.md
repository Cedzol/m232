# Map und Filter gemeinsam

### Übung 1: Filterung von Mitarbeiterdaten
Gegeben:
```scala
case class Mitarbeiter(name: String, abteilung: String, gehalt: Int)

val mitarbeiter = List(
  Mitarbeiter("Max Mustermann", "IT", 50000),
  Mitarbeiter("Erika Musterfrau", "Marketing", 45000),
  Mitarbeiter("Klaus Klein", "IT", 55000),
  Mitarbeiter("Julia Gross", "HR", 40000)
)
```

Erstellen Sie eine Liste aller Mitarbeiter in der "IT"-Abteilung, deren Gehalt bei 50000 oder darüber liegt. Zusätzlich sollen alle Vornamen in Grossbuchstaben umgewandelt und der Nachname entfernt werden (z.B. "MAX").

Erwartete Ausgabe
`List("MAX", "KLAUS")`

# Übung 2: Kursnamen formatieren und sortieren
In dieser Übung werden wir eine Liste von Kursnamen bearbeiten und sortieren.

Gegeben ist eine Liste von Kursnamen:

```scala
val kurse = List(
  "Programmierung in Scala",
  "Datenbanken",
  "Webentwicklung mit JavaScript",
  "Algorithmen und Datenstrukturen"
)
```
1. Filtern Sie die Kursnamen, um nur diejenigen zu behalten, die das Wort "Daten" enthalten.
2. Entfernen Sie aus jedem Kursnamen alle Leerzeichen.
3. Sortieren Sie die Kursnamen alphabetisch.
4. Sortieren Sie umgekehrt alphabetisch.