var s3_commands = require('./aws_s3_nodejs_commands');
var c = process.argv[2];

if(c != null)
{
	if(c in s3_commands.cmd)
	{
		s3_commands.cmd[c]();
	}
	else
	{
		console.error('Command ' + c + ' not found');	
	}
}
else
{
	console.error('No command argument provided.');
}