import { useEffect, useRef, useState } from 'react';
import { socket } from 'sockets/Index.socket';
import style from './Chat.module.css';
function Chat() {
  const [Messajes, setMessajes] = useState([]);
  const [CurrentMessage, setCurrentMessage] = useState('');
  const handlerInput = (e) => {
    let audio = new Audio();
    audio.src = `/sounds/keyboard/${e.target.value.slice(-1)}.mp3`;
    audio.play();
    setCurrentMessage(e.target.value);
  };
  const refInput = useRef();
  useEffect(() => {
    socket.on('chat:server', (msg) => {
      console.log(msg);
      setMessajes((d) => [...d, { value: msg, owner: false }]);
    });
    return () => {};
  }, []);
  const handlerSend = (e) => {
    e.preventDefault();
    socket.emit('chat:client', CurrentMessage);
    CurrentMessage.trim() !== '' &&
      setMessajes((d) => [...d, { value: CurrentMessage, owner: true }]);
    refInput.current.value = '';
  };
  return (
    <div className={style.Chat}>
      <div className={style.ChatContainer}>
        {Messajes.map((d, index) => (
          <div key={index} className={d.owner ? style.Inner : style.Outer}>
            <div>{d.value}</div>
          </div>
        ))}
      </div>
      <form className={style.InputContainer} onSubmit={handlerSend}>
        <input
          type='text'
          placeholder='Escribe algo'
          onChange={handlerInput}
          ref={refInput}
        />
        <button className={style.Send} onClick={handlerSend}></button>
      </form>
    </div>
  );
}
export default Chat;
