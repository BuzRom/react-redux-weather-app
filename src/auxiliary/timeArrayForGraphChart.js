const hour = new Date().toLocaleTimeString([], { hour: '2-digit' });
const minute = new Date().toLocaleTimeString([], { minute: '2-digit' });

const getTimeForcast = (hour, minute) => {
   let time = Number(hour)
   let timeArray = [];
   for (let i = 0; i <= 7; i++) {
      timeArray.push(time);
      time += 3;
      if (time > 24) {
         time -= 24
      }
   }
   return timeArray.map(item => (item < 10) ? '0' + item + ':' + minute : item + ':' + minute);
}

export const timeArray = getTimeForcast(hour, minute);