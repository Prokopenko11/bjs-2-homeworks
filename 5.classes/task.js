// Основное задание
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if(book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let valueToreturn = null;

    for(let book of this.books) {
      if (book.hasOwnProperty(type) && (book[type] === value)) {
        valueToreturn = book;
        break;
      }
    }
    return valueToreturn;
  }

  giveBookByName(bookName) {
    let bookToReturn = null;

    for(let book of this.books) {
      if (book[bookName] === book[this.name]){
        bookToReturn = book;
        this.books.splice(this.books.indexOf(book), 1);
      }
    }
    return bookToReturn;
  }
}


// Дополнительное задание
class Student {
  constructor(name){
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if ((mark < 2) || (mark > 5)) return;
    else if (!this.marks.hasOwnProperty(subject)) {
      this.marks[subject] = [];
      this.marks[subject].push(mark);
    } else {
      this.marks[subject].push(mark);
    }
  }

  getAverageBySubject(subject) {
    if (!this.marks.hasOwnProperty(subject)) return 0;
    let sumOfMarks = this.marks[subject].reduce((acc, mark) => acc + mark, 0)
    return sumOfMarks / this.marks[subject].length;
  }

  getAverage() {
    if (Object.keys(this.marks).length === 0) return 0;

    let sumOfAllMarks = Object.keys(this.marks).reduce((acc, subject) => {
      return acc + this.getAverageBySubject(subject);
    }, 0)
    return sumOfAllMarks / Object.keys(this.marks).length;
  }
}
