let submit = document.getElementById('add_url');
let iframe = document.getElementById('phone');
let url_input = document.getElementById('url_input');
let phone_time = document.getElementById('phone_time');
let phone_address = document.getElementById('phone_address');

// console.log(iframe);
console.log(submit);

const update_frame = (url) => {
    url = url.split('//')[1];

    iframe.src = 'https://' + url;
    phone_address.innerHTML = url;

    setTimeout(() => {
        console.log(iframe.scrollWidth);

    }, 100);



    let frame_width = iframe.scrollWidth;
    console.log('iframe width = ' + frame_width);
    if (frame_width - 20 > 375) {
        console.log('Too wide');
    }


}


submit.onclick = () => update_frame(url_input.value);

