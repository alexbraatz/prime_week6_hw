$( document ).ready( readyNow );

let garage = [];

// begin displayCars
function displayCars(){
  console.log( 'in displayCars' );

  let el = $( '#cars');
  el.empty();
  for ( i in garage ){
    el.append( `<li> ${garage[i].year} ${garage[i].make}\: ${garage[i].model} </li>`);
  }
} // end displayCars

// begin isGarageFull
function isGarageFull(){
  if ( garage.length === 3 ){
    return true
  }
} // end isGarageFull

// begin addCar
function addCar(){
  console.log( 'in addCar' );

  // logic to check if you can add more cars to garage. If it's full,
  // addCar function will be disabled
  if( isGarageFull() ) {
    console.log( "Garage is full! No more cars.")
  } else {
    // logic gate to check if any fields are left blank
    if ( ( $('#carYear').val().length === 0 || $('#carMake').val().length === 0 )
        || $('#carModel').val().length === 0 ) {
      console.log( "Oops, missing a field! Not able to add to garage yet :c");
      console.log( "Please enter value in all entries");
    } else {
      $( '#addCarButton' ).on( 'click',
      newCar( $( '#carYear' ).val(), $( '#carMake' ).val(), $( '#carModel' ).val() ));
      // all fields are entered? car is added to the garage with newCar function
      $( '#carYear'  ).val('');
      $( '#carMake'  ).val('');
      $( '#carModel' ).val('');
      // clear values of input boxes
    } // end inner if logic gate
  } // end outer if logic
  displayCars();
  // display cars in garage to DOM
} // end addCar

// begin readyNow function
function readyNow(){
  let el = $( '#garage' );
  el.empty();
  el.append( garage );
  $( '#addCarButton' ).on( 'click', addCar );
} // end readyNow function

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
