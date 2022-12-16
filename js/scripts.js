function getQuote() {
  const url = `https://api.adviceslip.com/advice`;
  fetch(url, { cache: "no-cache" })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let advice = `${data.slip.advice}`;
      let adviceNum = `${data.slip.id}`;
      document.querySelector("#advicenum").innerHTML = "Advice # " + adviceNum;
      document.querySelector("#quotes").innerHTML = advice;
    })
    .catch((err) => {
      console.log(err);
    });
}
setInterval(getQuote(), 5000);
