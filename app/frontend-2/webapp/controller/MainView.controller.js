sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sdk.frontend2.controller.MainView", {
      onInit: function () {},
      onBooksPress: function (oEvent) {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("books");
      },
    });
  }
);
