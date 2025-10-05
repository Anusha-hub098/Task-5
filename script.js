const form = document.getElementById("leaveForm");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const name = document.getElementById("name").value;
  const reason = document.getElementById("reason").value;
  const days = document.getElementById("days").value;

  result.innerHTML = `✅ ${name}, your leave for ${days} day(s) is submitted successfully for reason: ${reason}`;
  form.reset(); 
});
