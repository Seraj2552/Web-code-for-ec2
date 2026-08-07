let cart = 0;

const products = [

{
name:"Gaming Laptop",
price:1200,
category:"Electronics",
image:"https://picsum.photos/400/300?1"
},

{
name:"Mechanical Keyboard",
price:80,
category:"Accessories",
image:"https://picsum.photos/400/300?2"
},

{
name:"Wireless Headphone",
price:130,
category:"Accessories",
image:"https://picsum.photos/400/300?3"
},

{
name:"Monitor",
price:250,
category:"Electronics",
image:"https://picsum.photos/400/300?4"
}
];

function render(data){

const container =
document.getElementById("products");

container.innerHTML="";

data.forEach(item=>{

container.innerHTML += `

<div class="card">

${item.image}

<div class="content">

<h3>${item.name}</h3>

<p>$${item.price}</p>

<button onclick="addToCart()">
Add To Cart
</button>

</div>
</div>

`;

});

}

function addToCart(){

cart++;

document
.getElementById("cartCount")
.innerText = cart;
}

function filterProducts(category){

if(category==="All"){
render(products);
return;
}

render(
products.filter(
p=>p.category===category
)
);

}

document
.getElementById("search")
.addEventListener("keyup",e=>{

let value =
e.target.value.toLowerCase();

render(

products.filter(p=>
p.name.toLowerCase()
.includes(value)
)

);

});

function toggleTheme(){

document.body
.classList.toggle("dark");

}

render(products);
