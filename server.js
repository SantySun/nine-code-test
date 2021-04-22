const express = require("express")
const cors = require("cors")

const http = require("http")
const app = express()
app.use(express.json());
app.use(cors());


const httpsServer = http.createServer(app);

app.post("/", (req, res) => {
  try {
    const { payload } = req.body
    const result = payload.map((show) => {
      if (show.drm && show.episodeCount) {
        return {
          image: show.image.showImage,
          slug: show.slug,
          title: show.title
        }
      }
    }).filter((show) => !!show)
    return res.status(200).json({ response: result })
  } catch (error) {
    return res.status(400).json({ "error": "Could not decode request: JSON parsing failed" })
  }
})

// httpsServer.listen(4000, () => console.log(`Listening on port 4000`));
exports.server = httpsServer