// Given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s){

    var split = s.split(/\s+/);

    for (i = 0, len = split.length; i < len; i++)
    { split[i] = split[i].length; }

    return Math.min(...split);

}
