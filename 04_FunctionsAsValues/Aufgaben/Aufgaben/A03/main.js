let worker1 = {
    name: "Max Mustermann",
    sector: "IT",
    gehalt: 50000
    }

let worker2 = {
        name: "Erika Musterfrau",
        sector: "Marketing",
        gehalt: 45000
    }

let worker3 = {
        name: "Klaus Klein",
        sector: "IT",
        gehalt: 55000
    }

let worker4 = {
    name: "Julia Gross",
    sector: "HR",
    gehalt: 40000
}

let workers = [worker1, worker2, worker3, worker4]
workers = workers.filter(x => x.sector === "IT" && x.gehalt >= 50000).map(x => x = x.name.split(" ")[0].toUpperCase())


let kurse = [
    "Programmierung in Scala",
    "Datenbanken",
    "Webentwicklung mit JavaScript",
    "Algorithmen und Datenstrukturen"
]

kurse = kurse.filter(x => x.includes("Daten")).map(x => x.replace(new RegExp(" ", "g"), '')).sort((a, b) => b.localeCompare(a))

console.log(workers)
console.log(kurse)