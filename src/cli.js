const readline = require("readline");
const { add, subtract, multiply, divide } = require("./calculator");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Benvenuto nella calcolatrice CLI!");
console.log("Operazioni disponibili:");
console.log("1. Addizione");
console.log("2. Sottrazione");
console.log("3. Moltiplicazione");
console.log("4. Divisione");

rl.question("Seleziona un'operazione (1-4): ", (operation) => {
  if (!["1", "2", "3", "4"].includes(operation)) {
    console.error("Operazione non valida. Uscita.");
    rl.close();
    return;
  }

  rl.question("Inserisci il primo numero: ", (num1) => {
    const a = parseFloat(num1);
    if (isNaN(a)) {
      console.error("Parametro non valido. Uscita.");
      rl.close();
      return;
    }

    rl.question("Inserisci il secondo numero: ", (num2) => {
      const b = parseFloat(num2);
      if (isNaN(b)) {
        console.error("Parametro non valido. Uscita.");
        rl.close();
        return;
      }

      try {
        let result;
        switch (operation) {
          case "1":
            result = add(a, b);
            break;
          case "2":
            result = subtract(a, b);
            break;
          case "3":
            result = multiply(a, b);
            break;
          case "4":
            result = divide(a, b);
            break;
        }
        console.log(`Risultato: ${result}`);
      } catch (error) {
        console.error(`Errore: ${error.message}`);
      } finally {
        console.log("Grazie per aver usato la calcolatrice CLI. Arrivederci!");
        rl.close();
      }
    });
  });
});