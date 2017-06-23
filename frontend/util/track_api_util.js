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

export const createTrack = (formData) => {
  return(
    $.ajax({
      method: 'POST',
      url: `/api/tracks`,
      data: formData,
      contentType: false,
      processData: false
    })
  );
};
