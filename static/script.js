var tracks = [
    'static/audio/Cooroot - Memories.mp3',
    'static/audio/Cooroot - About You.mp3',
    'static/audio/Cooroot - Thoughts.mp3',
    'static/audio/Cooroot - Wastelands.mp3',
    'static/audio/Cooroot - Hate.mp3',
    'static/audio/Cooroot - Feelings.mp3',
    'static/audio/Cooroot - Text Me.mp3',
    'static/audio/Cooroot - Lost.mp3',
    'static/audio/Cooroot - Butterflies.mp3',
    'static/audio/Cooroot - Purgatory.mp3',
    'static/audio/Cooroot - Rocket Science.mp3'
]

var track = new Howl({
    src: ['static/audio/Cooroot - Text Me.mp3']
})

var covers = [
    'img/Releases/Cooroot - Memories EP.png',
    'img/Releases/Cooroot - Bottle Of Rum.png',
    'img/Releases/Cooroot - Butterflies.png',
    'img/Releases/Cooroot - Feelings.png',
    'img/Releases/Cooroot - Hate.jpg',
    'img/Releases/Cooroot - Lost.png',
    'img/Releases/Cooroot - Rocket Science.png',
    'img/Releases/Cooroot - Text Me.png',
    'img/Releases/Cooroot - Wastelands.png',
    'img/Releases/Cooroot - Whatever.png'
]

var playButton = document.getElementById('play-button');
var player = document.getElementById('player-container');

function playOrPauseTrack() {
    if (track.playing()) {
        playButton.className = 'fa fa-play';
        track.pause();
    } else {
        track.play();
        playButton.className = 'fa fa-pause';
    }
}

