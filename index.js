let n = Math.floor(Math.random() * 1000);
console.log(n);

while (true) {
    let userNum = prompt('Input your integer number (1-1000) or press 0 to exit:')
    if (isNaN(userNum)) {
        alert('Your input is not a number!');
    }
    else if (userNum == 0) {
        alert ('Your game is over');
        break;
    }
    else if (userNum == n) {
        alert ('Congratulations! You win!');
        break;
    }
    else if (userNum >= n) {
        alert ('Your number is bigger than the one made');
    }
    else if (userNum <= n) {
        alert ('Your number is less than the one made');
    }
};