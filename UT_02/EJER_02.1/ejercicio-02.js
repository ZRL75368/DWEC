const playlist = [
  { titulo: 'Blinding Lights', artista: 'The Weeknd', duracion: 130 },
  { titulo: 'Shape of You', artista: 'Ed Sheeran', duracion: 110 },
  { titulo: 'Bohemian Rhapsody', artista: 'Queen', duracion: 120 },
  { titulo: 'Levitating', artista: 'Dua Lipa', duracion: 203 },
  { titulo: 'Watermelon Sugar', artista: 'Harry Styles', duracion: 174 },
  { titulo: 'STAY', artista: 'The Kid LAROI & Justin Bieber', duracion: 141 },
  { titulo: 'Bad Guy', artista: 'Billie Eilish', duracion: 194 },
  { titulo: 'As It Was', artista: 'Harry Styles', duracion: 167 },
  { titulo: 'Flowers', artista: 'Miley Cyrus', duracion: 200 },
  { titulo: 'Anti-Hero', artista: 'Taylor Swift', duracion: 201 }
];

console.log('Canciones:');

playlist.forEach((cancion, indice) => {
  console.log(`${indice}: ${cancion.titulo}`);
});


const cancionesLargas = playlist.filter(cancion => cancion.duracion > 180 );
cancionesLargas.forEach((cancion, indice) => {
  console.log(`${indice}: ${cancion.titulo}`);
});

const mensajesCanciones = cancionesLargas.map(
  cancion => `La canción '${cancion.titulo}' de ${cancion.artista} dura ${cancion.duracion} segundos.`
);

console.log(mensajesCanciones);