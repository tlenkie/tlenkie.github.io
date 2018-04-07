$(function() {
	if (!window.location.href.includes('access_token')) {
		/* do nothing */
	}	
	else {
		$('#login-page').prop('hidden', 'true');
		$('#main-page').prop('hidden', 'false');
		access_token = window.location.href.match(/access_token=([^&]+)/)[1];
		alert(access_token);
	}	
});