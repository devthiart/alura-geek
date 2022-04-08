import { productService } from '../service/product-service.js';
import { productView } from '../view/product-view.js';

const query = new URL(window.location.href).searchParams.get("query");
const title = document.querySelector('[data-title-search]');
title.innerHTML = `Pesquisar produto: ${query}`;

const list = document.querySelector('[data-product-list]');

const searchQuery = (pattern, target) => {
  const regex = new RegExp(pattern, 'gi');

  const result =  regex.exec(target);

  return (result !== null);
}

const render = async () => {
  try {
    const requestValues = `
    {
        id
        title
        price
        image {
          responsiveImage(imgixParams: {auto: [compress, format]}) {
            src
          }
        }
      }
    `;
    const productList = await productService.productList(requestValues);

    let listIsEmpty = true;

    productList.forEach((product) => {
      if(searchQuery(query, product.title)) {
        listIsEmpty = false;
        const htmlProduct = productView.createProduct(product.id, product.title, product.price, product.image.responsiveImage.src);
        list.appendChild(htmlProduct);
      }
    });
    
    if(list.childElementCount === 0) {
      list.classList.add('products__list--not-found');
      const htmlNotElementFound = document.createElement('h3');
      htmlNotElementFound.classList.add('search--not-found__title');
      htmlNotElementFound.textContent = 'Produto não encontrado';
      list.appendChild(htmlNotElementFound);
    }
  }
  catch(error) {
    console.log(error);
  }
}
render();