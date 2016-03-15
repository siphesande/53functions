function anyday(year, week) {
    var j10 = new Date(),
        j4 = new Date(year, 0, 4, 12, 0, 0),
        mon = j4.getTime() - j10.getDay() * 86400000,
        result = [];

    for (var i = -1; i < 6; i++) {
        result.push(new Date(mon + ((week - 1) * 7 + i) * 86400000));
    }
  //console.log(result.length); 
  return result;
}
anyday(2015,3);