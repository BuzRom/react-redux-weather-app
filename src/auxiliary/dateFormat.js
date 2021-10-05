
export const day = getWeekDay(new Date());
export const date = new Date().getDate();
export const mounth = getMounth(new Date());
export const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

function getWeekDay(date) {
   const days = ['Sun', 'Mon', 'Thu', 'Wen', 'Tue', 'Fri', 'Sat'];
   return days[date.getDay()];
}

function getMounth(date) {
   const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   return months[date.getMonth()];
}
