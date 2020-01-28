let submit = document.getElementById('add_url');
let iframe = document.getElementById('phone');
let url_input = document.getElementById('url_input');
let phone_time = document.getElementById('phone_time');
let phone_address = document.getElementById('phone_address');

console.log(iframe);
console.log(submit);

const update_frame = (url) => {
    url = url.split('//')[1];

    iframe.src = 'https://' + url;
    phone_address.innerHTML = url;
}


submit.onclick = () => update_frame(url_input.value);

