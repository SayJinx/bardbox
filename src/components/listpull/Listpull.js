import React, { useState, useEffect } from 'react';

const API_KEY = "AIzaSyCaQ-Y1jr2ffZIJkKxbHwkfvIBz-igqPsg";

export default function ListPull({pId}) {

  const [vids, setVids] = useState([]);
  const PLAYLIST_ID = pId;

  console.log(pId);

  useEffect(() => {
    if(pId) {fetchPlaylistData()}
  }, 
  [pId]);

//  useEffect(() => fetchPlaylistData, [pId]);

  const fetchPlaylistData = async () => {
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${PLAYLIST_ID}&part=snippet%2CcontentDetails&key=${API_KEY}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      setVids(data.items);
    });
  };

  //json path: items > snippet> title (also snippet > thumbail > default > url?)

    return (
      <ul>
        <li>
          {vids.map((vid) => <h2>Song: {vid.snippet.title}</h2>)}
        </li>
      </ul>
    );

/*    return response.json (
      <div>
            <FlatList
              data={this.state.videos}
              renderItem={
                ({item}) => 
                <TouchableOpacity
                    style={styles.demacate}
                    onPress={() => this.watchVideo(item.contentDetails.videoId)}
                >
                <Text 
                  style={styles.item} 
                > 
                {item.snippet.title} 
                </Text>
                </TouchableOpacity>
              }
            />
      </div>
    );*/

}