export interface StreamState {
  songTitle: string;
  playing: boolean;
  paused: boolean;
  readableCurrentTime: string;
  readableDuration: string;
  duration: number | undefined;
  currentTime: number | undefined;
  volume: number;
  canplay: boolean;
  error: boolean;
}
