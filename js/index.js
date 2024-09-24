document.getElementById("donation-btn").addEventListener("click", function (e) {
  document.getElementById("card-container").classList.remove("hidden");
  // console.log("Donation Btn clicked");
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
      alert("Thanks");
    } else {
      alert("Please provide valid amount.");
    }
  });
