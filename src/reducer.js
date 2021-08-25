export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  top_artists: null,
  playing: false,
  discover_weekly: null,
  // ? Remove Token with null
  // token: 'BQB9lo3Il2DUjUUVm-MfgV6gUrPfJfO17yrtaxXphtYj_IyFbgH3adM_9jVZ3G5OD4vrOl-WEIO-9v0xH4GX0gCOMzEUgQu4OChTT2EdbJ1t7qDK9vZOKFvtnMmTRKjpRLlJRnTGft1P5q_JX34NxPr2tkbV0hkzXTFwaXJ6BB53ZqoD',
  item: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

      case "SET_PLAYING":
        return {
          ...state,
          playing: action.playing,
        };

        case "SET_ITEM":
          return {
            ...state,
            item: action.item,
          };

          case "SET_TOP_ARTISTS":
            return {
              ...state,
              top_artists: action.top_artists,
            };
      

      case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
