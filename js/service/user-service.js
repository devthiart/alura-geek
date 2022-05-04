import { URL, TOKEN } from './api-token.js';

const accountList = async (email) => {
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
                    allAlurageekUsers (filter: { email: { eq: "${email}" } }) {
                      password
                    }
                  }
                `
        }),
      }
    );

    const resjson = await res.json();
    return resjson.data.allAlurageekUsers;
  } 
  catch (error) {
    console.log(error);
    return error;
  }
}

export {
  accountList
}