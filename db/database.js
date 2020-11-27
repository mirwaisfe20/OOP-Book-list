class DB{
    constructor(){
        this.books;
    }


    save(bookObject){
    /* load the data from loca storage */
    if(localStorage.getItem('books')){
        this.books = JSON.parse(localStorage.getItem('books'))
    } else {
        this.books = []
    }

    this.books.push(bookObject)
    /* save the data back to local storage */
    localStorage.setItem('books',JSON.stringify(this.books))
   }

}

export default DB;