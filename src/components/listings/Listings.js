import React from 'react';

function ListPull() {

    let pagetoken = '';
    let resultCount = 0;
    const mykey = 'AIzaSyCaQ-Y1jr2ffZIJkKxbHwkfvIBz-igqPsg'
    const playListID = "PLzMXToX8Kzqggrhr-v0aWQA2g8pzWLBrR";
  
    const URL =  `https://www.googleapis.com/youtube/v3/playlistItems?
  part=snippet
  &maxResults=50
  &playlistId=${playListID}
  &key=${mykey}`;
  
  
    fetch(URL)
      .then(response => {
        return response.json();
      })
      .then(function(response) {
  
        resultCount = response.pageInfo.totalResults;
        console.log("ResultCount: " + resultCount);
  
        pagetoken = response.nextPageToken;
        console.log("PageToken: " + pagetoken);
  
        resultCount = resultCount - 50;
        console.log("ResultCount: " + resultCount);
  
        while (resultCount > 0) {
  
          const URL = `https://www.googleapis.com/youtube/v3/playlistItems?
  part=snippet
  &maxResults=50
  &playlistId=${playListID}
  &key=${mykey}
  &pageToken=${pagetoken}`;
  
          fetch(URL)
            .then(response => {
              return response.json();
            })
            .then(function(response) {
              pagetoken = response.nextPageToken ? response.nextPageToken : null;
              console.log("PageToken: " + pagetoken);
            });
          resultCount = resultCount - 50;
        }
      })
      .catch(function(error) {
        console.log("Looks like there was a problem: \n", error);
      });
  }
export default ListPull;