const carouselInner = document.querySelector(".carousel-inner");

var request = new XMLHttpRequest();

request.open('GET', 'https://api.myjson.com/bins/17ocpi', true);

request.onload = function () {
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {

        for (var key in data) {
            
            const carouselItem = document.createElement('div');
            carouselItem.setAttribute('class', 'carousel-item');
            carouselInner.appendChild(carouselItem);
            carouselInner.firstElementChild.setAttribute('class', 'carousel-item active');

            const carouselCaption = document.createElement('div');
            carouselCaption.setAttribute('class', 'carousel-caption d-none d-md-block');
          
            const title = document.createElement('h2');
            title.textContent = data[key].title;
            title.setAttribute('class', 'text-uppercase font-weight-bold');

            const text = document.createElement('p');
            text.textContent = data[key].text;
            text.setAttribute('class', 'font-weight-light');

            const image = document.createElement('img');
            image.setAttribute('src', data[key].image);
            image.setAttribute('class', 'd-block w-130 img-fluid');
            image.setAttribute('alt', 'Responsive image');
            
            carouselItem.appendChild(carouselCaption);
            carouselCaption.appendChild(title);
            carouselCaption.appendChild(text);
            carouselItem.appendChild(image);
        }
    } else {
        console.log('error');
    }
}

request.send();

//function for compare the answers

function change() {
    var select = document.getElementsByTagName('select');

    for (var i = 0; i < select.length; i++) {

        var index = select[i].selectedIndex;
        var answer = document.getElementsByTagName('option')[index].value;

        if (answer=='Yes'){
            console.log('True');
            break;
        } else if (i == (select.length-1)) {
            console.log('False');
        }
    }
}
