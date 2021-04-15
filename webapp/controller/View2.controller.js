sap.ui.define([
    "../controller/BaseController",
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller) {
        "use strict";

        return Controller.extend("z.project7.controller.View2", {
            onInit: function () {
                this.getRouter().getRoute("View2").attachMatched(this._onAttachMatched, this);
            },

            _onAttachMatched: function (oEvent) {
                var nIndex = oEvent.getParameter("arguments").index;
                this.getView().byId("page2").bindElement({
                    path: "/" + nIndex,
                    model: "products"
                });
            }

        });
    });
