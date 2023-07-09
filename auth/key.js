'use strict';

export default async (request, context) => {
    const OW_KEY = Netlify.env.get(OW_API);
  
    return new Response(OW_KEY, {
      headers: { "content-type": "text/html" },
    });
};