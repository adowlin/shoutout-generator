var shoutouts = [
    "Is",
    "there",
    "anybody",
    "out",
    "there",
];

function randGen() {
    return Math.floor(Math.random() * 4);
}

function generateShoutout() {
    var randNum = randGen();
    var shoutout = shoutouts[randNum];

    document.getElementById('shoutoutMessage').innerHTML = shoutout;
};

// Run functions when the page has loaded.
window.addEventListener('load',function(){
    document.getElementById('generateButton').addEventListener("click", generateShoutout);
});
