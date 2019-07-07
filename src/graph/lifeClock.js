import "../App.css";
import { keys, size, includes, min, max, get } from "lodash";
import { renderCategory, todayLine } from "../utils/graphUtils";

const topOffset = 80;
const canvasSize = 1200;
let clockRadius;

export default function sketch(p) {
  let dataStart, dataEnd;
  let data, selected;

  p.setup = function() {
    p.createCanvas(canvasSize, canvasSize);
    clockRadius = p.height / 2 - topOffset;
    p.smooth();
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    const { cfg } = props;
    selected = props.selected || [];
    dataStart = new Date(cfg.start);
    dataEnd = cfg.end === "now" ? new Date() : new Date(cfg.end);
    // clone parent object
    data = { ...props.data };
    const dataKeys = keys(data).filter(key => includes(selected, key));
    const dataSize = size(dataKeys.filter(e => !e.offset)) || 1;
    const avg_letter_spacing = 1;
    let overflowFlag = false;
    const startVal = 95;
    let spacingTracker = startVal;

    /*
     TODO: for depth order by rank 
    something like: 
    sortBy(cat.list, ["rank"]).map(item => {
    */

    // try to space available categories based on size, and available space
    for (var count = size(dataKeys) - 1; count >= 0; count--) {
      const key = dataKeys[count];
      data[key] = {
        ...data[key],
        offset: props.data[key].offset || spacingTracker,
      };

      // get longest name value of list
      const longestLabel =
        max(get(props.data, `${key}.list`, []).map(e => size(e.name))) || 1;
      const subAmt = longestLabel * avg_letter_spacing;
      spacingTracker -= subAmt;
      if (spacingTracker < 0) {
        overflowFlag = true;
        break;
      }
    }
    // if that fails, fall back to even distribution
    // dynamically offset data (now clone keys)
    if (overflowFlag) {
      // overflow reached, too many to space properly, so just averaging spacing between all.
      const defaultOffset = 15;
      dataKeys.map((key, i) => {
        const dynamicOffset =
          (props.data[key].offset || (100 / dataSize) * i) + defaultOffset;
        data[key] = {
          ...data[key],
          offset: props.data[key].offset || min([dynamicOffset, startVal]),
        };
        return null;
      });
    }
  };

  p.draw = function() {
    // keep redraw to 2 per second to mimimize lag on UI elements
    p.frameRate(2);
    let start = dataStart;
    let end = dataEnd;
    p.translate(0, 0);
    p.background(0);
    p.textSize(15);
    p.noStroke();
    p.fill(0);
    p.textStyle(p.BOLD);

    p.translate(p.width / 2, p.height / 2 + topOffset / 2);
    p.fill(255);
    p.ellipse(0, 0, clockRadius * 2, clockRadius * 2);
    p.rotate(Math.PI / 2 + Math.PI);
    // render origin line
    p.stroke(0, 0, 0, 40);
    p.line(0, 0, clockRadius, 0);
    p.stroke(0);
    p.noFill();
    p.strokeWeight(24);
    p.strokeCap(p.SQUARE);
    p.stroke(225, 185, 195);

    selected.map(visKey =>
      renderCategory(p, data[visKey], start, end, { clockRadius }),
    );
    todayLine(p, start, end, { clockRadius });
    // p.noLoop(); // (can't do this , or will never re-render)
  };
}
