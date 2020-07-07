//should contain 2 routes
//a GET route with the URL /api/friends. display a JSON of all possible friends
//POST route /api/friends. use to handle incoming survey results and handle compatibility logic

var path = require("path");

var friendsData = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req,res){
        res.json(friendsData);
    });

    app.post("/api/friends",function(req,res){
        var user = req.body;

        for(var i=0; i<user.scores.length; i++){
            user.scores[i] = parseInt(user.scores[i]);
        }

        var matchIndex = 0;
        var minMatch = 40;

        for(var i=0; i<friendsData.length; i++){
            var totalDifference =0;
            for(var j=0; j<friendsData[i].scores.length; j++){
                var diff = Math.abs(user.scores[j] - friendsData[i].scores[j]);
                totalDifference += diff;
            }

            if(totalDifference < minMatch){
                matchIndex = i;
                minMatch = totalDifference;
            }
        }

        friendsData.push(user);

        res.json(friendsData[matchIndex]);

    });
};


