const torDetect = require('tor-detect');

function isTor(ip) { 
    return new Promise(function (resolve, reject) { 
    	torDetect(ip).then(tor => {
    		resolve(tor); 
		});
    }); 
} 
exports.handler = async ({ headers }) => {
	const ip = headers["client-ip"];
	var tor = await isTor(ip);
	return {
	statusCode: 200,
	body: `[{"ip": "${ip}","istor": ${tor.toString()}}]`,
	headers: { "content-type": "text/html; charset=UTF-8" }
	};
};
