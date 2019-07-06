import { labeledArc } from "./arcs";
import "../App.css";
import { sortBy } from "lodash";

const fullRotation = 2 * Math.PI;
const textPadding = 5;

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
    dataStart = new Date(cfg.start);
    dataEnd = new Date(cfg.end);
    data = props.data;
    selected = props.selected || [];
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
    todayLine(p, start, end);
    p.stroke(0);
    p.noFill();
    p.strokeWeight(24);
    p.strokeCap(p.SQUARE);
    p.stroke(225, 185, 195);

    selected.map(visKey => renderCategory(p, data[visKey], start, end));
    // p.noLoop();
  };
}

// util functions
const getPct = (eStart, start, end) =>
  (new Date(eStart) - new Date(start)) / (end - start);

const renderPoint = (p, e, cat, offset, start, end) => {
  const timePct = getPct(e.start, start, end);
  if (timePct > 1 || timePct < 0) return;
  p.rotate(fullRotation * timePct);
  if (cat.lineColor !== undefined) {
    p.stroke(...cat.lineColor, 22);
    p.strokeWeight(1);
    p.line(0, 0, clockRadius, 0);
  }

  p.noStroke();
  const flipText = timePct > 0.5;
  p.textAlign(flipText ? p.LEFT : p.RIGHT, p.CENTER);
  const fillArr = [...cat.color, ((e.rank || 10) / 10) * 255];
  p.fill(fillArr);
  p.stroke(255);
  p.strokeWeight(2);
  p.push();
  // move center to dot
  p.translate(offset, 0);
  // flip text
  p.rotate(flipText ? p.PI : 0);
  p.text(e.name, flipText ? 0 + textPadding : 0 - textPadding, 2);
  p.pop();
  p.fill(...cat.color);
  p.ellipse(offset, 0, 5, 5);
};

const renderCategory = (p, cat, start, end) => {
  p.strokeWeight(1);
  const offset = clockRadius * (cat.offset / 100);
  p.textSize(cat.fontSize);
  // TODO: for depth order by rank it's too expensive to do here,
  // and doesn't change, instead sort on initial import
  // sortBy(cat.list, ["rank"]).map(item => {
  cat.list.map(item => {
    p.push();
    if (item.end) {
      const startPct = getPct(item.start, start, end);
      const endPct = getPct(item.end, start, end);
      if (startPct > 1 || endPct < 0) return;
      if (endPct < 0) return;
      const startArc = fullRotation * (startPct < 0 ? 0 : startPct);
      const endArc = fullRotation * (endPct > 1 ? 1 : endPct);
      labeledArc(p, offset, startArc, endArc, item.name);
    } else {
      renderPoint(p, item, cat, offset, start, end);
    }
    p.pop();
    return null;
  });
};
const todayLine = (p, start, end) => {
  p.push();
  p.stroke(255, 0, 0);
  const resolution = 200;
  const startSize = 20;
  const timePct = getPct(new Date(), start, end);
  if (timePct > 1 || timePct < 0) return;
  p.rotate(fullRotation * timePct);
  for (var c = 0; c < resolution; c++) {
    p.strokeWeight((startSize / resolution) * c);
    p.line(0, 0, clockRadius / c, 0);
  }
  p.pop();
};
