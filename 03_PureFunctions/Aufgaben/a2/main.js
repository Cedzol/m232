let cartItems = [];

const addToCart = ((item, cart) => {
    let dupe = cart;
    dupe.push(item);
    return dupe;
})

const multiplyWithRandom = (number, rand) => {
  return number * rand;
}

const divide = (dividend, divisor) => {
    if (divisor === 0){
        return 0;
    }
    return dividend / divisor;
}

const log = (message) => {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "Post", "someurltolog/" + message, false ); // false for synchronous request
    xmlHttp.send( null );
    return message;
}