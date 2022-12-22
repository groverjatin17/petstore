export const getDate = (date) => {
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    let formattedDate = new Date(date);
    return formattedDate.toLocaleDateString("en-US", options);
  };