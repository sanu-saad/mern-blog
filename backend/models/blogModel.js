import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength : [10,"Blog title must contain at least 10 character"],
    maxLength : [40,"Blog title cannot exceed 40 characters"]
  },
  mainImage : {
    public_id : {
      type : String,
      required : true,
    },
    url : {
      type : String,
      required : true,
    }
  },
  intro : {
    type: String,
    required: true,
    minLength : [250,"Blog intro must contain at least 250 character"],
  },
  paraOneImage : {
    public_id : {
      type : String,
    },
    url : {
      type : String,
    }
  },
  paraOneDescription : {
    type: String,
    minLength : [50,"Blog intro must contain at least 50 character"],
  },
  paraOneTitle : {
    type: String,
    minLength : [50,"Blog title must contain at least 50 character"],
  },
  paraTwoImage : {
    public_id : {
      type : String,
    },
    url : {
      type : String,
    }
  },
  paraTwoDescription : {
    type: String,
    minLength : [50,"Blog intro must contain at least 50 character"],
  },
  paraTwoTitle : {
    type: String,
    minLength : [50,"Blog title must contain at least 50 character"],
  },
  category: {
    type : String,
    required : true
  },
  createdBy : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User",
    required : true
  },
  authorName : {
    type : String,
    required : true
  },
  authorAvatar : {
    type : String,
    required : true
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model('Blog', blogSchema);

export default Post;
