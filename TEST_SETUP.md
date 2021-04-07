# Test Setup

The purpose of this document is for the reference of future developers to see how testing was setup in this project.

## Enzyme

1. Install enzyme as a dev dependency.

```
npm install --save-dev enzyme
npm install --save-dev @wojtekmaj/enzyme-adapter-react-17
```

2. Create the `setupTests.js` file.


```
touch src/setupTests.js
```

3. Add inside the `setupTests.js` file:

```JavaScript
/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
```

4. Update `package.json` to execute `setupTests.js` before tests are run:

```JSON
{
  ...
  "jest": {
    "setupFilesAfterEnv": [
      "./src/setupTests.js"
    ],
    "moduleNameMapper": {
      "\\.(css|less)$": "<rootDir>/config/CSSStub.js",
      "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/config/FileStub.js"
    }
  },
  ...
}
```

5. Make the CSS and File stubs/mocks:

```
mkdir config
touch config/CSSStub.js
touch config/FileStub.js
```

- CSSStub.js

```JavaScript
module.exports = {}
```

- FileStub.js

```JavaScript
module.exports = ''
```

6. Add a babel config by creating a `.babelrc` file in the root dir of the project and add the following code:

```
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-transform-runtime"
  ]
}
```