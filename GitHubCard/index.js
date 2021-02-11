/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from "axios";

const entryPoint = document.querySelector(`.cards`);

axios.get(`https://api.github.com/users/RoryLariviere`)
  .then(res => {
    const futureData = res.data;
    entryPoint.appendChild(cardMaker(futureData));
  })
  .catch(err => {
    console.log(err);
  })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  `tetondan`,
  `dustinmyers`,
  `justsml`,
  `luishrd`,
  `bigknell`
];

followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
  .then(res => {
    const futureFollowersData = res.data;
    entryPoint.appendChild(cardMaker(futureFollowersData));
  })
})

function cardMaker(data){
  const card = document.createElement(`div`);
  const userImg = document.createElement(`img`);
  const cardInf = document.createElement(`div`);
  const nameH3 = document.createElement(`h3`);
  const userNme = document.createElement(`p`);
  const locale = document.createElement(`p`);
  const prof = document.createElement(`p`);
  const profLink = document.createElement(`a`);
  const followersCount = document.createElement(`p`);
  const followingCount = document.createElement(`p`);
  const bioInf = document.createElement(`p`);
  
  card.classList.add(`card`);
  cardInf.classList.add(`card-info`);
  nameH3.classList.add(`name`);
  userNme.classList.add(`username`);

  userImg.src = data.avatar_url;
  nameH3.textContent = data.name;
  userNme.textContent = data.login;
  locale.textContent = data.location;
  prof.textContent = `Profile: `;
  profLink.href = data.html_url;
  profLink.textContent = data.html_url;
  followersCount.textContent = `Followers: ${data.followers}`;
  followingCount.textContent = `Following: ${data.following}`;
  bioInf.textContent = `Bio: ${data.bio}`;

  card.appendChild(userImg);
  card.appendChild(cardInf);
  cardInf.appendChild(nameH3);
  cardInf.appendChild(userNme);
  cardInf.appendChild(locale);
  cardInf.appendChild(prof);
  prof.appendChild(profLink);
  cardInf.appendChild(followersCount);
  cardInf.appendChild(followingCount);
  cardInf.appendChild(bioInf);

  return card;

}

  // STEP 3: Create a function that accepts a single object as its only argument.
  //   Using DOM methods and properties, create and return the following markup:

    // <div class="card">
    //   <img src={image url of user} />
    //   <div class="card-info">
    //     <h3 class="name">{users name}</h3>
    //     <p class="username">{users user name}</p>
    //     <p>Location: {users location}</p>
    //     <p>Profile:
    //       <a href={address to users github page}>{address to users github page}</a>
    //     </p>
    //     <p>Followers: {users followers count}</p>
    //     <p>Following: {users following count}</p>
    //     <p>Bio: {users bio}</p>
    //   </div>
    // </div>



  // List of LS Instructors Github username's:
  //   tetondan
  //   dustinmyers
  //   justsml
  //   luishrd
  //   bigknell

