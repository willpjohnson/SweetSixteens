# SweetSixteens

Heroku Link

## Minimum Viable Product

SweetSixteens is a web application inspired by Genius built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] New account creation, login, and guest/demo login
  - Users will need to login to add tracks, annotations, comments, or upvotes
  - Users will not need to login to view tracks, annotations, comments, or upvotes
  - Demo accounts will allow users to perform all CRUD as 'Guest'
- [ ] A production README, replacing this README
- [ ] Hosting on Heroku
- [ ] Tracks
  - Header featuring track title, info, and artwork. (BONUS: Embedded audio from YouTube)
  - Body features track lyrics. Highlighted track lyrics can be clicked to bring up annotation component.
  - Tracks have upvotes and comments.
- [ ] Annotations
  - Annotations live in the track pages. They are rendered depending on which section of lyrics is currently selected.
  - Annotations have upvotes and comments.
- [ ] Comments
  - Comments exist for both tracks and annotations.
  - They feature the commenters username, time since posting, and comment body.
  - Comments support emojis and embedded gifs.
- [ ] Upvotes
  - Comments and annotations can be upvoted or downvoted.
  - Users can either upvote or downvote, but not both and neither more than once.
- [ ] Bonus: Tags
  - Tracks feature tags that serve as metadata for more efficient searching.
  - Tags will primarily be references to genre.
- [ ] Bonus: Search
  - Users can search for tracks by lyric, song title, artist, or tags.
  - Search features live drop-down searching while typing.

## Design Docs

* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Tracks Model, API, and components (1 day)

**Objective:** Tracks can be created, read, edited and destroyed through
the API.

### Phase 3: Annotations (2 days)

**Objective:** Tracks have annotations component rendered in track view. Can be created, read, edited and destroyed through the API.

### Phase 4: Comments (1 day)

**Objective:** Tracks and Annotations can be commented on by users.

### Phase 5: Upvotes (1 day)

**Objective:** Tracks and Annotations can be upvoted or downvoted by users.

### Phase 6: Catch up on remaining work / Add tags (1 day)

**Objective:** Allow for tracks to be tagged for easier search.

### Phase 7: - Catch up on remaining work / Add search (1 day)

**Objective:** Add search feature.
