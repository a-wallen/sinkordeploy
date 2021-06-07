"use strict";
exports.__esModule = true;
exports.UserModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
/* Methods to add:
CRUD
create a new user
get user info (via id)
update user information: update username, update email, update password,
update user activity: totalUpvotes, swimmingPosts, sinkingPosts, reports
delete: delete a user
 */
var UserModel = /** @class */ (function () {
    function UserModel() {
        this.createSchema();
        this.createModel();
    }
    UserModel.prototype.createSchema = function () {
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
    };
    // create a user
    UserModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("User", this.schema);
    };
    UserModel.prototype.createUser = function (response, userObject) {
        this.model.insertMany(userObject)
            .then(function (result) { response.json(result); })["catch"](function (err) { response.json(err); });
    };
    // get user details
    UserModel.prototype.retrieveUserDetails = function (response, filter) {
        this.model.findOne(filter)
            .then(function (result) { response.json(result); })["catch"](function (err) { response.json(err); });
    };
    UserModel.prototype.updateUserDetails = function (response, userObject) {
        this.model.replaceOne({ userId: userObject["userId"] }, userObject)
            .then(function (result) { response.json(result); })["catch"](function (err) { response.json(err); });
    };
    UserModel.prototype.deleteUser = function (response, userObject) {
        this.model.deleteOne(userObject)
            .then(function (result) { response.json(result); })["catch"](function (err) { response.json(err); });
    };
    UserModel.prototype.mongoExecHandler = function (response, mongoQuery) {
        mongoQuery.exec(function (err, result) {
            response.json(err ? err : result);
        });
    };
    return UserModel;
}());
exports.UserModel = UserModel;
