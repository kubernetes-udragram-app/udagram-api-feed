"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = require("./config/config");
const c = config_1.config.postgres;
console.log("postgres credentials:", "username: ", c.username, ", password:", c.password, ", database:", c.database, ", host:", c.host);
// Instantiate new Sequelize instance!
exports.sequelize = new sequelize_typescript_1.Sequelize({
    username: c.username,
    password: c.password,
    database: c.database,
    host: c.host,
    dialect: "postgres",
    storage: ":memory:",
    logging: true,
});
//# sourceMappingURL=sequelize.js.map