var getUrl = function (method, params) {
	if (!method) throw new Error('Не указан метод.');
	params = params || {};
	params.access_token = access_token;
	return vk_url + method + '?' $.params(params);
};

var sendRequest = function (meth, params, func) {
	$.ajax({
		url: getUrl(meth, params),
		method: 'GET',
		dataType: 'JSONP',
		success: func
	});
};