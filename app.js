//Default Position and Direction of the Queen
var queen = {
    direction: 'S',
    position: {
        row: 0,
        col: 3
    }
}

function boundaryCheck(pos) {
    if(pos >7 || pos < 0) {
        return false;
    }
    return true;
}

function jumpMoveQueen(dir,steps) {
    var temp;
    switch(dir) {
        case 'NE': 
        queen.direction='NE';
        var temp = queen.position.row - steps;
        if(boundaryCheck(temp)) {
            queen.position.row = temp;
        }
        else {
            console.log("Outside the Boundary");
        }
        var temp = queen.position.col + steps;
        if(boundaryCheck(temp)) {
            queen.position.col = temp;
        }
        else {
            console.log("Outside the Boundary");
        }

        case 'S':
        queen.direction='S';
        var temp = queen.position.row + steps;
        if(boundaryCheck(temp)) {
            queen.position.row = temp;
        }
        else {
            console.log("Outside the Boundary");
        }

        case 'E':
        queen.direction='E';
        var temp = queen.position.col + steps;
        if(boundaryCheck(temp)) {
            queen.position.col = temp;
        }
        else {
            console.log("Outside the Boundary");
        }

        case 'W':
        queen.direction='W';
        var temp = queen.position.col - steps;
        if(boundaryCheck(temp)) {
            queen.position.col = temp;
        }
        else {
            console.log("Outside the Boundary");
        }
    }
}
var colPosition = ['A','B','C','D','E','F','G','H'];
var rowPosition = ['8','7','6','5','4','3','2','1'];
do {
    var dir = window.prompt("Enter the direction");
    var steps = window.prompt("Enter the steps");
    steps = Number(steps);
    var choice = window.prompt("Do you want to continue");
    jumpMoveQueen(dir,steps);
    console.log(colPosition[queen.position.col] + rowPosition[queen.position.row]);
}while(choice!='No');


