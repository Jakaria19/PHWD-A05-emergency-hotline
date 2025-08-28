// ! DUE
// 5. Call Buttons
// Show an alert with a message including the service name and number
// Add this service into the Call History section with:
// Service name
// Service number
// ! full due from 5. Call History Section

//* Heart Icons

const heartIcons = document.getElementsByClassName("click-heart-icon");

for (let heartIcon of heartIcons) {
  heartIcon.addEventListener("click", function () {
    const heartIconCount = parseInt(
      document.getElementById("count-heart-icon").innerText
    );

    const newHeartIconCount = heartIconCount + 1;

    document.getElementById("count-heart-icon").innerText = newHeartIconCount;
  });
}

//* Call Buttons
const callButtons = document.getElementsByClassName("click-call-btn");

for (let callButton of callButtons) {
  callButton.addEventListener("click", function () {
    const callCoin = parseInt(
      document.getElementById("count-call-coin").innerText
    );

    if (callCoin < 20) {
      alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
      return;
    } else {
      alert("Calling");
    }

    const newCallCoin = callCoin - 20;

    document.getElementById("count-call-coin").innerText = newCallCoin;
  });
}
