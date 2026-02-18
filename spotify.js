const playlists = [
  {
    nombre: "Ocean",
    id: "7rrEEIPm6bWlTD5jnk3ZFZ"
  },
  {
    nombre: "Ey Low Me",
    id: "2z39TGPUeMfQg8BolokdFT"
  },
  {
    nombre: "Emotional",
    id: "30te5Rkzxy4yOumW5hsRjt"
  },
  {
    nombre: "Bangers",
    id: "48SqE6TD4ZZgHRN6BZVpGF"
  },
  {
    nombre: "Dynasty",
    id: "45kvxGaTJCj4UGGlBsbrZH"
  },
  {
    nombre: "Greatest",
    id: "0Vf3sb57w1iuGoghcBxNKv"
  },
  {
    nombre: "Ye",
    id: "023JgrFqbzBBtb47Ql1FCu"
  }
];

const container = document.getElementById("playlists");

playlists.forEach(playlist => {
  const div = document.createElement("div");
  div.classList.add("playlist");

  div.innerHTML = `
    <h3>${playlist.nombre}</h3>
    <iframe 
      src="https://open.spotify.com/embed/playlist/${playlist.id}"
      frameborder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy">
    </iframe>
  `;

  container.appendChild(div);
});
