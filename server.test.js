const chai = require("chai")
const chaiHttp = require("chai-http")
const app = require("./server")
const exampleData = require("./exampleData.json")
chai.use(chaiHttp)
chai.should()

describe("POST /", () => {
  it("Positive test", (done) => {
    chai
      .request(app)
      .post("/")
      .send(exampleData)
      .end((err, res) => {
        chai.expect(err).to.be.null
        chai.expect(res).to.have.status(200)
        chai.expect(res).to.be.json
        done()
      })
  })

  it("Negative test", (done) => {
    chai
      .request(app)
      .post("/")
      .send({})
      .end((err, res) => {
        chai.expect(res).to.have.status(400)
        chai.expect(res).to.be.json
        done()
      })
  })

  // add more positive or negative tests here...
})
