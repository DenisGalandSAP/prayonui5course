sap.ui.define([
    "z/project7/controller/BaseController",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/ValueState"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller, MessageBox, MessageToast, Fragment, Filter, FilterOperator, ValueState) {
        "use strict";

        return Controller.extend("z.project7.controller.App", {
            onInit: function () {
            },

            onPress: function () {
                //var sValue = this.getView().byId("input0").getValue();
                var sMessage = this.getResourceBundle().getText("nameconcatenated", [this.getModel().getProperty("/inputValue")]);
                MessageBox.show(sMessage, {
                    icon: MessageBox.Icon.QUESTION
                });
            },

            onChange: function (oEvent) {
                this.getModel().setProperty("/enableForm", oEvent.getParameter("state"));
                if (oEvent.getParameter("state")) {
                    MessageToast.show(this.getResourceBundle().getText("switchOn", ["test"]), {
                        at: sap.ui.core.Popup.Dock.CenterCenter
                    });
                } else {
                    MessageToast.show(this.getResourceBundle().getText("switchOff", ["test"]), {
                        at: sap.ui.core.Popup.Dock.CenterCenter
                    });

                }
            },

            onOpenDialog: function () {
                if (!this.oDialog) {
                    Fragment.load({ name: "z.project7.view.Dialog", controller: this }).then((oDialog) => {
                        this.oDialog = oDialog;
                        this.getView().addDependent(this.oDialog);
                        this.oDialog.open()
                    });
                } else {
                    this.oDialog.open();
                }
            },

            onCloseDialog: function () {
                this.oDialog.close();
            },

            stockText: function (nStock) {
                if (nStock > 0) {
                    return "Available";
                } else {
                    return "Out of stock";
                }

            },

            onStockCheck: function (nStock) {
                if (nStock > 0) {
                    return ValueState.Success;
                } else {
                    return ValueState.Error;
                }
            },

            onNavigate: function (oEvent) {
                var nIndex = oEvent.getSource().getBindingContextPath().split("/")[1];
                this.navTo("View2", { index: nIndex });
            },

            onLiveChange: function (sSearchField) {
                var oBinding = this.getView().byId("list0").getBinding("items");
                oBinding.filter([new Filter("name", FilterOperator.Contains, sSearchField)]);
            }

        });
    });
