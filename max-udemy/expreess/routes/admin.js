const express = require("express")
const path = require("path")

const rootDir = require('../util/path')

const router = express.Router()
router.get("/add-product", (req, resp, next) => {
    resp.sendFile(path.join(rootDir, "views", "add-product.html"))
})
router.post("/product", (req, resp, next) => {
    console.log(req.body)
    resp.redirect("/")
})

module.exports = router