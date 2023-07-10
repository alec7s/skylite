'use strict';

/* export default async (request, context) => {
    const OW_KEY = Netlify.env.get(OW_API);
  
    return new Response(OW_KEY, {
      headers: { "content-type": "text/html" },
    });
}; */

/* export default async function handler (event, context) {
  const KEY = process.env.OW_API;

  return {
    statusCode: 200,
    body: JSON.stringify({ message: KEY }),
  };  
} */

export default async (event, context) => {
  //const KEY = process.env.OW_API;

  return {
    statusCode: 200,
    body: JSON.stringify({ message: process.env.OW_API }),
  };  
}