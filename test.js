// Importar la función sum del archivo app.js
const { sum } = require('./app.js');




// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dolar should be 146.26 yenss", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromDollarToYen(3.5);

    // Si 1 dolar son 146.26 yen, entonces 3.5 dolares debe ser (3.5 * 146.26)
    const expected = 3.5 * 146.26;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen (3.5)).toBe(511.91588785046724); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("156.5 yen should be 0.87 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYentToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromYentToPound(156.5);

    // Si 156.5 yen son un Euro entonces 313 yen son 1.74 pound
    const expected = 2 * 156.5;

    // Hago mi comparación (la prueba)

    expect(fromYentToPound (313)).toBe(1.74); // 
})