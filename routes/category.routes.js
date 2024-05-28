const express = require("express");
const router = express.Router()

const {
    FindAllCategory
} = require("../controller/category.controller")

router.get("/FindAllCategory/:categoryId", FindAllCategory );
module.exports = router