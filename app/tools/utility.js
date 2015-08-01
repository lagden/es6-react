'use strict';

function ucFirst(srt) {
  return srt.charAt(0).toUpperCase() + srt.slice(1);
}

function userInfo(user) {
  let name = [
    `${ucFirst(user.name.title)}`,
    `${ucFirst(user.name.first)}`,
    `${ucFirst(user.name.last)}`
  ].join(' ');
  let pic1x = user.picture.medium;
  let pic2x = user.picture.large;

  return {name, pic1x, pic2x};
}

export {ucFirst, userInfo};
