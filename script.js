const load = () => {
  const now = new Date().getHours();
  // const now = 10;

  const msg = document.querySelector("#msg");
  const pic = document.querySelector("#pic");

  msg.innerHTML = `Current Local Time: ${now}h.`;

  if (now < 6) {
    msg.innerHTML += `<p>Good Night...</p>`;
    pic.src = "../img/night.png";
    document.body.style.background = "#798EA2";
  } else if (now < 12) {
    msg.innerHTML += `<p>Good Morning!</p>`;
    pic.src = "../img/morning.png";
    document.body.style.background = "#ffee93";
  } else if (now < 18) {
    msg.innerHTML += `<p>Good Afternoon!</p>`;
    pic.src = "../img/afternoon.png";
    document.body.style.background = "#a1cae2";
  } else {
    msg.innerHTML += `<p>Good Evening!</p>`;
    pic.src = "../img/night.png";
    document.body.style.background = "#798EA2";
  }
};
