#API endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users
- Users are created(POST), updated(PATCH), and destroyed(DELETE)
- `POST /api/users`
- `PATCH /api/users/:id`
- `DELETE /api/users/:id`

### Session

- Sessions are created(POST) and destroyed(DELETE)
- `POST /api/session`
- `DELETE /api/session`

### Tracks

- Tracks have an index view(GET) and a show view(GET)
- Tracks are created(POST), updated(PATCH), and destroyed(DELETE)
- `GET /api/tracks`
  - Tracks index/search
- `POST /api/tracks`
- `GET /api/tracks/:track_id`
- `PATCH /api/tracks/:track_id`
- `DELETE /api/tracks/:track_id`

### Annotations

- Annotations have a show view(GET)
- Annotations are created(POST), updated(PATCH), and destroyed(DELETE)
- `POST /api/tracks/:track_id/annotations`
  - Annotations are added directly to track
- `GET /api/annotations/:id`
- `PATCH /api/annotations/:id`
- `DELETE /api/annotations/:id`

### Comments
- Comments are viewed in the relevant track's show page
- Comments are created(POST), updated(PATCH), and destroyed(DELETE)
- `POST /api/tracks/:track_id/comments`
  - Comments are added directly to track
- `POST /api/annotations/:annotation_id/comments`
  - Comments are added directly to annotation
- `PATCH /api/comments/:id`
- `DELETE /api/comments/:id`

### Votes
- Votes are viewed in the relevant track's show page
- Votes are created(POST), updated(PATCH), and destroyed(DELETE)
- `POST /api/annotations/:annotation_id/votes`
  - Votes are added directly to track
- `POST /api/comments/:comment_id/votes`
  - Votes are added directly to annotation
- `PATCH /api/votes/:id`
- `DELETE /api/votes/:id`
