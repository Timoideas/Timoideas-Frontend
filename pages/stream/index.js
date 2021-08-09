import style from 'styles/pages/stream.module.css';
import Head from 'heads/stream.head';
import {
  Section,
  Body,
  Content,
} from 'components/timoideas/Timoideas.components';
import Chat from 'components/stream/Chat.component';
import Audio from 'components/stream/Audio.component';

export default function Stream() {
  return (
    <>
      <Head />
      <Body>
        <Section>
          <Content center>
            <Audio />
            <Chat />
          </Content>
        </Section>
      </Body>
    </>
  );
}
