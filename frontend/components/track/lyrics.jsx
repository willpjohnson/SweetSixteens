import React from 'react';

class Lyrics extends React.Component {
  constructor(props) {
    super(props);

    this.handleAnno = this.handleAnno.bind(this);
  }

  handleAnno(e) {
    e.preventDefault();
    const height = e.currentTarget.getBoundingClientRect().top;
    const annoId = parseInt(e.currentTarget.id);
    this.props.fetchAnnotation([annoId, height]);
  }

  annotatedSpans() {
    this.starts = [];
    this.ends = [];
    this.annoIds = [];

    this.props.anno.forEach((ann) => {
      this.starts.push(ann.start_idx);
      this.ends.push(ann.end_idx);
      this.annoIds.push(ann.id);
    });
  }

  lyricParse(lyrics) {
    const segs = [];
    let regSeg = "";
    let annoSeg = "";
    let hasAnno = false;

    this.annotatedSpans();

    let i = 0;
    let annoIdsIndex = 0;
    if (this.props.anno.length > 0) {
      while (i < lyrics.length) {
        if (this.starts.includes(i)) {
          hasAnno = true;
          segs.push(<span className="reg-lyric-span">{regSeg}</span>);
          regSeg = "";
        } else if (this.ends.includes(i)) {
          hasAnno = false;
          segs.push(<span id={this.annoIds[annoIdsIndex]} className="anno-lyric-span"
            onClick={this.handleAnno}>{annoSeg}</span>);
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

      if (regSeg.length > 0) segs.push(<span className="reg-lyric-span">{regSeg}</span>);
      if (annoSeg.length > 0) segs.push(<span id={this.annoIds[annoIdsIndex]} className="anno-lyric-span"
        onClick={this.handleAnno}>{annoSeg}</span>);

    } else {
      segs.push(<span className="reg-lyric-span">{lyrics}</span>);
    }

    return(segs);
  }

  render() {
    return(
      <p>{this.lyricParse(this.props.lyrics)}</p>
    );
  }
}

export default Lyrics;
