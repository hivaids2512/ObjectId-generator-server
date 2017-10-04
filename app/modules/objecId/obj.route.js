"use strict";

module.exports = function(router) {
  var objController = require("./obj.controller");
  router
    .route("/objectid-list")
    .get(
      objController.getObjectIdList
    )
};
