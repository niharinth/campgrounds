var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comment");

var data = [
  {
    name: "Granite",
    image:
      "https://vignette.wikia.nocookie.net/gameofthrones/images/f/ff/S05E06_-_King%27s_Landing.jpg/revision/latest?cb=20170313212331",
    description:
      "Lorem ipsum bhanvi negisacc and myria Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    name: "Granite1",
    image:
      "https://vignette.wikia.nocookie.net/gameofthrones/images/f/ff/S05E06_-_King%27s_Landing.jpg/revision/latest?cb=20170313212331",
    description:
      "Lorem ipsum bhanvi negisacc and myria Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];

//update and destroy (temp)

function seedDB() {
  Campground.remove({}, function(err) {
    if (err) {
      console.log(err);
    }
    console.log("removed campgrounds!");
    data.forEach(function(seed) {
      Campground.create(seed, function(err, campground) {
        if (err) {
          console.log(err);
        } else {
          console.log("added a campground");
          // adding comments
          Comment.create(
            {
              text: "niggers in ovenss",
              author: "muneeb khan"
            },
            function(err, comment) {
              if (err) {
                console.log(err);
              } else {
                campground.comments.push(comment);
                campground.save();
                console.log("Created new comment");
              }
            }
          );
        }
      });
    });
  });
}

module.exports = seedDB;
