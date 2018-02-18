var express = require("express");
var router = express.Router();

router.get("/", function(request, response){
    response.render("index.ejs");
});

router.post("/index", function(request, response){
    response.render("feedback.ejs", {userNameInput: request.body.userNameInput});
});

module.exports = router;