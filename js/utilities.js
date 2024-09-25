function eventFunction(
  id,
  inputId,
  totalDonationsId,
  totalFundsId,
  historyId,
  title,
  modalId,
  modalMessageId
) {
  document.getElementById(id).addEventListener("click", function () {
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    const totalDonation = document.getElementById(totalDonationsId);
    const totalDonationValue = parseFloat(totalDonation.innerText);
    const decrementAmount = document.getElementById(totalFundsId);
    const decrementAmountValue = parseFloat(decrementAmount.innerText);
    const today = new Date();
    const modal = document.getElementById(modalId);
    const modalMessage = document.getElementById(modalMessageId);
    if (isNaN(inputValue) || inputValue < 0) {
      modalMessage.innerText = "Invalid input! Please enter a valid amount.";
      modal.showModal();
    } else {
      if (decrementAmountValue >= inputValue) {
        const totalDonations = totalDonationValue + inputValue;
        document.getElementById(
          totalDonationsId
        ).innerText = `${totalDonations} BDT`;
        const remainingFunds = decrementAmountValue - inputValue;
        document.getElementById(
          totalFundsId
        ).innerText = `${remainingFunds} BDT`;
        document.getElementById(historyId).innerHTML += `
        <div class = "border rounded-xl p-8 mb-8">
        <p class = "text-[#111111] text-xl font-bold">${inputValue} Taka is Donated for ${title} Bangladesh.</p>
        <small class = "text-[#111111B2] text-base font-light">${today}</small>
        </div>
        `;
        inputField.value = "";
        modalMessage.innerText = "Thank you for your donation!";
        modal.showModal();
      } else {
        modalMessage.innerText = "Insufficient funds. Please add more.";
        modal.showModal();
      }
    }
  });
}

eventFunction(
  "noakhali-donate-btn",
  "noakhali",
  "total-donation-for-noakhali",
  "decrement-amount",
  "history-container",
  "Flood at Noakhali,",
  "donationModal",
  "modalMessage"
);

eventFunction(
  "feni-donate-btn",
  "feni",
  "total-donation-for-feni",
  "decrement-amount",
  "history-container",
  "Flood Relief in Feni,",
  "donationModal",
  "modalMessage"
);

eventFunction(
  "movement-donate-btn",
  "movement",
  "total-donation-for-quotaMovement",
  "decrement-amount",
  "history-container",
  "Injured in the Quota Movement,",
  "donationModal",
  "modalMessage"
);
