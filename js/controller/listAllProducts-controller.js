import { productService } from '../service/product-service.js';
import { productView } from '../view/product-view.js';

const list = document.querySelector('[data-product-list]');

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
    productList.forEach((product) => {
      const htmlProduct = productView.createProduct(product.id, product.title, product.price, product.image.responsiveImage.src);
      list.appendChild(htmlProduct);
    })
  }
  catch(error) {
    console.log(error);
  }
}
render();