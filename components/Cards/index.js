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



const cardContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) => {

    const js = Object.entries(response.data.articles.javascript);
    const bootstrap = Object.entries(response.data.articles.bootstrap);
    const jquery = Object.entries(response.data.articles.jquery);
    const node = Object.entries(response.data.articles.node);
    const technology = Object.entries(response.data.articles.technology);

    const topics = [js, bootstrap, jquery, node, technology];

    topics.forEach((article) => {
        article.forEach((newCard) => {
            cardContainer.append(Cards(newCard));
        })
    })
})

.catch((err) => {
    console.log(`There was an error getting the cards `, err);
});



function Cards (items) {
  const card = document.createElement('div');
    card.classList.add('card');

  const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = items[1].headline;

  const author = document.createElement('div');
  author.classList.add('author');

  const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

  const image = document.createElement('img');
    image.src = items[1].authorPhoto;

  const authorName = document.createElement('span');
  authorName.textContent = items[1].authorName;
  

  card.append(headline);
  card.append(author);
  author.append(imgContainer);
  imgContainer.append(image);
  author.append(authorName);

  return card;


}


  