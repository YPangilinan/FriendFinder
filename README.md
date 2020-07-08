# FriendFinder

### FriendFinder Overview
FriendFinder is your latest and greatest compatibility-based app, or "dating app". The way it works is by taking in the user's results from our survey, and displaying to the user their "perfect" match based on our compatibility logic. Try it out today!

<img width="1436" alt="Screen Shot 2020-07-08 at 3 21 43 PM" src="https://user-images.githubusercontent.com/61812035/86976245-df771080-c12e-11ea-98d3-fa89ad092761.png">

### How was this app created?
The technologies used to create this app are:
- JavaScript
- jQuery
- node.js
- Express.js
- HTML
- Bootstrap

### See it in action!
*Friend Finder* is deployed to Heroku. Please check it out [here](https://friend-finder-yp.herokuapp.com/)

### Want to run it locally?
To install the application follow the instructions below:

	git clone git@github.com:ypangilinan/FriendFinder.git
	cd FriendFinder
	npm install
This should install the necessary packages from the Package.JSON needed for this application. 

In the terminal,run the Node.js application with the command below.

	node server.js
	
The application will now be running locally on `PORT`, in this case that is port 3000. You can then access it locally from your browser at the URL `localhost:PORT`, in this case `localhost:3000`.  

## Code Explanation
- The `server.js` file sets up the Express server, specifying port number, the npm packages that need to be loaded, and also the routes, which we have externalized
- There are 2 separate HTML files (`home.html` and `survey.html`) that serve as the front-end portion of the code (the homepage and the survey, which will also show the resulting best match)
- The 2 routing files (`htmlRoutes.js` and `apiRoutes.js`) determine the back-end logic (based on the request being made, the response that gets sent to the browser); the HTML routes display the survey and the homepage based on the URL that is accessed, and the API routes send back existing content in our server-side data or add new friends
- Best match is calculated by finding the friend with the minimal difference in scores and then sending that friend to the browser as a JSON object
- A modal is then toggled, displaying the the best match to the person who just took the survey
