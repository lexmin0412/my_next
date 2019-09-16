import './index.less'

export default () =>
  <div>
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