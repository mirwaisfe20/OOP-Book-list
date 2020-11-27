
class UI{

    static showMessage(className, message){
        /* create the element */
     const div = document.createElement('div');
     const messageText = document.createTextNode(message)
     div.classList = `alert alert-${className}`;
 
     div.appendChild(messageText)
 
     /* show the the element on the DOM */
     const container = document.querySelector('.container');
     const form = document.querySelector('.book-form');
 
     container.insertBefore(div, form)
 
     this.removeMessage()
 
    }
 
    static removeMessage(){
         setTimeout(function(){
              document.querySelector('.alert').remove()
         },3000)
    }
 
 
    static renderToDOM(bookObject){
         let tableData = document.querySelector('.table-data');
         let html = `
             <tr>
                 <td>${bookObject.isbn}</td>
                 <td>${bookObject.title}</td>
                 <td>${bookObject.author}</td>
             </tr>
         `
         tableData.innerHTML += html
    }
 
    static clearInputFields(){
     let isbn = document.querySelector('#isbn');
     let title = document.querySelector('#title');
     let author = document.querySelector('#author');
 
     isbn.value = '';
     title.value = '';
     author.value = '';
    }
 }

 export default UI;