import { productService } from '../service/product-service.js';
import { productView } from '../view/product-view.js';

const starWars = document.querySelector('[data-category-list-star-wars]');
const consoles = document.querySelector('[data-category-list-consoles]');
const diversos = document.querySelector('[data-category-list-diversos]');

const categoryLists = {
  starWars,
  consoles,
  diversos
};

const render = async () => {
  try {
    const requestValues = `
      {
        id
        title
        category
        price
        image {
          responsiveImage(imgixParams: {auto: [compress, format]}) {
            src
          }
        }
      }
    `;
    const productList = await productService.productList(requestValues);
    productList.forEach((product) => {
      const htmlProduct = productView.createProduct(product.id, product.title, product.price, product.image.responsiveImage.src);
      categoryLists[product.category].appendChild(htmlProduct);
    })
  }
  catch(error) {
    console.log(error);
  }
}
render();