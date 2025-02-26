/**
 * filter alle namen die start met een p uit de array.
 * (enkel die met een p blijven over)
 *
 */
const namenlijst = ["Karel", "Pieter", "Pol", "Stef"];
const namenlijst2 = namenlijst.filter((naam) => !naam.startsWith("P"));
console.log(namenlijst2);
