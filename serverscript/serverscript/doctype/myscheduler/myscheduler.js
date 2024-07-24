// Copyright (c) 2024, Gursewak Singh and contributors
// For license information, please see license.txt

    // Copyright (c) 2024, Gursewak Singh and contributors
    // For license information, please see license.txt

    frappe.ui.form.on("myScheduler", {
    	refresh(frm) {

            let d = new frappe.ui.Dialog({
                title: 'Enter details',
                fields: [
                    {
                        label: 'First Name',
                        fieldname: 'first_name',
                        fieldtype: 'Link',
                        options: 'Address'
                    }
                ],
                size: 'small', // small, large, extra-large 
                primary_action_label: 'Submit',
                primary_action(values) {
                    frm.set_value("first_name",values.first_name)
                    d.hide();
                }
            });
            d.show();

    	},
    });





    // frappe.ui.form.on("ErrorLog", {
    //     refresh(frm) {
    //         let d = new frappe.ui.Dialog({
    //             fields: [
                    // {
                    //     label: 'First Name',
                    //     fieldname: 'first_name',
                    //     fieldtype: 'Link',
                    //     options: 'Address'
                    // }
    //             ],
    //             size: 'small',
    //             primary_action_label: 'Submit',
    //             primary_action(values) {
    //                 console.log("values",values);
    //                 frm.set_value("first_name",values.first_name)
    //                 d.hide();
    //             }
    //         });
    //         d.show();
    //     },
    // });