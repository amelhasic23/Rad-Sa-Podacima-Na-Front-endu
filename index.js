function provjeri(a, answer) {
    window.localStorage.setItem(a, answer);
  }
  
  function dodajOdgovorNaStranicu(question, options) {
    for (let i = 0; i < options.length; i++) {
      const option = options[i];
      const isChecked = window.localStorage.getItem(question) === option ? "checked" : "";
      document.body.innerHTML +=
        `<p><input type="radio" name="${question}" value="${option}" ${isChecked} onclick="provjeri('${question}', '${option}')"/>` +
        option +
        "</p>";
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    fetch("index.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        document.body.innerHTML += `<h2>Question 1: ${data.quiz.q1.question}</h2>`;
        dodajOdgovorNaStranicu("q1", data.quiz.q1.options);
  
        document.body.innerHTML += `<h2>Question 2: ${data.quiz.q2.question}</h2>`;
        dodajOdgovorNaStranicu("q2", data.quiz.q2.options);
  
        document.body.innerHTML += `<h2>Question 3 3: ${data.quiz.q3.question}</h2>`;
        dodajOdgovorNaStranicu("q3", data.quiz.q3.options);
  
        document.body.innerHTML += `<h2>Question 4: ${data.quiz.q4.question}</h2>`;
        dodajOdgovorNaStranicu("q4", data.quiz.q4.options);
      })
      .catch(function (err) {
        console.log("Problem pri preuzimanju: " + err.message);
      });
  });
  
  