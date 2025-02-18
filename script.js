function createStars() {
  const container = document.querySelector("body");
  for (let i = 0; i < 1000; i++) {
    // Increase the number of stars to 1000
    const star = document.createElement("div");
    star.className = "star";
    star.style.width = ".1px";
    star.style.height = ".1px";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    container.appendChild(star);
  }
}

function createAsteroids() {
  const container = document.querySelector("div.asteroids");

  for(let i = 0; i < 1000; i++){
    let angle = Math.random() * 6.28;

    let radius = Math.random() * 3;
    let xvalue = Math.cos(angle) * (46 + radius);
    let yvalue = Math.sin(angle) * (46 + radius);

    const asteroid = document.createElement("div");

    asteroid.className = "asteroid";
    asteroid.style.width = (Math.random() * 2) + "px";
    asteroid.style.height = (Math.random() * 2) + "px";
    asteroid.style.top = (50 + yvalue) + "%";
    asteroid.style.left = (50 + xvalue) + "%";
    container.appendChild(asteroid);

  }
}

function createKuipers() {
  const container = document.querySelector("div.kuipers");

  for(let i = 0; i < 6000; i++){
    let angle = Math.random() * 6.28;

    let radius = Math.random() * 5;
    let xvalue = Math.cos(angle) * (35 + radius);
    let yvalue = Math.sin(angle) * (35 + radius);

    const kuiper = document.createElement("div");

    kuiper.className = "asteroid";
    kuiper.style.width = (Math.random() * 2) + "px";
    kuiper.style.height = (Math.random() * 2) + "px";
    kuiper.style.top = (50 + yvalue) + "%";
    kuiper.style.left = (50 + xvalue) + "%";
    container.appendChild(kuiper);

  }
}

createStars();
createAsteroids();
createKuipers();
