export const fetchComments = (commentableData) => {
  const commentableId = commentableData[0];
  const commentableType = commentableData[1];
  debugger
  return(
    $.ajax({
      method: 'GET',
      url: `api/${commentableType.toLowerCase()}s/${commentableId}/comments`
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
