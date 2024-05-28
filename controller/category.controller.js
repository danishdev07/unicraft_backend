const categoryModel = require("../models/category.model");

const FindAllCategory = async (req, res) => {
    try {
        let {
            categoryId
        } = req.params.categoryId;
        let categoryList = await categoryModel.find({
            categoryId: categoryId
        })
        if (categoryList.length <= 0) {
            return res.status(404).json({
                message: "categoryId Not Found"
            })
        }
        return res.status(200).json({
            message: "categoryId List fetched successfully",
            data: categoryList
        })
    } catch (e) {
        console.log("catch FindAllOptionByQuestionId : ", e);
        return res.status(500).json({
            message: "Internal server error",
            error: e
        })
    }
}
module.exports = {
    FindAllCategory
}