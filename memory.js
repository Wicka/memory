var giradas=0;
var veces_giradas=0;
var juego_posicion=[];
var juego_carta=[];
var jugadas=0;
var jugadas_totales=0;
var cartas=["1","2","3","4","5","6","7","8","9","10","100","200","300","400","500","600","700","800","900","1000"];


$(document).ready(function(){
      baraja_cartas(cartas , giradas);
});

function nuevo_Juego(){

    let giradas=0;
    let veces_giradas=0;
    let juego_posicion=[];
    let juego_carta=[];
    let jugadas=0;
    let jugadas_totales=0;


    let cartas=["1","2","3","4","5","6","7","8","9","10","100","200","300","400","500","600","700","800","900","1000"];
    $("#cartas").html("");
    baraja_cartas(cartas, 0);
}

//PINTO TODAS LAS IMAGENES DE CARTAS CON 0
function baraja_cartas(cartas, giradas){
      console.log(cartas);
      cartas.sort(function() { return Math.random() - 0.5 });

      for (i=0; i<cartas.length; i++){
           $("#cartas").append("<img class='carta' id=" + i + " src='img/cartas/0.jpg' onclick='gira_carta("+ i + "," + cartas[i] + "," + 1 +")'>");
      }
}


function gira_carta(posicion, carta, giradas){

      veces_giradas = veces_giradas + giradas;
      jugadas_totales++;

      if (veces_giradas<=2){

            juego_posicion.push(posicion);
            juego_carta.push(carta);

            $("#"+ posicion).attr({"src":"img/cartas/"+ carta +".jpg"} );
            $("#"+ posicion).attr({"onclick":"oculta_carta(" + posicion + "," + carta + "," + 1 +")"} );

      }else{

          if( ( juego_carta[0] * 100 == juego_carta[1] )  || ( juego_carta[0] / 100 == juego_carta[1] ) ){

                console.log("COINCIDEN " + juego_carta[0] + " CON " + juego_carta[1]);

                $("#"+ juego_posicion[0]).attr({"class":"encontrada"} );
                $("#"+ juego_posicion[1]).attr({"class":"encontrada"} );

                $("#"+ juego_posicion[0]).attr({"onclick":""} );
                $("#"+ juego_posicion[1]).attr({"onclick":""} );

                jugadas++;

                console.log(jugadas);
                console.log(cartas.length);

                if (jugadas * 2 >= cartas.length-2){

                    console.log("GANASTESSSS !!!..!. en tan solo : " + jugadas_totales + " jugadas.");
                    alert ("GANASTESSS...!! FELICIDADES !. en tan solo : " + jugadas_totales + " jugadas." );
                    $(".carta").append({"class":"encontrada"});

                }

          }else{ // DOS CARTAS VOLTEADAS Y QUE NO COINCIDEN
                 // LAS GIRO

              $("#"+ juego_posicion[0]).attr({"src":"img/cartas/0.jpg"} );
              $("#"+ juego_posicion[0]).attr({"onclick":"gira_carta(" + juego_posicion[0] + "," + juego_carta[0] + "," + 1 +")"} );

              $("#"+ juego_posicion[1]).attr({"src":"img/cartas/0.jpg"} );
              $("#"+ juego_posicion[1]).attr({"onclick":"gira_carta(" + juego_posicion[1] + "," + juego_carta[1] + "," + 1 + ")"} );

          }

          juego_posicion=[];
          juego_carta=[];
          veces_giradas=0;
      }

}


  function oculta_carta(posicion, carta){
    console.log("Carta " + carta + " en posicion " + posicion);

    $("#"+ posicion).attr({"src":"img/cartas/0.jpg"} );
    $("#"+ posicion).attr({"onclick":"gira_carta(" + posicion + "," + carta +","+ 1 + ")"} );
  }
