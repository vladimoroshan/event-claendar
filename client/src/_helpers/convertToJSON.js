 const getStartEndDuration = event => {
    const start = new Date(event.start);
    const end = new Date(event.end);
    const duration = (end - start) / 1000 / 60;
  
    return {
      start: start,
      end: end,
      duration: duration
    };
  };

const convertDatatoJSON = events => {
    return events.map(event => {
      return { ...getStartEndDuration(event), title: event.title };
    });
  };
  
export  { convertDatatoJSON }
  