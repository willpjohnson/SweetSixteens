export const fetchTrack = (id) => {
   return(
    $.ajax({
      method: 'GET',
      url: `/api/tracks/${id}`
    })
  );
};
