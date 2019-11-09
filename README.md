# forkng-weather
날씨앱을 React-Native 기반으로 만들면서 배워보자 

버그픽스 
expo start 중  regular expression 에러가 나는경우 node 버젼 호환 문제인데 아래처럼 수정하여 해결한다. 


I m using node version v.12.13 
and I met a bugs...
error invaild regular expression....... 
and I found a solution without downgrading node 
https://github.com/expo/expo-cli/issues/1074

\node_modules\metro-config\src\defaults\blacklist.js

var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];

change to:
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];