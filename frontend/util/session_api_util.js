export const signup = formData => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/users',
      data: formData,
      contentType: false,
      processData: false
    })
  );
};

export const edit = (formData, id) => {
  return(
    $.ajax({
      method: 'PATCH',
      url: `/api/users/${id}`,
      data: formData,
      contentType: false,
      processData: false
    })
  );
};

export const login = formData => {
  return(
    $.ajax({
      method: 'POST',
      url: '/api/session',
      data: formData,
      contentType: false,
      processData: false
    })
  );
};

export const logout = () => {
  return(
    $.ajax({
      method: 'DELETE',
      url: '/api/session'
    })
  );
};
