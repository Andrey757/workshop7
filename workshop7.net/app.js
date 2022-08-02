const authors_id="Authors";
function guardar_Author() {
    let authors = []
    const author = {
        nombre: document.getElementById("title").value,
        
    };
    if(localStorage.getItem(authors_id)){
        authors= JSON.parse(localStorage.getItem(authors_id));
    }
    authors.push(author);
    localStorage.setItem (authors_id,JSON.stringify(authors));

    
}

function obtener_localstorage(nombre_persona){
    let persona = JSON.parse(localStorage.getItem(nombre_persona));
    console.log(persona);
}


function editBook(id){

}

function deleteBook(id){

}