const URL = 'https://graphql.datocms.com/';
const TOKEN = '79817974c78a254017a0f50a0c8b7d';

const productList = async (requestValues) => {
  try {
    const res = await fetch(
      URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
          query: `
                  {
                    allAlurageekProducts ${requestValues}
                  }
                `
        }),
      }
    );

    const resjson = await res.json();
    return resjson.data.allAlurageekProducts;
  } 
  catch (error) {
    console.log(error);
    return error;
  }
}

export const productService = {
  productList
}