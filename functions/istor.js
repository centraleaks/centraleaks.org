const torDetect = require('tor-detect');

exports.handler = async ({ headers }) => {
	const ip = headers["client-ip"];
 	torDetect(ip).then(tor => {
		console.log(tor);
		return {
			statusCode: 200,
			body: tor,
			headers: { "content-type": "text/html" }
		};
	});
};