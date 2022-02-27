export const getTime = (duration: any) => {
  let min = String(Math.floor(duration / 60));
  if (parseInt(min) < 10) min = '0' + min;
  let sec = String(Math.floor(duration % 60));
  if (parseInt(sec) < 10) sec = '0' + sec;
  const playerSongTime = `${min}:${sec}`;
  return playerSongTime;
};