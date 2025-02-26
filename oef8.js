/**
 * Bereken zijn percentage voor wiskunde
 */

const resultaten = [
  { vak: "wiskunde", punt: 6, totaal: 15 },
  { vak: "wiskunde", punt: 4, totaal: 5 },
  { vak: "nederlands", punt: 8, totaal: 15 },
  { vak: "chemie", punt: 8, totaal: 10 },
  { vak: "nederlands", punt: 8, totaal: 10 },
];
const Resultaten2 = resultaten.filter((vak) => vak.vak === "wiskunde");
const totaalbehaald = Resultaten2.reduce((som, vak) => som + vak.punt, 0);
const totaalmogelijk = Resultaten2.reduce((som, vak) => som + vak.totaal, 0);
const procentwiskunde = (totaalbehaald / totaalmogelijk) * 100;
console.log(`${procentwiskunde} %`);
