import Book from './Book.js';
import UI from './UserInterface.js';
import DB from '../db/database.js'


(function app(test){
    /* entry poin */
   loadApp()

    function loadApp(){
        const bookForm = document.querySelector('.book-form');
        bookForm.addEventListener('submit', addBook);
    }
    
    
    /* create book object */
    function addBook(event){
        /* do not send the information somewhere */
        event.preventDefault();
    
        const isbn = document.querySelector('#isbn').value;
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
    
        if(isbn != '' && title != '' && author != ''){
    
            /* create an object using the Book class Constructor */
            const book = new Book(isbn, title, author);
            /* save the book */
            const db = new DB();
            db.save(book)
            /* renderToDOM */
            UI.renderToDOM(book)
    
            UI.showMessage('success', 'Book Added :)')
            /* clear the input fields */
            UI.clearInputFields()
        } else {
            UI.showMessage('warning', 'All fields are required :(')
        }
    }
    
    }())







