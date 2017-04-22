// ========================================================
/**
	Init
*/
// Load the SDK for JavaScript
var AWS = require('aws-sdk');
AWS.config.loadFromPath('./aws_s3_config.json');
		
var s3 = new AWS.S3();

exports.cmd = {};


// ========================================================
/**
    Commands
*/

exports.cmd.listBuckets = function()
{
	console.log('Listing buckets...');
	var buckets;
	
    // Call S3 to list current buckets
    s3.listBuckets(function(err, data) {
		if (err) 
		{
			console.log("Error", err);
		} 
		else 
		{
			console.log("Bucket List", data.Buckets);
			buckets = data.Buckets;
		}
    });

	return buckets;
}
