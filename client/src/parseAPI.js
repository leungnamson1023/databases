import $ from 'jquery';
// import PARSE_API from './env/parseKeys';

const getMessages = (callback) => {
  $.ajax({
    type: 'GET',
    url: '/classes/messages',
    // data: {
    //   order: '-createdAt',
    //   limit: 100,
    // },
    // headers: {
    //   'X-Parse-Application-Id': PARSE_API.appId,
    //   'X-Parse-REST-API-Key': PARSE_API.key,
    // },
    success: (response) => {
      callback(response.results);
    },
    error: (err) => {
      console.error(err); //eslint-disable-line
    },
  });
};

const sendMessage = (message, callback) => {
  $.ajax({
    type: 'POST',
    url: '/classes/messages',
    data: JSON.stringify(message),
    contentType: 'application/json',
    // headers: {
    //   'X-Parse-Application-Id': PARSE_API.appId,
    //   'X-Parse-REST-API-Key': PARSE_API.key,
    // },
    success: (response) => {
      callback(response.results);
    },
    error: (err) => {
      console.error(err); //eslint-disable-line
    },
  });
};

export default { getMessages, sendMessage };
