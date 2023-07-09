'use strict';

export default async (request, context) => {
    const KEY = Netlify.env.get(OW_API);
  
    return new Response(KEY, {
      headers: { "content-type": "text/html" },
    });
};