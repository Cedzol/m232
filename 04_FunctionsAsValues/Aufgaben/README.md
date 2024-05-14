# Übungen zur funktionalen Programmierung in Scala

Dieser Ordner enthält Übungen zur funktionalen Programmierung in Scala. Die Übungen sind in mehrere Markdown-Dateien unterteilt, die jeweils verschiedene Konzepte abdecken.

## Durchführung der Übungen

Die Übungen sollten in der folgenden Reihenfolge durchgeführt werden:

1. [Map Übungen](01_MapUebungen.md)
2. [Filter Übungen](02_FilterUebungen.md)
3. [Map und Filter Übungen](03_MapUndFilterUebungen.md)
4. [FoldLeft Übungen](04_FoldLeftUebungen.md)
5. [FlapMap Übungen](05_FlatMapUebungen.md)
6. [ForComprehensions Übungen](06_ForComprehensionsUebungen.md)

Jede Markdown-Datei enthält eine Reihe von Übungen zu dem jeweiligen Konzept. Bitte lesen Sie die Anweisungen in den Dateien sorgfältig durch und bearbeiten Sie die Übungen entsprechend.

## Unterstützung

Wenn Sie Fragen zu den Übungen haben oder Unterstützung benötigen, zögern Sie nicht, Ihre Lehrperson zu fragen. Sie hilft Ihnen gerne weiter.

## Anmerkung zu den Lösungen
`_` steht für das aktuelle Element der Liste, über das die Funktion iteriert. Dadurch wird der Code lesbarer und kompakter, da wir nicht explizit benennen müssen, auf welches Element die Funktion angewendet wird.

```scala
// Beispiel mit Lambda
val doubledNumbers = numbers.map(number => number * 2)

// Beispiel kompakt
val doubledNumbers = numbers.map(_ * 2)
```