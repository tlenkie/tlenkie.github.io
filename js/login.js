$(function() {
	if (!window.location.href.includes('access_token')) {
		/* do nothing */
	}	
	else {
		$('#login-page').prop('hidden', 'true');
		$('#main-page').prop('hidden', 'false');
		// access_token = window.location.href.match(/access_token=([^&]+)/)[1];
		// user_id = window.location.href.match(/user_id=([^&]+)/)[1];
		// sendRequest('wall.get', {owner_id: user_id, count: 100}, function(data) {
		// 	console.log(data);
		// })
		alert(access_token);
	}		
});