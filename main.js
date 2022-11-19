const ol = document.querySelector("ol");

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var secretLetter = alphabet[Math.floor(Math.random() * 26)];

document.body.addEventListener('keyup', function(event) {
    if(event.key == secretLetter) {
        const h2Tag = document.createElement("h2");
        h2Tag.textContent = `SECRET KEY PRESSED ${secretLetter}`;
        ol.appendChild(h2Tag);
        secretLetter = alphabet[Math.floor(Math.random() * 26)];
    }
})