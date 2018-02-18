var express = require("express");
var router = express.Router();

router.all("/feedback", function(request, response){
    response.render("feedback.ejs");
});

router.all("/feedback.ejs", function(request, response){
    if(request.body.userNameInput !== null && request.body.userNameInput !== ""){
        response.render("feedback.ejs", request.body.userNameInput);
    } else {
        response.render("error.ejs");
    }
});

router.post("/thankyou", function(request, response){
    response.render("thankyou.ejs");
});

module.exports = router;