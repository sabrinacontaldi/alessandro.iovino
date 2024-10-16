$(function(){
    $("#nav").load("nav.html");
    $("#content").load("home.html");
  });


  function toggleBold(element) {

    const links = document.querySelectorAll('.nav-bar a');
    links.forEach(link => {
        link.classList.remove('selected');
    });

    element.classList.add('selected');

    switch(element.id)
    {
        case 'commercials':
            $("#content").load("commercials.html");
            break;
        case 'albowGardens':
            $("#content").load("albow_gardens.html");
            break;
        case 'about':
            $("#content").load("about.html");
            break;
        default:
            $("#content").load("home.html");
            break;

    }
    // Optionally, you can log which item was clicked
    console.log(`${element.textContent} clicked.`);
}

function goBackCommercials(){
    window.location.href = 'index.html';
    $("#nav").load("nav.html");
    $("#content").load("commercials.html");
}
// const links = document.querySelectorAll('.nav-bar a');
//     links.forEach(link => {
//         link.onclick = function() {
//             toggleBold(this);
//         };
//     });

