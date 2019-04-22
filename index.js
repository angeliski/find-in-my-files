const findInFiles = require('find-in-files');
const _ = require('lodash');

const pathToFind = '';
const regex = /cellType: ('|")(.*)('|"),/;

findInFiles.find(regex, pathToFind, '.js$')
    .then(function(results) {
      const matches = Object
      .keys(results)
      .map(key => results[key].matches)
      .reduce( (a, b) => a.concat(b))
      .map( type => type.match(regex)[2].toLowerCase());

      const grouped = _.groupBy(matches);
      const countGroup =Object
      .keys(grouped)
      .map(key => ({
        key: key,
        total: grouped[key].length
      }));

      

      console.log(_.sortBy(countGroup, 'total'));

    });