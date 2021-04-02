sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller, MessageBox, MessageToast, Fragment) {
        "use strict";

        return Controller.extend("z.project7.controller.App", {
            onInit: function () {
                this.oI18n = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                console.log("");
            },

            onPress: function () {
                //var sValue = this.getView().byId("input0").getValue();
                this.sMessage = this.oI18n.getText("nameconcatenated", [this.getView().getModel().getProperty("/inputValue")]);
                MessageBox.show(sMessage, {
                    icon: MessageBox.Icon.QUESTION
                });
            },

            onChange: function (oEvent) {
                this.getView().getModel().setProperty("/enableForm", oEvent.getParameter("state"));
                if (oEvent.getParameter("state")) {
                    MessageToast.show(this.oI18n.getText("switchOn", ["test"]), {
                        at: sap.ui.core.Popup.Dock.CenterCenter
                    });
                } else {
                    MessageToast.show(this.oI18n.getText("switchOff", ["test"]), {
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

            }
            //,

            // groupByName: function (oContext) {
            //     return oContext.getProperty('name');
            // },

            // getGroupHeader: function (oGroup) {
            //     return new GroupHeaderListItem({
            //         title: oGroup.name
            //     }
            //     );
            // }
        });
    });