A React/p5js based dynamic time-line view of events visualized on the face of an analog clock

![Image of lifeclock](https://i.imgur.com/2nb1oGA.png)

See it run here: [wundes.com/lifeclock](http://wundes.com/lifeclock)

To add your own data, either replace the data.js file, or uncomment the import for personalData, and supliment with your own.

The lifeClock, is just a visualization configurable for any time range, and can contain any amount of categories. sizes can be adjusted per category (curently configurable only in the source data)

Sample data file has the following structure:

```javascript
export const data = {
  // optional config object with start and end for entire graph
  cfg: {
    offset: -1, // set a category offset to -1 to hide
    start: "01 Jan 1970",
    end: "31 Dec 2070",
  },
  // The category name is the object key
  exampleCategoryName: {
    offset: 99, // optional: fixed offset to position from center. 0-100
    fontSize: 7, // optional: font size
    color: [180, 180, 180], // optional: RGB color for fixed category color
    default: true, // optional: if set, category will be selected on initial load
    fixed: true, // optional: if set, will always display on graph
    // list - required: array. the list of elements for the category
    list: [
      // Event object:
      {
        name: "event display name", // required
        start: "10 Oct 1999", // required (any string that new Date can parse)
        end: "05 Dec 2010", // optional end date if range is required
        rank: 3, // optional rank 1-10 (defines relative opacity of events in category)
      },
    ],
  },
};
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
