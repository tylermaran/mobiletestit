let iframe = document.getElementById('iframe');
let iframe_horizontal = document.getElementById('iframe_horizontal');
let phone_time = document.getElementById('phone_time');
let rotate_button = document.getElementById('rotate_button');
let phone_container = document.getElementById('phone_container');
let view_container = document.getElementById('view_container');
let select_common_model = document.getElementById('select_common_model');
let common_models_div = document.createElement('div');
let flip;

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

	setTimeout(() => {
		iframe.style.display = 'none';
		iframe_horizontal.style.display = "block";

	},500)

	rotate_button.classList.toggle('rotate_onclick');
	setTimeout(() => {
		rotate_button.classList.toggle('rotate_onclick');
	}, 200);
};