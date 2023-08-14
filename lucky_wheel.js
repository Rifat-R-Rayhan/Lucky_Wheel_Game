function suffle(array){
    var currentIndex = array.length,
    randomIndex;

    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[currentIndex],
            array[randomIndex],
        ]
    }
    return array;
}

function spin(){
    wheel.play();

    const box = document.getElementById("box");
    const element = document.getElementById("container");
    let selectedItem = "";

    let team1 = suffle([1890, 2350, 2610]);
    let team2 = suffle([1850, 2240, 2320]);
    let team3 = suffle([1570, 2030, 2490]);
    let team4 = suffle([1710, 2170, 2530]);
    let team5 = suffle([1850, 2210, 2470]);
    let team6 = suffle([1730, 1990, 2310]);
    let team7 = suffle([1670, 2030, 2290]);

    let result = suffle([
        team1[0],
        team2[0],
        team3[0],
        team4[0],
        team5[0],
        team6[0],
        team7[0],
    ]);

    if(team1.includes(result[0])) selectedItem = "LED TV";
    if(team2.includes(result[0])) selectedItem = "Smart Phone";
    if(team3.includes(result[0])) selectedItem = "Motor Cycle";
    if(team4.includes(result[0])) selectedItem = "50000 tk";
    if(team5.includes(result[0])) selectedItem = "Tour Ticket";
    if(team6.includes(result[0])) selectedItem = "PC";
    if(team7.includes(result[0])) selectedItem = "Laptop";

    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + result[0] + "deg)";
    element.classList.remove("animate");

    setTimeout(function(){
        element.classList.add("animate");
    }, 5000);

    setTimeout(function(){
        applause.play();
        Swal.fire({
            title: 'Hurrah!',
            html: 'You won ' + selectedItem + '!',
            imageUrl: './formal.jpg',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }, 5500);

    setTimeout(function(){
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
    }, 6000);
}