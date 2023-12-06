const buttons = document.querySelectorAll(".square");

for(const button of buttons) {
    button.addEventListener("click", UpdateSquares);
}

let array_sqr = [];

function UpdateSquares(event) {
    const btn = event.target;
    btn.style.backgroundColor = 'green';
    array_sqr.push(btn.id);

    if(array_sqr.length == 6) {
        ReverseSquares();
    }
}

function ReverseSquares() {
    array_sqr.reverse();

    for(const [index,id] of array_sqr.entries()) {
        const reverse_btn = document.getElementById(id);

        setTimeout(()=>{
        reverse_btn.style.backgroundColor = 'white';}
        , index * 1000);
        array_sqr = [];
    }
}