export const getWeekDay = date => {
   const days = ['Sun', 'Mon', 'Thu', 'Wen', 'Tue', 'Fri', 'Sat'];
   return days[date.getDay()];
}

export const getMounth = date => {
   const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   return months[date.getMonth()];
}
