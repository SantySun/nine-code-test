const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const port = process.env.PORT || 5000
const app = express()
app.use(cors());

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(400).json({ error: "Could not decode request: JSON parsing failed" })
})
app.use(bodyparser.json())

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
    return res.status(400).json({ error: "Could not decode request: JSON parsing failed" })
  }
})

app.listen(port, () => console.log(`Listening on port ${port}`))