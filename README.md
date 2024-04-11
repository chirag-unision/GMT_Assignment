## GMT Assignment

## App Installation
#### Android
* The build release of the Android App is available in `./apk_release/` directory. 
To run in debugging mode, connect the device (turn on the debugging mode before installation) or you can use emulator also.
1. run `yarn` to install all the node modules.
2. run `$ yarn start` to start the metro.
3. run `$ yarn android`

## Backend
The backend of the application is written in Express.JS, deployed on railway.app
* `./GMT_Backend/` contains the backend source code of the application. 
To setup the backend development server,
1. run `npm install`
2. run `node index.js`

## Important Note⚠️
As the backend is deployed on the free account, it can take a few seconds to send response to the Android App.
