// URL de l'api
const url = 'http://localhost:3000/api/teddies'

// Affiche tous les produits
const displayProducts = async () => {
    const products = await getAllTeddies(url)
    products.forEach(product => {
    renderProduct(product.name, product._id, product.imageUrl, product.price);
    });
}
// Récupère tous les ours en peluche
const getAllTeddies = async (url) => {
    const response = await fetch(url);
    return await response.json();
}

// Fourni l'affichage d'un produit 
function renderProduct (productName, productId, productImg, productPrice) {
    const products = document.querySelector('#products');  // Récupère la div qui contiendra les différents articles 
    const article = document.createElement('article');
    article.innerHTML = `<img alt="${productName}" src="${productImg}" width="300">
    <button class="product-link" type="button"><a href="products.html?id=${productId}">Voir plus</a></button>
    <p class="product-title">${productName}</p>
    <p class="price">${productPrice / 100}</p>
    `
    products.appendChild(article);     
}

displayProducts();