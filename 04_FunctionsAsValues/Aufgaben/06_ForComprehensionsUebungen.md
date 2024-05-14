## Übungen zu For Comprehensions

### Übung 1
Schreiben Sie eine for-Comprehension, die eine Liste von Ganzzahlen von 1 bis 10 durchläuft und jede Zahl quadriert.

Tipp: Sie können Zahlenlisten ganz einfach so generieren: `val numbers = 1 to 10`


### Übung 2
Schreiben Sie eine for-Comprehension, die eine Liste von Ganzzahlen von 1 bis 20 durchläuft und nur die geraden Zahlen auswählt.

### Übung 3
Gegeben sind zwei Listen von Strings: colors und fruits. Schreiben Sie eine for-Comprehension, die alle möglichen Paare aus einer Farbe und einer Frucht generiert.

```scala
val colors = List("Red", "Green", "Blue")
val fruits = List("Apple", "Banana", "Orange")
```

### Übung 4

Gegeben sind zwei Listen von Benutzern (users) und deren Aufgaben (tasks). Jeder Benutzer hat eine Liste von Aufgaben. Schreiben Sie eine for-Comprehension, die alle Kombinationen von Benutzer und Aufgabe anzeigt, aber nur diejenigen, bei denen die Aufgabe nicht abgeschlossen ist.

```scala
case class User(name: String, tasks: List[String])

val users = List(
  User("Alice", List("Task 1", "Task 2", "Task 3")),
  User("Bob", List("Task 1", "Task 4", "Task 5")),
  User("Charlie", List("Task 2", "Task 3", "Task 6"))
)

val tasksCompleted = List("Task 1", "Task 3", "Task 5")

// TODO find pending tasks for each User
```
