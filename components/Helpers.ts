
function formatDate(dateString) {
    if(dateString === "")return;
    const dateParts = dateString.split('/');
    const day = parseInt(dateParts[1]);
    const month = new Date(dateString).toLocaleString('en-US', { month: 'long' });
    const year = parseInt(dateParts[2]);
  
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

  function getPriorityClass(priority) {


    console.log("priority", priority);
  
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




  export {formatDate, getPriorityClass}