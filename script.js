const audioPlayer = document.getElementById('audioPlayer');
const playPauseButton = document.getElementById('playPauseButton');
const progressBar = document.getElementById('progressBar');
const currentTimeElement = document.getElementById('currentTime');

function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = 'Play';
    }
}

function updateTime() {
    const currentTime = formatTime(audioPlayer.currentTime);
    currentTimeElement.textContent = currentTime;

    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = progress + '%';
}

function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

audioPlayer.addEventListener('play', () => {
    // Disable seeking using the default controls
    audioPlayer.removeAttribute('controls');
});

audioPlayer.addEventListener('seeking', () => {
    // Reset seek attempts to prevent seeking
    audioPlayer.currentTime = 0;
});
