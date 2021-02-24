$( document ).ready( readyNow );

let garage = [];

function readyNow(){
  let el = $( '#garageTitle' );
  el.empty();
  el.append( garage );
  $( '#addCarButton' ).on( 'click', addCar );
}

function addCar(){
  console.log( 'in addCar' );

  $( '#addCarButton' ).on( 'click', newCar( $('#carYear').val(), $('#carMake').val() , $('#carModel').val() ) );
  $( '#carYear'  ).val('');
  $( '#carMake'  ).val('');
  $( '#carModel' ).val('');
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
