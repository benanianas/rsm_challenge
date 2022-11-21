const mongoose = require("mongoose");

const breweriesSchema = new mongoose.Schema({
  ddress_2: { type: String },
  address_3: { type: String },
  brewery_type: { type: String },
  city: { type: String },
  country: { type: String },
  county_province: { type: String },
  created_at: { type: String },
  id: { type: String },
  latitude: { type: String },
  longitude: { type: String },
  name: { type: String },
  phone: { type: String },
  postal_code: { type: String },
  state: { type: String },
  street: { type: String },
  updated_at: { type: String },
  website_url: { type: String },
});

const Breweries = mongoose.model("breweries", breweriesSchema);

module.exports = {
  Breweries,
};
