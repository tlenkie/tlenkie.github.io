$(function() {
	if (!window.location.href.includes('access_token')) {
		/* do nothing */
	}	
	else {
		$('#login-page').prop('hidden', true);
		$('#main-page').prop('hidden', false);
		access_token = window.location.href.match(/access_token=([^&]+)/)[1];
		user_id = window.location.href.match(/user_id=([^&]+)/)[1];

		sendRequest('wall.get', {owner_id: user_id, count: 1}, function(data) {
			postCount = data.response.count;
		});

		var iter = 0;

		user_id = '136087784';
		postCount = 1000;

		while (iter < postCount) {
			sendRequest('wall.get', {owner_id: user_id, count: 100, offset: iter}, function(data) {
				objProcess(data);
			});
			iter += 100;
		}

		console.log(wall);
		
	}		
});
