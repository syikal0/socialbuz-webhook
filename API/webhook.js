// File: API/webhook.js

export default async function handler(req, res) {
    // Pastikan hanya menerima request POST
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
    
    // Ambil data yang dikirim melalui body
    const data = req.body;
    console.log('Data yang diterima dari Socialbuz:', data);
    
    // Lakukan pemrosesan data (misalnya: validasi, simpan ke database, dll.)
    
    // Kirim respons ke client
    return res.status(200).json({ message: 'OK' });
  }
  