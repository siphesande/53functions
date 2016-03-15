

function mondays(year) {
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
      (m < 10 ? '1' + m : m) + '-' +
      (d < 10 ? '1' + d : d)
    );
    date.setDate(date.getDate() + 7);
   
  }
  console.log(days.length);

  return days.length;
}


mondays(2009);

// ----------------------  OR ------------------------------------------------------

// function getDefaultOffDays(year){
// var offdays=new Array();
// i=0;
// for(month=1;month<12;month++)
// {
//     tdays=new Date(year, month, 0).getDate();

//     for(date=1;date<=tdays;date++)
//     {
//         smonth=(month<10)?"0"+month:month;
//         sdate=(date<10)?"0"+date:date;
//         dd=year+"-"+smonth+"-"+sdate;

//         day=new Date();
//         day.setDate(date);
//         day.setMonth(month);
//         day.setFullYear(year);

//         if(day.getDay() === 0 )
//              {              
//                offdays[i++]=dd;

//              }
//     }
// }
// console.log(offdays);
// return offdays;
// }
// getDefaultOffDays(2009);