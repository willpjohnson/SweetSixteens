export const createVote = (vote) => {
  return(
    $.ajax({
      method: 'POST',
      url: `/api/votes`,
      data: { vote }
    })
  );
};

export const deleteVote = (voteId) => {
  return(
    $.ajax({
      method: 'DELETE',
      url: `/api/votes/${voteId}`
    })
  );
};
