const incrementFunction = (click) => {
    const counter = document.getElementById("counter-number")
    const sum = parseInt(counter.innerText) + click;
    console.log(sum+click)
    counter.innerText = sum;
    console.log(`increment logged!`)
}

const decrementFunction = (click) => {
    const counter = document.getElementById("counter-number")
    const sum = parseInt(counter.innerText) + click;
    console.log(sum-click)
    counter.innerText = sum;
    console.log(`decrement logged!`)
}