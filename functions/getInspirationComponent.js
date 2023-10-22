import QuoteSource from "../components/inspirationTypes/Quote";
import YoutubeVideo from "../components/inspirationTypes/YoutubeVideo";
import Inspiration from "../model/inspiration";

/**
 * Takes an inspiration and returns a react component for display purposes
 * @param {Inspiration} inspiration 
 * @returns React Component
 */
export function getInspirationComponent(inspiration) {
    switch (inspiration.type) {
        case "quote":
          return QuoteSource({quote: inspiration.value, key: inspiration.id})
        case "local-video":
          return <View></View>;
        case "youtube-video":
          return YoutubeVideo({inspiration});
        case "picture":
          return <View></View>;
        case "link":
          return <View></View>;
    }
}