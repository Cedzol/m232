
## Summe der Ergebnisse von zwei Würfelwürfen nach einer Sekunde Verzögerung

Beschreibung:
Dieser Code blockiert den Ablauf für eine Sekunde (IO.sleep(1.second)) und führt dann zwei parallele Würfelwürfe (rollDice()) aus. Die Ergebnisse der beiden Würfelwürfe werden parallel gesammelt (parSequence), und anschließend wird die Summe der beiden Ergebnisse berechnet und zurückgegeben.

## Speichern und Abrufen von zwei Würfelergebnissen in einer Referenz

Beschreibung:
Dieser Code erstellt eine referenzierte Liste (Ref.of[IO, List[Int]]) zum Speichern von Würfelergebnissen. Es definiert einen Würfelwurf (singleCast), der das Ergebnis des Wurfs in der referenzierten Liste speichert. Zwei solcher Würfelwürfe werden parallel ausgeführt (parSequence), und am Ende wird die Liste der gespeicherten Würfelergebnisse zurückgegeben.

## Speichern und Abrufen von drei Würfelergebnissen in einer Referenz
Beschreibung:
Dieser Code ist ähnlich wie der vorherige, speichert jedoch drei anstelle von zwei Würfelergebnissen. Es wird eine referenzierte Liste (Ref.of[IO, List[Int]]) erstellt, und drei Würfelwürfe werden parallel ausgeführt und in der referenzierten Liste gespeichert. Am Ende wird die Liste der gespeicherten Würfelergebnisse zurückgegeben.

## Zählen der Anzahl der Sechsen bei 100 Würfeln
Beschreibung:
Dieser Code zählt, wie oft die Zahl 6 bei 100 parallelen Würfelwürfen erscheint. Es wird eine referenzierte Variable (Ref.of[IO, Int]) erstellt, um die Anzahl der Sechsen zu speichern. Jeder Würfelwurf überprüft, ob das Ergebnis 6 ist und erhöht gegebenenfalls den Zähler. 100 solcher Würfelwürfe werden parallel ausgeführt (parSequence), und am Ende wird die Anzahl der gezählten Sechsen zurückgegeben.

## Summe der Ergebnisse von 100 Würfelwürfen nach je einer Sekunde 
Beschreibung:
Dieser Code führt 100 parallele Würfelwürfe aus, wobei jeder Wurf nach einer Verzögerung von einer Sekunde ausgeführt wird. Die Ergebnisse aller Würfelwürfe werden parallel gesammelt (parSequence), und anschließend wird die Summe aller Ergebnisse berechnet und zurückgegeben.