var express = require("express");
var router = express.Router();

router.all("/thankyou.ejs", function(request, response){
    response.render("thankyou.ejs");
});

module.exports = router;