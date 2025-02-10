// File: api/webhook.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  
    const data = req.body;
    console.log('Data yang diterima:', data);
  
    // Lakukan pemrosesan data di sini, misalnya:
    // - Validasi data
    // - Simpan data ke database (jika diperlukan)
    // - Lanjutkan data ke bot WhatsApp
  
    return res.status(200).json({ message: 'OK' });
  }
  