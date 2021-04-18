var giradas=0;
var veces_giradas=0;
var juego=[];
var juego_carta=[];
$(document).ready(function(){
    var cartas=["1","2","3","4","5","6","7","8","9","10","100","200","300","400","500","600","700","800","900","1000"];

baraja_cartas(cartas , giradas);
});

//PINTO TODAS LAS IMAGENES DE CARTAS CON 0
function baraja_cartas(cartas, giradas){

  cartas.sort(function() { return Math.random() - 0.5 });

  console.log(cartas)
  for (i=0; i<cartas.length; i++){
       $("#cartas").append("<img class='carta' id=" + i + " src='img/cartas/0.png' onclick='gira_carta("+ i + "," + cartas[i] + "," + 1 +")'>");
  }
}

function gira_carta(posicion, carta, giradas){
  veces_giradas = veces_giradas + giradas;

  if (veces_giradas<=2){
      juego.push(posicion);
      juego_carta.push(carta);

      $("#"+ posicion).attr({"src":"img/cartas/"+ carta +".png"} );
      $("#"+ posicion).attr({"onclick":"oculta_carta(" + posicion + "," + carta + "," + 1 +")"} );

  }else{

      if( ( juego_carta[0] * 100 == juego_carta[1] )  || ( juego_carta[0] / 100 == juego_carta[1] ) ){
          console.log("COINCIDEN " + juego_carta[0] + " CON " + juego_carta[1])
          $("#"+ juego_carta[0]).attr({"class":"encontrada"} );
          $("#"+ juego_carta[1]).attr({"class":"encontrada"} );

      }else{
        $("#"+ juego[0]).attr({"src":"img/cartas/0.png"} );
        $("#"+ juego[0]).attr({"onclick":"gira_carta(" + juego[0] + "," + juego_carta[0] + "," + 1 +")"} );

        $("#"+ juego[1]).attr({"src":"img/cartas/0.png"} );
        $("#"+ juego[1]).attr({"onclick":"gira_carta(" + juego[1] + "," + juego_carta[1] + "," + 1 + ")"} );

      }

      juego=[];
      juego_carta=[];
      veces_giradas=0;
  }

}


  function oculta_carta(posicion, carta){
    console.log("Carta " + carta + " en posicion " + posicion);

    $("#"+ posicion).attr({"src":"img/cartas/0.png"} );
    $("#"+ posicion).attr({"onclick":"gira_carta(" + posicion + "," + carta +","+ 1 + ")"} );
  }
