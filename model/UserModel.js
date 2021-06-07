"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const Mongoose = require("mongoose");
const DataAccess_1 = require("./../DataAccess");
let mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
let mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
/* Methods to add:
CRUD
create a new user
get user info (via id)
update user information: update username, update email, update password,
update user activity: totalUpvotes, swimmingPosts, sinkingPosts, reports
delete: delete a user
 */
class UserModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = new Mongoose.Schema({
            userId: { type: String, required: true, index: { unique: true } },
            userName: { type: String, required: true },
            password: { type: String, required: true },
            email: { type: String, required: true },
            avatar_url: { type: String },
            totalUpvotes: { type: Number },
            swimmingPosts: { type: Number },
            sinkingPosts: { type: Number },
            reports: { type: Number }
        }, { collection: 'users' });
    }
    // create a user
    createModel() {
        this.model = mongooseConnection.model("User", this.schema);
    }
    createUser(response, userObject) {
        this.model.insertMany(userObject)
            .then((result) => { response.json(result); })
            .catch((err) => { response.json(err); });
    }
    // get user details
    retrieveUserDetails(response, filter) {
        this.model.findOne(filter)
            .then((result) => { response.json(result); })
            .catch((err) => { response.json(err); });
    }
    updateUserDetails(response, userObject) {
        this.model.replaceOne({ userId: userObject["userId"] }, userObject)
            .then((result) => { response.json(result); })
            .catch((err) => { response.json(err); });
    }
    deleteUser(response, userObject) {
        this.model.deleteOne(userObject)
            .then((result) => { response.json(result); })
            .catch((err) => { response.json(err); });
    }
    mongoExecHandler(response, mongoQuery) {
        mongoQuery.exec((err, result) => {
            response.json(err ? err : result);
        });
    }
}
exports.UserModel = UserModel;
