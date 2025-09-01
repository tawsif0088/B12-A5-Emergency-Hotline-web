
const heartCount = document.getElementById("heartCount");
const coinCount = document.getElementById("coinCount");
const copyCount = document.getElementById("copyCount");
const callHistoryList = document.getElementById("callHistoryList");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

let hearts = 0;
let coins = 100;
let copies = 0;


document.querySelectorAll(".heart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        hearts++;
        heartCount.textContent = hearts;
    });
});


document.querySelectorAll(".call-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const service = btn.getAttribute("data-service");
        const number = btn.getAttribute("data-number");


        if (coins < 20) {
            alert("Not enough coins! You need at least 20 coins to make a call.");
            return;
        }


        coins -= 20;
        coinCount.textContent = coins;


        alert(`Calling ${service} at ${number}`);

        const now = new Date();
        const timeString = now.toLocaleTimeString();

        const historyItem = document.createElement("div");
        historyItem.className = "flex justify-between items-center bg-gray-50 p-3 rounded-lg";
        historyItem.innerHTML = `
            <div>
                <p class="font-medium">${service}</p>
                <p class="text-sm text-gray-500">${number}</p>
            </div>
            <span class="text-sm text-gray-600">${timeString}</span>
        `;

        callHistoryList.prepend(historyItem);
    });
});


clearHistoryBtn.addEventListener("click", () => {
    callHistoryList.innerHTML = "";
});



document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        let number = btn.getAttribute("data-number");
        if (!number) {
            const card = btn.closest(".max-w-sm");
            const callBtn = card.querySelector(".call-btn");
            number = callBtn ? callBtn.getAttribute("data-number") : "";
        }
        if (number) {
            navigator.clipboard.writeText(number).then(() => {
                copies++;
                copyCount.textContent = copies;
                alert(`Copied hotline number: ${number}`);
            }).catch(err => {
                console.error("Failed to copy text: ", err);
            });
        } else {
            alert("No number found!");
        }
    });
});
