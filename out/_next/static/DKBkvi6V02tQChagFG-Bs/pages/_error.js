(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/a9y":function(e,t,n){"use strict";var r=n("/HRN"),a=n("WaGi"),l=n("ZDA2"),i=n("/+P4"),o=n("N9n2"),d=n("KI45");t.__esModule=!0,t.default=void 0;var s=d(n("q1tI")),u=d(n("PgRs")),c={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"},p=function(e){function t(){return r(this,t),l(this,i(t).apply(this,arguments))}return o(t,e),a(t,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||c[e]||"An unexpected error has occurred";return s.default.createElement("div",{style:f.error},s.default.createElement(u.default,null,s.default.createElement("title",null,e,": ",t)),s.default.createElement("div",null,s.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?s.default.createElement("h1",{style:f.h1},e):null,s.default.createElement("div",{style:f.desc},s.default.createElement("h2",{style:f.h2},t,"."))))}}],[{key:"getInitialProps",value:function(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}}]),t}(s.default.Component);t.default=p,p.displayName="ErrorPage";var f={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"04ac":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){var e=n("/a9y");return{page:e.default||e}}])},PgRs:function(e,t,n){e.exports=n("m/Pd")}},[["04ac",1,0]]]);