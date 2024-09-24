document.getElementById("donation-btn").addEventListener("click", function (e) {
  document.getElementById("card-container").classList.remove("hidden");
  document.getElementById("history-container").classList.add("hidden");
});
document
  .getElementById("noakhali-donate-btn")
  .addEventListener("click", function (e) {
    const inputFieldValue = document.getElementById("noakhali").value;
    const totalDonationForNoakhali = document.getElementById(
      "total-donation-for-noakhali"
    );
    const totalDonationForNoakhaliValue = parseFloat(
      totalDonationForNoakhali.innerText
    );
    const decrementAmountValue =
      document.getElementById("decrement-amount").innerText;
    const today = new Date();
    if (
      !isNaN(inputFieldValue) &&
      inputFieldValue > 0 &&
      decrementAmountValue > inputFieldValue
    ) {
      const totalAmountForNoakhali =
        totalDonationForNoakhaliValue + parseFloat(inputFieldValue);
      document.getElementById(
        "total-donation-for-noakhali"
      ).innerText = `${totalAmountForNoakhali} BDT`;
      const totalDecrementAmount =
        parseFloat(decrementAmountValue) - parseFloat(inputFieldValue);
      document.getElementById(
        "decrement-amount"
      ).innerText = `${totalDecrementAmount} BDT`;
      document.getElementById("history-container").innerHTML += `
      <div class = "border rounded-xl p-8 mb-8">
      <p class = "text-[#111111] text-xl font-bold">${inputFieldValue} Taka is Donated for Flood at Noakhali, Bangladesh.</p>
      <small class = "text-[#111111B2] text-base font-light">${today}</small>
      </div>
      `;
      alert("Thanks");
    } else {
      alert("Please provide valid amount.");
    }
  });

document.getElementById("history-btn").addEventListener("click", function (e) {
  document.getElementById("history-container").classList.remove("hidden");
  document.getElementById("card-container").classList.add("hidden");
});
