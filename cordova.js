/* Phonegap shim for local development. DO NOT INCLUDE IN ACTUAL PHONEGAP APPS! */

navigator.notification = {
	confirm: function(msg, callback, title, labels){
		var result = confirm(msg);
		if (result && callback) return callback(1); //YES
		if (callback) return callback(2); //NO
	}
	,alert: function(msg, callback, title, buttonname){
		alert(msg);
		if (callback) callback();
	}
};
