import { useContext } from "react";
import { MusicContext, MusicContextType, MusicPlayerHook } from "../context/MusicContext";

export const useMusicPlayer = (): MusicPlayerHook => {
  const [state, setState] = useContext<MusicContextType>(MusicContext);

  const togglePlay = () => {
    if (state.isPlaying) {
      setState({ ...state, isPlaying: false });
      state.audioPlayer.pause();
    } else {
      setState({ ...state, isPlaying: true });
      state.audioPlayer.play();
    }
  };

  const playTrack = (index: number) => {
    if (index === state.currentTrackIndex) {
      togglePlay();
    } else {
      state.audioPlayer.pause();
      const newAudioPlayer = new Audio(state.tracks[index].file);
      setState({
        ...state,
        audioPlayer: newAudioPlayer,
        currentTrackIndex: index,
        isPlaying: true,
      });
      newAudioPlayer.play();
    }
  };

  const playPreviousTrack = () => {
    if (state.currentTrackIndex === null) return;
    const newIndex =
      state.currentTrackIndex === 0
        ? state.tracks.length - 1
        : state.currentTrackIndex - 1;
    playTrack(newIndex);
  };

  const playNextTrack = () => {
    if (state.currentTrackIndex === null) return;
    const newIndex =
      state.currentTrackIndex === state.tracks.length - 1
        ? 0
        : state.currentTrackIndex + 1;
    playTrack(newIndex);
  };

  return {
    playTrack,
    togglePlay,
    currentTrackIndex: state.currentTrackIndex,
    currentTrackName:
      state.currentTrackIndex !== null
        ? state.tracks[state.currentTrackIndex].name
        : null,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    playPreviousTrack,
    playNextTrack,
  };
}; 