function getLaughFor(num) {
    console.log("for");
    const ha = "ha";
    let msg = "";
    for (let i = 0; i < num; i++) {
        msg += ha;
    }
    return msg += '!';
}

function getLaughWhile(num) {
    console.log("while");
    const ha = "ha";
    let i = 0;
    let msg = "";
    while (i < num) {
        msg += ha;
        i ++;
    }
    return msg += '!';
}

function getLaughDoWhile(num) {
    console.log("do-while");
    const ha = "ha";
    let i = 0;
    let msg = "";
    do {
        msg += ha;
        i ++;
    } while (i < num);
    return msg += '!';
}

console.log(getLaughFor(3));
console.log(getLaughWhile(4));
console.log(getLaughDoWhile(5));