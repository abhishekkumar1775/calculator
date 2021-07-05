const btn = document.querySelectorAll(".btn");
const display = document.querySelector("#result");
const arr = [];
const body = document.querySelector("#main");
const st = document.querySelector("#stop");
const strt = document.querySelector("#start");

for (x of btn) {
    if (x.id) continue;
    console.log(x.id);
    x.addEventListener("click", solve);
}
var bg_id;
function start() {
    bg_id = setInterval(rand_back, 3000);
}

start();


function rand_back() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    console.log(`${r},${g},${b}`);
    body.style.backgroundColor = `rgb(${r},${g},${b})`;
}


st.addEventListener("click", (event) => {
    if (bg_id) clearInterval(bg_id);
    bg_id = undefined;
}
);

strt.addEventListener("click", () => { if (!bg_id) start() });



function solve() {
    console.log("btn clicked");
    let input = this.innerHTML;
    if (input === "AC") {
        arr.splice(0, arr.length);
        display.innerHTML = "";
        return;
    }

    if (input === "=") {
        let answer = findsum(arr);

        display.innerHTML = `${answer}`;
        arr.splice(0, arr.length);
        arr.push(answer);

        return;
    }
    if (input === "+/-") {
        let answer = (-1) * findsum(arr);

        display.innerHTML = `${answer}`;
        arr.splice(0, arr.length);
        arr.push(answer);

        return;
    }

    display.innerHTML += input;
    arr.push(this.innerHTML);
}




function findsum(arr) {
    let str = "";
    for (x in arr) {
        // console.log();
        str += arr[x];
    }
    // console.log(str);
    let a = eval(str);
    return a;
}
