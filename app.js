var x = 12;
if (typeof x !== "number") {
    console.log("Varijabla x", "nije broj");
}
else if (x % 2 === 0) {
    console.log("Varijabla x je parni broj, a broj u varijabli je:", x);
}
else if (x % 2 !== 0) {
    console.log("Varijabla x je neparni broj", x);
}
if (x === 0) {
    console.log("Varijabla x je:", x);
}