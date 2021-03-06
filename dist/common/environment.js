"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    server: { port: process.env.SERVER_PORT || 3000 },
    db: { url: process.env.DB_URL || 'mongodb://localhost/meat-api' },
    security: {
        saltRounds: process.env.SALT_ROUNDS || 10,
        apiSecret: process.env.API_SECRETS || 'meat-api-secret'
    },
    enableHttps: process.env.ENABLE_HTTPS || false,
    certificate: process.env.CERTIF_FILE || './security/keys/cert.pem',
    key: process.env.CERTIF_KEY_FILE || './security/keys/key.pem',
};
