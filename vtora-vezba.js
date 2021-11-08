console.log('test')

const a = 5;
const b = 3;

let zapaleno = true;
let izgaseno = false;

if (a > b) {
    console.log('a e pomalo od b')
}

const br1 =10
const br2 =6
const operacija = "+"

switch(operacija) {
    case "/": {
        console.log(br1 / br2);
        break;
    }

    case "*": {
        console.log(br1 * br2);
        break;
    }

    case "-": {
        console.log(br1 - br2);
        break;
    }

    case "+": {
        console.log(`Rezultatot e: ${br1 + br2}`);
        break;
    }

    default: {
        console.log('None');
        break;
    }
}

var user = Number(prompt("Enter"));
if (user <= 13) {
  console.log("no")
} 
else if ((user >13) && (user <= 18)) {
    console.log('yes')
}
else
    console.log('premium')
