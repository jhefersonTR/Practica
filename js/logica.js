
var cielo="sin seleccionar"
var temperatura="sin seleccionar"
var humedad="sin seleccionar"
var viento="sin seleccionar"


var Temperaturaaux =document.getElementById('#Temperatura');
var Vientoaux =document.getElementById('#Viento');
var Humedadaux =document.getElementById('#Humedad');

function CSoelado(){
    var cieloaux =document.getElementById('#Cielo');
    cieloaux.innerText="Soleado"
    cielo= 'Soleado'
}
function CLLuvioso(){
    var cieloaux =document.getElementById('#Cielo');
    cieloaux.innerText="Lluvioso"
    cielo= 'Lluvioso'
}
function CCubierto(){
    var cieloaux =document.getElementById('#Cielo');
    cieloaux.innerText="Cubierto"
    cielo= 'Cubierto'
}
function TCaluroso(){
  
var Temperaturaaux =document.getElementById('#Temperatura');
    Temperaturaaux.innerText='Caluroso'
    temperatura='Caluroso'
}
function TSuave(){
    var Temperaturaaux =document.getElementById('#Temperatura');
    Temperaturaaux.innerText='Suave'
    temperatura='Suave'
}
function TFrios(){
  
    var Temperaturaaux =document.getElementById('#Temperatura');
    Temperaturaaux.innerText='Fresco';
    temperatura='Fresco'
}
function HAlta(){
    var humedadaux =document.getElementById('#Humedad');
    humedadaux.innerText='Alta';
    humedad="Alta"

}
function HNormal(){
    var humedadaux =document.getElementById('#Humedad');
    humedadaux.innerText='Normal';
    humedad="Normal"
}
function HBaja(){
    var humedadaux =document.getElementById('#Humedad');
    humedadaux.innerText='Baja';
    humedad="Baja"
}
function Vfuerte(){
    var vientoaux =document.getElementById('#Viento');
    vientoaux.innerText='Fuerte';
    viento="Fuerte"
}
function Vnormal(){
    var vientoaux =document.getElementById('#Viento');
    vientoaux.innerText='Normal';
    viento="Normal"
}
function Vflojo(){
    var vientoaux =document.getElementById('#Viento');
    vientoaux.innerText='Flojo';
    viento="Flojo"
}

function Encontrardata(){

    console.log(cielo,temperatura,humedad,viento)
    if(cielo!="sin seleccionar" && temperatura!="sin seleccionar" && humedad!="sin seleccionar" && viento!="sin seleccionar"){

        if(cielo=="Soleado" && humedad=="Alta"){
            var elements =document.getElementById('#encontrado');
            elements.innerText='NO SE PUEDE JUGAR';
           
        }
        if(cielo=="Lluvioso" && viento=="Fuerte"){
            var elements =document.getElementById('#encontrado');
            elements.innerText='NO SE PUEDE JUGAR';
      
        }
        if(cielo=="Cubierto"){
            var elements =document.getElementById('#encontrado');
            elements.innerText='Si puedes JUGAR';
        
        }
        if(cielo=="Lluvioso" && viento=="Flojo"){
            
            var elements =document.getElementById('#encontrado');
            elements.innerText='Si puedes JUGAR';
        }

        if(humedad=="Normal" && viento=="Flojo"){
            var elements =document.getElementById('#encontrado');
            elements.innerText='Si puedes JUGAR';
        }
        if(cielo=="Soleado" && humedad=="Normal" ){
            var elements =document.getElementById('#encontrado');
            elements.innerText='Si puedes JUGAR';
            

        }
    }
    else {
        alert("Datos incopmpletos no se llega  a ninguna conclusion")
        var elements =document.getElementById('#encontrado');
        elements.innerText='Sin conclusion';
    }

}
