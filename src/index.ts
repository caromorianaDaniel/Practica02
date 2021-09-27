import {leerTeclado} from './util/entradaTeclado'
console.log("Hola Mundo")
//Creamos la variable función main que llamamos main
let main = async () => {
    const valor = await leerTeclado('Cómo te llamas')
    console.log(`Me has dicho: ${valor}`)
}
//invocamos a la función
main();
