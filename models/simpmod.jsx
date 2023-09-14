import mongoose,{Schema} from "mongoose";

const postSchema = new Schema(
    {
        title: String,
        description: String,
    },
    {
        timestamps:true,
    },
);

const Feed = mongoose.models.Feed || mongoose.model('Feed',postSchema);

export default Feed;