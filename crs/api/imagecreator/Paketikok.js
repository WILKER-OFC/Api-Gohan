const axios = require("axios");

module.exports = function (app) {
  app.get("/imagecreator/faketiktok", async (req, res) => {
    const {
      name,
      username,
      pp,
      verified = "true",
      followers = 12300,
      following = 23,
      likes = 125000,
      bio = "No Bio yet.",
      dark = "false",
      isFollow = "false"
    } = req.query;

    if (!name || !username || !pp) {
      return res.status(400).json({
        status: false,
        message: "Parameter 'name', 'username', dan 'pp' wajib diisi"
      });
    }

    try {
      const url = `https://fathurweb.xyz/api/faketiktoke?name=${encodeURIComponent(name)}&username=${encodeURIComponent(username)}&pp=${encodeURIComponent(pp)}&verified=${verified}&followers=${followers}&following=${following}&likes=${likes}&bio=${encodeURIComponent(bio)}&dark=${dark}&isFollow=${isFollow}`;
      const image = await axios.get(url, { responseType: "arraybuffer" });

      res.writeHead(200, {
        "Content-Type": "image/png",
        "Content-Length": image.data.length
      });
      res.end(image.data);
    } catch (e) {
      res.status(500).json({
        status: false,
        message: "Gagal mengambil gambar",
        error: e.message
      });
    }
  });
};
