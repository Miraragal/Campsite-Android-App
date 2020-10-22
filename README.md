# 🏕 Campsite Android-App 🤳

This is the Android-App version of [Campsite](https://github.com/Miraragal/Campsite) Project using React Native and the Expo SDK to access all native hardware capabilities of smartphones and tablets. 


<img src="https://github.com/Miraragal/Campsite-Android-App/blob/master/assets/ezgif.com-gif-maker.webp" height="400px"><img src="https://playerzon.com/asset/download.png" width="80"></img>



## Technologies

  ![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)
  ![React Native](https://img.shields.io/badge/-ReactNative-black?style=flat-square&logo=react) 
  ![Redux](https://img.shields.io/badge/-Redux-black?style=flat-square&logo=redux) 



## Project info

Main objective of this project was to have a single code base for both 
web and mobile apps with the logic and view separated.

#### Project Structure

```
    /android                - React native android source code
    
    /web                    - react js web specific code
        /components         - react components
        /App.js             - App Root component
        /routes.js          - route config
    
    /components             - React native specific code
        /components         - react native components
        /screens            - connected to store components
        /images             - images
    
    /redux
        /actions            - all redux actions
        /constants          - colors and Assets
        /reducers           - all reducers
        /store              - store config
    
    /shared                 - data 
    
```


## Requirements 

- React Native
- Node.js
- NPM

```javascript

/* First, Install the needed packages */

- npm install
- npm install -g expo-cli
- npm install --save redux react-redux

/* Then start both Node and React Native */

- run npm start
- run expo-cli start

/* Finally, Install and the run your device or emulator */

- run `npm android` to run on device or emulator

```


