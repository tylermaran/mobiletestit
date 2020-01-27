let submit = document.getElementById('add_url');
let iframe = document.getElementById('phone');
let url_input = document.getElementById('url_input');

console.log(iframe);
console.log(submit);

const update_frame = (url) => {
    iframe.src = url;
}


submit.onclick = () => update_frame(url_input.value);

