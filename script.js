let submit = document.getElementById('add_url');
let iframe = document.getElementById('phone');
let url_input = document.getElementById('url_input');
let phone_time = document.getElementById('phone_time');
let phone_address = document.getElementById('phone_address');
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

for (let i = 0; i < common_models.length; i++) {
	let div = document.createElement('div');
	div.classList.add('mini_phone');
	let name = document.createElement('div');
	let dimensions = document.createElement('div');
	name.classList.add('mini_name');
	name.innerText = common_models[i].name;
	dimensions.classList.add('mini_dimensions');
	dimensions.innerText = common_models[i].x + ' x ' + common_models[i].y;
	div.append(name);
	div.append(dimensions);

	common_models_div.append(div);
}

select_common_model.append(common_models_div);

// Rotate screen
rotate_button.onclick = () => {
	
	phone_container.classList.toggle('phone-rotate');

	rotate_button.classList.toggle('rotate_onclick');
	setTimeout(()=> {
		rotate_button.classList.toggle('rotate_onclick');
	}, 200)

};

// Add new url to iFrame
const update_frame = url => {
	url = url.split('//')[1];

	iframe.src = 'https://' + url;
	phone_address.innerHTML = url;

	
};

submit.onclick = () => update_frame(url_input.value);

window.onerror = (message, source, lineno, colno, error) => {
	console.log('ERRROOOOORRR');
	console.log(message);
}