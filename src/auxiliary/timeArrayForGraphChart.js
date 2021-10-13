export const getTimeForcast = (hour, minute) => {
   let h = Number(hour)
   let m = Number(minute)
   let timeArray = [];
   if (m < 10) {
      m = '0' + m;
   }
   for (let i = 0; i <= 7; i++) {
      timeArray.push(h);
      h += 3;
      if (h >= 24) {
         h -= 24
      }
   }
   return timeArray.map(item => (item < 10) ? '0' + item + ':' + m : item + ':' + m);
}
