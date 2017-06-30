export const fetchSearchResults = (searchData) => {
  return(
    $.ajax({
      method: 'GET',
      url: '/api/tracks',
      data: { searchData },
    })
  );
};
