class Book{
  constructor(title, author){
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }
}

class Library{
  constructor(collection = []){
    this.collection = collection;
  }

  addBook(book){
    this.collection.push(book.title);
    console.log(`${this.collection}`);
  }

  borrowBook(title){
  }

  returnBook(title){
  }
}

const LOTR = new Book("Lord of the Rings", "JRRT");
const ASOIAF = new Book("Game of Thrones", "GRRM");
const Victoria = new Library([]);

Victoria.addBook(LOTR);
Victoria.addBook(ASOIAF);