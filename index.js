// // Select counters
// const heartCount = document.getElementById("heartCount");
// const coinCount = document.getElementById("coinCount");
// const callHistoryList = document.getElementById("callHistoryList");

// // Heart button functionality
// const heartButtons = document.querySelectorAll(".heart-btn");
// let hearts = 0;
// heartButtons.forEach(btn => {
//     btn.addEventListener("click", () => {
//         hearts++;
//         heartCount.textContent = hearts;
//     });
// });

// // Call button functionality
// const callButtons = document.querySelectorAll(".call-btn");
// let coins = 100; // starting coins

// callButtons.forEach(btn => {
//     btn.addEventListener("click", () => {
//         const service = btn.getAttribute("data-service");
//         const number = btn.getAttribute("data-number");

//         // check coins
//         if (coins < 20) {
//             alert("Not enough coins! You need at least 20 coins to make a call.");
//             return;
//         }

//         // deduct coins
//         coins -= 20;
//         coinCount.textContent = coins;

//         // show alert
//         alert(`Calling ${service} at ${number}`);

//         // add to call history with current time
//         const now = new Date();
//         const timeString = now.toLocaleTimeString();

//         const historyItem = document.createElement("div");
//         historyItem.className = "flex justify-between items-center bg-gray-50 p-3 rounded-lg";
//         historyItem.innerHTML = `
//             <div>
//                 <p class="font-medium">${service}</p>
//                 <p class="text-sm text-gray-500">${number}</p>
//             </div>
//             <span class="text-sm text-gray-600">${timeString}</span>
//         `;

//         callHistoryList.prepend(historyItem);
//     });
// });

// // Clear history button
// const clearHistoryBtn = document.querySelector(".bg-green-600.hover\\:bg-green-700");
// clearHistoryBtn.addEventListener("click", () => {
//     callHistoryList.innerHTML = "";
// });


// newCode




// =======================
// Navbar counters
// =======================
const heartCount = document.getElementById("heartCount");
const coinCount = document.getElementById("coinCount");
const copyCount = document.getElementById("copyCount");
const callHistoryList = document.getElementById("callHistoryList");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

let hearts = 0;
let coins = 100;
let copies = 0;

// =======================
// Heart button click
// =======================
document.querySelectorAll(".heart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        hearts++;
        heartCount.textContent = hearts;
    });
});

// =======================
// Call button click
// =======================
document.querySelectorAll(".call-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const service = btn.getAttribute("data-service");
        const number = btn.getAttribute("data-number");

        // check coins
        if (coins < 20) {
            alert("Not enough coins! You need at least 20 coins to make a call.");
            return;
        }

        // deduct coins
        coins -= 20;
        coinCount.textContent = coins;

        // show alert
        alert(`Calling ${service} at ${number}`);

        // add to call history
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

// =======================
// Clear history button
// =======================
clearHistoryBtn.addEventListener("click", () => {
    callHistoryList.innerHTML = "";
});

// =======================
// Copy button click
// =======================
document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const number = btn.getAttribute("data-number");

        // copy to clipboard
        navigator.clipboard.writeText(number).then(() => {
            // increase count
            copies++;
            copyCount.textContent = copies;

            // show alert
            alert(`Copied hotline number: ${number}`);
        }).catch(err => {
            console.error("Failed to copy text: ", err);
        });
    });
});
