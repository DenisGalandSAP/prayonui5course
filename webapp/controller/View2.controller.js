sap.ui.define([
    "sap/ui/core/mvc/Controller",
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller, MessageBox, MessageToast, Fragment) {
        "use strict";

        return Controller.extend("z.project7.controller.View2", {
            onInit: function () {
                this.getOwnerComponent().getRouter().getRoute("View2").attachMatched(this.onAttachMatched, this);
            },

            onAttachMatched: function (oEvent) {
                var nIndex = oEvent.getParameter("arguments").index;
                this.getView().byId("page2").bindElement({
                    path: "/" + nIndex,
                    model: "products"
                });
            },

            onBack: function () {
                this.getOwnerComponent().getRouter().navTo("RouteApp");
            }

        });
    });
