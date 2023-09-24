import mongoose from 'mongoose'

const bannerSchema = new mongoose.Schema({
    images: [
        {
          public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
        },
    ],
})


export default mongoose.model('banner', bannerSchema);