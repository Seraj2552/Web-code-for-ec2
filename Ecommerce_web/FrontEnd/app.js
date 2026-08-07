fetch('/api/products')
.then(res => res.json())
.then(data => {

    let html = '';

    data.forEach(product => {

        html += `
        <div class="card">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button>Add To Cart</button>
        </div>
        `;
    });

    document.getElementById('products').innerHTML = html;

});
