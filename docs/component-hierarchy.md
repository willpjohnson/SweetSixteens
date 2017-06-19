## Component Hierarchy

**AuthFormContainer**
 - AuthForm

 **HomeContainer**
 - Home

**NavBarContainer**
 - Search
 - Navigation

**TrackIndexContainer**
 - TrackIndexItemContainer
  - Track title
  - Track artist
  - Track artwork

**TrackContainer**
 - Full track details
 - AnnotationContainer
   - Annotation details
   - CommentsContainer
    - VotesContainer
   - VotesContainer
 - CommentsContainer
   - VotesContainer

**TrackFormContainer**
  - TrackForm
  - NewTrackButton

**AnnotationFormContainer**
  - AnnotationForm
  - NewAnnotationButton

**Search**

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "HomeContainer" |
| "/tracks/:track_id" | "TracksContainer" |
| "/new-track" | "TrackFormContainer" |
| "/new-annotation" | "AnnotationFormContainer" |
