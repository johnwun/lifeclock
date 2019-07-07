// util functions
import { size } from "lodash";
import { labeledArc } from "../graph/arcs";
const fullRotation = 2 * Math.PI;
const textPadding = 5;

export const getPct = (eStart, start, end) => {
  const endStart = eStart === "now" ? new Date() : new Date(eStart);
  return (endStart - new Date(start)) / (end - start);
};

export const renderPoint = (p, e, cat, offset, start, end, cfg) => {
  const timePct = getPct(e.start, start, end);
  if (timePct > 1 || timePct < 0) return;
  p.rotate(fullRotation * timePct);
  if (cat.lineColor !== undefined) {
    p.stroke(...cat.lineColor, 22);
    p.strokeWeight(1);
    p.line(0, 0, cfg.clockRadius, 0);
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

export const renderCategory = (p, cat, start, end, cfg) => {
  p.strokeWeight(1);
  const offset = cfg.clockRadius * (cat.offset / 100);
  p.textSize(cat.fontSize);
  size(cat.list) &&
    cat.list.map(item => {
      p.push();
      if (item.end) {
        const startPct = getPct(item.start, start, end);
        const endPct = getPct(item.end, start, end);
        if (startPct > 1 || endPct < 0) return null;
        if (endPct < 0) return null;
        const startArc = fullRotation * (startPct < 0 ? 0 : startPct);
        const endArc = fullRotation * (endPct > 1 ? 1 : endPct);
        labeledArc(p, offset, startArc, endArc, item.name);
      } else {
        renderPoint(p, item, cat, offset, start, end, cfg);
      }
      p.pop();
      return null;
    });
};
export const todayLine = (p, start, end, cfg) => {
  p.push();
  p.stroke(255, 0, 0);
  const resolution = 200;
  const startSize = 20;
  const timePct = getPct(new Date(), start, end);
  if (timePct > 1 || timePct < 0) return;
  p.rotate(fullRotation * timePct);
  for (var c = 0; c < resolution; c++) {
    p.strokeWeight((startSize / resolution) * c);
    p.line(0, 0, cfg.clockRadius / c, 0);
  }
  p.pop();
};
