import React, { Component } from "react";
import "./App.css";
import { get, includes } from "lodash";
import "@kenshooui/react-multi-select/dist/style.css";
import P5Wrapper from "react-p5-wrapper";
import sketch from "./graph/lifeClock.js";
import EventSelector from "./Components/EventSelector";
import Slider from "@material-ui/lab/Slider";
import { data } from "./data/data.js";
// import { data as personalData } from "./data/personal2.js";
import { keys, omitBy } from "lodash";
import { withStyles } from "@material-ui/core/styles";
import { colorFromString } from "./utils/utils";

const defaults = {
  fontSize: 8,
};
const AirbnbSlider = withStyles({
  root: {
    color: "#3a8589",
    height: 3,
    padding: "13px 0",
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    marginTop: -9,
    marginLeft: -13,
    boxShadow: "#000 0px 2px 2px",
    "&:focus,&:hover,&$active": {
      boxShadow: "#000 0px 2px 3px 1px",
    },
    "& .bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  markLabel: {
    color: "#fff",
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 3,
  },
  rail: {
    color: "#d8d8d8",
    opacity: 1,
    height: 3,
  },
})(Slider);

function valuetext(value) {
  return new Date(value).getFullYear();
}

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}
function genMarks(min, max) {
  const firstYear = new Date(min).getFullYear();
  const lastYear = new Date(max).getFullYear();
  const marks = [];
  for (var c = firstYear; c <= lastYear; c += 10) {
    marks.push(c);
  }
  return marks.map(year => ({
    value: new Date(`01 January ${year}`).getTime(),
    label: year,
  }));
}
class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.updateRange = this.updateRange.bind(this);
    this.dataSources = { ...data };
    // NOTE: if using personal data uncomment next line
    // this.dataSources = { ...data, ...personalData };

    // add color values if not there
    keys(this.dataSources).map(e => {
      this.dataSources[e].color =
        this.dataSources[e].color || colorFromString(e);
      this.dataSources[e].fontSize =
        this.dataSources[e].fontSize || defaults.fontSize;
      return null;
    });

    const dataKeys = keys(this.dataSources);
    const defaultKeys = keys(
      omitBy(this.dataSources, e => !(e.default || e.fixed)),
    );

    const fixedKeys = keys(omitBy(this.dataSources, e => !e.fixed));

    const generateOptions = dataKeys =>
      dataKeys.sort().filter(e => e !== "cfg");
    //.map(key => ({ key: key, id: key, label: key }));

    const graphMin = new Date(get(this.dataSources, "cfg.start")).getTime();
    const graphMax = new Date(get(this.dataSources, "cfg.end")).getTime();
    const ONE_DECADE = 1000 * 60 * 60 * 24 * 366 * 10;
    this.state = {
      items: generateOptions(dataKeys),
      selectedItems: defaultKeys,
      fixedKeys: fixedKeys,
      start: graphMin,
      end: graphMax,
      min: graphMin,
      max: graphMax,
      step: ONE_DECADE,
      marks: genMarks(graphMin, graphMax),
    };
  }

  // update graph based on dropdown multiselect
  handleChange({ currentTarget }) {
    const newkeys = Array.from(currentTarget)
      .filter(e => e.selected)
      .map(e => e.value);
    const newAllKeys = [...this.state.fixedKeys, ...newkeys];
    this.setState({ selectedItems: newAllKeys });
  }

  // updates range slider
  updateRange(event, value) {
    this.setState({ start: value[0], end: value[1] });
  }
  render() {
    const {
      end,
      items,
      marks,
      max,
      min,
      selectedItems,
      start,
      step,
    } = this.state;
    return (
      <div className="App">
        <EventSelector
          items={items.filter(e => !includes(this.state.fixedKeys, e))}
          selected={selectedItems}
          handleChange={this.handleChange}
        />
        <header className="App-header background-fill">
          <P5Wrapper
            sketch={sketch}
            data={this.dataSources}
            selected={selectedItems}
            cfg={{ start, end }}
          />
          <div style={{ width: "50%", position: "absolute", top: 0 }}>
            <h1 id="range-slider" className="header-text">
              {`Range (by decade) ${new Date(
                this.state.start + 1,
              ).getFullYear()} -
              ${new Date(this.state.end + 1).getFullYear()}`}
            </h1>
            <AirbnbSlider
              ThumbComponent={AirbnbThumbComponent}
              aria-label="Airbnb slider"
              defaultValue={[start, end]}
              min={min}
              max={max}
              step={step}
              value={[start, end]}
              getAriaValueText={valuetext}
              aria-labelledby="range-slider"
              valueLabelDisplay="on"
              marks={marks}
              onChange={this.updateRange}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
