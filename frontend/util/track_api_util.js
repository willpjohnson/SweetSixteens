export const fetchTrack = (id) => {
   return(
    $.ajax({
      method: 'GET',
      url: `/api/tracks/${id}`
    })
  );
};

export const fetchTracks = () => {
  return(
    $.ajax({
      method: 'GET',
      url: `/api/tracks`
    })
  );
};
