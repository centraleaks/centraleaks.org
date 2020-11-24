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
	statusCode: 302,
	body: '',
  headers: {
    location: tor ? 'http://saev5hl3p6luc5cchhm5yyk7gm6iynnkvkztqrm5ro67mg2hz3l3puad.onion/#/' : 'https://centraleaks.org/denuncia.html'
  }
	};
};
