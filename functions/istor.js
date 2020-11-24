const IsTorExit = require("istorexit");

function isTor(ip) { 
    return new Promise(function (resolve, reject) { 
    	IsTorExit(ip).then(tor => {
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
	headers: { "content-type": "application/json; charset=UTF-8" }
	};
};
