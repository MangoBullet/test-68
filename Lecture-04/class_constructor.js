class Song {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  play() {
    console.log(this.title + ' playing!');
  }
}

const mySong = new Song('Bohemian Rhapsody', 'Queen');
mySong.play();