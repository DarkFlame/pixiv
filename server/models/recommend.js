import mongoose from 'mongoose'
let Schema = mongoose.Schema;

let schema = new Schema({
  'id': String,
  'name': String,
  'createdAt': {
    'type': Date,
    'default': Date.now
  },
  'updatedAt': {
    'type': Date,
    'default': Date.now
  },
  'status': {
    'type': Number,
    'default': 1
  }
});

schema.index({
  'id': 1
});

schema.index({
  'name': 1
});

schema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

export default mongoose.model("Recommend", schema);
