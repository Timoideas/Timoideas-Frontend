import style from 'styles/pages/stream.module.css';
import Head from 'heads/Stream.head';
import {
  Section,
  Body,
  Content,
} from 'components/timoideas/Timoideas.components';
import Stream from 'components/stream/Stream.component';
export default function Stream() {
  return (
    <>
      <Head />
      <Body>
        <Section>
          <Content center>
            <Stream />
          </Content>
        </Section>
      </Body>
    </>
  );
}
