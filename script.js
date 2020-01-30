let submit = document.getElementById('add_url');
let iframe = document.getElementById('iframe');
let url_input = document.getElementById('url_input');
let phone_time = document.getElementById('phone_time');
let phone_address = document.getElementById('phone_address');
let rotate_button = document.getElementById('rotate_button');
let phone_container = document.getElementById('phone_container');
let view_container = document.getElementById('view_container');
let select_common_model = document.getElementById('select_common_model');
let common_models_div = document.createElement('div');
let http_select = document.getElementById('http_select');
let flip, https = true;

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

let common_models = [
	{
		name: 'iPhone 6/7/8',
		x: 375,
		y: 667,
	},
	{
		name: 'iPhone 6/7/8 Plus',
		x: 414,
		y: 736,
	},
	{
		name: 'iPhone X',
		x: 375,
		y: 812,
	},
	{
		name: 'Galaxy S5',
		x: 360,
		y: 640,
	},
	{
		name: 'Pixel 2',
		x: 411,
		y: 731,
	},
];

const highlight_phone = div => {
	let temp = document.getElementsByClassName('mini_screen');

	// let selected = document.get
	for (let i = 0; i < temp.length; i++) {
		temp[i].style.backgroundColor = 'rgb(112, 112, 112)';
	}
	div.firstChild.style.backgroundColor = 'white';
};

// Generate the mini phone divs
for (let i = 0; i < common_models.length; i++) {
	let mini_phone_container = document.createElement('div');
	mini_phone_container.classList.add('mini_phone_container');

	let mini_phone = document.createElement('div');
	mini_phone.classList.add('mini_phone');

	mini_phone.setAttribute('name', common_models[i].name);

	mini_phone.onclick = function() {
		highlight_phone(this);
	};

	let screen = document.createElement('div');
	screen.classList.add('mini_screen');

	let name = document.createElement('div');
	name.classList.add('mini_name');
	name.innerText = common_models[i].name;

	let dimensions = document.createElement('div');
	dimensions.classList.add('mini_dimensions');
	dimensions.innerText = common_models[i].x + ' x ' + common_models[i].y;

	mini_phone.append(screen);
	mini_phone_container.append(mini_phone);
	mini_phone_container.append(name);
	mini_phone_container.append(dimensions);

	common_models_div.append(mini_phone_container);
}

select_common_model.append(common_models_div);

// Rotate screen
rotate_button.onclick = () => {
	phone_container.classList.toggle('phone-rotate');

	rotate_button.classList.toggle('rotate_onclick');
	setTimeout(() => {
		rotate_button.classList.toggle('rotate_onclick');
	}, 200);
};

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
