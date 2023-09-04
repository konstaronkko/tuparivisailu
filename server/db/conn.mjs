import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import * as fs from 'fs';

var mongoDbUrl = process.env.MONGO_URL || "";
var caCertificateBase64 = process.env.CERTIFICATE_BASE64;

function unicodeToChar(text) {
    return text.replace(/\\u[\dA-F]{4}/gi,
      function (match) {
        return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
      });
    }
  mongoDbUrl = unicodeToChar(mongoDbUrl);
  console.log(`Connecting to database located at ${mongoDbUrl}...`);

  // write down the certificate so that it can be used by MongoDB client
  fs.writeFileSync('__temp__ca.pem', Buffer.from(caCertificateBase64, 'base64'));

  var mongoDbOptions = {
    useNewUrlParser: true,
    tls: true,
    tlsCAFile: '__temp__ca.pem'
  };

const client = new MongoClient(mongoDbUrl, mongoDbOptions);

let conn;
try {
  console.log("Connecting to MongoDB Atlas...");
  conn = await client.connect(mongoDbUrl, mongoDbOptions);
} catch(e) {
  console.error(e);
}

let db = conn.db("tupari_test");

export default db;