//query products element

const divProductsEle = document.querySelector('#products');

console.log(divProductsEle);

let product = [
{id: "01",name: "iPhone11",price: 29000,stock: 2},
{id: "02",name: "iPhone12",price: 29000,stock: 2},
{id: "03",name: "iPhone12 Pro",price: 29000,stock: 2},
{id: "04",name: "iPhone13",price: 29000,stock: 2},
{id: "05",name: "iPhone13 Pro",price: 29000,stock: 2},
];
  
  
  
  //1. create div element
  
  //1. <div></div>
  
  const divProductEle = document.createElement('div');
  
  
  
  //2. create id attribute on div element
  
  //2.<div id='P001'
  
  divProductEle.setAttribute('id', product.id);
  
  
  
  //3. create<p> for product id
  
  
  
  const pProductIdEle = document.createElement('p');
  
  pProductIdEle.textContent = product.id;
  
  //  <div id='P001'><p>P001</p></div>
  
  divProductEle.appendChild(pProductIdEle);
  
  
  
  //4. create<p> for product name
  
  //  <p>iphone</p>
  
  const pProductNameEle = document.createElement('p');
  
  pProductNameEle.textContent = product.productName;
  
  //  <div id='P001'><p>P001</p><p>iphone</p></div>
  
  divProductEle.appendChild(pProductNameEle);
  
  
  
  //5. create<p> for product price
  
  //  <p>10000 Baht</p>
  
  const pProductPriceEle = document.createElement('p');
  
  pProductPriceEle.textContent = product.price + ' Baht';
  
  //  <div id='P001'><p>P001</p><p>iphone</p><p>1000 Baht</p></div>
  
  divProductEle.appendChild(pProductPriceEle);
  
  
  
  //6. add product element to products element
  
  divProductsEle.appendChild(divProductEle);