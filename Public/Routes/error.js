var express = require("express");
var router = express.Router();

router.all("/error.ejs", function(request, response){
    response.render("error.ejs");
});

module.exports = router;