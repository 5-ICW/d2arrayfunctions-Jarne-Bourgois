/**
 * maak een nieuwe array met:
 * totaal wiskunde
 * totaal nederlands
 * totaal chemie
 *
 */

const resultaten = [
  { vak: "wiskunde", punt: 6, totaal: 10 },
  { vak: "wiskunde", punt: 4, totaal: 10 },
  { vak: "nederlands", punt: 8, totaal: 10 },
  { vak: "chemie", punt: 8, totaal: 10 },
  { vak: "nederlands", punt: 8, totaal: 10 },
];
totaalWiskunde = resultaten.filter((vak) => vak.vak === "wiskunde");
totaalWiskundePunt = totaalWiskunde.reduce((som, vak) => som + vak.punt, 0);
totaalWiskundeTotaal = totaalWiskunde.reduce((som, vak) => som + vak.totaal, 0);
totaalNederlands = totaalNederlands = resultaten.filter(
  (vak) => vak.vak === "nederlands"
);
totaalNederlandsPunt = totaalNederlands.reduce((som, vak) => som + vak.punt, 0);
totaalNederlandsTotaal = totaalNederlands.reduce(
  (som, vak) => som + vak.totaal,
  0
);
totaalChemie = resultaten.filter((vak) => vak.vak === "chemie");
console.log(totaalChemie);
console.log(totaalWiskunde);
console.log(totaalNederlands);
