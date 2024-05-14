# Übungen mit der Datenstruktur Map

Arbeiten Sie folgende Übungen zu Map durch, nachdem Sie die [Theorie](../README.md) durchgelesen haben.

### Übung 1: werte zuweisen
Gegeben ist folgende Map `val m1: Map[String, String]`. Wie lautet die Zuweisung?
Wir wollen folgende Ausgabe:
`Map("key" -> "value")`


### Übung 2: Map aktualisieren
Gegeben ist folgende Map `val m2: Map[String, String]`. Wir wollen die Map m1 aktualisieren mit einem neuen Wertepaar.
Wir wollen folgende Ausgabe:
`Map("key" -> "value", "key2" -> "value2")`


### Übung 3: Map nochmals aktualisieren
Gegeben ist folgende Map `val m3: Map[String, String]`. Wir wollen die Map m2 aktualisieren mit einem neuen Wert.
Wir wollen folgende Ausgabe:
`Map("key" -> "value", "key2" -> "aDifferentValue")`


### Übung 4: Element entfernen
Gegeben ist die Map `val m4: Map[String, String]`. Wir wollen die Map m3 aktualisieren und den *key* entfernen.
Wir wollen folgende Ausgabe:
`Map("key2" -> "aDifferentValue")`


### Übung 5: Nach key suchen
Wir wollen den Wert aus *key* von m3: `val valueFromM3: Option[String]`

Wir wollen folgende Ausgabe:
`Some("value")`

### Übung 6: kein existierender Wert
Wir wollen den Wert aus *key* von m3: `val valueFromM4: Option[String]`, wobei wir somit keinen Wert erhalten, weil der *key* nicht existiert.

Die Ausgabe wäre somit:
`None`


### Hinweis zu `Option`

Wir werden diese Datenstruktur noch genauer kennenlernen wenn wir uns mit dem **Error Handling** befassen. Nur soviel: durch `Option` sichern wir, dass unsere Funktion keinen Fehler zur Laufzeit hat, sollte kein Wert retourniert werden.


