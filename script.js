// Mood data object with videos and songs for each mood
const moods = {
    happy: { video: 'videos/happy.mp4', song: 'songs/happy.mp3' },
    sad: { video: 'videos/sad.mp4', song: 'songs/sad.mp3' },
    romantic: { video: 'videos/romantic.mp4', song: 'songs/romantic.mp3' },
    excited: { video: 'videos/excited.mp4', song: 'songs/excited.mp3' },
    relaxed: { video: 'videos/relaxed.mp4', song: 'songs/relaxed.mp3' },
    energetic: { video: 'videos/energetic.mp4', song: 'songs/energetic.mp3' },
    nostalgic: { video: 'videos/nostalgic.mp4', song: 'songs/nostalgic.mp3' },
    chill: { video: 'videos/chill.mp4', song: 'songs/chill.mp3' },
    motivated: { video: 'videos/motivated.mp4', song: 'songs/motivated.mp3' },
    surprised: { video: 'videos/surprised.mp4', song: 'songs/surprised.mp3' },
  };
  
  // Select modal, video, and audio elements
  const playerModal = document.getElementById('player-modal');
  const videoPlayer = document.getElementById('video-player');
  const audioPlayer = document.getElementById('audio-player');
  
  // Add event listeners to mood buttons
  document.querySelectorAll('.mood-buttons button').forEach(button => {
    button.addEventListener('click', () => playMood(button.dataset.mood));
  });
  
  // Play selected mood
  function playMood(mood) {
    const { video, song } = moods[mood];
    videoPlayer.src = video;
    audioPlayer.src = song;
  
    // Show modal and play video/audio
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
  }
  