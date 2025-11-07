export const getEvents = () => {
  const events = JSON.parse(localStorage.getItem("events")) || [];
  return events;
};

export const addEvent = (event) => {
  const events = getEvents();
  events.push(event);
  localStorage.setItem("events", JSON.stringify(events));
};
