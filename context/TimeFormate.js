export const agoTime = (timeAndDate) => {
  const convertInMilliseconds = new Date(timeAndDate).getTime();
  const currentTime = Date.now();

  const timeDifference = currentTime - convertInMilliseconds;

  // Convert difference to meaningful time units
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  // Return appropriate time format
  if (seconds < 60) return `${Math.abs(seconds)} seconds ago`;
  if (minutes < 60) return `${minutes} minutes ago`;
  if (hours < 24) return `${hours} hours ago`;
  if (days < 7) return `${days} days ago`;
  if (weeks < 4) return `${weeks} weeks ago`;
  if (months < 12) return `${months} months ago`;
  return `${years} years ago`;
};

export const extractDate = (time) => {
  const timeInMillisecond = new Date(time);

  return timeInMillisecond.toDateString();
};
