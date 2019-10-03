//You can replace this entire file with your Bootcamp Assignment #2 - ListingSchema.js File

/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
  /* your code here from Bootcamp Assignment #2 - ListingSchema.js File*/
	name: {               // Full name of location
		type: String,
		required: true
	},
	code: {               // Short code, if applicable
		type: String,
		required: true
	},
	coordinates: {        // Geographic coordinates
		latitude: Number,
		longitude: Number
	},
	address: String,      // Street address, if applicable
	created_at: Date,     // Date this entry was added to the database
	updated_at: Date      // Date this entry was last modified
});

/* create a 'pre' function that adds the updated_at and created_at if not already there property */
listingSchema.pre('save', function(next) {
  /* your code here from Bootcamp Assignment #2 - ListingSchema.js File */
  var now = new Date()
	this.updated_at = now
	if(!this.created_at){
		this.created_at = now
	}

  next();
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
