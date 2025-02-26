/**
 * bereken het gemiddelde van de punten
 */

const resultaten = [
  { vak: "wiskunde", punt: 6, totaal: 15 },
  { vak: "wiskunde", punt: 4, totaal: 5 },
  { vak: "nederlands", punt: 8, totaal: 15 },
  { vak: "chemie", punt: 8, totaal: 10 },
  { vak: "nederlands", punt: 8, totaal: 10 },
];
const totaalpunten = resultaten.reduce((som, vak) => som + vak.punt, 0);
const totaalmogelijk = resultaten.reduce((som, vak) => som + vak.totaal, 0);
const gemiddeldprocent = (totaalpunten / totaalmogelijk) * 100;

console.log(gemiddeldprocent);
