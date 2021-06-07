"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAccess = void 0;
const Mongoose = require("mongoose");
const mongoose_1 = require("./configs/mongoose");
// adding changes
class DataAccess {
    constructor() {
        DataAccess.connect();
    }
    static connect() {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.on("open", () => {
            console.log("Connected to mongodb.");
        });
        this.mongooseInstance = Mongoose.connect(this.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    }
}
exports.DataAccess = DataAccess;
DataAccess.DB_CONNECTION_STRING = mongoose_1.default.host;
DataAccess.connect();
