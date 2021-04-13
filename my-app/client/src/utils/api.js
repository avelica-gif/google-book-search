import axios from "axios";
require("dotenv").config();
// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getBooks: function (query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
  },
};
