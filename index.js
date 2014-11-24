var request = require('request');

function retrieve(url) {
  return request(url || 'http://schema.rdfs.org/all.json');
}