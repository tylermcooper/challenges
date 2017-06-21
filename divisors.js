// Given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function divisors(integer) {
    var divisors = [];
    for (i = 2; i < integer; i++)
    {
        if ( (integer/i) % 1 == 0 ) divisors.push(i);
    }

    if ( divisors.length ) { return divisors; }
    else return integer + ' is prime';

};
