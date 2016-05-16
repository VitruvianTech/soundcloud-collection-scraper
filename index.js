const METADATA_URL = 'https://api.soundcloud.com/i1/tracks/%0/streams?client_id=' + (process.env.CLIENT_ID || 'JlZIsxg2hY5WnBgtn3jfS0UYCl0K8DOg') + '&secret_token=%1&app_version=o2r6ve';
const LOG_INFO_TRACK_TITLE = '[INFO] track: %s';
const LOG_REQUEST_TRACK_METADATA = '[REQUEST] getting track metadata at: %s';
const LOG_REQUEST_TRACK_DATA = '[REQUEST] downloading track resource data at: %s\n';
const LOG_INFO_FINISHED = '[INFO] collection download successful';
const LOG_ERROR_NOT_FOUND = '[ERROR] metadata not found\n';

var fs = require('fs'),
    path = require('path'),
    request = require('request'),
    collection = require(process.argv[2] ? path.resolve(process.argv[2]) : './collection.json').collection,
    tracks = path.resolve('tracks');

function step() {
  var data = collection.shift();

  if(data) {
    download(data.track);
  } else {
    console.log(LOG_INFO_FINISHED);
    process.exit(0);
  }
}

function download(track) {
  var url = METADATA_URL.replace('%0', track.id).replace('%1', track.secret_token),
      title = track.title;

  console.log(LOG_INFO_TRACK_TITLE, title);
  console.log(LOG_REQUEST_TRACK_METADATA, url);

  request(url, function (error, response, body) {
    var stream = fs.createWriteStream('./tracks/' + title + '.mp3');

    if (!error && response.statusCode == 200) {
      url = JSON.parse(body).http_mp3_128_url;
      stream.on('finish', step);
      console.log(LOG_REQUEST_TRACK_DATA, url);
      request(url).pipe(stream);
    } else {
      console.log(LOG_ERROR_NOT_FOUND);
      fs.appendFile('errors.csv', title + ',' + url + '\n', step);
    }
  });
}

!fs.existsSync(tracks) && fs.mkdirSync(tracks);

step();
