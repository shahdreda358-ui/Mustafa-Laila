const startDate = new Date("2026-03-21T00:00:00");

function updateCounter() {

    const now = new Date();

    const difference = now - startDate;

    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / 86400);

    const hours = Math.floor((totalSeconds % 86400) / 3600);

    const minutes = Math.floor((totalSeconds % 3600) / 60);

    const seconds = totalSeconds % 60;

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCounter();

setInterval(updateCounter, 1000);
function openSurprise() {

    window.location.href = "message.html";

}
function goToNextPage() {
    window.location.href = "page3.html";
}
