const jokeBtn = document.querySelector('#jokeBtn');
const jokeText = document.querySelector('#jokeText');

jokeBtn.addEventListener('click', getJoke);

async function getJoke() {
  const apiUrl = 'https://official-joke-api.appspot.com/random_joke';
  const response = await fetch(apiUrl);
  const data = await response.json();
  jokeText.innerHTML = `${data.setup} <br> ${data.punchline}`;
}
