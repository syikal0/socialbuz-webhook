// File: api/webhook.js

export default async function handler(req, res) {
    // Jika method bukan POST, kembalikan error
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
    
    // Ambil data dari request body
    const data = req.body;
    console.log('Data yang diterima:', data);
    
    // Lakukan pemrosesan data yang diperlukan
    return res.status(200).json({ message: 'OK' });
  }
  