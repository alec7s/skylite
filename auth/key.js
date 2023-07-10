'use strict';

/* export default async (request, context) => {
    const OW_KEY = Netlify.env.get(OW_API);
  
    return new Response(OW_KEY, {
      headers: { "content-type": "text/html" },
    });
}; */

exports.handler = async function (event, context) {
  const KEY = process.env.OW_API;

  return {
    statusCode: 200,
    body: JSON.stringify({ value: KEY }),
  };  
};