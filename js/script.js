let input = document.querySelector(".input");
let items = document.querySelectorAll(".keyboard__item");

function push (event) {
  items.forEach((elem) => {
    if (elem.getAttribute("data") === event.key) {
      elem.classList.add("active");
    } else {
      elem.classList.remove("active");
    }
  });
}
input.onkeydown = push;


for (let i = 0; i < items.length; i++) {
   items[i].onmousedown = () => {
      items[i].classList.add('active');
      if (items[i].getAttribute("data") != 'Tab' &&
          items[i].getAttribute("data") != 'Enter' &&
          items[i].getAttribute("data") != 'Shift' &&
          items[i].getAttribute("data") != 'Control' &&
          items[i].getAttribute("data") != 'Alt'
      ) {
         input.value += items[i].getAttribute("data");
      }
   }
   items[i].onmouseup = () => {
      items[i].classList.remove('active');
   }
}
