/**
 * maak een nieuwe array - enkel met wiskunde
 */

const resultaten = [
  { vak: "wiskunde", punt: 6, totaal: 10 },
  { vak: "wiskunde", punt: 4, totaal: 5 },
  { vak: "nederlands", punt: 8, totaal: 10 },
  { vak: "chemie", punt: 8, totaal: 15 },
  { vak: "nederlands", punt: 8, totaal: 10 },
];
resultaten2 = resultaten.filter((vak) => vak.vak === "wiskunde");
console.log(resultaten2);
