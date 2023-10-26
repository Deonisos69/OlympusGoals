import { StyleSheet, Text, View, Button } from 'react-native'
import { useCallback, useState } from "react";
import Inspiration from '../../model/inspiration'
import YoutubePlayer from "react-native-youtube-iframe";
import { Dimensions } from 'react-native';

/**
 * Takes an inspiration and returns a react youtube iframe component.
 * @param {Inspiration} inspiration
 * @returns {React.ReactElement}
 */
export default function YoutubeVideo({ inspiration }) {
  const [playing, setPlaying] = useState(false);
  const videoId = inspiration.value ? inspiration.value.split("?v=")[1] : ""
  const width = Dimensions.get("window").width;


  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  return (
    <View style={styles.YoutubeVideoContainer}>
      <YoutubePlayer
        height={300}
        width={width}
        play={playing}
        videoId={videoId}
        onChangeState={onStateChange}
        
      />
    </View>
  )
}

const styles = StyleSheet.create({
  YoutubeVideoContainer: {
  },
})