import './index.less'
import Head from 'next/head'

export default () =>
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* <base href="/my_next" /> */}
    </Head>
    <style jsx>{`
    p {
      color: blue;
    }
    div {
      background: red;
    }
    @media (max-width: 600px) {
      div {
        background: blue;
      }Ï
    }
  `}</style>
    <style global jsx>{`
    body {
      background: black;
    }
  `}</style>
    Hello world
    <p style={{
      color: '#ff4a4a'
    }}>scoped!</p>
    <img src="/static/test.png" />
  </div>