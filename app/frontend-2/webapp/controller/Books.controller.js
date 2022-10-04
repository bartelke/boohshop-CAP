sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sdk.frontend2.controller.Books", {
      onInit: function () {
        var oModel = new sap.ui.model.json.JSONModel();
        oModel
          .loadData("/catalog/Authors", {
            type: "json",
          })
          .then(function () {
            var author0 = oModel.getData().value[0];
            alert(author0.name);
          });
      },
    });
  }
);
