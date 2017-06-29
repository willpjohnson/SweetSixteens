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

export const createAnnotation = (annotation) => {
  return(
    $.ajax({
      method: 'POST',
      url: `/api/annotations`,
      data: { annotation }
    })
  );
};

export const deleteAnnotation = (annotationId) => {
  return(
    $.ajax({
      method: 'DELETE',
      url: `/api/annotations/${annotationId}`
    })
  );
};
