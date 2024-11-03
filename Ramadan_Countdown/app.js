function countdown() {
    setInterval(function () {
        var ramadanDate = new Date('28 Feb , 2025');
        var todayDate = new Date();
        var ramadan = ramadanDate.getTime() - todayDate.getTime()
            Dayscounter = ramadan / (1000 * 60 * 60 * 24)
            Hourscounter = ramadan % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)
            Minutescounter = ramadan % (1000 * 60 * 60) / (1000 * 60)
            Secondcounter = ramadan % (1000 * 60) / (1000)

        document.getElementById("days").innerHTML = `<span>${Math.floor(Dayscounter)}</span>`
        document.getElementById("hours").innerHTML = `<span>${Math.floor(Hourscounter)}</span>`
        document.getElementById("minutes").innerHTML = `<span>${Math.floor(Minutescounter)}</span>`
        document.getElementById("second").innerHTML=`<span>${Math.floor(Secondcounter)}</span>`
    }, 1000)

}
countdown();