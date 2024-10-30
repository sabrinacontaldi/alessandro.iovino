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
        case 'mama':
            $("#content").load("mama_didnt_raise_me_this_way.html");
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


document.getElementById('instagramButton').addEventListener('click', function() {
    window.location.href = 'https://www.instagram.com/alessandro.iovino_';
});

document.getElementById('emailButton').addEventListener('click', function() {
    const recipient = 'iovinoalessandro88@gmail.com';
    const mailtoLink = `mailto:${recipient}?`;
    
    window.location.href = mailtoLink;
});
// const links = document.querySelectorAll('.nav-bar a');
//     links.forEach(link => {
//         link.onclick = function() {
//             toggleBold(this);
//         };
//     });

