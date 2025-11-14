class LibraryItem {
  constructor(title, year) {
    this.title = title;
    this.year = year;
    this.isCheckedOut = false;
  }

  checkOut() {
    this.isCheckedOut = true;
    const message = `${this.title} has been checked out`;
    return message;
  }

  returnItem() {
    this.isCheckedOut = false;
    const message = `${this.title} has been returned`;
    return message;
  }

  getDescription() {
    return `${this.title} (${this.year})`;
  }
}

class Book extends LibraryItem {
  constructor(title, year, author, pages) {
    super(title, year);
    this.author = author;
    this.pages = pages;
  }

  getDescription() {
    const baseDescription = super.getDescription();
    return `${baseDescription} by ${this.author}, ${this.pages} pages`;
  }
}

class DVD extends LibraryItem {
  constructor(title, year, director, runtime) {
    super(title, year);
    this.director = director;
    this.runtime = runtime;
  }

  getDescription() {
    const baseDescription = super.getDescription();
    return `${baseDescription} directed by ${this.director}, ${this.runtime} min`;
  }
}

class Magazine extends LibraryItem {
  constructor(title, year, issue) {
    super(title, year);
    this.issue = issue;
  }

  getDescription() {
    const baseDescription = super.getDescription();
    return `${baseDescription} Issue #${this.issue}`;
  }
}

module.exports = {
  LibraryItem,
  Book,
  DVD,
  Magazine,
};
