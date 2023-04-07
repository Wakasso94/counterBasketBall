let addnum = 0;
let addnumguest = 0;
let countHome = document.getElementById("count-home");
let countGest = document.getElementById("count-guest");


function add1() {
    let total = 0;
    addnum += 1;
    countHome.textContent = total + addnum;
}


function add2() {
    let total = 0
    addnum += 2;
    countHome.textContent = total + addnum;
}

function add3() {
    let total = 0
    addnum += 3;
    countHome.textContent = total + addnum;
}


function addguest1() {
    let total = 0
    addnumguest += 1;
    countGest.textContent = total + addnumguest;
}

function addguest2() {
    let total = 0
    addnumguest += 2;
    countGest.textContent = total + addnumguest;
}

function addguest3() {
    let total = 0
    addnumguest += 3;
    countGest.textContent = total + addnumguest;
}
