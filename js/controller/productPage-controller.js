import { productService } from '../service/product-service.js';
import { productView } from '../view/product-view.js';

const render = async () => {
  try {
    const id = new URL(window.location.href).searchParams.get('id');
    const requestProductValues = `
      (filter: { id: { eq: ${id} } }) {
        id
        title
        description
        category
        price
        image {
          responsiveImage(imgixParams: {auto: [compress, format]}) {
            src
          }
        }
      }
    `;
    const productValues = await productService.productList(requestProductValues);
    const htmlProduct = productView.createDetailedProduct(
      productValues[0].title, 
      productValues[0].price, 
      productValues[0].description, 
      productValues[0].image.responsiveImage.src
    );
    document.querySelector('[data-product]').appendChild(htmlProduct);

    const requestSimilarProductsValues = `
      (filter: { category: { eq: ${productValues[0].category} } }) {
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

    const SimilarProducts = await productService.productList(requestSimilarProductsValues);
    const SimilarProductList = document.querySelector('[data-similar-product-list]');
    SimilarProducts.forEach(product => {
      SimilarProductList.appendChild(productView.createProduct(product.id, product.title, product.price, product.image.responsiveImage.src));
    });
  }
  catch(error) {
    console.log(error);
  }
}
render();