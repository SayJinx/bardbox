import React, { useState } from 'react';
import {Actions} from 'react-native-router-flux';

const API_KEY = "AIzaSyCaQ-Y1jr2ffZIJkKxbHwkfvIBz-igqPsg";

export default function ListPull({pId}) {

  const [vids, setVids] = useState([]);
  const PLAYLIST_ID = "PLScC8g4bqD47c-qHlsfhGH3j6Bg7jzFy-";

  fetchPlaylistData = async () => {
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${PLAYLIST_ID}&part=snippet%2CcontentDetails&key=${API_KEY}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      setVids(data.items.snippet);
    });
  };

  //json path: items > snippet> title (also snippet > thumbail > default > url?)

    return (
      <ul>
        <li>
          {items.map((vids) => <h2>Song: {vids.title}</h2>)}
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