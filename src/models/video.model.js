import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFiles: {
            type: String,//cloudinary url for videos,
            required : true,
        },
        thumbnails: {
            type: String,//cloudinary url for videos,
            required : true,
        },
        titles: {
            type: String,
            required : true,
        },
        descriptionss: {
            type: String,
            required : true,
        },
        duration: {
            type: String,//cloudinary url for videos,
            required : true,
        },
        views: {
            type: Number,
            default: 0,
            required : true,
        },
        isPublished:{
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = new mongoose.model("Video",videoSchema)