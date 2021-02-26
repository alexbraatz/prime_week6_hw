$( document ).ready( readyNow );

let garage = [];

function displayCars(){
  console.log( 'in displayCars' );

  let el = $( '#cars');
  el.empty();
  for ( i in garage ){
    el.append( `<li> ${garage[i].year} ${garage[i].make}\: ${garage[i].model} </li>`);
  }
}

function addCar(){
  console.log( 'in addCar' );

  // logic gate to check if any fields are left blank
  if ( $('#carYear').val().length === 0 || $('#carMake').val().length === 0 || $('#carModel').val().length === 0 ) {
    console.log( "Oops, missing a field! Not able to add to garage yet. :c");
    console.log( "Please enter value in all entries");
  } else {
    $( '#addCarButton' ).on( 'click',
    newCar( $( '#carYear' ).val(), $( '#carMake' ).val(), $( '#carModel' ).val() )
  ); // all fields are entered? car is added to the garage with newCar function
  } // end logic gate

  // clear values of input boxes
  $( '#carYear'  ).val('');
  $( '#carMake'  ).val('');
  $( '#carModel' ).val('');

  // display cars in garage to DOM
  displayCars();
}

function readyNow(){
  let el = $( '#garage' );
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
