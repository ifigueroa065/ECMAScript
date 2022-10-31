async function* anotherGenerator() {
    yield await Promise.resolve(1)
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)
  }
  
  const generador = anotherGenerator()
  generador.next().then(respuesta => console.log(respuesta.value))
  generador.next().then(respuesta => console.log(respuesta.value))
  generador.next().then(respuesta => console.log(respuesta.value))

console.log('Hello')
async function arrayOfNames(array){
    for await(let value of array){
        console.log(value);
    }
}

const names= arrayOfNames(["Alexa", "Oscar", "David"]);
console.log('After');
