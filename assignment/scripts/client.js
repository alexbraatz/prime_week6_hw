$( document ).ready( readyNow );

let garage = [];

// begin displayCars
function displayCars(){
  console.log( 'in displayCars' );

  // let pics = $( '#photos' );
  // pics.empty();
  let el = $( '#cars');
  el.empty();
  for ( i in garage ){
    el.append( `<li> ${garage[i].year} ${garage[i].make}\: ${garage[i].model} </li>`);
    const image = document.createElement('img')
    image.src = garage[i].photo
    document.querySelector('#cars').appendChild(image);
    // image = new Image();
    // image.src = garage[i].photo;
    // image.onload = function () {
    //   $('#photos').empty().append(image);
    // };
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
  }
  else {
    // logic gate to check if any fields are left blank
    if ( ( $('#carYear').val().length === 0 || $('#carMake').val().length === 0 )
        || $('#carModel').val().length === 0 ) {
      console.log( "Oops, missing a field! Not able to add to garage yet :c");
      console.log( "Please enter value in all entries");
    } else {
      $( '#addCarButton' ).on( 'click',
      newCar( $( '#carYear' ).val(), $( '#carMake' ).val(), $( '#carModel' ).val(),
              $( '#carPhoto').val() ) );
      // all fields are entered? car is added to the garage with newCar function
      $( '#carYear'  ).val('');
      $( '#carMake'  ).val('');
      $( '#carModel' ).val('');
      $( '#carPhoto'   ).val('');
      // clear values of input boxes
    } // end inner if-logic gate

  } // end outer if-logic
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
function newCar(yearInput, makeInput, modelInput, photoInput){
  console.log('in newCar:', yearInput, makeInput, modelInput, photoInput);
  const newCarObject = {
    year: yearInput,
    make: makeInput,
    model: modelInput,
    photo: photoInput
  }
  garage.push(newCarObject);
  //return true;
} // end newCar
