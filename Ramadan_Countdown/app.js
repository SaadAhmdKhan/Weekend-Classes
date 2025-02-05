function countdown() {
    setInterval(function () {
        var ramadanDate = new Date('01 March , 2025');
        var todayDate = new Date();
        var ramadan = ramadanDate.getTime() - todayDate.getTime()
            daysCounter = ramadan / (1000 * 60 * 60 * 24)
            hoursCounter = ramadan % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)
            minutesCounter = ramadan % (1000 * 60 * 60) / (1000 * 60)
            secondCounter = ramadan % (1000 * 60) / (1000)
            

        document.getElementById("days").innerHTML = `<span>${Math.floor(daysCounter)}</span>`
        document.getElementById("hours").innerHTML = `<span>${Math.floor(hoursCounter)}</span>`
        document.getElementById("minutes").innerHTML = `<span>${Math.floor(minutesCounter)}</span>`
        document.getElementById("second").innerHTML=`<span>${Math.floor(secondCounter)}</span>`
    }, 1000)

}
countdown();