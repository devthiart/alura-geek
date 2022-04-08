const  createProduct = (id, name, price, imageURL) => {
  const product = document.createElement('li');
  product.className = 'products__category__item';
  product.dataset.id = id;
  product.innerHTML = `
    <a href="./produto.html?id=${id}" class="products__category__item__link">
      <img class="products__category__item__image" src=${imageURL} alt="Foto Produto XYZ" />
      <p class="products__category__item__name">${name}</p>
      <p class="products__category__item__price">R$ ${formatPrice(price)}</p>
      <p class="products__category__item__cta">Confira</p>
    </a>
  `;

  return product;
}

const createDetailedProduct = (name, price, description, imageURL) => {
  const product = document.createElement('section');
  product.classList = 'product';
  product.innerHTML = `
    <img class="product__image" src="${imageURL}" alt="Foto ${name}" />
    <div class="product__information">
      <p class="product__information__name">${name}</p>
      <p class="product__information__price">R$ ${price}</p>
      <p class="product__information__description">${description}</p>
    </div>
  `;

  return product;
}

// *** implement dynamic category later ***
// const createCategory = (name, productList) => {
//   const section = document.createElement('section');
//   section.className = 'products__category';
//   section.innerHTML = `
//     <section class="products__category">
//       <div class="products__category__header">
//         <h2 class="products__category__title">${name}</h2>
//         <a href="#" class="products__category__link">Confira mais <img src="assets/images/icons/right-arrow.svg" alt="" /></a>
//       </div>
//       <ul class="products__category__list" data-category-list-star-wars>${productList}</ul>
//     </section>
//   `;

//   return section;
// }

function formatPrice(floatPrice) {
  const formattedPrice = floatPrice.toFixed(2).toString().replace('.', ',');
  
  return formattedPrice;
}

export const productView = {
  createProduct,
  createDetailedProduct
}