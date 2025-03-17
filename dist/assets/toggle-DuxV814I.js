import { importShared } from './__federation_fn_import-Cbj1D39_.js';
import { r as re, Q } from './index-D38eh1Gu.js';

const t = await importShared('react');
const {Component:i} = t;
function s(){return s=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);}return t},s.apply(this,arguments)}var n$1=t.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},t.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),o=t.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},t.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function h(t){if(7===t.length)return t;for(var i="#",s=1;s<4;s+=1)i+=t[s]+t[s];return i}function e(t,i,s,n,o){return function(t,i,s,n,o){var h=(t-s)/(i-s);if(0===h)return n;if(1===h)return o;for(var e="#",a=1;a<6;a+=2){var r=parseInt(n.substr(a,2),16),l=parseInt(o.substr(a,2),16),c=Math.round((1-h)*r+h*l).toString(16);1===c.length&&(c="0"+c),e+=c;}return e}(t,i,s,h(n),h(o))}var a=function(i){function n(t){i.call(this,t);var s=t.height,n=t.width,o=t.checked;this.t=t.handleDiameter||s-2,this.i=Math.max(n-s,n-(s+this.t)/2),this.o=Math.max(0,(s-this.t)/2),this.state={h:o?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.k=this.k.bind(this),this.m=this.m.bind(this),this.M=this.M.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this),this.W=this.W.bind(this);}return i&&(n.__proto__=i),(n.prototype=Object.create(i&&i.prototype)).constructor=n,n.prototype.componentDidMount=function(){this.I=true;},n.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o});},n.prototype.componentWillUnmount=function(){this.I=false;},n.prototype.H=function(t){this.R.focus(),this.setState({j:t,B:true,L:Date.now()});},n.prototype.N=function(t){var i=this.state,s=i.j,n=i.h,o=(this.props.checked?this.i:this.o)+t-s;i.U||t===s||this.setState({U:true});var h=Math.min(this.i,Math.max(this.o,o));h!==n&&this.setState({h:h});},n.prototype.A=function(t){var i=this.state,s=i.h,n=i.U,o=i.L,h=this.props.checked,e=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var a=Date.now()-o;(!n||a<250||(h&&s<=e||!h&&s>=e))&&this.X(t),this.I&&this.setState({U:false,B:false}),this.l=Date.now();},n.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.H(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.k));},n.prototype.v=function(t){t.preventDefault(),this.N(t.clientX);},n.prototype.k=function(t){this.A(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.k);},n.prototype.m=function(t){this.F=null,this.H(t.touches[0].clientX);},n.prototype.M=function(t){this.N(t.touches[0].clientX);},n.prototype.T=function(t){t.preventDefault(),this.A(t);},n.prototype.C=function(t){Date.now()-this.l>50&&(this.X(t),Date.now()-this.u>50&&this.I&&this.setState({B:false}));},n.prototype.D=function(){this.u=Date.now();},n.prototype.O=function(){this.setState({B:true});},n.prototype.S=function(){this.setState({B:false});},n.prototype.W=function(t){this.R=t;},n.prototype.$=function(t){t.preventDefault(),this.R.focus(),this.X(t),this.I&&this.setState({B:false});},n.prototype.X=function(t){var i=this.props;(0, i.onChange)(!i.checked,t,i.id);},n.prototype.render=function(){var i=this.props,n=i.checked,o=i.disabled,h=i.className,a=i.offColor,r=i.onColor,l=i.offHandleColor,c=i.onHandleColor,u=i.checkedIcon,d=i.uncheckedIcon,f=i.checkedHandleIcon,p=i.uncheckedHandleIcon,b=i.boxShadow,v=i.activeBoxShadow,g=i.height,y=i.width,w=i.borderRadius,k=function(t,i){var s={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&-1===i.indexOf(n)&&(s[n]=t[n]);return s}(i,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),m=this.state,M=m.h,T=m.U,x=m.B,$={position:"relative",display:"inline-block",textAlign:"left",opacity:o?.5:1,direction:"ltr",borderRadius:g/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},C={height:g,width:y,margin:Math.max(0,(this.t-g)/2),position:"relative",background:e(M,this.i,this.o,a,r),borderRadius:"number"==typeof w?w:g/2,cursor:o?"default":"pointer",WebkitTransition:T?null:"background 0.25s",MozTransition:T?null:"background 0.25s",transition:T?null:"background 0.25s"},D={height:g,width:Math.min(1.5*g,y-(this.t+g)/2+1),position:"relative",opacity:(M-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:T?null:"opacity 0.25s",MozTransition:T?null:"opacity 0.25s",transition:T?null:"opacity 0.25s"},O={height:g,width:Math.min(1.5*g,y-(this.t+g)/2+1),position:"absolute",opacity:1-(M-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:T?null:"opacity 0.25s",MozTransition:T?null:"opacity 0.25s",transition:T?null:"opacity 0.25s"},S={height:this.t,width:this.t,background:e(M,this.i,this.o,l,c),display:"inline-block",cursor:o?"default":"pointer",borderRadius:"number"==typeof w?w-1:"50%",position:"absolute",transform:"translateX("+M+"px)",top:Math.max(0,(g-this.t)/2),outline:0,boxShadow:x?v:b,border:0,WebkitTransition:T?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:T?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:T?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},W={height:this.t,width:this.t,opacity:Math.max(2*(1-(M-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:T?null:"opacity 0.25s",MozTransition:T?null:"opacity 0.25s",transition:T?null:"opacity 0.25s"},z={height:this.t,width:this.t,opacity:Math.max(2*((M-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:T?null:"opacity 0.25s",MozTransition:T?null:"opacity 0.25s",transition:T?null:"opacity 0.25s"};return t.createElement("div",{className:h,style:$},t.createElement("div",{className:"react-switch-bg",style:C,onClick:o?null:this.$,onMouseDown:function(t){return t.preventDefault()}},u&&t.createElement("div",{style:D},u),d&&t.createElement("div",{style:O},d)),t.createElement("div",{className:"react-switch-handle",style:S,onClick:function(t){return t.preventDefault()},onMouseDown:o?null:this.p,onTouchStart:o?null:this.m,onTouchMove:o?null:this.M,onTouchEnd:o?null:this.T,onTouchCancel:o?null:this.S},p&&t.createElement("div",{style:W},p),f&&t.createElement("div",{style:z},f)),t.createElement("input",s({},{type:"checkbox",role:"switch","aria-checked":n,checked:n,disabled:o,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},k,{ref:this.W,onFocus:this.O,onBlur:this.S,onKeyUp:this.D,onChange:this.C})))},n}(i);a.defaultProps={disabled:false,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:n$1,checkedIcon:o,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56};

const {useHass:w,isUnavailableState:E,computeStateDisplay:y,ON:n,OFF:I,computeDomain:D} = await importShared('@hakit/core');

const {useRef:T,useCallback:x,useState:O,useEffect:j} = await importShared('react');
const R = /* @__PURE__ */ Q("div", {
  target: "e1hc5dsg1"
} )({
  name: "1e2z4ty",
  styles: "display:flex;flex-direction:column;justify-content:center;white-space:nowrap"
} ), V = /* @__PURE__ */ Q(a, {
  target: "e1hc5dsg0"
} )({
  name: "88invf",
  styles: "color:var(--ha-100);.react-switch-bg{background:var(--ha-S100)!important;}&.checked{.react-switch-bg{background:var(--ha-A400)!important;}}"
} );
function $({
  entity: e,
  className: v,
  ...S
}) {
  const {
    useStore: i
  } = w(), o = T(null), u = i((t) => t.config), f = i((t) => t.entities), p = i((t) => t.connection), d = E(e.state), _ = x(() => y(e, p, u, f, e.state), [u, p, f, e]), b = e.state === n || e.state === I || d, [c, s] = O(e.state === n), N = async (t) => {
    const a = D(e.entity_id);
    let r;
    a === "lock" ? r = t ? "unlock" : "lock" : a === "cover" ? r = t ? "open_cover" : "close_cover" : a === "valve" ? r = t ? "open_valve" : "close_valve" : r = t ? "turn_on" : "turn_off";
    const h = c;
    s(t), o.current && clearTimeout(o.current), o.current = setTimeout(() => {
      s(h);
    }, 2e3);
    try {
      await e.service[r](), o.current && clearTimeout(o.current), o.current = null;
    } catch (k) {
      console.error("Error calling service", k), o.current && clearTimeout(o.current), o.current = null, s(h);
    }
  };
  return j(() => {
    o.current || c === (e.state === n) || s(e.state === n);
  }, [e.state, c]), /* @__PURE__ */ re(R, { className: `action-type-toggle ${v}`, ...S, children: b ? /* @__PURE__ */ re(
    V,
    {
      disabled: d,
      checked: c,
      className: `${c ? "checked" : ""}`,
      onColor: "#fff",
      offColor: "#fff",
      checkedIcon: false,
      uncheckedIcon: false,
      height: 20,
      width: 37,
      onChange: () => N(!c)
    }
  ) : /* @__PURE__ */ re("div", { className: "text-content", children: _() }) });
}

export { $ as default };
