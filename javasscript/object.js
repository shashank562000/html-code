var ball = {
    sport :"Cricket",
    colour:"yellow",
    redius:3,
    print: function () {
        console.log("shashank");
    }
}
     console.log(ball.sport);
     console.log(ball['colour']);// using squir bracket
     console.log(ball.redius);
     ball.print();
     delete ball.redius;
     console.log(ball);
     ball.print();

