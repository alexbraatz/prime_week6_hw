$( document ).ready( readyNow );

let garage = [];

function displayCars(){
  console.log( 'in displayCars' );

  let el = $( '#cars');
  el.empty();
  for ( i in garage ){
    el.append( `<li> ${garage[i].year} ${garage[i].make} ${garage[i].model} </li>`);
  }
}

function addCar(){
  console.log( 'in addCar' );

  $( '#addCarButton' ).on( 'click', newCar( $( '#carYear' ).val(),
    $( '#carMake' ).val(), $( '#carModel' ).val() ) );
    
  $( '#carYear'  ).val('');
  $( '#carMake'  ).val('');
  $( '#carModel' ).val('');

  displayCars();
}

function readyNow(){
  let el = $( '#garageTitle' );
  el.empty();
  el.append( garage );
  $( '#addCarButton' ).on( 'click', addCar );
}

/*
Do not change newCar for base mode!
*/
function newCar(yearInput, makeInput, modelInput){
  console.log('in newCar:', yearInput, makeInput, modelInput);
  const newCarObject = {
    year: yearInput,
    make: makeInput,
    model: modelInput
  }
  garage.push(newCarObject);
  //return true;
} // end newCar
