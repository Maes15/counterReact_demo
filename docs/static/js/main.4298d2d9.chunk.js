(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){},20:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),u=(n(14),n(1)),s=n(2),m=n(4),i=n(3),p=n(5),l=(n(16),n(18),function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(m.a)(this,Object(i.a)(e).call(this,t))).increment=function(){var t=Number(n.props.amount)||1;t>0&&(!n.props.max||n.state.count+t<n.props.max?n.setState({count:Number(n.state.count)+t}):n.setState({count:Number(n.props.from)||0})),t<0&&(!n.props.min||n.state.count+t>n.props.min?n.setState({count:Number(n.state.count)+t}):n.setState({count:Number(n.props.from)||0}))},n.state={count:Number(t.from)||0},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{onClick:this.increment,className:"counter"},r.a.createElement("h1",{className:this.state.count%2===0?"even":"odd"},this.state.count),r.a.createElement("small",null,r.a.createElement("pre",{style:{fontSize:this.state.count+"px"}},JSON.stringify(this.props))))}}]),e}(a.Component)),f=(n(20),function(t){function e(){return Object(u.a)(this,e),Object(m.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App-header"},r.a.createElement(l,{max:"16",amount:"5"}),r.a.createElement(l,{from:"12",max:"30"}),r.a.createElement(l,{from:"hola"}),r.a.createElement(l,{from:"33",amount:"-3",min:"12"}))}}]),e}(a.Component));c.a.render(r.a.createElement(f,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(22)}},[[8,2,1]]]);
//# sourceMappingURL=main.4298d2d9.chunk.js.map