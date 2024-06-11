const wetterDaten = [
    ["Berlin", "sonnig", 25],
    ["München", "regnerisch", 18],
    ["Hamburg", "bewölkt", 22],
    ["Köln", "sonnig", 28],
    ["Frankfurt", "regnerisch", 19]
];

function filterWarmeStaedte(daten, temperaturGrenze) {
    return daten.filter(([stadt, wetter, temperatur]) => temperatur > temperaturGrenze);
}

const warmeStaedte = filterWarmeStaedte(wetterDaten, 20);

warmeStaedte.forEach(([stadt, wetter, temperatur]) => {
    console.log(`Stadt: ${stadt}, Wetter: ${wetter}, Temperatur: ${temperatur}°C`);
});
