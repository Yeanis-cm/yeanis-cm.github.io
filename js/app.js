//Función que SUMA 2 números.

function sumar() { //Se define la función, esta debe ser escrita igual que en el onclick del boton 
    var x,y,suma; 

    x=parseInt(document.getElementById("n1").value); //getElementById capta el dato del input tomando como dirección el id 
    y=parseInt(document.getElementById("n2").value); 
    suma=x+y;

   document.getElementById("resultado_suma").innerHTML = "La suma es: "+ suma;
}

//Función que RESTA 2 números.
function restar() { //Se define la función, esta debe ser escrita igual que en el onclick del boton 
    var x,y,resta; 

    x=parseInt(document.getElementById("n1").value); //getElementById capta el dato del input tomando como dirección el id 
    y=parseInt(document.getElementById("n2").value); 
    resta=x-y;

   document.getElementById("resultado_resta").innerHTML = "La resta es: "+ resta;
}

//Función que MULTIPLICA 2 números.
function multiplicar() { //Se define la función, esta debe ser escrita igual que en el onclick del boton 
    var x,y,multi; 

    x=parseInt(document.getElementById("n1").value); //getElementById capta el dato del input tomando como dirección el id 
    y=parseInt(document.getElementById("n2").value); 
    multi=x*y; //multi=prseInt(x) * parseInt(y)
   document.getElementById("resultado_multi").innerHTML = "La multiplicación es: "+ multi;
}

//Función que DIVIDE 2 números.
function dividir() { //Se define la función, esta debe ser escrita igual que en el onclick del boton 
    var x,y,division; 

    x=parseFloat(document.getElementById("n1").value); //getElementById capta el dato del input tomando como dirección el id 
    y=parseFloat(document.getElementById("n2").value); 
    division=x/y; //multi=prseInt(x) * parseInt(y)
   document.getElementById("resultado_division").innerHTML = "La división es: "+ division;
}