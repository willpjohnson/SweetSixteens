export const fetchAnnotationComments = (commentableId) => {
  return(
    $.ajax({
      method: 'GET',
      url: `api/annotations/${commentableId}/comments`
    })
  );
};

export const fetchTrackComments = (commentableId) => {
  return(
    $.ajax({
      method: 'GET',
      url: `api/tracks/${commentableId}/comments`
    })
  );
};

export const createComment = (comment) => {
  return(
    $.ajax({
      method: `POST`,
      url: `/api/comments`,
      data: { comment }
    })
  );
};

export const deleteComment = (commentId) => {
  return(
    $.ajax({
      method: 'DELETE',
      url: `/api/comments/${commentId}`
    })
  );
};
