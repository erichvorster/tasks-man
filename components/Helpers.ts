
function formatDate(dateString:string) {
  if (dateString === "") return;

  let dateParts;
  if (dateString.includes("/")) {
    dateParts = dateString.split('/');
  } else if (dateString.includes("-")) {
    dateParts = dateString.split('-');
  } else {
    return; // Invalid date format
  }

  const day = parseInt(dateParts[1]);
  const month = new Date(dateString).toLocaleString('en-US', { month: 'long' });
  const year = parseInt(dateParts[0]);

  let daySuffix;
  if (day === 1 || day === 21 || day === 31) {
    daySuffix = 'st';
  } else if (day === 2 || day === 22) {
    daySuffix = 'nd';
  } else if (day === 3 || day === 23) {
    daySuffix = 'rd';
  } else {
    daySuffix = 'th';
  }

  return `${day}${daySuffix} ${month} ${year}`;
}


  function getPriorityClass(priority:string) {



  
    if (priority === 'high') {
      return 'bg-red-300/25';
    } else if (priority === 'medium') {
      return 'bg-orange-300/25';
    } else if (priority === 'low') {
      return 'bg-green-300/25';
    }
  
    // Return a default class if the priority is not recognized
    return 'bg-purple-300/25';
  }

  function getLongFormatDate() {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
  
    const longFormatDate = `${day} ${months[month]} ${year}`;
    return longFormatDate;
  }
  



  export {formatDate, getPriorityClass, getLongFormatDate}