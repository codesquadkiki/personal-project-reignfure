// const { link } = require('fs');
const mongoose = require('mongoose');
const {Schema} = mongoose;

const resourceSchema = new Schema({
  name: {
    type: String,
    required: [true, 'A fridge name is required.'],
    minlength:[1,'Minimun length for the fridge name is 1 characters.']
  },
  type: {
    type: String,
    required: [true, 'A resource type is required']
  },
  org: {
    type: String,
    required: [true, 'An organization name is required.'],
    minlength:[1,'Minimun length for the organization name is 1 character.']
  },
  google_maps: {
    type: URL
  },
  coords: {
    type: GeolocationCoordinates,
  },
  st_add: {
    type: String,
    required: [true, 'The street address is required.'],
    minlength:[5,'Minimun length for the street address is 5 characters.']
  },
  city: {
    type: String,
    required: [true, 'The city is required.'],
    minlength:[3,'Minimun length for the city is 3 characters.']
  },
  state: {
    type: String,
    required: [true, 'The state is required.'],
    minlength:[4,'Minimun length for the state is 4 characters.']
  },
  zip: {
    type: Location,
    required: [true, 'The zip code is required.'],
    minlength:[5,'Minimun length for the zip code is 5 characters.']
  },
  county: {
    type: String,
  },
  country: {
    type: String,
    required: [true, 'The country is required.'],
    minlength:[3,'Minimun length for the country is 2 characters.']
  },
  loc_desc: {
    type: String,
  },
  opn_hrs: {
    type: Boolean,
    required: [true, 'This is required.']
  },
  hours: {
    type: String,
  },
  days: {
    type: String,
  },
  start_date: {
    type: Date,
  },
  frz: {
    type: Boolean,
    required: [true, 'this is required'],
  },
  pantry: {
    type: Boolean,
    required: [true, 'this is required']
  },
  accpt: {
    type: Array
  },
  no_accpt: {
    type: Array
  },
  dtls: {
    type: String
  },
  img: {
    type: File
  },
});

const Resource = mongoose.model('resources', resourceSchema);

module.exports = Resource;