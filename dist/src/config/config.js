"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const process_1 = require("process");
exports.config = {
    jwt: {
        secret: process_1.env.secret,
        signOptions: { expiresIn: '1d' },
    },
    db: {
        url: process_1.env.DATABASE_URL,
    },
};
//# sourceMappingURL=config.js.map