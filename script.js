const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
/*
const book = getBook(3);

const { author, title, genres, pages, publicationDate, hasMovieAdaptation } =
  book;

console.log(author, title);

// REST OPERATOR

const [firstGenre, secondaryGenre, ...other] = genres;

console.log(firstGenre, secondaryGenre, other);

const newArray = ["si-fi", ...genres];

console.log(newArray);

// SPREAD OPERATOR

const newObject = {
  ...book,
  moviePublicationDate: " 2001-12-19",
  // pages: 1111
};
console.log(newObject);

// TEMPLATE LITERALS
//możliwia tworzenie ciągów znaków zawierających zmienne i wyrażenia JavaScript. Zamiast używać zwykłych lub podwójnych cudzysłowów, literały szablonów korzystają z backticków (`). Wewnątrz takiego ciągu można umieścić wyrażenia JavaScript, otaczając je znakiem dolara i nawiasami klamrowymi (${wyrażenie}).

const summary = `${title}, a ${pages}-pages was written by ${author} and published in ${
  publicationDate.split("-")[0]
}. The book ${hasMovieAdaptation ? "" : "no "}been adapted as a movie`;

summary;

// TERNARIES INSTEAD OF IF/ELSE STATEMENTS / ternary operator
// definiowania wartości warunkowych bez użycia instrukcji if-else. Operator trójskładnikowy składa się z trzech części: warunku, wartości zwracanej, gdy warunek jest prawdziwy, i wartości zwracanej, gdy warunek jest fałszywy. Jonas pokazuje, jak używać tego operatora na przykładzie książki, oceniając liczbę stron i tworząc odpowiedni komunikat. Dodatkowo demonstruje użycie operatora trójskładnikowego wewnątrz literałów szablonowych do dynamicznego tworzenia ciągów znaków.

// Operator trójskładnikowy (ternary operator):

// Składnia: warunek ? wartość_true : wartość_false
// Używany do warunkowego przypisywania wartości.

const pagesRange = pages > 1000 ? `over a thousand` : "less then 1000";
pagesRange;

console.log(`The book has ${pagesRange} pages`);

// ARROW FUNCTIONS
// Funkcje strzałkowe mają prostszą składnię i automatycznie zwracają wartość, jeśli są zapisane w jednej linii.

// Funkcje Strzałkowe (Arrow Functions):

// Składnia: const nazwaFunkcji = (parametr) => wartośćDoZwrócenia;

// Skrócona forma funkcji dla prostych operacji.
// Automatyczny zwrot wartości dla jednowierszowych funkcji bez bloku kodu.

// Używaj nawiasów, gdy masz wiele parametrów lub linijek kodu.

// function getYear(str) {
//   return str.split("-")[0];
// }

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

//////////////////////////////////////
// Logical Operators

// && and operator
console.log(true && "wartość"); // przy true zwraca druga wartość
console.log(hasMovieAdaptation && "This book has a movie");

console.log(false && "wartość"); // przy false nie patrzy na drugą wartość
// falsy: 0,'',null,undefined

// || or operator

console.log(true || "Some string"); // jeżeli pierwsza wartość jest true nie patrzy na kolejną
console.log(false || "Some string"); // szuka true

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

// const count = book.reviews.librarything.reviewsCount ?? "no data";

// return 'no data' kiedy undefined lub null

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// OPTIONAL CHAINING

function getTotalReviewCount(a) {
  const goodreviews = book.reviews.goodreads?.reviewsCount || 0;
  const librarything = book.reviews.librarything?.reviewsCount || 0;
  return goodreviews + librarything;
}

console.log(getTotalReviewCount(book));
*/

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

/*
// THE ARRAY MAP METHOD

const books = getBooks();
books;

const titles = books.map((a) => a.title);
titles;

const essentialData = books.map((a) => ({
  titles: a.title,
  author: a.author,
}));
essentialData;

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// THE ARRAY FILTER METHOD

const longBookWithMovie = books
  .filter((a) => a.pages > 500)
  .filter((a) => a.hasMovieAdaptation);
longBookWithMovie;

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

// THE ARRAY REDUCE METHOD

const pagesAllBook = books.reduce((acc, books) => acc + books.pages, 0);
pagesAllBook;

// THE ARRAY SORT METHOD

const arr = [3, 7, 5, 2, 9, 1, 0];
const sorted = arr.slice().sort((a, b) => a - b);
sorted;
arr;

////////

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

// IMMUTABLE ARRAY

// 1) ADD BOOK OBJECT TO ARRAY

const newBook = {
  id: 6,
  title: "Harry Potter And The Chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];

booksAfterAdd;

// 2) Delete book object from array

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3) Update book object in the array

const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 4 ? { ...book, pages: 777 } : book
);
booksAfterUpdate;
*/
// Asynchronous JavaScript: Promises

// fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
//   res.json().then((data) => console.log(data))
// );

// console.log("puk puk!");

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  console.log(data);
}

getTodos();

console.log("puk puk!");
