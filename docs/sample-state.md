{
  currentUser: {
    id: 1,
    username: "willpjohnson"
  },
  tracks: {
    1: {
      title: "Track Title",
      body: "Track Lyrics",
      artist: "Track Artist"
      author_id: 1,
      tags: {
        1: {
          id: 1
          name: "Genre"
        }
      }
    }
  },
  annotations: {
    1: {
      track_id: 1,
      author_id: 1,
      body: "Annotation Text"
      lyrics: "Selection of lyrics being annotated"
    }
  }
  tagFilters: [1, 2, 3]
}
