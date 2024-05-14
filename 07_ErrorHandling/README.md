![TBZ Logo](../x_gitres/tbz_logo.png)
# Error Handling


<!-- TOC -->
- [Error Handling](#error-handling)
  - [Lernziele:](#lernziele)
  - [Daten «von aussen» behandeln](#daten-von-aussen-behandeln)
  - [Behandlung von möglichen Fehlern in Scala: mit OPTION](#behandlung-von-möglichen-fehlern-in-scala-mit-option)
    - [Aufgabe: mit Option arbeiten](#aufgabe-mit-option-arbeiten)
  - [Verwendung von *orElse* um weitere Varianten abzudecken](#verwendung-von-orelse-um-weitere-varianten-abzudecken)
    - [Fazit: orElse als conditional recovery](#fazit-orelse-als-conditional-recovery)
  - [Besser informiert bei Fehler: mit *Either*](#besser-informiert-bei-fehler-mit-either)
  
 
<!-- TOC -->


## Lernziele:
* Ich weiss, wie man potenzielle Fehler in einer Funktion behandelt
* Ich kenne Möglichkeiten, die Fehler so zu behandeln, dass die Funktion pure bleibt 

## Exkurs Testing
Testing in der funktionalen Programmierung wird dank der pure Functions sehr viel einfacher - das haben Sie bereits gelernt. Beim Testing selbst wird auch der deklarative Ansatz verwendet, um die Testcases zu beschreiben (das erwartete Zielverhalten zu beschreiben und nicht wie konkret getestet werden soll). Deshalb wurde eine neue Art des Testings bzw. der Beschreibung von Testcases geschaffen. Erfahren Sie im [Exkurs Testing](./Testing.md) mehr dazu. 

## Daten «von aussen» behandeln

Sehr oft müssen sich unsere Applikation um rohe Daten kümmern, die wir «von aussen» erhalten (z.bsp. von einem Web-Service oder von einer Datenbank).
Beispiel:
Wir erhalten rohe Daten über TV Serien mit dem Format
``` 
TITLE (YEAR_START – YEAR_END)
``` 

Nur ist nicht garantiert, dass alle Daten genau dieses Format einhalten. Wenn wir also eine parse-Funktion schreiben wollen, müssen wir auch damit rechnen, dass wir korrupte Daten erhalten.
Ein falscher Ansatz wäre, dass unsere Funktion dann einfach eine Exception wirft, falls das Format nicht korrekt ist.
Unsere Applikation würde dann zwar nicht abstürzen, aber wir brechen eine der drei Regeln, damit unsere Funktion pure bleibt. Wenn wir Exceptions werfen, wird unsere Funktion impure, weil wir folgende Regel verletzen: *wir retournieren nicht mehr einen eindeutigen Wert (single value)*.

In Java wäre das:

```
try {
	return parseShow (invalidRawShow);
} catch (Exception e) {
	return null;
}
```

Wir könnten auch nur eine Exception werfen und unser «Klient» muss sich dann um die Exception kümmern – jedoch verlagern wir das Problem einfach und unser Klient muss sich um zwei Return-Varianten kümmern, einen für korrekte Werte und einen für Exceptions / Null-Werte. 
Somit wäre unserer Funktion nicht mehr zu trauen. Sie kann richtige Werte retournieren, sie kann aber auch null retournieren. Das ist ein schlechter Programmierstil in der funktionalen Programmierung.



## Behandlung von möglichen Fehlern in Scala: mit OPTION

Scala hat dafür den Datentyp `OPTION` um mögliche Fehler zu kapseln.
Option besteht aus zwei konkreten Sub-Types: `Some[A]` und `None`.
Wir können somit eine Funktion so definieren:

```
def parseShow(rawShow : String) : Option[TvShow]
```

Unsere Funktion nimmt roheDaten vom Typ String entgegen und retourniert den Typ Option. 
Falls der String korrekt formatiert ist, retournieren wir `Some[TvShow]`. Falls das Format korrupt ist, erhalten wir `None`. None ist immer noch ein korrekter Wert entspricht nicht einem Null-Wert und auch keiner Exception. Wir erfüllen somit die Regel, das stets ein bestimmter Wert retourniert wird.

Die *parseShow* Funktion wird sich aus **weiteren Funktionen** zusammensetzen, damit wir unseren Input TITLE (YEAR_START - YEAR_END) korrekt parsen können:

```
def parseShow(rawShow: String): Option[TvShow] = {
      for {
        name      <- extractName(rawShow)
        yearStart <- extractYearStart(rawShow)
        yearEnd   <- extractYearEnd(rawShow)
      } yield TvShow(name, yearStart, yearEnd)
    }
```
Diesen for-Ausdruck haben Sie bereits kennengelernt: es handelt sich um eine *for-comprehension*.
Jede dieser Funktionen (extractName, extractYearStart, extractYearEnd) retourniert den Typ Option. 

Bei einem korrekten Input *Mad Men (2007-2015)* wird *Some(TvShow("Mad Men", 2007, 2015))* retourniert.

Bei einem falschen Input *Mad Men (-2015)* würde die Funktion extractYearEnd zwar einen Wert retournieren, jedoch nicht die Funktion extractYearStart, welche `None`retourniert. None führt dazu, dass die Funktion extractYearEnd nicht ausgeführt wird und das Endergebnis wird zu None.


Wenn wir Option verwenden, sind wir gezwungen uns um Fehler zu kümmern.
Hier definieren wir eine Funktion, die sich nur um das Anfangsjahr der TV-Serie kümmert. Also um YEAR_START:

```
def extractYearStart(rawShow: String): Option[Int] = {
      val bracketOpen = rawShow.indexOf('(')
      val dash        = rawShow.indexOf('-')
      val yearStrOpt  =
        if (bracketOpen != -1 && dash > bracketOpen + 1) Some(rawShow.substring(bracketOpen + 1, dash)) else None
      yearStrOpt.map(yearStr => yearStr.toIntOption).flatten
    }

```
Die immutable Variable `yearStrOpt` definiert sich über eine Bedingung: falls die öffnende Klammer existiert, gefolgt von einem Bindestrich (dash), dann haben wir einen Wert, ansonsten ist der Wert `None`. 
Übrigens haben wir auch hier wieder zwei Funktionen, die wir angetroffen haben: `map` und `flatten`. Wir können auch hier eine **for-comprehension** anwenden, um diese beiden Funktionen zu vereinen:

```
def extractSingleYear(rawShow: String): Option[Int] = {
    val dash         = rawShow.indexOf('-')
    val bracketOpen  = rawShow.indexOf('(')
    val bracketClose = rawShow.indexOf(')')
    for {
      yearStr <- if (dash == -1 && bracketOpen != -1 && bracketClose > bracketOpen + 1)
                   Some(rawShow.substring(bracketOpen + 1, bracketClose))
                 else None
      year    <- yearStr.toIntOption
    } yield year
  }

```

### Aufgabe: mit Option arbeiten 

Wie würden die beiden anderen Funktionen aussehen? Konkret:

```
def extractName(rawShow: String): Option[String]
def extractYearEnd(rawShow: String): Option[Int]

```
Bei *TvShow* handelt sich um folgenden Datentyp:
``` case class TvShow(title: String, start: Int, end: Int) ```

**Zeigen Sie Ihre Lösungen der Lehrperson und laden Sie den Code in Ihr Repository.**


## Verwendung von *orElse* um weitere Varianten abzudecken

Wie wir oben gesehen haben, wird `None` retourniert, falls das Format der Rohdaten fehlerhaft ist. Also nochmals: 
Bei einem falschen Input *Mad Men (-2015)* würde die Funktion extractYearEnd zwar einen Wert retournieren, jedoch nicht die Funktion extractYearStart, welche `None`retourniert.
Und was machen wir, falls wir Rohdaten erhalten, mit einer TV Serie die z.bsp. nur in einem Jahr ausgestrahlt wurde? Also z.Bsp. "Chernobyl (2019)". Auch diesen Fall müssen wir ohne Fehler parsen.

Wir können dieses Szenario verbessern, indem wir eine *orElse Funktion* definieren. Falls extractYearStart keinen Wert ergibt, dann soll als Alternative *nur ein Jahr* ausgelesen werden. Also z.Bsp. so:

```
def parseShow(rawShow: String): Option[TvShow] = {
    for {
      name      <- extractName(rawShow)
      yearStart <- extractYearStart(rawShow).orElse(extractSingleYear(rawShow))
      yearEnd   <- extractYearEnd(rawShow).orElse(extractSingleYear(rawShow))
    } yield TvShow(name, yearStart, yearEnd)
  }
```

Mittels `orElse` können wir bei Option eine Alternative anbieten, so dass trotzdem ein Wert retourniert wird und kein None:

```
def extractSingleYear(rawShow: String): Option[Int] = {
    val dash         = rawShow.indexOf('-')
    val bracketOpen  = rawShow.indexOf('(')
    val bracketClose = rawShow.indexOf(')')
    for {
      yearStr <- if (dash == -1 && bracketOpen != -1 && bracketClose > bracketOpen + 1)
                   Some(rawShow.substring(bracketOpen + 1, bracketClose))
                 else None
      year    <- yearStr.toIntOption
    } yield year
  }
```

### Fazit: orElse als conditional recovery

Unsere Funktion parseShow verwendet wiederum Funktionen, die wiederum mittels *orElse* eine weitere Funktion als Alternative verwenden können. Falls ein Fehler auftritt wird diese Alternative ausgeführt.
Somit ist es nun möglich, folgende Anforderungen abzudecken:
 
* Die Applikation kann Rohdaten vom Format TITLE (YEAR_START-YEAR_END) parsen
* Die Applikation kann Rohdaten vom Format TITLE (YEAR) parsen



## Besser informiert bei Fehler: mit *Either*

Option retourniert den Typ None, falls ein Fehler auftritt. Mit Either kann anstatt None eine Meldung retourniert werden.

Beispiel:

```
def extractName(show: String): Either[String, String] = {
        val bracketOpen = show.indexOf('(')
        if (bracketOpen > 0) 
        Right(show.substring(0, bracketOpen).trim)
        else 
        Left(s "Can't extract name from $show")
      }
```

`Either` hat zwei Subtypes: `Right` und `Left`, wobei Right einen korrekten Wert zurückgibt, während bei Left üblicherweise eine Fehlermeldung retourniert wird.

