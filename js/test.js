// JavaScript Document
function checkUrl() {
	var a = document.getElementById('url').value;
	if (a == '') {
		alert('The verification address is not empty!');
		return false
	} else if (!isURL(a)) {
		alert('Verification address does not exist! Please operate with caution!');
		return false
	} else {
		alert('Verification success!');
		return true
	}
	return false
}
function isURL(a) {
	var b = ['d66793d9c5c7bdd4a67aeb4d4086219e','1c78959f9e4fa00bf17ee1a1c53e2e64','ca877f73b55ada312377d06319bf1584'];
	for (i = 0; i < b.length; i++) {
		if (b[i] == hex_md5(a)) {
			return true
		} else {}
	}
}