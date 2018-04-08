function getUrl(method, params) {
	if (!method) throw new Error('Не указан метод.');
	params = params || {};
	params.access_token = access_token;
	params.v = version;
	return vk_url + method + '?' + $.param(params);
}

function sendRequest(meth, params, func) {
	$.ajax({
		url: getUrl(meth, params),
		method: 'GET',
		dataType: 'JSONP',
		success: func
	});
}
