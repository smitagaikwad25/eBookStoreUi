const axios = require("axios");

export function BookDetails(data) {
  console.log("In Call API", data);

  return axios({
    method: "POST",
    url: "http://localhost:3000/Books",
    data: data
  });
}
export function getAllBooks() {
  return axios({
    method: "GET",
    url: "http://localhost:3000/getBooks"
  });
}
export function getImagePath(data) {
  console.log("In Call API", data);

  return axios({
    method: "POST",
    url: "http://localhost:3000/FilePath",
    data: data
  });
}

export async function searchBook(data) {
  console.log(data);

  return axios({
    method: "GET",
    url: "http://localhost:3000/searchBook",
    bosy: await data
  });
}

export function getSortHighToLow() {
  console.log("in axios function----> ");

  return axios({
    method: "get",
    url: "http://localhost:3000/sortBooksHighToLow"
  });
}

export function getSortLowToHigh() {
  console.log("in axios function----> ");

  return axios({
    method: "get",
    url: "http://localhost:3000/sortBooksLowToHigh"
  });
}

export function getSortByArrival() {
  console.log("in axios function----> ");

  return axios({
    method: "get",
    url: "http://localhost:3000/sortBooksByArrival"
  });
}
