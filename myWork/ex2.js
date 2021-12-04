let square = {
    area () {return  this.side * this.side},
    side: 10
};

square.area(); // 100

function distance(p1, p2) {

    //p1 and p2 are formal parameter
  
    console.log(typeof p1); //object
  
    console.log(typeof p2); //object // ** - The exponentiation assignment operator
  
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
  
  }
  
  
  
  let point1 = { x: 1, y: 1 };
  
  let point2 = { x: 2, y: 2 };
  
  console.log(distance(point1, point2)); //point1 and point2 are actual parameter
  
  //1.4142135623730951