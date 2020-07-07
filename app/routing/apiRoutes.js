var friendsData = require("../data/friends");

module.exports = function(app){
    //returns all friends 
    app.get("/api/friends", function(req,res){
        res.json(friendsData);
    });

    //handles compatibility logic from survet data
    app.post("/api/friends",function(req,res){
        //user details from newUser
        var user = req.body;
        //parseInt scores
        for(var i=0; i<user.scores.length; i++){
            user.scores[i] = parseInt(user.scores[i]);
        }

        //default match is index 0, but perfect match comes from minimum difference in scores
        var matchIndex = 0;
        var minMatch = 50;

        //for loop to compare friendsData array to the newUser
        //difference starts at 0 and compares difference between all friends in array
        //difference is added to total difference
        for(var i=0; i<friendsData.length; i++){
            var totalDifference =0;
            for(var j=0; j<friendsData[i].scores.length; j++){
                var diff = Math.abs(user.scores[j] - friendsData[i].scores[j]);
                totalDifference += diff;
            }

            //if new minumum, change the matchIndex and set new minimum match
            if(totalDifference < minMatch){
                matchIndex = i;
                minMatch = totalDifference;
            }
        }

        //adding user to the friends array
        friendsData.push(user);
        //sending perfect match to modal
        res.json(friendsData[matchIndex]);

    });
};


