const joinNames = namesObj => {
    let newArray = [];
    for (i = 0; i < namesObj.length; i ++) {
        if (i === (namesObj.length-1) || i === (namesObj.length-2)) {
            newArray.push(namesObj[i].name);
        } if (i < (namesObj.length-2)) {
      newArray.push(namesObj[i].name + ',')
        }
    } 
    newArray.splice(-1, 0, '&');
    let string = newArray.join(" ");
    return string;    
};

module.exports = joinNames;
