function updateCounters() {

    const counters =
        document.querySelectorAll(".counter");


    counters.forEach(counter => {

        const dateString =
            counter.getAttribute("data-date");


        const startDate =
            new Date(dateString + "T00:00:00");


        const now =
            new Date();


        let difference =
            now - startDate;


        if (difference < 0) {

            counter.innerHTML =
                `<span>Coming Soon ❤️</span>`;

            return;
        }


        const totalSeconds =
            Math.floor(difference / 1000);


        const days =
            Math.floor(
                totalSeconds / 86400
            );


        const hours =
            Math.floor(
                (totalSeconds % 86400) / 3600
            );


        const minutes =
            Math.floor(
                (totalSeconds % 3600) / 60
            );


        const seconds =
            totalSeconds % 60;


        counter.innerHTML = `

            <span>
                ${days}
                <small>DAYS</small>
            </span>

            <span>
                ${hours}
                <small>HOURS</small>
            </span>

            <span>
                ${minutes}
                <small>MIN</small>
            </span>

            <span>
                ${seconds}
                <small>SEC</small>
            </span>

        `;

    });

}


/* أول تشغيل */

updateCounters();


/* تحديث كل ثانية */

setInterval(
    updateCounters,
    1000
);