// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })



  function cardCreator (item) {
      const card = document.createElement('div')
      card.classList.add('card')

      const headline = document.createElement('div')
      headline.classList.add('headline')
      headline.textContent = items.headline

      const author = document.createElement('div')
      author.classList.add('author')

      const imgContainer = document.createElement('div')
      imgContainer.classList.add('img')

      const image = document.createElement('img')
      image.setAttribute( "src" , items.authorPhoto)

      const name = document.createElement('div')
      name.textContent = `By ${items.authorName}`



      return card;
  }