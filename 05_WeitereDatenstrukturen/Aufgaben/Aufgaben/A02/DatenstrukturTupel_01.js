function wetterFunktion() {
    const wetterbeschreibung = "sonnig"; // Hier könntest du eine zufällige oder tatsächliche Wetterbeschreibung verwenden
    const aktuelleZeit = new Date().toLocaleTimeString();
    const aktuelleTemperatur = 23.5; // Hier könntest du eine tatsächliche Temperatur verwenden oder berechnen

    return [wetterbeschreibung, aktuelleZeit, aktuelleTemperatur];
}

const [beschreibung, zeit, temperatur] = wetterFunktion();
console.log(`Wetterbeschreibung: ${beschreibung}`);
console.log(`Aktuelle Zeit: ${zeit}`);
console.log(`Aktuelle Temperatur: ${temperatur}°C`);
