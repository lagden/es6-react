'use strict';

function run(k, v) {
  return fetch(`http://api.randomuser.me/?${k}=${v}`)
    .then(res => res.json());
}

function getUser(seed) {
  return run('seed', seed);
}

function getUserList(limit = 100) {
  return run('results', limit);
}

export { getUser, getUserList };
