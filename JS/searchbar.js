let url_input = document.getElementById('url_input');
let http_select = document.getElementById('http_select');
let submit = document.getElementById('add_url');
let phone_address = document.getElementById('phone_address');
let https = true;


const localhost = port => {
	console.log(port);
	url_input.value = 'localhost:' + port;
	http_select.innerText =  'http://';
	https = false;
};

const switch_http = () => {
	console.log('yyiashvoja');
	if (https) {
		http_select.innerText = 'http://';
		https= false;
	} else {
		http_select.innerText = 'https://';

		https = true;
	}
}

// Add new url to iFrame
const update_frame = url => {
	if (url.split('//')[1]) {
		
		iframe.src = 'https://' + url.split('//')[1];
		phone_address.innerHTML = url.split('//')[1];
	}
	else {
		console.log(url)
		iframe.src = 'https://' + url;
		phone_address.innerHTML = url;
	}
};

submit.onclick = () => update_frame(url_input.value);
