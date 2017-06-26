export const fetchAnnotation = (id) => {
  return(
    $.ajax({
      method: 'GET',
      url: `/api/annotations/${id}`
    })
  );
};

export const fetchAnnotations = (trackId) => {
  return(
    $.ajax({
      method: 'GET',
      url: `api/tracks/${trackId}/annotations/`
    })
  );
};
