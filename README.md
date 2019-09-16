# Nextjs 官网

### Installation

```
yarn
```

### run

```
yarn dev
```



### 仅作用于当前页面的style标签

```jsx
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
  </div>
```

功能扩展
- [less支持](https://github.com/zeit/next-plugins/tree/master/packages/next-less)