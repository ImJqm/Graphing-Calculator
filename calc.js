let e = 2.71828182846
function log(b,x) {
    let temp = 1;
    if (b == x) {
        return temp;
    }
    if (x<=0) {
        return -100000
    }
    while(true) {
        x = x/b;
        if (x == 1) {
            break;
        } else {
            temp+=1;
        }
    return temp;    
    }
}
function line(x1, y1, x2, y2, color, width) {
    let ln = new Line(x1, y1, x2, y2);
    ln.setColor(color)
    ln.setLineWidth(width)
    add(ln)
}
function square(x, y, w, color) {
    let sq = new Rectangle(w,w)
    sq.setColor(color)
    sq.setPosition(x, y)
    add(sq)
}

function func(x) {
    //enter your function here
    let func = x**2
    if (func == 1/0) {
        return 0
    } else {
        return func
    }
}
function graph() {
    //lines
    line(getWidth()/2, 0, getWidth()/2, getHeight(), "black", 0)
    line(0, getHeight()/2, getWidth(), getHeight()/2, "black", 0)
    
    //graph
    
    for(let x = -200 ; x<200;x++) {
        //points
        square(x+200-1.5, getHeight()/2 - (func(x)) +1.5, 3, "red")
        //lines connecting points
        let newx = x+1
        line(x+200, getHeight()/2 - (func(x)), newx+200, getHeight()/2 - (func(newx)), "red", 1)
    }
}
graph()
console.log("Canvas Width: " + getWidth())
console.log("\nCanvas Height: " + getHeight())
//console.log(log(10,10))

// 400 x 480 canvas