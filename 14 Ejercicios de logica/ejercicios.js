
'use strict';
//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
//let cadena1 = '';
console.info("******ejercicio 1*******");
function ejercicio1 (cadena1 = ''){
    if (!cadena1){
        console.warn('No has ingresado ningun caracter');
    }else{
        console.log(`La cantidad de caracteres en: '${cadena1}' es de: ${cadena1.length}`);
    }
}
ejercicio1('payaso');
ejercicio1('');

//De otro modo
//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
const ejercicioone = (cadenaone = '') => 
(!cadenaone)
? console.warn('No has ingresado ningun caracter') 
: console.log(`La cantidad de caracteres en: '${cadenaone}' es de: ${cadenaone.length}`);

ejercicioone('payaso');
ejercicioone('');

console.info("****fin ejercicio 1*****");


//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
console.info("****** ejercicio 2*****");
function ejercicio2 (cadenaa = '',longitudd = undefined){
    if (!cadenaa) {
        console.warn('No has ingresado ningun texto');
        
    }else if(longitudd === undefined) {
            console.warn('No has ingresado la longitud del texto cortar');
    }else{
        console.log('El texto recortado es: ',cadenaa.slice(0,longitudd));
    }

    }
 
ejercicio2('Houston tenemos un problema',8);
ejercicio2('Houston tenemos un problema');
ejercicio2('',8);


//De otro modo
//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
const recortarTexto = (cadena = '',longitud = undefined)=>
(!cadena)
? console.warn('No has ingresado ningun caracter') 
:(longitud === undefined)
 ? console.warn('No has ingresado la longitud del texto cortar')
 :console.log('El texto recortado es: ',cadena.slice(0,longitud));

recortarTexto('Inicindo en Javascritp',8);
recortarTexto('Inicindo en Javascritp');
recortarTexto('',8);

console.info("****fin ejercicio 2*****");

console.info("****** ejercicio 3*****");
//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
function ejercicio3 (cadenaaa = '',separator = undefined){
    if (!cadenaaa) {
        console.warn('No has ingresado ningun caracter');
    }else if(separator === undefined){
        console.error('No ingresaste el caracter separador');
    }else{
        console.info(cadenaaa.split(separator));
    }
}


ejercicio3('Lorem ipsum dolor sit amet, consectetur adipisicing elit'," ");
ejercicio3('',' ');
ejercicio3('Lorem ipsum dolor sit amet, consectetur adipisicing elit');

//De otro modo
//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
const cadenaAArreglo = (cadena3 = '',separador = undefined)=>
(!cadena3)
? console.warn('No has ingresado ningun caracter') 
: (separador === undefined)
 ? console.error('No ingresaste el caracter separador')
 : console.info(cadena3.split(separador));


cadenaAArreglo('Lorem ipsum dolor sit amet, consectetur adipisicing elit'," ");
cadenaAArreglo('',' ');
cadenaAArreglo('Lorem ipsum dolor sit amet, consectetur adipisicing elit');

console.info("****fin ejercicio 3*****");


//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
console.info("****** ejercicio 4*****");

function ejercicio4(texto = ' ',repetidor = undefined){
    if (!texto) {
        return console.warn('El texto no puede estar vacio');
    } 

    if (repetidor === undefined) {
        return console.warn('No ingresaste numero de veces a repetir');
    } 

    if (repetidor === 0) {
        return console.error('No se puede repetir algo 0 veces');
    } 

    if (Math.sign(repetidor) === -1) {
        return console.error('El valor ingresado no puede ser negativo');
    } 

    for (let i = 1; i <= repetidor; i++) {
        console.info(`${texto} ${i}`);
    }
}

ejercicio4('hola mundo', 4);
ejercicio4('hola mundo', 0);
ejercicio4('hola mundo', -4);
ejercicio4('', 4);
ejercicio4('hola mundo');

console.info("****fin ejercicio 4*****");