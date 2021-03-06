let array = [7, 15, 26, 33, 41, 55];


function pruebaMap () {    
    const result = array.map(x => x * 2);
    console.log("El resultado es: " + result);
}

pruebaMap();

function pruebaEvery () {
  const datosMenorA100 = (currentValue) => currentValue < 100;
  console.log("Los datos menores a 100 es igual: " + array.every(datosMenorA100));
}

pruebaEvery();

function pruebaSome () {
  const datosMayorA30 = (currentValue) => currentValue > 5;
  console.log("Los datos mayores a 50 es igual: " + array.every(datosMayorA30));
}

pruebaSome();

function pruebaFilter () {
  const words = ['lunes', 'martes', 'miercoles', 'jueves', 'sabado', 'domingo'];
  const result = words.filter(word => word.length > 7);
  console.log(result);
}

pruebaFilter();
