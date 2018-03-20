// JavaScript Document
function checkUrl() {
	var a = document.getElementById('url').value;
	if (a == '') {
		alert('验证地址不能为空!');
		return false
	} else if (!isURL(a)) {
		alert('验证的地址不存在! 请谨慎操作!');
		return false
	} else {
		alert('验证成功!');
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