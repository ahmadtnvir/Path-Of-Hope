document.getElementById("donation-btn").addEventListener("click", function (e) {
  document.getElementById("card-container").classList.remove("hidden");
  document.getElementById("history-container").classList.add("hidden");
});

document.getElementById("history-btn").addEventListener("click", function (e) {
  document.getElementById("history-container").classList.remove("hidden");
  document.getElementById("card-container").classList.add("hidden");
});
