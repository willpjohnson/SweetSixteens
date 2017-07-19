export const fetchUser = (id) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/users/${id}`
    })
  );
};

export const fetchContributions = (userId) => {
  return (
    $.ajax({
      method: 'GET',
      url: '/api/comments',
      data: { user_id: userId }
    })
  );
};
