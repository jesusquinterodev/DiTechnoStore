const button = document.querySelector('#joke');

button.addEventListener('click', getJoke);

async function getJoke() {
  const jokeData = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'

    }
  });
  const jokeObj = await jokeData.json();
  let joke = jokeObj.joke;
  Swal.fire({
    title: joke + "🤣",
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
}