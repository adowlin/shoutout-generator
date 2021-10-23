var shoutouts = [
    "You’ll do your best work today",
    "Hey you! You’re doing great",
    "You’re &#10024; smashing it &#10024;",
    "It’s a bones day! &#129460;",
    "You’re doing amazing sweetie &#128378;",
    "If you can dream it &#128173; you can do it!",
    "Kudos!",
    "Love this for you &#128079;",
    "You’ve got this &#128170;",
    "You’re my hero &#129464;",
    "I’m proud of you! &#129409;",
    "You are a &#10024; positive influence &#10024;",
    "You’re an awesome teammate!",
    "Shout out to you for being a great leader",
    "YOU ARE A ROCK STAR",
    "&#127926; Hey now, you’re an all star &#127926;",
    "&#127926; you’ll never know if you don’t go &#127926;",
    "&#127926; you’ll never shine if you don’t glow &#127926;",
    "Keep up the great work!",
    "You’re an inspiration &#129412;",
    "Congrats on your amazing work!",
    "You’re &#10024; exceeding expectations &#10024;",
    "Thank you for bringing your best!",
    "I can always count on you",
    "You’re a super role model!",
    "You are important!",
    "Keep going, your hard work will pay off!",
    "You’re crushing it &#128588;",
    "Congrats on being an amazing human!",
    "Way to go!",
    "The work you’re doing makes a positive impact",
    "I’m grateful to know you &#129309;",
    "You’re a great co-worker &#127942;",
    "Show up for yourself!",
    "&#127926; you’re simply the best &#127926;",
    "I’m grateful for your support!",
    "Your input is &#128079; invaluable &#128079;",
    "Treat yourself today—you deserve it!",
    "&#127926; you put your thang down, flip it and reverse it &#127926;",
    "&#127926; don’t stop believin’ &#127926;",
    "&#127926; tonight’s the night we’re gonna make it happen &#127926;",
    "&#127926; I’ll be there for you &#127926;",
    "&#127926; started from the bottom now the whole team here &#127926;",
    "&#127926; today is where your book begins &#127926;",
    "You’re on a roll! &#129366;",
    "&#127926; you’re risin’ up, straight to to top &#127926;",
    "Believe you can and you’re halfway there &#129308;&#129307;",
    "Be proud of yourself for showing up everyday!",
    "You’re the rainbow in someone else’s cloud &#127752;",
    "Take a break, rest, and recharge—you deserve it",
    "Shoutout to everyone who still Googles HTML basics!",
    "Shoutout to everyone getting up early!",
    "Shoutout to everyone making shoutout generators!",
];

function randGen() {
    return Math.floor(Math.random() * 53);
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
