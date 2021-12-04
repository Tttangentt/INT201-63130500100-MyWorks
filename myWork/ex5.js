
let products = [  
    { id: 1, price: 10 },  
    { id: 2, price: 5 }
];
    
let newProduct = { id: 3, price: 20 };
console.log(products);
products = [...products, { id: newProduct.id, price: newProduct.price }];

//destructuring +rest parameter

function getStudentsInClass(instructor, ta, ...students) {
    return students; 
  }
  
  let studentSec2 = getStudentsInClass('Umaporn', 'Tisanai', 'A', 'B', 'C');
  console.log(studentSec2);
   
  [instructor, ta, ...student] = ['Umaporn', 'Tisanai', 'A', 'B', 'C'];
  console.log(student);

const myFunc = (instructor,ta, ...student) => {let a = 0; return student};
console.log(myFunc(1,2,3))

const echo = text => text;

const sayHi = (greeting,name) => `${greeting},${name}`;
console.log(sayHi('Hello','World'))

const getClass = () => `INT201`;
console.log(getClass());