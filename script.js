//your JS code here. If required.
const app = document.getElementById('app');
const videoPlayer = document.getElementById('videoPlayer');
const audioPlayer = document.getElementById('audioPlayer');
const soundPicker = document.querySelector('.sound-picker');
const timeButtons = document.querySelectorAll('.time-select button');
const timeDisplay = document.querySelector('.time-display');
const playPauseBtn = document.getElementById('playPauseBtn');

let selectedSound = 'Sounds/beach.mp3';
let selectedVideo = 'Videos/beach.mp4';

function switchSound(event) {
  const soundButtons = soundPicker.querySelectorAll('button');
  soundButtons.forEach(button => button.classList.remove('selected'));
  event.target.classList.add('selected');

  if (event.target.id === 'sound1') {
    selectedSound = 'Sounds/beach.mp3';
    selectedVideo = 'Videos/beach.mp4';
  } else if (event.target.id === 'sound2') {
    selectedSound = 'Sounds/rain.mp3';
    selectedVideo = 'Videos/rain.mp4';
  }

  audioPlayer.src = selectedSound;
  videoPlayer.src = selectedVideo;
}

function switchTime(event) {
  timeButtons.forEach(button => button.classList.remove('active'));
  event.target.classList.add('active');

  const time = event.target.innerText.split(' ')[0];
  const minutes = parseInt(time);
  const seconds = minutes * 60;
  setTimeDisplay(seconds);
}

function setTimeDisplay(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  timeDisplay.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function playPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    videoPlayer.play();
    playPauseBtn.classList.remove('play');
    playPauseBtn.classList.add('pause');
    playPauseBtn.innerText = 'Pause';
  } else {
    audioPlayer.pause();
    videoPlayer.pause();
    playPauseBtn.classList.remove('pause');
    playPauseBtn.classList.add('play');
    playPauseBtn.innerText = 'Play';
  }
}

soundPicker.addEventListener('click', switchSound);
timeButtons.forEach(button => button.addEventListener('click', switchTime));
playPauseBtn.addEventListener('click', playPause);