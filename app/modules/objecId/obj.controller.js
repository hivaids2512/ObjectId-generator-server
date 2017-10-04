"use strict";

var utils = require('../../config/utils');

exports.getObjectIdList = function (req, res) {
  var numberOfObj = req.query.num;
  var objList = [];
  if (numberOfObj) {
    for (var i = 0; i < numberOfObj; i++) {
      var obj = utils.getObjectId();
      objList.push(obj);
    }
  }
  res.json({
    status: 200,
    data: objList
  });
};