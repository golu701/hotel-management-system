const AdminBro = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);
const {request} = require("express");
const options = {
    // resources: [{
    //     resource: User,
    //     options: {
    //         properties: {
    //             password: {
    //                 isVisible: {
    //                     show: true, edit: false
    //                 }
    //             },
    //             tokens: {
    //                 isVisible: false
    //             },
    //             userId: {
    //                 isVisible:{
    //                     show: true, edit: false
    //                 }
    //             }
    //         },
    //     }
    // }, {
    //     resource: Tags,
    //     options: {
    //         properties: {
    //             created_on:{
    //                 isVisible: false
    //             }
    //         }
    //     }
    // },
    //     Post,
    //     {
    //         resource: DiamondBalance,
    //         actions: {
    //             new: {
    //                 before: async (request) => {
    //                     console.log(request);
    //                 }
    //             }
    //         }
    //
    //     }],
    branding:{
        companyName: "Hotel management System"
    },

}

module.exports = options;
