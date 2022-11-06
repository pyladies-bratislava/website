export const sortArrayByDate = (array) => {
  const sortedArray = array.sort(function (a, b) {
    return new Date(b.start.dateTime) - new Date(a.start.dateTime);
  });
  return sortedArray;
};

export const formatDate = (date) => {
    return new Date(date).toLocaleString("en-GB", {
        timeZone: 'CET',
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
      })
}
