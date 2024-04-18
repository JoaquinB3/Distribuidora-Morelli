const currentDate = new Date()

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const hour = currentDate.getHours();
const minutes = currentDate.getMinutes();

// const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

const formattedDate = `${day}/${month}/${year}`
const formattedTime = `${hour}:${minutes}`;

console.log(formattedDate)
console.log(formattedTime)
   
export {formattedDate, formattedTime}
     


