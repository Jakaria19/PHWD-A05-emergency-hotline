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

    const newCallCoin = callCoin - 20;

    document.getElementById("count-call-coin").innerText = newCallCoin;

    const card = callButton.parentNode.parentNode;

    const h1Tags = card.querySelectorAll("h1");
    const serviceName = h1Tags[0].innerText;
    const serviceNumber = h1Tags[1].innerText;

    const date = new Date().toLocaleTimeString();

    const callHistoryContainer = document.getElementById(
      "call-history-container"
    );

    const div = document.createElement("div");

    div.innerHTML = `
     <div class="flex justify-between items-center mt-3 p-3 bg-[#fafafa] rounded-lg">
                    <div>
                        <h2>${serviceName}</h2>
                        <h2 class="text-gray-500">${serviceNumber}</h2>
                    </div>
                    <p>${date}</p>
                </div>
    `;

    callHistoryContainer.appendChild(div);

    if (callCoin < 20) {
      alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
      return;
    } else {
      alert("Calling: " + serviceName + " -- " + serviceNumber);
    }
  });
}

//* Copy Button

const copyButtons = document.getElementsByClassName("click-copy-btn");

for (let copyButton of copyButtons) {
  copyButton.addEventListener("click", function () {
    // alert("নম্বরটি কপি হয়েছে");

    const copyButtonCount = parseInt(
      document.getElementById("count-copy-btn").innerText
    );

    const newCopyButtonCount = copyButtonCount + 1;

    document.getElementById("count-copy-btn").innerText = newCopyButtonCount;

    const card = copyButton.parentNode.parentNode;

    const h1Tags = card.querySelectorAll("h1");

    const serviceNumber = h1Tags[1].innerText;

    navigator.clipboard.writeText(serviceNumber);

    alert("Copied the text: " + serviceNumber);
  });
}

//* Clear Button

document.getElementById("clear-btn").addEventListener("click", function () {
  const callHistoryContainer = document.getElementById(
    "call-history-container"
  );
  callHistoryContainer.innerText = "";
});
