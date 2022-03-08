var express = require("express");
var router = express.Router();


/* GET home page. */
router.get("/", function (req, res, next) {
    
    res.render("index");
});

router.post("/", (req, res) => {
    const number1 = parseFloat(req.body.num1);
    const number2 = parseFloat(req.body.num2);
    const choice = req.body.choice;
    switch (choice) {
        case "sum":
            result = number1 + number2;
            break;
        case "minus":
            result = number1 - number2;
            break;
        case "mul":
            result = number1 * number2;
            break;
        case "div":
            result = number1 / number2;
            break;
    }
    res.render("index", { number1, number2, choice, result });
});

module.exports = router
