// metro.config.js

const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push("db"); // Optional: allow SQLite or custom extensions

module.exports = config;