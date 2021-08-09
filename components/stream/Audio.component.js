import style from './Audio.module.css';
import { useEffect } from 'react';
import { socket } from 'sockets/Index.socket';
function Audio() {
  // useEffect(() => {
  //   const audio = new Audio();
  //   var constraints = { audio: true };
  //   navigator.mediaDevices
  //     .getUserMedia(constraints)
  //     .then(function (mediaStream) {
  //       var mediaRecorder = new MediaRecorder(mediaStream);
  //       mediaRecorder.onstart = function () {
  //         this.chunks = [];
  //       };
  //       mediaRecorder.ondataavailable = function (e) {
  //         this.chunks.push(e.data);
  //       };
  //       mediaRecorder.onstop = function () {
  //         var blob = new Blob(this.chunks, { type: 'audio/ogg; codecs=opus' });
  //         socket.emit('audio:client', blob);
  //       };

  //       // Start recording
  //       mediaRecorder.start();

  //       setInterval(function () {
  //         mediaRecorder.stop();
  //         mediaRecorder.start();
  //       }, 1000);
  //     });
  //   socket.on('audio:server', function (arrayBuffer) {
  //     var blob = new Blob([arrayBuffer], { type: 'audio/ogg; codecs=opus' });
  //     audio.src = window.URL.createObjectURL(blob);
  //     audio.play();
  //   });
  // }, []);
  return (
    <div className={style.Audio}>
      <h2>Audio</h2>
    </div>
  );
}
export default Audio;
