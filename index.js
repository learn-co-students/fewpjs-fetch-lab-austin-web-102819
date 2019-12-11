function fetchBooks() {
  /* Make the request to the remote API*/
 return fetch("https://anapioficeandfire.com/api/books")
  // Get the request back and then request that the response be in JSON 
  .then(function(response){
    return response.json();
    // Perform the work we want to do on the data (aka render the books)
  }).then(function(json){
    console.log(json);
    renderBooks(json)
  })

};

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
