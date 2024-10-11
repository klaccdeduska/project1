async function getMessages() {
  const url = "https://api.sampleapis.com/cartoons/cartoons3D";
  const response = await fetch(url);
  const data = await response.json();

  const element = document.querySelector(".work");
  
  for (const item of data) {
    const title = item.title;
    const year = item.year;
    const creator = item.creator;
    const rating = item.rating;
    const genre = item.genre;
    const runtime_in_minutes = item.runtime_in_minutes;
    const episodes = item.episodes;
    const image = item.image;
    element.innerHTML += "<h1>" + title + "</h1>"
    element.innerHTML += '<img src="' + image + '"/>'
    element.innerHTML += "<p>" + "Year: " + year + "</p>"
    element.innerHTML += "<p>" + "Creator: " + creator + "</p>"
    element.innerHTML += "<p>" + "Rating: " + rating + "</p>"
    element.innerHTML += "<p>" + "Genre: " + genre + "</p>"
    element.innerHTML += "<p>" + "Runtime in minutes: " + runtime_in_minutes + "</p>"
    element.innerHTML += "<p>" + "Episodes: "+ episodes + "</p>"
  }
}
getMessages()