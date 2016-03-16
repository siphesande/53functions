function anyday(year, wednesday) {

  var date = new Date(year, 0, 1);
  while (date.getDay() !== 1) {
    date.setDate(date.getDate() + 1);
  }
 
  var days = [];
  while (date.getFullYear() == year) {
    var m = date.getMonth() + 1;
    var d = date.getDate();
    days.push(
      year + '-' +
      (m < 10 ? 'wednesday' + m : m) + '-' +
      (d < 10 ? 'wednesday' + d : d)
    );
    date.setDate(date.getDate() + 7);
   
  }
  console.log(days.length);

  return days.length;
}


