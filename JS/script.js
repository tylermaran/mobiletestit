let phone_time = document.getElementById('phone_time');
let rotate_button = document.getElementById('rotate_button');
let phone_container = document.getElementById('phone_container');
let phome_model = document.getElementById('phone_model');
let view_container = document.getElementById('view_container');
let select_common_model = document.getElementById('select_common_model');
let phone_container_hz = document.getElementById('phone_container_hz');
let common_models_div = document.createElement('div');
let flip = true;

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

// Global variables are bad. but like - how bad could they be?
let current_phone = {
	name: 'iPhone 6/7/8',
	x: 375,
	y: 667,
}

// Onclick function for each mini phone
const select_phone = div => {
	let phone_name = div.getAttribute('name');
	let phone_x = div.getAttribute('x');
	let phone_y = div.getAttribute('y');

	let phone_model_text = phone_name + ' : ' + phone_x + ' x ' + phone_y;
	console.log(phone_model_text); 
	phone_model.innerText = phone_model_text;

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
	mini_phone.setAttribute('x', common_models[i].x);
	mini_phone.setAttribute('y', common_models[i].y);


	mini_phone.onclick = function() {
		select_phone(this);
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
	if (flip) {
		phone_container.classList.add('phone-rotate');
		phone_container_hz.classList.remove('phone-rotate_hz');

		setTimeout(() => {
			phone_container.style.display = 'none';
			phone_container_hz.style.display = 'block';
			flip = false;
		}, 250);

	} else {
		phone_container_hz.classList.add('phone-rotate_hz');
		phone_container.classList.remove('phone-rotate');

		setTimeout(() => {
			phone_container.style.display = 'block';
			phone_container_hz.style.display = 'none';
			flip = true;
		}, 250);
	}

	rotate_button.classList.toggle('rotate_onclick');
	setTimeout(() => {
		rotate_button.classList.toggle('rotate_onclick');
	}, 200);
};
