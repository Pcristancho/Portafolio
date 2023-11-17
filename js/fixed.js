// ESTE CODIGO ES PARA QUE AL HACER SCROOL EN LA VENTANA, la parte del menu de navegador se quede fijo arriba 
(function(){
    let navbar=document.querySelector('#navbar'); //identifica la barra de navegacion
    let main=document.querySelector('main'); // identifica al main proque se necesita para comparar en que posicion esta el nav del main
    let navbarHeight=navbar.getBoundingClientRect().height; //obtiene la altura de navbar
    let breackpoint=main.offsetTop-navbarHeight;//obtine la diferencia de especio que ocupa el navbar , esto es util porque si quiero mantener fijo el navbar, resulta qeu el espacio se rellena con 
                                                // el main y no quiero eso porque se mueve el main para rellnar, enonces tomo la medida para luego 
                                                // añadirla como espacio top al main y cuando vuelva pues se quita ese espacio 
    let windowPos;
    let isFixed=false; // controla si esta fijo o no 
    function updatePos(){
        windowPos=window.scrollY; // obtine la posiion del window la hacer scroll , si estoy en la pagina principal en pura arriba seria 0 , y a medida que bajo aumenta a 10, 20 ,100 y asi
                                    // cada qeu pongo a ejecutar la instruccion 
    }
    function onScroll(){ //aqui sucede la magia
        //retiro la clase open por si al caso y cuando se haga escroll la navbar esta expandida para que cierre si o si
        updatePos();//miro que posicion estoy para estar pendiente
        //console.log(windowPos,breackpoint);//verifico valor para saber breakppoint
        
        if(windowPos>= breackpoint && isFixed==false){ // si ya llegue al scroll que lleve a navbar, ahi pongo que se quede fixed o quieto para que de ahi a abajo se muestre 
            navbar.classList.remove('open');
            navbar.classList.add('navbar-fixed'); //la clase que lo hace fijo ya configurada en css
            main.style.cssText="margin-top: "+navbarHeight+"px"; //cambia la propiedad css del main para agregar el top y que mantenga el espacio qeu se quita al tener fijjo o fixed el navbar
            isFixed=true;
        }else if(windowPos< breackpoint && isFixed==true){//cuando regurese arriba debo dejarlo como estaba
            navbar.classList.remove('navbar-fixed');//quita el fixed al navbar
            main.style.cssText="margin-top: "+0;//retiro el espacio colocado de que cuadno el navbar no esta en el top del main
            isFixed=false;
        }
    }
    document.addEventListener('scroll',onScroll);//añade el evento para que se ejeute esto cada qeu hace scroll                                            
})()