import mongoose from "mongoose";


const songSchema = new mongoose.Schema({
    title: String,
    artist: String,
    genre: String,
    album: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});


export default mongoose.model('Song', songSchema);