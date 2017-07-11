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

export const fetchDecadeTracks = (decade) => {
  return(
    $.ajax({
      method: 'GET',
      url: `/api/tracks`,
      data: { decade }
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

export const deleteTrack = (trackId) => {
  return(
    $.ajax({
      method: 'DELETE',
      url: `/api/tracks/${trackId}`
    })
  );
};
