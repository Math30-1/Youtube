function trocarVideo(videoId, titulo, descricao) {
  const frame = document.getElementById('videoFrame');
  const title = document.getElementById('videoTitle');
  const desc = document.getElementById('videoDesc');

  frame.src = `https://www.youtube.com/embed/${videoId}`;
  title.textContent = titulo;
  desc.textContent = descricao;
}
