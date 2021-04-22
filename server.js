const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const port = process.env.PORT || 5000
const app = express()
app.use(cors())

app.use(bodyparser.json())

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.setHeader("content-type", "application/json")
  return res
    .status(400)
    .json({ error: "Could not decode request: JSON parsing failed" })
})

app.post("/", (req, res) => {
  try {
    const { payload } = req.body
    const result = payload
      .map((show) => {
        if (show.drm && show.episodeCount) {
          return {
            image: show.image.showImage,
            slug: show.slug,
            title: show.title
          }
        }
      })
      .filter((show) => !!show)

    res.setHeader("content-type", "application/json")
    return res.status(200).json({ response: result })
  } catch (error) {
    res.setHeader("content-type", "application/json")
    return res
      .status(400)
      .json({ error: "Could not decode request: JSON parsing failed" })
  }
})

app.listen(port, () => console.log(`Listening on port ${port}`))

module.exports = app