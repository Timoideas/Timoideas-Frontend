import style from 'styles/pages/stream.module.css';
import Head from 'heads/stream.head';
import {
  Section,
  Body,
  Content,
} from 'components/timoideas/Timoideas.components';
import { useEffect } from 'react';
import { socket } from 'sockets/Index.socket';
export default function Stream() {
  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_BACKEND_API);
    const audio = new Audio();
    var constraints = { audio: true };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (mediaStream) {
        var mediaRecorder = new MediaRecorder(mediaStream);
        mediaRecorder.onstart = function () {
          this.chunks = [];
        };
        mediaRecorder.ondataavailable = function (e) {
          this.chunks.push(e.data);
        };
        mediaRecorder.onstop = function () {
          var blob = new Blob(this.chunks, { type: 'audio/ogg; codecs=opus' });
          socket.emit('radio', blob);
        };

        // Start recording
        mediaRecorder.start();

        setInterval(function () {
          mediaRecorder.stop();
          mediaRecorder.start();
        }, 1000);
      });
    socket.on('voice', function (arrayBuffer) {
      var blob = new Blob([arrayBuffer], { type: 'audio/ogg; codecs=opus' });
      audio.src = window.URL.createObjectURL(blob);
      audio.play();
    });
  }, []);
  return (
    <>
      <Head />
      <Body>
        <Section>
          <Content center>
            <h1>Stream</h1>
          </Content>
        </Section>
      </Body>
    </>
  );
}
