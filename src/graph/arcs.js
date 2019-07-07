import { colorFromString } from "../utils/utils";

export const labeledArc = (
  p,
  arcRad,
  startDeg,
  stopDeg,
  label,
  thickness = 16,
  colorsArr = [],
) => {
  p.textSize(10);
  var number_letters = label.length;
  const kerning = 0.4;
  let arcLength = 5;
  // const thickness = 24;
  const endPad = 0.03;
  const bandTransparancy = 60;
  const textRad = arcRad - thickness / 6;
  p.strokeWeight(thickness);
  const colorArr = !colorsArr.length ? colorFromString(label) : colorsArr;
  p.stroke(...colorArr, bandTransparancy);
  p.strokeCap(p.SQUARE);
  p.arc(0, 0, arcRad * 2, arcRad * 2, startDeg, stopDeg);

  p.strokeWeight(1);
  for (var i = 0; i < number_letters; i++) {
    var currentChar = label.charAt(i);
    var textW = p.textWidth(currentChar) + kerning;
    // set next letter position along arc
    arcLength += textW / 2;
    var theta = startDeg + arcLength / arcRad;
    p.push();
    p.translate(textRad * p.cos(theta), textRad * p.sin(theta));
    p.rotate(theta + p.PI / 2);
    p.fill(0);
    if (theta > startDeg && theta < stopDeg - endPad) {
      p.text(currentChar, 0, 0);
    }
    p.pop();
    arcLength += textW / 2;
  }
};

// const blackOrWhite = col => ((col[0] + col[1] + col[2]) / 3) > 128 ? 0 : 255
