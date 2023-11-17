// segun como la clase se planteo la idea es no usar tanto javascript para los cambios o pues 
// la cosa es que para lo de la hamburquesa del navegador la idea seria 
// solamente que la interaccion se realiza agregando o quitando clases 
 // ya que segun indica el prog e esta forma es mas facil (agregando y quitando clases)

 // para este caso haremos que el icono de hamburguesa de la naveacion sea interactuable 
 // y que cuadno se haga scroll a la pagina ese navegacion queda fijo arriba 
 
//  //se hara una funcion que hace toggle con la intencion de agregar o quitar la clase
//  cada vez que se pulsa al boton de hamburguesa osea del nav

// .---------------------- CODIGO PARA QEU FUNCIONE EL DESPLIEGUE DEL NAVEGADOR (hamburguesa)---------------
(function () {
    let navbar=document.querySelector('#navbar');
    let hamburger=document.querySelector('#hamburger');
    hamburger.addEventListener('click',()=>{
        navbar.classList.toggle('open');
    });

})()  //OJO aqui la funcion esta dentro de parentesis (fuction...)() esto hace 
//se llaman EXPRESIONES DE FUNCIONES LLAMDAS AUTOMATICAMENTE 
//tambien llamdas IIFE ESTO HACE QUE SE LLAME LA FUNCION AUTOMATICAMENTE PERO PARECE QUE LA FUNCION
// NO DEBE TENER NOMBRE y tiene algo de sentido porque da error una funcion sin nombre porque ¿ como la
// llamaria despues en el codigo ? jajaj
// ademas lo hace para que se ejecute de una vez sin yo llamarla apenas cargue es js


// AHORA LA SIGUIENTE DUDA ME GUSTO TENERALA PARA TENER EN CUENTA 
// ¿Seria una mejor practica utilizar 'document.getElementById' en lugar de 'document.querySelector'...? o no importa realmente...

// Responder

// Xavier Reyes Ochoa en 22 de jun
// ¡Hola Jorge!

// Tanto `document.getElementById` como `document.querySelector` son métodos válidos para seleccionar elementos en el DOM, y la elección entre ellos depende del contexto y de tus necesidades específicas.

// - `document.getElementById` es una forma más específica de seleccionar un elemento, ya que se utiliza para seleccionar un elemento por su ID único. Es útil cuando sabes que el elemento que deseas seleccionar tiene un ID único y quieres hacer referencia directamente a él.

// - `document.querySelector` es más versátil, ya que permite seleccionar elementos utilizando selectores CSS. Puedes seleccionar elementos por su clase, etiqueta, atributos, etc. También puedes combinar selectores para realizar selecciones más complejas.

// En general, si solo necesitas seleccionar un elemento por su ID único, es recomendable utilizar `document.getElementById` debido a su eficiencia y claridad en el código. Sin embargo, si necesitas realizar selecciones más complejas o utilizar selectores CSS, `document.querySelector` te brinda más flexibilidad.

// ¡Espero que esta respuesta aclare tus dudas! Saludos! 🙂