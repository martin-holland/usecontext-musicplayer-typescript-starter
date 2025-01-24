import { createContext, Dispatch, SetStateAction } from "react";

export const defaultState = {
    audioPlayer: new Audio(),
    tracks: [
        {
            name: "Sinster",
            file: "/sinister.mp3"
        },
        {
            name: "Stomp",
            file: "/stomp.mp3"
        },
        {
            name: "Underwater",
            file: "/underwater.mp3"
        }
    ],
    currentTrackIndex: null as number | null,
    isPlaying: false as boolean,
} as const;

export type MusicState = typeof defaultState;
export type MusicContextType = [MusicState, Dispatch<SetStateAction<MusicState>>]

export interface MusicPlayerHook {
    playTrack: (index: number) => void;
    togglePlay: () => void;
    currentTrackIndex: number | null;
    currentTrackName: string | null;
    trackList: typeof defaultState.tracks;
    isPlaying: boolean;
    playPreviousTrack: () => void;
    playNextTrack: () => void;
}

export const MusicContext = createContext<MusicContextType>([defaultState, () => null])