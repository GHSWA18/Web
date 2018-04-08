
angular.
  module('parcelConfig').
  component('parcelSize', {
	  transclude: true,
	  template:
    	'<div class="w3-panel w3-card-2">'+
        '<div class="w3-container w3-teal">'+
          '<h2>Paketgröße</h2>'+
        '</div>' +
        '<form class="w3-container">'+
        '<div class="w3-cell">'+
       
        
        



        '<div class="w3-container">' +

        /*'<form oninput="sizeofparcel.value=parceInt(length.value)+2*parseInt(width.value)+2*parseInt(depth.value))">' + */

        '<label>Länge</label>' +
        '<input class="w3-input" id="length" type="text">'  +
        '<label>Breite</label>' +
        '<input class="w3-input" id="width" type="number">' +
        '<label>Tiefe</label>' +
        '<input class="w3-input" id="depth" type="number">' +
        '<div class="w3-container"> '+
          '<button class="w3-button w3-teal" onclick="computeSize()">Größe berechnen</button>'+
          '<p id="size"></p> '+
          '<div class="w3-left-align">Paketgröße:</></div>' +

        '</div>' +



        '<script>' +
        'function computeSize() { document.getElementById("size").innerHTML = "4"; }' +
        '</script>' +

/*
        '<p>Click the button to trigger a function that will output "Hello World" in a p element with id="demo".</p>' +

        '<button onclick="myFunction()">Click me</button>' +

        '<p id="demo"></p>' + */


'<script>' +
'function myFunction() {' +
 '   document.getElementById("demo").innerHTML = "Hello World";' +
'}' +
'</script> '+




        /*'</form>' +*/


       /* ' <form oninput="x.value=parseInt(a.value)+parseInt(b.value)">0 ' +
           ' <input type="range" id="a" value="50">100 ' +
           ' +<input type="number" id="b" value="50"> ' +
           ' =<output name="x" for="a b"></output> ' +*/

' </form> ' +
        '</div>' +
        

       


        '</form>'+
        '</div>'


  });
  
 
  