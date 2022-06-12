const getDate = (val: Date | string) => {
  let date = new Date(val);
  const new_date = date.toString().split(" ");
  const date_string_to_display = `${new_date[1]} ${new_date[2]} , ${new_date[3]}`;

  return {
    date: date_string_to_display,
  };
};

export { getDate };
