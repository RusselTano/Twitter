const mongoose = require("mongoose");
const schema = mongoose.Schema;

const tweetSchema = new schema({
  content: {
    type: String,
    maxlength: [280, "Tweet is too long"],
    minlength: [1, "Tweet is too short"],
    required: [true, "Tweet is required"],
  },
});

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
