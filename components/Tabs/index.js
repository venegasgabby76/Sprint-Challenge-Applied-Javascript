// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>



  //there are 5 different objects in this. JavaScript , Bootstrap, Technology, JQuery , Node.js

  function tabClass(topic) {
    //Make Element
    const tab = document.createElement('div');

    //Add Classes
    tab.classList.add("tab"); 

    tab.textContent = topic;

    return tab;
}

const topics = document.querySelector('.topics');

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then((response) => {
        console.log(response.data.topics);
        response.data.topics.forEach(function(topic) {
            topics.append(tabClass(topic));
        });
    });



  