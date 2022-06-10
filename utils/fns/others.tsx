const getDate = (val: Date | string) => {
  let date = new Date(val);

  //getting time from string
  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  //removing seconds from time
  const splittedTime = time.split(":");
  const timeWithoutSeconds = `${splittedTime[0]}:${splittedTime[1]}`;

  return {
    date: date.toDateString(),
    time: timeWithoutSeconds,
  };
};

export { getDate };
