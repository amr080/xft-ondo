!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7772c48b-8704-4bf5-a7c1-9806ae699427",e._sentryDebugIdIdentifier="sentry-dbid-7772c48b-8704-4bf5-a7c1-9806ae699427")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5605],{35883:function(){},46601:function(){},52361:function(){},94616:function(){},55024:function(){},37145:function(e,n,t){"use strict";var s=t(97040);let l={polygon:{icon:"/images/tokens/polygon.png",title:"Polygon",subtitle:"polygon"},matic:{icon:"/images/tokens/polygon.png",title:"Matic",subtitle:"matic"},ondo:{icon:"/images/tokens/ondo.png",title:"ONDO",subtitle:"Ondo"},usdc:{icon:"/images/tokens/usdc.png",title:"USDC",subtitle:"USD Coin"},eth:{icon:"/images/tokens/eth.png",title:"ETH",subtitle:"Ethereum"},dai:{icon:"/images/tokens/dai.png",title:"DAI",subtitle:"Dai Stablecoin"},usdt:{icon:"/images/tokens/usdt.png",title:"USDT",subtitle:"Tether Stablecoin"},ousg:{icon:"/images/tokens/ousg.svg",title:"OUSG",subtitle:"OUSG"},rousg:{icon:"/images/tokens/rousg.svg",title:"rOUSG",subtitle:"rOUSG"},"t-ousg":{icon:"/images/tokens/ousg.svg",title:"t-OUSG",subtitle:"t-OUSG"},"t-rousg":{icon:"/images/tokens/rousg.svg",title:"t-rOUSG",subtitle:"t-rOUSG"},ommf:{icon:"/images/tokens/ommf.svg",title:"OMMF",subtitle:"OMMF"},ostb:{icon:"/images/tokens/ostb.svg",title:"OSTB",subtitle:"OSTB"},ohyg:{icon:"/images/tokens/ohyg.svg",title:"OHYG",subtitle:"OHYG"},usdy:{icon:"/images/tokens/usdy.svg",title:"USDY",subtitle:"USDY"},"t-usdy":{icon:"/images/tokens/usdy.svg",title:"t-USDY",subtitle:"t-USDY"},rusdy:{icon:"/images/tokens/rusdy.svg",title:"rUSDY",subtitle:"rUSDY"},"t-rusdy":{icon:"/images/tokens/rusdy.svg",title:"rUSDY",subtitle:"rUSDY"},musd:{icon:"/images/tokens/musd.svg",title:"mUSD",subtitle:"mUSD"},"t-musd":{icon:"/images/tokens/musd.svg",title:"t-mUSD",subtitle:"t-mUSD"},mnt:{icon:"/images/tokens/mnt.svg",title:"MNT",subtitle:"MNT"}};n.Z=(e,n)=>{var t,i;return null!==(i=null!==(t=null==l?void 0:l[null==e?void 0:e.toLowerCase()])&&void 0!==t?t:null==l?void 0:l[s.Ru[null==n?void 0:n.toString()]])&&void 0!==i?i:{icon:"/images/tokens/ondo.png",title:null==e?void 0:e.toUpperCase(),subtitle:null==e?void 0:e.toUpperCase()}}},54855:function(e,n,t){"use strict";var s=t(57437),l=t(22960),i=t(88929),u=t(80511),r=t(14595),a=t(7999),o=t(79313),d=t(87138);let c=e=>{let{icon:n,title:t,color:s,linkUrl:l,isExternalLink:i,onClick:u}=e,r=p({icon:n,title:t,color:s,onClick:u});return l&&(r=y({linkUrl:l,isExternalLink:i,children:r})),r},p=e=>{let{icon:n,title:t,color:l,onClick:r}=e;return(0,s.jsx)(a.Z,{sx:{"&:hover":{"&.MuiBox-root":{backgroundColor:"action.hover",borderRadius:"8px"}},cursor:"pointer"},onClick:r||(()=>{}),children:(0,s.jsxs)(i.Z,{direction:"row",justifyContent:"flex-start",sx:{padding:"8px 12px",alignItems:"center"},children:[n,(0,s.jsx)(u.Z,{sx:{ml:"6px",color:l||void 0},children:t})]})})},y=e=>{let{linkUrl:n,isExternalLink:t,children:l}=e;return t?(0,s.jsx)("a",{href:n,target:"_blank",style:{color:"inherit",textDecoration:"none"},children:l}):(0,s.jsx)(d.default,{legacyBehavior:!0,href:n,style:{color:"inherit",textDecoration:"none"},children:l})};n.Z=e=>{let{Avatar:n,primaryText:t,subtext1:a,subtext2:d,menuItems:p,handleClose:y}=e,m=(0,l.Z)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",px:1,spacing:.2,children:(0,s.jsxs)(i.Z,{direction:"row",alignItems:"center",p:1.2,spacing:1,sx:{flex:"1 1 0%",position:"relative",overflow:"hidden"},children:[n,(0,s.jsxs)(i.Z,{sx:{flex:1,overflow:"hidden"},children:[(0,s.jsx)(u.Z,{variant:"body1",sx:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:t}),(0,s.jsx)(u.Z,{variant:"body2",color:"dark"===m.palette.mode?o.O.base.greyMid:o.O.base.greyMid2,sx:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:a}),!!d&&(0,s.jsx)(u.Z,{variant:"body2",color:"dark"===m.palette.mode?o.O.base.greyMid:o.O.base.greyMid2,children:d})]})]})}),(0,s.jsx)(r.Z,{sx:{mx:1.2}}),(0,s.jsx)(i.Z,{py:"10px",p:1,spacing:.2,children:p.map(e=>(0,s.jsx)(c,{title:e.title,color:e.color,icon:e.icon,linkUrl:e.linkUrl,isExternalLink:e.isExternalLink,onClick:()=>{e.onClick&&e.onClick(),y&&y()}},e.title))})]})}},92735:function(e,n,t){"use strict";t.d(n,{p:function(){return l}});var s=t(57437);let l=e=>{let{color:n="black"}=e;return(0,s.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.20005 4.09999C3.20005 3.60293 3.60299 3.19999 4.10005 3.19999H10.9C11.3971 3.19999 11.8 3.60293 11.8 4.09999V4.7794C11.8 5.166 12.1134 5.4794 12.5 5.4794C12.8866 5.4794 13.2 5.166 13.2 4.7794V4.09999C13.2 2.82973 12.1703 1.79999 10.9 1.79999H4.10005C2.82979 1.79999 1.80005 2.82973 1.80005 4.09999V10.9C1.80005 12.1702 2.82979 13.2 4.10005 13.2H4.77946C5.16606 13.2 5.47946 12.8866 5.47946 12.5C5.47946 12.1134 5.16606 11.8 4.77946 11.8H4.10005C3.60299 11.8 3.20005 11.397 3.20005 10.9V4.09999ZM9.10005 6.79999C7.82979 6.79999 6.80005 7.82973 6.80005 9.09999V15.9C6.80005 17.1702 7.82979 18.2 9.10005 18.2H15.9C17.1703 18.2 18.2001 17.1702 18.2001 15.9V9.09999C18.2001 7.82973 17.1703 6.79999 15.9 6.79999H9.10005ZM8.20005 9.09999C8.20005 8.60293 8.60299 8.19999 9.10005 8.19999H15.9C16.3971 8.19999 16.8 8.60293 16.8 9.09999V15.9C16.8 16.397 16.3971 16.8 15.9 16.8H9.10005C8.60299 16.8 8.20005 16.397 8.20005 15.9V9.09999Z",fill:n})})}},37331:function(e,n,t){"use strict";var s=t(57437);n.Z=e=>{let{color:n="black"}=e;return(0,s.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5 1.79999C12.1134 1.79999 11.8 2.11339 11.8 2.49999C11.8 2.88659 12.1134 3.19999 12.5 3.19999H15.8101L7.63007 11.38C7.35671 11.6534 7.35671 12.0966 7.63007 12.37C7.90344 12.6433 8.34666 12.6433 8.62002 12.37L16.8 4.18994V7.49999C16.8 7.88659 17.1134 8.19999 17.5 8.19999C17.8866 8.19999 18.2 7.88659 18.2 7.49999V2.49999V1.79999H17.5H12.5ZM3.20005 6.99999C3.20005 6.28202 3.78208 5.69999 4.50005 5.69999H9.37505C9.76165 5.69999 10.075 5.38659 10.075 4.99999C10.075 4.61339 9.76165 4.29999 9.37505 4.29999H4.50005C3.00888 4.29999 1.80005 5.50882 1.80005 6.99999V15.5C1.80005 16.9912 3.00888 18.2 4.50005 18.2H13C14.4912 18.2 15.7 16.9912 15.7 15.5V10.625C15.7 10.2384 15.3866 9.92499 15 9.92499C14.6134 9.92499 14.3 10.2384 14.3 10.625V15.5C14.3 16.218 13.718 16.8 13 16.8H4.50005C3.78208 16.8 3.20005 16.218 3.20005 15.5V6.99999Z",fill:n})})}},55100:function(e,n,t){"use strict";var s=t(57437);n.Z=()=>(0,s.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.6998 2.49999C10.6998 2.11339 10.3864 1.79999 9.9998 1.79999C9.61321 1.79999 9.29981 2.11339 9.29981 2.49999V8.74999C9.29981 9.13659 9.61321 9.44999 9.9998 9.44999C10.3864 9.44999 10.6998 9.13659 10.6998 8.74999V2.49999ZM6.30792 5.51436C6.592 5.25214 6.60973 4.80928 6.34751 4.5252C6.08529 4.24112 5.64243 4.2234 5.35835 4.48562C3.93938 5.79538 3.0498 7.69564 3.0498 9.80436C3.0498 13.7303 6.14125 16.95 9.9998 16.95C13.8584 16.95 16.9498 13.7303 16.9498 9.80436C16.9498 7.69564 16.0602 5.79538 14.6413 4.48562C14.3572 4.2234 13.9143 4.24112 13.6521 4.5252C13.3899 4.80928 13.4076 5.25214 13.6917 5.51436C14.83 6.56507 15.5498 8.09512 15.5498 9.80436C15.5498 12.9981 13.0448 15.55 9.9998 15.55C6.9548 15.55 4.4498 12.9981 4.4498 9.80436C4.4498 8.09511 5.16961 6.56507 6.30792 5.51436Z",fill:"#DC402A"})})},78054:function(e,n,t){"use strict";t.d(n,{rF:function(){return G},Gf:function(){return I},ZP:function(){return B}});var s=t(57437),l=t(7999),i=t(90458),u=t(82338),r=t(28027),a=t(58438),o=t(35349),d=t(78133),c=t.n(d),p=t(2265),y=t(61521),m=t(74427),b=t(69347),g=t(97040),h=t(54855),f=t(79313),v=t(56668),x=t(30998),S=t(61014),C=t(92735),T=t(37331),A=t(55100),E=t(22960);let D=e=>{var n,t,l,i,u,r,a,o,d;let{logOut:c,setIsWalletMenuOpen:D}=e,w=(0,y.Os)(),R=(0,x.useSession)(),[O,U]=(0,p.useState)("Copy Address"),[k,M]=(0,p.useState)(!1),{data:N}=(0,v.Z)(null==R?void 0:null===(t=R.data)||void 0===t?void 0:null===(n=t.user)||void 0===n?void 0:n.ondoAccountId),{kycStatus:B}=(0,S.Z)(),G=(0,p.useMemo)(()=>{var e,n;return!!(0,g.i_)(null===(n=w.network)||void 0===n?void 0:null===(e=n.chain)||void 0===e?void 0:e.id)},[w.network,null===(i=w.network)||void 0===i?void 0:null===(l=i.chain)||void 0===l?void 0:l.id]),F=(0,E.Z)(),L=[{title:O,icon:(0,s.jsx)(C.p,{color:"dark"===F.palette.mode?f.O.base.offWhite:f.O.base.black}),onClick:()=>{navigator.clipboard.writeText(w.address),!1===k&&setTimeout(()=>{U("Copy Address"),M(!1)},600),U("Copied!"),M(!0)}},...G?[{title:"View on Explorer",icon:(0,s.jsx)(T.Z,{color:"dark"===F.palette.mode?f.O.base.offWhite:f.O.base.black}),linkUrl:(0,m.yU)(null===(a=w.network)||void 0===a?void 0:null===(r=a.chain)||void 0===r?void 0:null===(u=r.id)||void 0===u?void 0:u.toString(),"address",w.address),isExternalLink:!0}]:[],{title:"Disconnect",icon:(0,s.jsx)(A.Z,{}),color:f.O.red.main,onClick:()=>{c(),D(!1)}}];return(0,s.jsx)(h.Z,{Avatar:I,primaryText:(()=>{let e=null==N?void 0:N.wallets.find(e=>{var n;return e.address.toLowerCase()===(null===(n=w.address)||void 0===n?void 0:n.toLowerCase())});return e?e.name:!0===B?"Whitelisted Wallet":"Unknown Wallet"})(),subtext1:w.ens?w.ens:(0,b.X)(w.address),subtext2:(0,g.qz)(null===(d=w.network)||void 0===d?void 0:null===(o=d.chain)||void 0===o?void 0:o.id),menuItems:L})};var w=t(88929),R=t(37145),O=t(72372),U=t(28165),k=e=>{let{walletName:n,walletIcon:t,size:l}=e;return(0,s.jsxs)(s.Fragment,{children:["Ledger"===n&&(0,s.jsx)(U.default,{type:"ledger-icon"}),"Ledger"!==n&&(0,s.jsx)("img",{src:t,alt:"wallet icon",style:{width:"small"===l?"22px":"35px",height:"small"===l?"22px":"35px",zIndex:2}})]})};let M=()=>(0,s.jsxs)("svg",{width:"13",height:"13",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsxs)("g",{clipPath:"url(#clip0_1109_99)",children:[(0,s.jsx)("path",{d:"M8.06067 2.16227C8.92259 0.669379 11.0774 0.669379 11.9393 2.16227L19.6966 15.5983C20.5586 17.0912 19.4812 18.9573 17.7573 18.9573H2.24268C0.518837 18.9573 -0.558568 17.0912 0.303356 15.5983L8.06067 2.16227Z",fill:"#FFC651"}),(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.7838 6.64099H9.21628V12.4633H10.7838V6.64099ZM10 16.718C10.6184 16.718 11.1197 16.2167 11.1197 15.5984C11.1197 14.98 10.6184 14.4787 10 14.4787C9.38167 14.4787 8.88037 14.98 8.88037 15.5984C8.88037 16.2167 9.38167 16.718 10 16.718Z",fill:"black"})]}),(0,s.jsx)("defs",{children:(0,s.jsx)("clipPath",{id:"clip0_1109_99",children:(0,s.jsx)("rect",{width:"20",height:"20",fill:"white"})})})]});var N=t(80555),B=()=>{let e=(0,y.Os)(),{md:n}=(0,N.k)(),[t,o]=(0,p.useState)(!1),[d,c]=(0,p.useState)(null),m=()=>{c(null),setTimeout(e.disconnect,1)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{"data-testid":"connect-wallet-button",onClick:t=>{e.address&&!e.isLoading&&(n.up?c(t.currentTarget):o(!0))},sx:{maxWidth:"150px",p:0,cursor:"pointer"},children:I}),n.up&&(0,s.jsx)(i.Z,{open:!!d,anchorEl:d,placement:n.up?"bottom-end":"bottom",sx:{zIndex:4},disablePortal:!0,children:(0,s.jsx)(u.d,{onClickAway:()=>{c(null)},children:(0,s.jsx)(r.Z,{sx:{width:"320px",border:e=>"1px solid ".concat(e.palette.divider),borderRadius:"8px"},children:(0,s.jsx)(D,{logOut:m,setIsWalletMenuOpen:o})})})}),n.down&&(0,s.jsx)(a.ZP,{anchor:"bottom",open:t,onClose:()=>o(!1),PaperProps:{sx:{borderTopLeftRadius:"16px",borderTopRightRadius:"16px"}},children:(0,s.jsx)(D,{logOut:m,setIsWalletMenuOpen:o})})]})};let G=e=>{let{address:n,size:t,...l}=e;return(0,s.jsx)(o.Z,{style:{width:t||"1.5rem",height:t||"1.5rem"},src:n&&c()(n),...l})},I=(0,s.jsx)(e=>{var n,t,i;let{hideNetwork:u=!1,size:r="small"}=e,a=(0,y.Os)();if(!a.address)return null;let d=null===(t=a.network)||void 0===t?void 0:null===(n=t.chain)||void 0===n?void 0:n.id,c=null===(i=(0,O.xz)(d))||void 0===i?void 0:i.nativeCurrency.symbol,p=(0,R.Z)(c,d),m=(null==p?void 0:p.icon.includes("ondo"))?(0,s.jsx)(w.Z,{sx:{fontSize:"small"===r?"11px":"13px",position:"absolute",top:"small"===r?"1px":"3px",right:"small"===r?"1px":"3px",zIndex:1e4},children:(0,s.jsx)(M,{})}):(0,s.jsx)(o.Z,{src:p.icon,sx:{width:"small"===r?"11px":"13px",height:"small"===r?"11px":"13px",position:"absolute",top:"small"===r?"1px":"3px",right:"small"===r?"1px":"3px",zIndex:1e4}});return(0,s.jsxs)(l.Z,{sx:{backgroundColor:f.O.base.offWhite,position:"relative",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px"},width:"small"===r?"32px":"40px",height:"small"===r?"32px":"40px",children:[(0,s.jsx)(k,{walletName:a.name,walletIcon:a.icon,size:r}),!u&&m]})},{size:"large"})},69347:function(e,n,t){"use strict";t.d(n,{X:function(){return l},k:function(){return i}});var s=t(69419);let l=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;if(e)return e.length<2*n+2?e:e.slice(0,n)+".."+e.slice(e.length-n,e.length)},i=async e=>{let n;let{connector:t,address:l,network:i}=e;if(void 0===i||void 0===t||void 0===l)return!1;try{let e=await t.getPublicClient();n=await e.getBytecode({address:l})}catch(e){return s.ZP.error("Error pulling bytecode for address:"+l+"error:",e),!1}return!!(n&&"0x"!==n)}},90757:function(e,n,t){"use strict";t.d(n,{$T:function(){return v},C3:function(){return F},Dm:function(){return Y},Ds:function(){return L},E9:function(){return j},EO:function(){return m},H4:function(){return w},HJ:function(){return S},Hz:function(){return s},IK:function(){return I},KB:function(){return d},LW:function(){return E},MA:function(){return b},MD:function(){return M},Q:function(){return i},QF:function(){return l},Qz:function(){return a},RB:function(){return B},Sc:function(){return x},UB:function(){return c},V8:function(){return N},VS:function(){return Z},X6:function(){return g},X7:function(){return r},_A:function(){return A},_z:function(){return G},c4:function(){return U},e1:function(){return o},g4:function(){return k},gl:function(){return h},ii:function(){return f},jF:function(){return T},lv:function(){return C},mJ:function(){return D},n7:function(){return p},oC:function(){return y},tM:function(){return R},xW:function(){return O},yF:function(){return K},zH:function(){return u}});let s={TOKEN:{id:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",name:"USD Coin",symbol:"USDC",decimals:6}},l={TOKEN:{id:"0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",name:"USD Coin",symbol:"USDC",decimals:6}},i={TOKEN:{id:"0xdAC17F958D2ee523a2206206994597C13D831ec7",name:"Tether USD",symbol:"USDT",decimals:6}},u={TOKEN:{id:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",name:"Tether USD",symbol:"USDT",decimals:6}},r={TOKEN:{id:"0X201EBA5CC46D216CE6DC03F6A759E8E766E956AE",name:"Tether USD",symbol:"USDT",decimals:6}},a={TOKEN:{id:"ausdy",name:"Ondo U.S. Dollar Yield",symbol:"USDY",decimals:18},MANAGER:null},o="0x57Dd4E92712b0fBC8d3f3e3645EebCf2600aCef0";BigInt(16521307),BigInt(17124713);let d="0x7cE91291846502D50D635163135B2d40a602dc70",c="0x7cD852c0D7613aA869e632929560f310D4059AC1",p="0x730e077730BC25c1c92e2c078e3BaB2834775217",y="0xAbfB6C4a338f3780b35FdEEE11e6bB445F13BDc4",m="0x9b013b4e03b87295a68a19B1A55e3C7DC3c56FFa",b="0x9BfDF8c3B8Bfc9Ab06897603c647Aa9C4204D63a",g={TOKEN:{id:"0x1B19C19393e2d034D8Ff31ff34c81252FcBbee92",name:"Ondo Short-Term U.S. Government Bond Fund",symbol:"OUSG",decimals:18},ORACLE:"0x0502c5ae08E7CD64fe1AEDA7D6e229413eCC6abe",MANAGER:"0xF16c188c2D411627d39655A60409eC6707D3d5e8"},h={TOKEN:{id:"0x54043c656F0FAd0652D9Ae2603cDF347c5578d00",name:"Ondo Short-Term U.S. Government Bond Fund (Rebasing)",symbol:"rOUSG",decimals:18},MANAGER:"0x2826989983e3a66F0622132D019c2Ae173eb6A43"},f={TOKEN:{id:"0x7712c34205737192402172409a8F7ccef8aA2AEc",name:"BlackRock USD Institutional Digital Liquidity Fund",symbol:"BUIDL",decimals:6},MANAGER:null},v={TOKEN:{id:"0xbA11C5effA33c4D6F8f593CFA394241CfE925811",name:"Ondo Short-Term U.S. Government Bond Fund",symbol:"OUSG",decimals:18},MANAGER:"0x6B7443808ACFCD48f1DE212C2557462fA86Ee945"},x={TOKEN:{id:"i7u4r16TcsJTgq1kAG8opmVZyVnAKBwLKu6ZPMwzxNc",name:"Ondo Short-Term U.S. Government Bond Fund",symbol:"OUSG",decimals:6},MANAGER:null},S={TOKEN:{id:"0x372d5d02c6b4075bd58892f80300cA590e92d29E",name:"Test OUSG",symbol:"t-OUSG",decimals:18},MANAGER:"0xEb9a2304bE212C01597E1cA352e44B151b81736B"},C={TOKEN:{id:"0xe25D3fd9dcd38450D8A155441801801046b662a1",name:"Test OUSG",symbol:"t-OUSG",decimals:18},ORACLE:"0x37cd0ba94f6f1803226463c21f12aaac032e8352",MANAGER:"0xd3978611616aa6712aeD96E58AD243993f108C75"},T={TOKEN:{id:"0x6350c112fa29b2cef7Aa6a1d8875e1Ff0c35Fa01",name:"Test Rebasing OUSG",symbol:"t-rOUSG",decimals:18},MANAGER:"0x31aff8a31eF7cB137F4a8A7fF8A22d7b5535d46b"},A={TOKEN:{id:"0xF11a13eAc0CFa56B45C735ead2e6ac5A79E43C96",name:"Test BUIDL",symbol:"t-BUIDL",decimals:6},MANAGER:null},E={TOKEN:{id:"BX5mLmToY3jUPEtaAEo86j7oTUJDBzHCx57sCPci7NsU",name:"Test OUSG",symbol:"t-OUSG",decimals:6},MANAGER:null},D={TOKEN:{id:"ausdy",name:"Ondo U.S. Dollar Yield",symbol:"USDY",decimals:6},MANAGER:null},w={TOKEN:{id:"0x96F6eF951840721AdBF46Ac996b59E0235CB985C",name:"Ondo U.S. Dollar Yield",symbol:"USDY",decimals:18},MANAGER:"0x25A103A1D6AeC5967c1A4fe2039cdc514886b97e",SOURCE_BRIDGE:"0xD89655ECf4800251880f8f6BA9038970AD9813dB"},R={TOKEN:{id:"0xaf37c1167910ebC994e266949387d2c7C326b879",name:"Ondo U.S. Dollar Yield (Rebasing)",symbol:"rUSDY",decimals:18},MANAGER:null},O={TOKEN:{id:"0x5bE26527e817998A7206475496fDE1E68957c5A6",name:"Ondo U.S. Dollar Yield",symbol:"USDY",decimals:18},MANAGER:null,SOURCE_BRIDGE:"0x8Cbb8dB5CE28CF072776866F701368BBcf81F087"},U={TOKEN:{id:"A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6",name:"Ondo U.S. Dollar Yield",symbol:"USDY",decimals:6},MANAGER:null},k={TOKEN:{id:"0x960b531667636f39e85867775f52f6b1f220a058c4de786905bdf761e06a56bb::usdy::USDY",name:"Ondo US Dollar Yield",symbol:"USDY",decimals:6},MANAGER:null},M={TOKEN:{id:"0xab575258d37EaA5C8956EfABe71F4eE8F6397cF3",name:"Mantle USD",symbol:"mUSD",decimals:18},MANAGER:null},N={TOKEN:{id:"0xcfea864b32833f157f042618bd845145256b1bf4c0da34a7013b76e42daa53cc::usdy::USDY",name:"Ondo US Dollar Yield",symbol:"USDY",decimals:6},MANAGER:null},B={TOKEN:{id:"0x49Cc578ae695a66c45eeF728f2aaf22646363cc6",name:"Test USDY",symbol:"t-USDY",decimals:18},MANAGER:"0xaB5346A06Fa672792233D22E7c5E326d080BA6B6",SOURCE_BRIDGE:"0x7d267B339182ADac55a705E52B52859A1fA348E1"},G={TOKEN:{id:"0x2eBAcEBefF4A9A1D64df518C3cE9DFE76a27c1A7",name:"Test USDY",symbol:"t-USDY",decimals:18},MANAGER:"0xf8481A378345773D9ff6e31CBf011Be7b9413721",SOURCE_BRIDGE:"0xc279155f191609b90e443c390c7db4a5b9e62ca1"},I={TOKEN:{id:"0x54043c656F0FAd0652D9Ae2603cDF347c5578d00",name:"Test - Rebasing Ondo U.S. Dollar Yield",symbol:"t-rUSDY",decimals:18},MANAGER:null},F={TOKEN:{id:"0x2eBAcEBefF4A9A1D64df518C3cE9DFE76a27c1A7",name:"Test USDY",symbol:"t-USDY",decimals:18},MANAGER:null,SOURCE_BRIDGE:"0xa39a9f0f0598B149444a4E3bC17F0C946713E399"},L={TOKEN:{id:"0x62d4cd9de94fac3755b1513aaf67c31ec1b3d77f",name:"Test USDY",symbol:"t-USDY",decimals:18},MANAGER:null},Z={TOKEN:{id:"0xa45fa952a312a0a504fafb9bf3fc95faaccdfe613a740190c511663600d39010::usdys::USDYS",name:"Ondo US Dollar Yield",symbol:"USDY",decimals:6},MANAGER:null},Y={TOKEN:{id:"0x26f03cd414cdcae387961058ab5523a4e64559f4b0853c46c9b3c4e01fd8af9b::usdy_staging::USDY_STAGING",name:"Ondo US Dollar Yield",symbol:"USDY",decimals:6},MANAGER:null},j={TOKEN:{id:"0xb2e7f93afDee56C2945629e2E2B07cedAc827060",name:"Test Rebasing Ondo U.S. Dollar Yield",symbol:"t-mUSD",decimals:18},MANAGER:null},K={TOKEN:{id:"4GZcd5UFKorBnL4Ck47BjvvMgahzijZS4JsX9kFXZ3iC",name:"Test USDY",symbol:"t-USDY",decimals:6},MANAGER:null}},98204:function(e,n,t){"use strict";t.d(n,{Jb:function(){return l},k0:function(){return f},QW:function(){return v},Zj:function(){return y}});var s,l,i=t(16491),u=t(80755),r=t(66607),a=t(53611),o=t(90757);let d="https://subgraph.satsuma-prod.com/115782bff0b0/ondo/ousg-ethereum-prod/version/0.0.1/api",c="https://subgraph.satsuma-prod.com/115782bff0b0/ondo/rusdy-ethereum-prod/version/v0.0.2/api",p="https://subgraph-api.mantle.xyz/subgraphs/name/mantle-usdy-subgraph";(s=l||(l={}))[s.EVM=0]="EVM",s[s.SOLANA=1]="SOLANA",s[s.SUI=2]="SUI",s[s.APTOS=3]="APTOS",s[s.NOBLE=4]="NOBLE";let y={id:-1,name:"Solana",network:"solana",nativeCurrency:{name:"SOL",symbol:"SOL",decimals:9},blockExplorers:{default:{name:"",url:""}},rpcUrls:{default:{http:[""]},public:{http:[""]}},testnet:!1},m={id:-2,name:"Sui",network:"sui",nativeCurrency:{name:"Sui",symbol:"SUI",decimals:6},blockExplorers:{default:{name:"",url:""}},rpcUrls:{default:{http:[""]},public:{http:[""]}},testnet:!1},b={id:-3,name:"Aptos",network:"aptos",nativeCurrency:{name:"Aptos",symbol:"APT",decimals:8},blockExplorers:{default:{name:"",url:""}},rpcUrls:{default:{http:[""]},public:{http:[""]}},testnet:!1},g={id:-4,name:"Noble",network:"noble",nativeCurrency:{name:"Noble",symbol:"NOBLE",decimals:6},blockExplorers:{default:{name:"",url:""}},rpcUrls:{default:{http:[""]},public:{http:[""]}},testnet:!1},h={PROD:[{chain:i.R,chainType:0,usdc:o.Hz,usdt:o.Q,registry:o.KB,usdy:o.H4,rusdy:o.tM,rusdySubgraph:c,ousg:o.X6,rousg:o.gl,buidl:o.ii,ousgInvRateLimiter:o.EO,ousgSubgraph:d},{chain:g,chainType:4,usdc:null,usdt:null,registry:null,usdy:o.mJ,rusdy:null,rusdySubgraph:null,ousg:null,rousg:null,buidl:null,ousgInvRateLimiter:null,ousgSubgraph:null},{chain:u.y,chainType:0,usdc:o.QF,usdt:null,registry:o.UB,usdy:null,rusdy:null,rusdySubgraph:null,ousg:o.$T,rousg:null,buidl:null,ousgInvRateLimiter:null,ousgSubgraph:null},{chain:r.Z,chainType:0,usdc:null,usdt:o.X7,registry:null,usdy:o.xW,rusdy:o.MD,rusdySubgraph:p,ousg:null,rousg:null,buidl:null,ousgInvRateLimiter:null,ousgSubgraph:null},{chain:y,chainType:1,usdc:null,usdt:o.zH,registry:null,usdy:o.c4,rusdy:null,rusdySubgraph:null,ousg:o.Sc,rousg:null,buidl:null,ousgInvRateLimiter:null,ousgSubgraph:null},{chain:m,chainType:2,usdc:null,usdt:null,registry:null,usdy:o.g4,rusdy:null,rusdySubgraph:null,ousg:null,rousg:null,buidl:null,ousgInvRateLimiter:null,ousgSubgraph:null},{chain:b,chainType:3,usdc:null,usdt:null,registry:null,usdy:o.V8,rusdy:null,rusdySubgraph:null,ousg:null,rousg:null,buidl:null,ousgInvRateLimiter:null,ousgSubgraph:null},{chain:g,chainType:4,usdc:null,usdt:null,registry:null,usdy:o.Qz,rusdy:null,rusdySubgraph:null,ousg:null,rousg:null,buidl:null,ousgInvRateLimiter:null,ousgSubgraph:null}],STAGING:[{chain:i.R,chainType:0,usdc:o.Hz,usdt:o.Q,registry:o.KB,usdy:o.H4,rusdy:o.tM,rusdySubgraph:c,ousg:o.X6,rousg:o.gl,buidl:o.ii,ousgInvRateLimiter:o.EO,ousgSubgraph:d},{chain:g,chainType:4,usdc:null,usdt:null,registry:null,usdy:o.mJ,rusdy:null,rusdySubgraph:null,ousg:null,rousg:null,buidl:null,ousgInvRateLimiter:null,ousgSubgraph:null},{chain:u.y,chainType:0,usdc:o.QF,usdt:null,registry:o.UB,usdy:null,rusdy:null,rusdySubgraph:null,ousg:o.$T,rousg:null,buidl:null,ousgInvRateLimiter:null,ousgSubgraph:null},{chain:r.Z,chainType:0,usdc:null,usdt:o.X7,registry:null,usdy:o.xW,rusdy:o.MD,rusdySubgraph:p,ousg:null,rousg:null,buidl:null,ousgInvRateLimiter:null,ousgSubgraph:null},{chain:y,chainType:1,usdc:null,usdt:o.zH,registry:null,usdy:o.c4,rusdy:null,rusdySubgraph:null,ousg:o.Sc,rousg:null,buidl:null,ousgInvRateLimiter:null,ousgSubgraph:null},{chain:m,chainType:2,usdc:null,usdt:null,registry:null,usdy:o.g4,rusdy:null,rusdySubgraph:null,ousg:null,rousg:null,buidl:null,ousgInvRateLimiter:null,ousgSubgraph:null},{chain:b,chainType:3,usdc:null,usdt:null,registry:null,usdy:o.V8,rusdy:null,rusdySubgraph:null,ousg:null,rousg:null,buidl:null,ousgInvRateLimiter:null,ousgSubgraph:null},{chain:g,chainType:4,usdc:null,usdt:null,registry:null,usdy:o.Qz,rusdy:null,rusdySubgraph:null,ousg:null,rousg:null,buidl:null,ousgInvRateLimiter:null,ousgSubgraph:null}],DEV:[{chain:i.R,chainType:0,usdc:o.Hz,usdt:o.Q,registry:o.n7,usdy:o.RB,rusdy:null,rusdySubgraph:null,ousg:o.HJ,rousg:null,buidl:null,ousgInvRateLimiter:null,ousgSubgraph:"https://subgraph.satsuma-prod.com/115782bff0b0/ondo/ousg-ethereum-test/version/0.0.1/api"},{chain:g,chainType:4,usdc:null,usdt:null,registry:null,usdy:o.mJ,rusdy:null,rusdySubgraph:null,ousg:null,rousg:null,buidl:null,ousgInvRateLimiter:null,ousgSubgraph:null},{chain:u.y,chainType:0,usdc:o.QF,usdt:null,registry:o.oC,usdy:o._z,rusdy:o.IK,rusdySubgraph:"https://subgraph.satsuma-prod.com/115782bff0b0/ondo/rusdy-polygon-test/version/v0.0.3/api",ousg:o.lv,rousg:o.jF,buidl:o._A,ousgInvRateLimiter:o.MA,ousgSubgraph:null},{chain:r.Z,chainType:0,usdc:null,usdt:o.X7,registry:null,usdy:o.C3,rusdy:o.E9,rusdySubgraph:"https://subgraph-api.mantle.xyz/subgraphs/name/mantle-usdy-subgraph-test",ousg:null,rousg:null,buidl:null,ousgInvRateLimiter:null,ousgSubgraph:null},{chain:a.y,chainType:0,usdc:null,usdt:null,registry:null,usdy:o.Ds,rusdy:null,rusdySubgraph:null,ousg:null,rousg:null,buidl:null,ousgInvRateLimiter:null,ousgSubgraph:null},{chain:y,chainType:1,usdc:null,usdt:o.zH,registry:null,usdy:o.yF,rusdy:null,rusdySubgraph:null,ousg:o.LW,rousg:null,buidl:null,ousgInvRateLimiter:null,ousgSubgraph:null},{chain:m,chainType:2,usdc:null,usdt:null,registry:null,usdy:o.VS,rusdy:null,rusdySubgraph:null,ousg:null,rousg:null,buidl:null,ousgInvRateLimiter:null,ousgSubgraph:null},{chain:b,chainType:3,usdc:null,usdt:null,registry:null,usdy:o.Dm,rusdy:null,rusdySubgraph:null,ousg:null,rousg:null,buidl:null,ousgInvRateLimiter:null,ousgSubgraph:null},{chain:g,chainType:4,usdc:null,usdt:null,registry:null,usdy:o.Qz,rusdy:null,rusdySubgraph:null,ousg:null,rousg:null,buidl:null,ousgInvRateLimiter:null,ousgSubgraph:null}]},f="PROD",v=h[f]},56668:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var s=t(65691),l=t(38472);let i=async e=>{let{data:n}=await l.Z.get("/api/accounts/".concat(e));return n};function u(e){return(0,s.a)({queryKey:["accounts",e],queryFn:()=>i(e),enabled:null!=e,refetchOnWindowFocus:!1})}},61014:function(e,n,t){"use strict";t.d(n,{Z:function(){return d},u:function(){return o}});var s=[{inputs:[{internalType:"address",name:"admin",type:"address"},{internalType:"address",name:"_sanctionsList",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"sender",type:"address"},{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"address",name:"signer",type:"address"},{indexed:!1,internalType:"uint256",name:"kycRequirementGroup",type:"uint256"},{indexed:!1,internalType:"uint256",name:"deadline",type:"uint256"}],name:"KYCAddressAddViaSignature",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"sender",type:"address"},{indexed:!0,internalType:"uint256",name:"kycRequirementGroup",type:"uint256"},{indexed:!1,internalType:"address[]",name:"addresses",type:"address[]"}],name:"KYCAddressesAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"sender",type:"address"},{indexed:!0,internalType:"uint256",name:"kycRequirementGroup",type:"uint256"},{indexed:!1,internalType:"address[]",name:"addresses",type:"address[]"}],name:"KYCAddressesRemoved",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"kycRequirementGroup",type:"uint256"},{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"}],name:"RoleAssignedToKYCGroup",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"DOMAIN_SEPARATOR",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"REGISTRY_ADMIN",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"_APPROVAL_TYPEHASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"kycRequirementGroup",type:"uint256"},{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"addKYCAddressViaSignature",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"kycRequirementGroup",type:"uint256"},{internalType:"address[]",name:"addresses",type:"address[]"}],name:"addKYCAddresses",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"kycRequirementGroup",type:"uint256"},{internalType:"bytes32",name:"role",type:"bytes32"}],name:"assignRoletoKYCGroup",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"kycRequirementGroup",type:"uint256"},{internalType:"address",name:"account",type:"address"}],name:"getKYCStatus",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"uint256",name:"index",type:"uint256"}],name:"getRoleMember",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleMemberCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"kycGroupRoles",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"address",name:"",type:"address"}],name:"kycState",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"kycRequirementGroup",type:"uint256"},{internalType:"address[]",name:"addresses",type:"address[]"}],name:"removeKYCAddresses",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"sanctionsList",outputs:[{internalType:"contract ISanctionsList",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"}],l=t(47885),i=t(61521),u=t(98204),r=t(2265),a=t(69365);let o=()=>{let e=(0,i.Os)(),[n,t]=(0,r.useState)(!1),[l,o]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{(async()=>{o(!0);try{if(void 0===e.address){o(!1),t(!1);return}let n=(await Promise.all(u.QW.filter(e=>e.chainType==u.Jb.EVM&&!!e.registry).map(async n=>await (0,a.a4)({address:n.registry,abi:s,functionName:"getKYCStatus",args:[BigInt(1),e.address],chainId:n.chain.id})))).some(e=>e);t(n)}catch(e){throw console.error("Error fetching fetchKYCStatus",e),e}o(!1)})()},[e.address]),{isWhitelistedOnAnyNetwork:n,isLoading:l}};var d=()=>{var e,n,t;let u=(0,i.Os)(),{data:r,isLoading:a}=(0,l.useContractRead)({address:null===(e=u.network)||void 0===e?void 0:e.registry,abi:s,functionName:"getKYCStatus",args:[BigInt(1),u.address],watch:!0,chainId:null===(t=u.network)||void 0===t?void 0:null===(n=t.chain)||void 0===n?void 0:n.id,enabled:!!u.network});return{kycStatus:r,isLoading:a}}},61521:function(e,n,t){"use strict";t.d(n,{Os:function(){return h},nS:function(){return g},oH:function(){return m}});var s=t(57437),l=t(2265),i=t(98204),u=t(72372),r=t(69419),a=t(35439),o=t(47885),d=t(67780),c=t(517),p=t(69347),y=t(84963);let m={environmentId:"c1dc2beb-78e3-4fd3-8b32-2f5d3c6fcd8c",walletConnectors:[d.Eh,c.YN],initialAuthenticationMode:"connect-only",evmNetworks:[{name:"Mantle",networkId:1,chainId:5e3,nativeCurrency:{name:"MNT",symbol:"MNT",decimals:18},rpcUrls:[y.d7,"https://rpc.mantle.xyz"],blockExplorerUrls:["https://explorer.mantle.xyz"],iconUrls:["https://ondo.finance/images/logos/Mantle.svg"]}]},b=(0,l.createContext)({connect:async()=>{},disconnect:async()=>{},switchNetwork:async()=>{},isLoading:!1}),g=e=>{var n;let{children:t}=e,{primaryWallet:d,setShowAuthFlow:c,handleLogOut:y}=(0,a.SXd)(),{data:m}=(0,o.F6)({address:null==d?void 0:d.address,enabled:(null==d?void 0:d.chain)==="EVM"}),g=null==d?void 0:d.network,{switchNetworkAsync:h}=(0,o.g0)(),[f,v]=(0,l.useState)(!1),x=async()=>{r.ZP.debug("Connect Wallet"),c(!0)},S=(0,l.useCallback)(async()=>{r.ZP.debug("Disconnect Wallet"),await y()},[]),C=async e=>{r.ZP.debug("Switching Network to",e),v(!0);try{await h(e)}catch(e){e instanceof Error&&e.message.includes("User rejected")?r.ZP.warn("Error switching network",e):r.ZP.error("Error switching network",e),v(!1)}},T=(0,l.useMemo)(()=>{var e;if(!d)return;let n=null===(e=d.connector.walletBook.wallets[d.connector.key].brand)||void 0===e?void 0:e.spriteId;return"https://iconic.dynamic-static-assets.com/icons/sprite.svg#".concat(n)},[d]),A=g?i.QW.find(e=>(0,u.y$)(g,e.chain.id)):void 0,E={address:d&&"undefined"!==d.address?d.address:void 0,ens:null!=m?m:void 0,network:A,connector:null==d?void 0:d.connector,name:null==d?void 0:null===(n=d.connector)||void 0===n?void 0:n.name,icon:T,connect:x,disconnect:S,switchNetwork:C,isLoading:f},[D,w]=(0,l.useState)(void 0);return(0,l.useEffect)(()=>{E.address&&(0,p.k)(E).then(e=>{w(e)}).catch(e=>{r.ZP.error("Error checking if wallet is smartcontract",e)})},[E.address,E.network,E.connector]),(0,s.jsx)(b.Provider,{value:{...E,isContract:D},children:t})},h=()=>(0,l.useContext)(b)},97040:function(e,n,t){"use strict";t.d(n,{Ru:function(){return s},i_:function(){return a},qz:function(){return r},sJ:function(){return u}});let s={1:"eth",10:"op",25:"cro",56:"bnb",100:"gno",137:"polygon",199:"btt",250:"ftm",288:"boba",1284:"moonbeam",1285:"moonriver",42161:"arb",42220:"celo",43114:"avax",5e3:"mnt"},l={1:"Ethereum",10:"Optimism",25:"Cronos",56:"BNB Smart Chain",100:"Gnosis",137:"Polygon",199:"Bittorent",250:"Fantom",288:"Boba",1284:"Moonbeam",1285:"Moonriver",42161:"Arbitrum",42220:"Celo",43114:"Avalanche",5e3:"Mantle"},i={"-1":"https://solscan.io","-2":"https://suiscan.xyz","-3":"https://aptoscan.com","-4":"https://www.mintscan.io",1:"https://etherscan.io",10:"https://optimistic.etherscan.io",25:"https://cronoscan.com",56:"https://bscscan.com",100:"https://gnosisscan.io",137:"https://polygonscan.com",199:"https://bttcscan.com",250:"https://ftmscan.com",288:"https://bobascan.com",1284:"https://moonscan.io",1285:"https://moonriver.moonscan.io",42161:"https://arbiscan.io",42220:"https://celoscan.io",43114:"https://snowtrace.io",5e3:"https://explorer.mantle.xyz"},u=(e,n)=>{var t;let s="token";-2===e&&(s="mainnet/coin"),-3===e&&(s="coin"),-4===e&&(s="noble/assets/native");let l=n;return -4===e&&(l=btoa(n)),(null!==(t=a(e))&&void 0!==t?t:"https://etherscan.io")+"/"+s+"/"+l},r=e=>{var n;return null!==(n=l[null==e?void 0:e.toString()])&&void 0!==n?n:"Unrecognized Chain"},a=e=>i[null==e?void 0:e.toString()]},72372:function(e,n,t){"use strict";t.d(n,{Im:function(){return o},Rr:function(){return l},_5:function(){return i},aV:function(){return r},xz:function(){return u},y$:function(){return a}});var s=t(98204);let l=e=>{var n,t;return null===(t=s.QW.find(n=>n[e]))||void 0===t?void 0:null===(n=t[e])||void 0===n?void 0:n.TOKEN.symbol},i=e=>("string"==typeof e&&(e=parseInt(e)),s.QW.find(n=>n.chain.id===e)),u=e=>{var n;return"string"==typeof e&&(e=parseInt(e)),null===(n=i(e))||void 0===n?void 0:n.chain},r=e=>{let n;switch("string"==typeof e&&(e=parseInt(e)),e){case -1:n="solana-icon";break;case -2:n="sui-icon";break;case -3:n="aptos-icon";break;case -4:n="noble-icon";break;case 1:default:n="ethereum-icon";break;case 137:n="polygon-icon";break;case 5e3:n="mantle-icon";break;case 42161:n="arbitrum-icon"}return n},a=(e,n)=>("number"==typeof e&&(e=e.toString(16)),"number"==typeof n&&(n=n.toString(16)),e.startsWith("0x")&&(e=e.slice(2)),n.startsWith("0x")&&(n=n.slice(2)),(e=e.toLowerCase())===(n=n.toLowerCase())),o=s.QW.filter(e=>null!==e.usdy&&null!==e.usdc)},74427:function(e,n,t){"use strict";t.d(n,{F2:function(){return y},Js:function(){return c},ZG:function(){return d},e$:function(){return m},jo:function(){return p},yU:function(){return o}});var s=t(37145),l=t(89005),i=t(69419),u=t(97040),r=t(69365);t(42053);var a=t(55359);let o=(e,n,t)=>"".concat((0,u.i_)(parseInt(e)),"/").concat(n,"/").concat(t),d=async(e,n,t)=>{let{hash:s}=await (0,r.n9)({address:e,abi:r.em,functionName:"approve",args:[n,t]});return s},c=async e=>{let n=e.symbol;"t"===n.charAt(0)&&(n=n.slice(1)),await window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e.id,symbol:e.symbol,decimals:e.decimals,image:"https://ondo.finance/"+(0,s.Z)(n).icon}}})},p=(e,n)=>{let t,s;if(!e||!n)return!1;try{t=l.getAddress(n),s=l.getAddress(e)}catch(e){return i.ZP.error(e,"Address passed to rpc call is invalid"),!1}return s===t||(i.ZP.error("[CRITICAL] ADDRESS FOR RPC CALL DOES NOT MATCH ONDO OWNED ADDRESS"),!1)},y=async e=>{let{chainId:n,hash:t,isContract:s}=e;try{return await (0,a.G)({chainId:n,hash:t}),!0}catch(e){return i.ZP.error("Error waiting for transaction",e),!1}},m=e=>{let n=e.shortMessage;return(null==e?void 0:e.details)&&("An unknown RPC error occurred."===n||"Missing or invalid parameters.\nDouble check you have provided the correct parameters."===n)&&(n=null==e?void 0:e.details),n}},55359:function(e,n,t){"use strict";t.d(n,{G:function(){return i}});var s=t(69365),l=t(69419);let i=async function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e3,i=[];for(let l=0;l<n;l++)try{return await (0,s.Mn)(e)}catch(e){i.push(e),console.error("Error waiting for transaction: ".concat(e)),await new Promise(e=>setTimeout(e,t))}throw l.ZP.error("Failed to wait for transaction after ".concat(n," retries"),i),Error("Failed to wait for transaction after ".concat(n," retries"))}}}]);