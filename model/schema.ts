import mongoose,  { model, Schema } from "mongoose";

const bookSchema = new Schema({
  name:{
    type: String,
  },
  author:{
    type: String,
  },
  genre:{
    type: String,
    enum:{
        values: ["suspense", "horror", 'sci-fi', 'comedy', 'romance', 'action']
    }
  },
  available:{
    type: Boolean,
  },
  price:{
    type: String,
  },
  image:{
    type: String
  },
  id:{
    type: String,
  },
},  { timestamps: true, versionKey: false }
)
bookSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
})

const books = model('books', bookSchema);
export default books;