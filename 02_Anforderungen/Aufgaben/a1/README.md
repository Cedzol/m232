# Aufgabe 1 - Beispiele umsetzen

## Beispiel 1 - Eine Reise planen

### 1. addDestination

- **Beschreibung:** Fügt eine neue Destination zur Route hinzu.  
- **Parameter:** Eine Liste von Destinationen (List<String>) und eine neue Destination (String).  
- **Rückgabewert:** Eine aktualisierte Liste von Destinationen (List<String>).  

### 2. removeDestination

- **Beschreibung:** Entfernt eine bestehende Destination von der Route.  
- **Parameter:** Eine Liste von Destinationen (List<String>) und die zu entfernende Destination (String).  
- **Rückgabewert:** Eine aktualisierte Liste von Destinationen (List<String>).  

### 3. updateDestination

- **Beschreibung:** Ändert eine bestehende Destination in der Route.  
- **Parameter:** Eine Liste von Destinationen (List<String>), die alte Destination (String) und die neue Destination (String).  
- **Rückgabewert:** Eine aktualisierte Liste von Destinationen (List<String>).  

### 4. getRoute

- **Beschreibung:** Gibt die aktuelle Route zurück.
- **Parameter:** Eine Liste von Destinationen (List<String>).
- **Rückgabewert:** Eine Liste von Destinationen (List<String>).

## Beispiel 2 - Autorennen

### 1. calculateTotalTimePerCar

- **Beschreibung:** Berechnet die gesamte Zeit für alle Runden eines Autos, wobei die erste Runde (Warm-up) nicht mitgezählt wird.  
- **Parameter:** Eine Liste von Rundenzeiten (z.B. List<Double>).  
- **Rückgabewert:** Die gesamte Zeit als double.

### calculateAverageTimePerCar

- **Beschreibung:** Berechnet die Durchschnittszeit pro Auto, wobei die erste Runde (Warm-up) nicht mitgezählt wird.  
- **Parameter:** Eine Liste von Rundenzeiten (z.B. List<Double>).  
- **Rückgabewert:** Die Durchschnittszeit als double.

### calculateTotalTimeForAllCars

- **Beschreibung:** Berechnet die gesamte Zeit für alle Autos über alle Runden, wobei die ersten Runden (Warm-up) nicht mitgezählt werden.  
- **Parameter:** Eine Liste von Listen von Rundenzeiten für jedes Auto (z.B. List<List<Double>>).  
- **Rückgabewert:** Die gesamte Zeit als double.

### calculateAverageTimeForAllCars

- **Beschreibung:** Berechnet die Durchschnittszeit pro Runde für alle Autos, wobei die ersten Runden (Warm-up) nicht mitgezählt werden.  
- **Parameter:** Eine Liste von Listen von Rundenzeiten für jedes Auto (z.B. List<List<Double>>).  
- **Rückgabewert:** Die Durchschnittszeit als double.
