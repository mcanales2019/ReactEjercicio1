class SerVivo {
    constructor(nombre) {
      this.nombre = nombre;
    }
}
  
class Persona extends SerVivo {
    caminar() {
        console.log('Ahora ' + this.nombre + ' está caminando.');
    }
}
const persona = new Persona('Marco');
persona.caminar();