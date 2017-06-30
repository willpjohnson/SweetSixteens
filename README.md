# SweetSixteens

[SweetSixteens][heroku]

[heroku]: http://sweetsixteens.herokuapp.com/#/

SweetSixteens is a full-stack web application inspired by Genius.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features and Implementation

The primary feature of this application is song lyric annotation. SweetSixteens is a community curated database for information, opinions, and analysis of lyrics. This is brought to life through extensive user interaction. Users can add tracks to the database which, in turn, can be annotated by other users who have deeper information about specific sections. To foster further interaction, all tracks and annotations can be commented on and all annotations and comments can be up or down voted.

### Track Annotation

The focus of every track page are the lyrics. The lyrics are fetched from the database as one big string. However, in order to separate the sections of lyrics that are annotated from the ones that are not, some frontend parsing is required. The lyrics are displayed as follows:

![image of track show](public/track_show.png)

Annotated sections receive a light blue highlight that, when clicked, open up the annotation window on the right. The way this is done is through one extensive iteration throughout the entire "lyrics" string. The bulk of the work is done in the following while loop.

```javascript
while (i < lyrics.length) {
  if (this.starts.includes(i)) {
    hasAnno = true;
    segs.push(<span name={segsIndex} key={segsIndex} onClick={this.handleSelection} className="reg-lyric-span">{regSeg}</span>);
    segsIndex += 1;
    regSeg = "";
  } else if (this.ends.includes(i)) {
    hasAnno = false;
    segs.push(<span name={segsIndex} key={segsIndex} id={this.annoIds[i]} className="anno-lyric-span"
      onClick={this.handleAnno}>{annoSeg}</span>);
    segsIndex += 1;
    annoSeg = "";
    annoIdsIndex += 1;
  }

  if (hasAnno) {
    annoSeg += lyrics[i];
  } else {
    regSeg += lyrics[i];
  }

  i += 1;
}
```

Every annotation has a start index and end index property, which I've put into arrays. As the while loop iterates through all the lyric characters, it checks to see if the character index is either an annotation start index or an annotation end index. If it is, it flips the switch on a boolean called "hasAnno" which indicates whether future characters are in an annotated segment or not. Ultimately, every character will be placed into one of two types of html spans: annotated or regular. This collection of spans is ultimately what is rendered on the page.
