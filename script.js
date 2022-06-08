let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  // DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-title ID element. Remember there are a couple of ways to query id. Change the text of the title to something shorter.
  const changeMainTitle = () => {
    document.querySelector('#main-title').innerText = 'Welcome to my homepage';
  }
  changeMainTitle();

  // Part 2
  // Select the body and change the background-color to a new color of your choice.
  const changeBodyBkgColor = () => {
    document.body.style.backgroundColor = '#FAF9F6';
  }
  changeBodyBkgColor();

  // Part 3
  // Select DOM's Favorite Things list and remove the last list item.
  const removeLastFavThing = () => {
    const favoriteThingsList = document.querySelector('#favorite-things');
    favoriteThingsList.removeChild(favoriteThingsList.lastElementChild);
  }
  removeLastFavThing();

  // Part 4
  // Select all .special-title class elements and change their font-size to 2rem. Remember you might have to iterate through the list of elements
  const changeSpecTitleFontSize = () => {
    const specialTitleEls = document.querySelectorAll('.special-title');
    specialTitleEls.forEach(element => element.style.fontSize = '2rem');
    // for(const element of specialTitleEls) {
    //   element.style.fontSize = '2rem';
    // }
  }
  changeSpecTitleFontSize();

  // Part 5
  // Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
  const removePastRaceChicago = () => {
    const pastRacesList = document.querySelector('#past-races');
    pastRacesList.removeChild(pastRacesList.children[3]);

    return pastRacesList;
  }
  removePastRaceChicago();

  // Part 6
  // Let's add to DOM's Past Races list. Create a new <li> element, change the new <li> text to the name of a city, and append it to the Past Races list.
  const addToPastRaces = () => {
    const newLi = document.createElement('li');
    newLi.innerText = 'Nairobi';
    removePastRaceChicago().appendChild(newLi);
    
    return newLi;
  }
  addToPastRaces();

  // Part 7
  // Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a new <div> with class of .blog-post, a new <h1> with text, and a new <p> with some text. Make the new element consistent with the other posts. Think about what order you want to create the elements, and what order you want to append them in.
  const createBlogPost = () => {
    const newDiv = document.createElement('div');
    const main = document.querySelector('.main');
console.log(main.children)
    newDiv.classList.add('blog-post', 'purple');
    newDiv.innerHTML = `<h1>${addToPastRaces().innerText}</h1>
    <p>IT WAS GREAT RACING CAPHEUS "VAN DAMN" ONYANGO</p>`;
    main.appendChild(newDiv);
  }
  createBlogPost();
}