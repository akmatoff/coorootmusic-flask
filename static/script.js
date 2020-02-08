// Array with all the tracks
var tracks = [
    'static/audio/Cooroot - Memories.mp3',
    'static/audio/Cooroot - About You.mp3',
    'static/audio/Cooroot - Thoughts.mp3',
    'static/audio/Cooroot - Wastelands.mp3',
    'static/audio/Cooroot - Bottle Of Rum.mp3',
    'static/audio/Cooroot - Feelings.mp3',
    'static/audio/Cooroot - Text Me.mp3',
    'static/audio/Cooroot - Lost.mp3',
    'static/audio/Cooroot - Butterflies.mp3',
    'static/audio/Cooroot - Purgatory.mp3',
    'static/audio/Cooroot - Rocket Science.mp3',
    'static/audio/Cooroot - Whatever.mp3'
]

// Array with all the covers
var covers = [
    'static/img/Releases/Cooroot - Memories EP.png',
    'static/img/Releases/Cooroot - Memories EP.png',
    'static/img/Releases/Cooroot - Memories EP.png',
    'static/img/Releases/Cooroot - Wastelands.png',
    'static/img/Releases/Cooroot - Bottle Of Rum.png',
    'static/img/Releases/Cooroot - Feelings.png',
    'static/img/Releases/Cooroot - Text Me.png',
    'static/img/Releases/Cooroot - Lost.png',
    'static/img/Releases/Cooroot - Butterflies.png',
    'static/img/Releases/Full Flex Audio - UUS3.png',
    'static/img/Releases/Cooroot - Rocket Science.png',
    'static/img/Releases/Cooroot - Whatever.png'
]

var titles = ['Memoreis', 'About You', 'Thoughts', 'Wastelands', 'Bottle Of Rum', 'Feelings', 'Text Me', 'Lost', 'Butterflies', 'Purgatory', 'Rocket Science', 'Whatever']

// Creating variables for HTML elements
var trackCover = document.getElementById('track-cover');
var fillBar = document.getElementById('fill');
var seekBar = document.getElementById('seek-bar');
// var handle = document.getElementById('handle');
var trackTitle = document.getElementById('title');
var playButton = document.getElementById('play-button');
var prevButton = document.getElementById('prev-button');
var nextButton = document.getElementById('next-button');
var trackCurrentTime = document.getElementById('track-current-time');
var trackDuration = document.getElementById('track-duration');
var currentTrack = 0;

var track = new Audio();
var dragging = false;

track.src = tracks[currentTrack];
trackCover.style.backgroundImage = "url('" + covers[currentTrack] + "')";
trackTitle.innerHTML = titles[currentTrack]

window.addEventListener('load', () => {
    duration(Math.round(track.duration));
})

// Function to play or pause a track
function playOrPauseTrack() {
    if (track.paused) {
        playButton.className = 'fa fa-pause';
        track.play();
    } else {
        track.pause();
        playButton.className = 'fa fa-play';
    }
}

function nextTrack() {
    track.stop;

    if (currentTrack >= tracks.length - 1) {
        currentTrack = 0;
    } else {
        currentTrack++;
    }

    track.src = tracks[currentTrack];
    trackCover.style.backgroundImage = "url('" + covers[currentTrack] + "')";
    trackTitle.innerHTML = titles[currentTrack];

    track.play();
    playButton.className = 'fa fa-pause';

}

function prevTrack() {
    track.stop;

    if (currentTrack <= 0) {
        currentTrack = tracks.length - 1;
    } else {
        currentTrack--;
    }

    track.src = tracks[currentTrack];
    trackCover.style.backgroundImage = "url('" + covers[currentTrack] + "')";
    trackTitle.innerHTML = titles[currentTrack];
    track.play();
    playButton.className = 'fa fa-pause';
}

// Event if time updates
track.addEventListener('timeupdate', () => {
    var position = track.currentTime / track.duration;

    fillBar.style.width = position * 100 + '%';

    convertTime(Math.round(track.currentTime));

    if (track.ended) {
        nextTrack();
    }
})

// Slide track to a certain time
seekBar.addEventListener('mousedown', (e) => {
    var clickPosition = e.clientX - e.target.offsetLeft;
    track.currentTime = (clickPosition / e.target.offsetWidth) * track.duration;
    dragging = true;

}, false);

// Event on moving mouse
seekBar.addEventListener('mousemove', (e) => {
    if (dragging) {
    var clickPosition = e.clientX - e.target.offsetLeft;
    track.currentTime = (clickPosition / e.target.offsetWidth) * track.duration;
    }
});

// Event on stop holding the mouse
seekBar.addEventListener('mouseup', (e) => {
    dragging = false;
})

function convertTime(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    trackCurrentTime.textContent = min + ":" + sec;
    duration(Math.round(track.duration));
}

// Create 2 digit format instead of 1
function duration(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    trackDuration.textContent = min + ":" + sec;
}