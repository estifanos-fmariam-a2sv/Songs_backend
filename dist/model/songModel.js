"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var songSchema = new mongoose_1.default.Schema({
    title: String,
    artist: String,
    genre: String,
    album: String,
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User'
    }
});
exports.default = mongoose_1.default.model('Song', songSchema);
