const axios = require("axios");

module.exports = function (app) {
  app.get("/imagecreator/iqc", async (req, res) => {
    const { text } = req.query;

    if (!text) {
      return res.status(400).json({
        status: false,
        message: "Parameter 'text' wajib diisi"
      });
    }

    if (text.length > 80) {
      return res.status(400).json({
        status: false,
        message: "Maksimal 80 karakter untuk 'text'"
      });
    }

    try {
      const response = await axios.get(`https://fathurweb.xyz/api/iqc?text=${encodeURIComponent(text)}`, {
        responseType: "arraybuffer"
      });

      res.writeHead(200, {
        "Content-Type": "image/png",
        "Content-Length": response.data.length
      });
      res.end(response.data);
    } catch (error) {
      res.status(500).json({
        status: false,
        message: "Gagal mengambil gambar",
        error: error.message
      });
    }
  });
};
