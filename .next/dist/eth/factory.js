'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _campaignFactory = require('./build/campaignFactory.json');

var _campaignFactory2 = _interopRequireDefault(_campaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_campaignFactory2.default.interface), '0x4cf639eD8130D4302215F9c33eEf96AaDF131eD8');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aFxcZmFjdG9yeS5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiQ2FtcGFpZ25GYWN0b3J5IiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQTRCLEFBQTVCOzs7Ozs7QUFFQSxJQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ2YsS0FBSyxBQUFMLE1BQVcsMEJBQWdCLEFBQTNCLEFBRGUsWUFFZixBQUZlLEFBQWpCLEFBS0E7O2tCQUFlLEFBQWYiLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9BQTU5OTAxNi9Eb2N1bWVudHMvcG9ydGZvbGlvIHdlYnNpdGUvZXRoUHJvamVjdHMvS2lja3N0YXJ0ZXIifQ==