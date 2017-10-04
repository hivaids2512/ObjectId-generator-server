"use strict";

var utils = require("../../config/utils");
var async = require("async");

exports.getObjectIdList = function(req, res) {
  async.auto(
    {
      init: function(callback) {
        if (!req.query.num) {
          res.json({
            code: 400,
            message: "Please give number of object Id."
          });
          return callback();
        } else {
          if (req.query.num > 100) {
            res.json({
              code: 400,
              message: "Number must less than 100"
            });
            return callback();
          } else {
            callback(null, req.query.num);
          }
        }
      },
      generate: [
        "init",
        function(results, callback) {
          var objList = [];
          if (req.query.num) {
            for (var i = 0; i < req.query.num; i++) {
              var obj = utils.getObjectId();
              objList.push(obj);
            }
          }
          callback(null, objList);
        }
      ]
    },
    function(err, results) {
      if (err) {
        console.log(err);
        res.json({
          status: 500,
          data: err
        });
      } else {
        res.json({
          status: 200,
          data: results.generate
        });
      }
    }
  );
};
