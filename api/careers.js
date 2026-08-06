export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const collectionId = req.body?.collectionId || 'YOUR_COLLECTION_ID';

  try {
    const response = await fetch(
      `https://www.wixapis.com/data/v2/collections/${collectionId}/items/query`,
      {
        method: 'POST',
        headers: {
          'Authorization': process.env.WIX_API_KEY,
          'Content-Type': 'application/json',
          'wix-site-id': '3cba872a-8069-4604-85c2-711e10e95e13',
        },
        body: JSON.stringify({
          query: {
            paging: { limit: 20, offset: 0 },
          },
        }),
      }
    );

    if (!response.ok) {
      const errorBody = await response.text();
      return res.status(response.status).json({ error: 'Wix API error', details: errorBody });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error', message: error.message });
  }
}
