import React from 'react';

class Lyrics extends React.Component {
  constructor(props) {
    super(props);

    this.segs = [];

    this.handleAnno = this.handleAnno.bind(this);
    this.handleSelection = this.handleSelection.bind(this);

  }

  handleAnno(e) {
    e.preventDefault();
    const height = e.currentTarget.offsetTop;
    const annoId = parseInt(e.currentTarget.id);
    // this.props.fetchAnnotation([annoId, height]);
    this.props.receiveAnnotation(annoId, height);
  }

  handleSelection(e) {
    e.preventDefault();
    const height = e.currentTarget.offsetTop;
    let selectionStartIdx = window.getSelection().anchorOffset;
    let selectionEndIdx = window.getSelection().focusOffset;
    const currentSeg = parseInt(e.currentTarget.getAttribute('name'));

    let i = 0;

    while (i < currentSeg) {
      let testSeg = document.getElementsByName(i);
      let testSegLength = testSeg[0].innerHTML.length;

      selectionStartIdx += testSegLength;
      selectionEndIdx += testSegLength;

      i += 1;
    }
    this.props.receiveHeight(height);
    this.props.updateSelection(selectionStartIdx, selectionEndIdx);
  }

  annotatedSpans() {
    this.starts = [];
    this.ends = [];
    this.annoIds = {};

    this.props.anno.forEach((ann) => {
      if (ann !== undefined) {
        this.starts.push(ann.start_idx);
        this.ends.push(ann.end_idx);
        this.annoIds[ann.end_idx] = ann.id;
      }
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
    let segsIndex = 0;
    if (this.props.anno.length > 0) {
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

      if (regSeg.length > 0) {
        segs.push(<span name={segsIndex} key={segsIndex} onClick={this.handleSelection} className="reg-lyric-span">{regSeg}</span>);
        segsIndex += 1;
      }


    } else {
      segs.push(<span name={segsIndex} key={segsIndex} onClick={this.handleSelection} className="reg-lyric-span">{lyrics}</span>);
    }

    this.segs = segs;

    return(this.segs);
  }

  render() {
    return(
      <p>{this.lyricParse(this.props.lyrics)}</p>
    );
  }
}

export default Lyrics;
