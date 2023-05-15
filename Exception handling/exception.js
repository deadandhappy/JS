//try-catch
try {
    console.log(a);
    let a = 3;
} catch(err) {
    console.log('let must be declared before use');
}

//throw-finally
let x;
let y;

function Div(x, y) {
    try {
        if (y == 0) {
            throw new Error('Cannot be divided by zero!');
        }
        console.log(x/y);
    } catch(err) {
        console.log(err.message);
    } finally {
        console.log(Date.now());//date in ms
    }
}

Div(1, 0);
Div(0, 1);
Div(4, 2);
