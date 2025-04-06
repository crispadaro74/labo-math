const { add } = require('./calculator');

describe('Test per l\'operazione di addizione', () => {
  test('Somma corretta di 2 e 2 restituisce 4', () => {
    const result = add(2, 2);
    expect(result).toBe(4); // Asserzione corretta
  });

  test('Somma errata di 3 e 5 restituisce 7 (test destinato a fallire)', () => {
    const result = add(3, 5);
    expect(result).toBe(8); // Asserzione sbagliata
  });
});