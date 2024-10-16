// const url = new URL(window.location.href);
// const lang = url.searchParams.get('lang');

// if (lang) {
//     elements = document.querySelectorAll(`span[lang=${lang}]`);
//   for (let element of elements) {
//     element.style.display = 'inherit';
//   }
// }

// const c = document.getElementById("center");
// const buttons = document.querySelectorAll("[data-photo_btn]");

// console.log(c); // Check if the image element is selected
// console.log(buttons); // Check if the buttons are selected

// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         console.log('Button clicked'); // Check if the event listener is working
//         const offset = button.dataset.photo_btn === "next" ? 1 : -1;

//         console.log(c.src);
//         let s = (c.src).split("http://127.0.0.1:5500");
//         console.log(s);
//         let index = pics.findIndex(pic => pic.src === s[1]);

//         console.log('Current index:', index);

//         if (index !== -1) {
//             index = (index + offset + pics.length) % pics.length;
//             const newSrc = pics[index].src;
//             console.log('New src:', newSrc);
//             applyTransition(c, s[0] + "http://127.0.0.1:5500" + pics[index].src, offset);
//         }
//     });
// });

// const pics = [
//     {
//         'id': '1',
//         'src': "/images/charlie19/0072093-0008_FINAL.jpg",
//     },
//     {
//         'id': '2',
//         'src': '/images/charlie19/0072093-0009_FINAL.jpg',
//     },
//     {
//         'id': '3',
//         'src': "images/charlie19/0072093-0010_FINAL.jpg",
//     },
//     {
//         'id': '4',
//         'src': '/images/charlie19/0072093-0011_FINAL.jpg',
//     },
//     {
//         'id': '5',
//         'src': '/images/charlie19/0072093-0014_FINAL.jpg',
//     },
//     {
//       'id': '6',
//       'src': '/images/charlie19/0072093-0017_FINAL.jpg',
//     }
// ];

// function applyTransition(element, newSrc) {
//   setTimeout(() => {
//       element.src = newSrc;
//   }, 500);
// }
