// Mood data object with videos and songs for each mood
const moods = {
  happy: { video: 'videos/happy.mp4', song: 'songs/happy.mp3', info: 'Feeling Happy 🎉' },
  sad: { video: 'videos/sad.mp4', song: 'songs/sad.mp3', info: 'Sad Tunes 😢' },
  romantic: { video: 'videos/romantic.mp4', song: 'songs/romantic.mp3', info: 'Romantic Vibes 💖' },
  excited: { video: 'videos/excited.mp4', song: 'songs/excited.mp3', info: 'Excitement Unleashed 🔥' },
  relaxed: { video: 'videos/relaxed.mp4', song: 'songs/relaxed.mp3', info: 'Chill and Relax 😌' },
  energetic: { video: 'videos/energetic.mp4', song: 'songs/energetic.mp3', info: 'Full of Energy 💪' },
  nostalgic: { video: 'videos/nostalgic.mp4', song: 'songs/nostalgic.mp3', info: 'Nostalgic Feels ✨' },
  chill: { video: 'videos/chill.mp4', song: 'songs/chill.mp3', info: 'Just Chillin 🧊' },
  motivated: { video: 'videos/motivated.mp4', song: 'songs/motivated.mp3', info: 'Stay Motivated 💼' },
  surprised: { video: 'videos/surprised.mp4', song: 'songs/surprised.mp3', info: 'Surprise Yourself 😲' }
};

// Select modal, video, and audio elements
const playerModal = document.getElementById('player-modal');
const videoPlayer = document.getElementById('video-player');
const audioPlayer = document.getElementById('audio-player');
const songInfo = document.getElementById('song-info');

// Add event listeners to mood buttons
document.querySelectorAll('.mood-buttons button').forEach(button => {
  button.addEventListener('click', () => playMood(button.dataset.mood));
});

// Play selected mood
function playMood(mood) {
  const { video, song, info } = moods[mood];
  videoPlayer.src = video;
  audioPlayer.src = song;
  songInfo.textContent = info;
  songInfo.style.display = 'block';
  playerModal.style.display = 'flex';
  videoPlayer.play();
  audioPlayer.play();
}

// Close modal and stop video/audio
function closeModal() {
  playerModal.style.display = 'none';
  videoPlayer.pause();
  audioPlayer.pause();
  videoPlayer.currentTime = 0;
  audioPlayer.currentTime = 0;
  songInfo.style.display = 'none';
}
