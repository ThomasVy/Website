(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{117:function(e,t,n){},144:function(e,t){},145:function(e,t){},146:function(e,t){},147:function(e,t){},148:function(e,t){},158:function(e,t,n){var a={"./BilliardGame.mp4":159,"./EarthSim.mp4":160,"./MoshirLearning.mp4":161,"./P2PMessagingApp.mp4":162,"./RayTrace.mp4":163,"./ShapeRender.mp4":164,"./Spaceship.mp4":165,"./TicTacToe.mp4":166};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=158},159:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/BilliardGame.0923d55b.mp4"},160:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/EarthSim.d2cf651a.mp4"},161:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/MoshirLearning.d6cf94d4.mp4"},162:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/P2PMessagingApp.9511de03.mp4"},163:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/RayTrace.e15da29a.mp4"},164:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/ShapeRender.8c79f1ea.mp4"},165:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Spaceship.15d19c1e.mp4"},166:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/TicTacToe.ca446ba9.mp4"},167:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(13),o=n.n(r),s=(n(117),n(38)),c=n(12),l=n(192),h=n(201),d=n(30),m=n(49),j=n(195),u=n(92),p=n.n(u),b=n(194),f=n(94),g=n.n(f),x=n(93),O=n.n(x),y=n(196),w=n.p+"static/media/Resume.433bd9b7.pdf",v=n(1),S=i.a.createContext();function k(){return Object(a.useContext)(S)}var C=Object(l.a)((function(e){return{title:{backgroundColor:"inherit",color:"white"},mainCard:{maxWidth:"900px",padding:15,margin:10,width:"80vw"}}}));function T(e){var t=e.children,n=C();return Object(v.jsx)(S.Provider,{value:n,children:t})}var L=n(62);function I(){var e=k(),t=Object(a.useState)(null),n=Object(d.a)(t,2),i=n[0],r=n[1],o=Object(a.useState)(1),s=Object(d.a)(o,2),c=s[0],l=s[1],h=Object(a.useState)(300),u=Object(d.a)(h,2),f=u[0],x=u[1];return Object(a.useEffect)((function(){m.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(m.c.version,"/pdf.worker.js")}),[]),Object(a.useEffect)((function(){window.innerWidth>950?x(800):x(window.innerWidth)}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(L.a,{variant:"h4",className:e.title,children:"Resume"}),Object(v.jsx)(b.a,{variant:"contained",color:"primary",size:"large",startIcon:Object(v.jsx)(p.a,{}),onClick:function(){var e=document.createElement("a");e.href=w,e.target="_blank",e.click()},style:{marginTop:20},children:"Open in Separate Window"}),Object(v.jsxs)(j.a,{children:[Object(v.jsx)(m.a,{file:w,onLoadSuccess:function(e){var t=e.numPages;r(t)},children:Object(v.jsx)(m.b,{pageNumber:c,width:f})}),Object(v.jsxs)("div",{children:[Object(v.jsx)(y.a,{"aria-label":"prev",disabled:1===c,color:"primary",onClick:function(){1!==c&&l((function(e){return e-1}))},children:Object(v.jsx)(O.a,{})}),"Page ",c," of ",i,Object(v.jsx)(y.a,{"aria-label":"next",disabled:c===i,color:"primary",onClick:function(){c!==i&&l((function(e){return e+1}))},children:Object(v.jsx)(g.a,{})})]})]})]})}var P=n(200),E=n(197),G=n(74),M=n.n(G),N=n(209),W=n(208),z=n.p+"static/media/thomas_transparent.0c5f446c.png",B=Object(l.a)((function(){return{header:{backgroundColor:"#1C1C1C"},drawerContainer:{padding:"3px 20px"},drawer:{backgroundColor:"#1C1C1C"},menuButton:{fontFamily:"Open Sans, sans-serif",fontWeight:700,size:"18px",marginLeft:"38px",color:"white","&:hover":{backgroundColor:"#252525"}},logo:{display:"flex",alignItems:"center"},logoText:{fontFamily:"Open Sans, sans-serif",fontWeight:800},toolbar:{display:"flex"}}}));function D(){var e=B(),t=Object(a.useState)(!1),n=Object(d.a)(t,2),i=n[0],r=n[1],o=Object(a.useState)(!1),c=Object(d.a)(o,2),l=c[0],h=c[1],m=[{label:"Projects",href:"/projects"},{label:"About Me",href:"/about"},{label:"Resume",href:"/resume"},{label:"Contact Info",href:"/contact"}],j=function(){return Object(v.jsxs)(s.b,{to:"/",style:{textDecoration:"none",color:"white"},className:e.logo,children:[Object(v.jsx)("div",{children:Object(v.jsx)("img",{alt:"logo",src:z,height:60})}),Object(v.jsx)("div",{className:e.logoText,children:"Thomas Vy"})]})};return Object(a.useEffect)((function(){var e=function(){return window.innerWidth<950?r(!0):r(!1)};return e(),window.addEventListener("resize",(function(){return e()})),function(){window.removeEventListener("resize",(function(){return e()}))}}),[]),Object(v.jsx)("header",{children:Object(v.jsx)(P.a,{className:e.header,children:i?function(){var t=function(){return h(!1)};return Object(v.jsxs)(E.a,{children:[Object(v.jsx)(y.a,{edge:"start",color:"inherit","aria-label":"menu","aria-haspopup":"true",onClick:function(){return h(!0)},children:Object(v.jsx)(M.a,{})}),Object(v.jsx)(W.a,{anchor:"left",open:l,onClose:t,classes:{paper:e.drawer},children:Object(v.jsxs)("div",{className:e.drawerContainer,children:[Object(v.jsx)(y.a,{edge:"start",style:{color:"white"},onClick:t,children:Object(v.jsx)(M.a,{})}),m.map((function(n){var a=n.label,i=n.href;return Object(v.jsx)(s.b,{to:i,onClick:t,style:{textDecoration:"none"},children:Object(v.jsx)(N.a,{style:{marginLeft:"0"},className:e.menuButton,children:a})},a)}))]})}),j()]})}():Object(v.jsxs)(E.a,{className:e.toolbar,children:[j(),m.map((function(t){var n=t.label,a=t.href;return Object(v.jsx)(b.a,{color:"inherit",to:a,component:s.b,className:e.menuButton,children:n},n)}))]})})})}var R=n(207),V=n(202),A=n.p+"static/media/resizedJapan.98e1566a.jpg",U=n.p+"static/media/resize.2a19af06.jpg";function H(){var e=k();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(L.a,{variant:"h4",className:e.title,children:"About Me"}),Object(v.jsxs)(h.a,{justify:"center",style:{padding:"20px"},container:!0,children:[Object(v.jsx)(h.a,{item:!0,children:Object(v.jsx)(V.a,{component:"img",alt:"Thomas Vy 1(Me)",image:A,title:"Thomas Vy 1(Me)"})}),Object(v.jsx)(h.a,{item:!0,children:Object(v.jsx)(V.a,{component:"img",alt:"Thomas Vy 2(Me)",image:U,title:"Thomas Vy 2(Me)"})})]}),Object(v.jsxs)(j.a,{className:e.mainCard,children:[Object(v.jsxs)(R.a,{children:[Object(v.jsx)(R.a,{fontWeight:"fontWeightBold",fontSize:"h6.fontSize",component:"h1",children:"Who Am I?"}),Object(v.jsxs)(R.a,{children:["I am a Chinese male born and raised in Calgary, AB, Canada. I love programming and learning about the unknown. I graduated from the ",Object(v.jsx)("a",{href:"https://www.ucalgary.ca/",children:"University of Calgary"})," in May 2021. Before university, I graduated from John G. Diefenbaker high school and Sir John A. MacDonald junior high."]})]}),Object(v.jsxs)(R.a,{children:[Object(v.jsx)(R.a,{fontWeight:"fontWeightBold",fontSize:"h6.fontSize",component:"h1",children:"Why did I choose the path of Software Engineering?"}),Object(v.jsx)(R.a,{children:"Coming out of highschool, my sister recommended me to pursue a degree in Geology instead of very popular Engineering at the University of Calgary. I decided to follow my sister's advice and apply to the University of Calgary for Geology. After I completed my first year of university in Geology, I quickly found out I didn't have a passion for Geology. I swiftly decided to transfer into Electrical Engineering, my backup plan in highschool."}),Object(v.jsxs)(R.a,{component:"p",children:["In the first year of Engineering, regardless of which specialization (Mech, Software, Electrical, etc.), everyone has to complete the same first year courses, and at the end of first year, everyone re-selects their specialization. I was thought that my first choice would be Electrical Engineering. However, I had this programming class, ",Object(v.jsx)("a",{href:"http://contacts.ucalgary.ca/info/enel/courses/f18/ENGG233",children:"ENGG 233"}),", where we learned ",Object(v.jsx)("a",{href:"https://processing.org/",children:"Processing"}),". That class taught me the fundamentals of programming and taught me how fun programming was. I had no prior experience with programming before that class, but after taking that course I immediately fell in love with programming. I created a ",Object(v.jsx)("a",{href:"https://github.com/ThomasVy/Billiard-Game",children:"billiard game"})," as the final project, and I loved programming every bit of it. When I handed in the final project and finished the course, I was extremely sad that the programming class was over. That was when I decided select Software Engineering as my first choice. I do not regret a thing."]})]}),Object(v.jsxs)(R.a,{children:[Object(v.jsx)(R.a,{fontWeight:"fontWeightBold",fontSize:"h6.fontSize",component:"h1",children:"Education"}),Object(v.jsx)(R.a,{children:"Bachelor of Science in Software Engineering (September 2016 - May 2021)"}),Object(v.jsx)(L.a,{variant:"body2",color:"textSecondary",children:"University of Calgary"}),Object(v.jsx)(R.a,{children:"\u2003\u2003Graduated with Internship"}),Object(v.jsx)(R.a,{children:"\u2003\u2003Graduated with Distinctions (3.89 GPA)"})]}),Object(v.jsxs)(R.a,{children:[Object(v.jsx)(R.a,{fontWeight:"fontWeightBold",fontSize:"h6.fontSize",component:"h1",children:"Software Experience"}),"I was previously:",Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:"an employee of GEOSLOPE International Ltd."}),Object(v.jsx)("li",{children:"a research assistant for Robotics and Sensor Network Group at the UofC"}),Object(v.jsx)("li",{children:"a member of the University of Calgary's Solar Car Software Team"}),Object(v.jsx)("li",{children:"a member of the Schulich Unmanned Aerial Vehicle's Software Team"})]})]}),Object(v.jsxs)(R.a,{children:[Object(v.jsx)(R.a,{fontWeight:"fontWeightBold",fontSize:"h6.fontSize",component:"h1",children:"Proficient Languages"}),Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:"C/C++"}),Object(v.jsx)("li",{children:"Java"}),Object(v.jsx)("li",{children:"Python 3"}),Object(v.jsx)("li",{children:"React"}),Object(v.jsx)("li",{children:"JavaScript/HTML/CSS"}),Object(v.jsx)("li",{children:"SQL"})]})]}),Object(v.jsxs)(R.a,{children:[Object(v.jsx)(R.a,{fontWeight:"fontWeightBold",fontSize:"h6.fontSize",component:"h1",children:"Hobbies"}),Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:"Programming"}),Object(v.jsx)("li",{children:"Gaming"}),Object(v.jsx)("li",{children:"Sports"}),Object(v.jsx)("li",{children:"Weight lifting"}),Object(v.jsx)("li",{children:"Hiking"})]})]}),Object(v.jsxs)(R.a,{component:"p",children:["For more information about me, check out the ",Object(v.jsx)(s.c,{to:"/resume",children:"Resume"})," page."]})]})]})}var F=n.p+"static/media/thomas-animation.c3b1cd9f.gif",J=n(198),_=n(199),Q=Object(l.a)((function(e){return{content:{display:"flex",flexDirection:"column",alignItems:"center"},titleRow:{display:"flex",alignItems:"center",justifyContent:"center",width:"90vw",margin:"20px"}}}));function q(){var e=k(),t=Q();return Object(v.jsxs)("div",{className:t.content,children:[Object(v.jsx)(_.a,{in:!0,timeout:1500,children:Object(v.jsx)(L.a,{variant:"h4",className:e.title,children:"Home"})}),Object(v.jsx)(J.a,{direction:"left",in:!0,timeout:1500,mountOnEnter:!0,unmountOnExit:!0,children:Object(v.jsxs)("figure",{children:[Object(v.jsx)("img",{alt:"Thomas",src:F,height:"300"}),Object(v.jsxs)("figcaption",{style:{fontSize:10,color:"white"},children:["Credit to ",Object(v.jsx)("a",{style:{color:"white"},href:"https://chiru-illustrations.carrd.co/",rel:"noreferrer",target:"_blank",children:"Chiru"})," for the drawing."]})]})}),Object(v.jsx)(J.a,{direction:"up",in:!0,timeout:1e3,style:{transitionDelay:"500ms"},mountOnEnter:!0,unmountOnExit:!0,children:Object(v.jsx)(j.a,{className:e.mainCard,children:Object(v.jsxs)(R.a,{display:"flex",flexDirection:"column",alignItems:"center",children:[Object(v.jsx)(L.a,{variant:"h4",component:"h3",children:"Oh, hello there!"})," ",Object(v.jsx)("br",{}),Object(v.jsx)(R.a,{textAlign:"center",children:"Welcome to my website. I am Thomas Vy, the creator of this website. This website was created with React. I am a Calgary based programmer with a passion for learning the unknown."})]})})})]})}var K=n(61),X=n.n(K),Y=n(97),Z=n.n(Y),$=n(96),ee=n.n($);function te(){var e=k();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(L.a,{variant:"h4",className:e.title,children:"Contact Info"}),Object(v.jsx)(j.a,{className:e.mainCard,style:{marginTop:20},children:"If you would like to contact me, please send an email to vythomas97@gmail.com or clicking the email link below. If you would like to learn more about me, my GitHub and my LinkedIn is down below."}),Object(v.jsxs)(j.a,{style:{margin:"5px"},children:[Object(v.jsx)(y.a,{"aria-label":"Email",onClick:function(){return window.open("mailto:vythomas97@gmail.com")},children:Object(v.jsx)(ee.a,{fontSize:"large"})}),Object(v.jsx)(y.a,{"aria-label":"GitHub",onClick:function(){return window.open("https://github.com/ThomasVy")},children:Object(v.jsx)(X.a,{fontSize:"large"})}),Object(v.jsx)(y.a,{"aria-label":"LinkedIn",onClick:function(){return window.open("https://www.linkedin.com/in/thomas-vy/")},children:Object(v.jsx)(Z.a,{fontSize:"large"})})]})]})}var ne=n(98),ae=n(205),ie=n(206),re=n(99),oe=n(203),se=n(100),ce=n.n(se),le=n(204),he=Object(l.a)((function(e){return{expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},root:{margin:"10px"}}}));var de=function(e){var t=e.project,i=he(),r=Object(a.useState)(!1),o=Object(d.a)(r,2),s=o[0],c=o[1];return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(j.a,{className:i.root,children:[Object(v.jsx)(oe.a,{action:Object(v.jsx)(y.a,{"aria-label":"expand/hide",onClick:function(){c(!s)},className:Object(re.a)(i.expand,Object(ne.a)({},i.expandOpen,s)),children:Object(v.jsx)(ce.a,{})}),title:t.title,subheader:t.software}),Object(v.jsxs)(le.a,{in:s,timeout:"auto",children:[null==t.video?"":Object(v.jsx)(V.a,{component:"video",src:n(158)("./".concat(t.video)).default,style:{maxHeight:"600px"},controls:!0}),Object(v.jsx)(ae.a,{children:Object(v.jsx)(L.a,{variant:"body2",color:"textSecondary",component:"p",children:t.description})}),Object(v.jsx)(ie.a,{disableSpacing:!0,children:Object(v.jsx)(y.a,{"aria-label":"Go to GitHub",onClick:function(){return window.open(t.githubLink)},children:Object(v.jsx)(X.a,{fontSize:"large"})})})]})]})})},me=n(75),je=Object(l.a)((function(e){return{container:{display:"flex",flexDirection:"column",padding:"5px",maxWidth:"900px"}}}));function ue(){var e=je(),t=k();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(L.a,{variant:"h4",className:t.title,children:"Projects"}),Object(v.jsxs)(R.a,{style:{margin:"20px"},color:"white",children:["These are a couple of my favorite projects. Checkout my ",Object(v.jsx)("a",{href:"https://github.com/ThomasVy",style:{color:"#D3D3D3"},children:"GitHub"})," for more of my projects."]}),Object(v.jsxs)("div",{className:e.container,children:[console.log(me.a),me.a.map((function(e,t){return Object(v.jsx)(de,{project:e},t)}))]})]})}var pe=Object(l.a)((function(e){return{mainContent:{padding:"90px 0 20px 0"}}}));function be(){var e=pe();return Object(v.jsxs)(s.a,{children:[Object(v.jsx)(D,{}),Object(v.jsx)(h.a,{container:!0,direction:"column",alignItems:"center",className:e.mainContent,children:Object(v.jsx)(T,{children:Object(v.jsxs)(c.c,{children:[Object(v.jsx)(c.a,{path:"/resume",children:Object(v.jsx)(I,{})}),Object(v.jsx)(c.a,{path:"/about",children:Object(v.jsx)(H,{})}),Object(v.jsx)(c.a,{path:"/contact",children:Object(v.jsx)(te,{})}),Object(v.jsx)(c.a,{path:"/projects",children:Object(v.jsx)(ue,{})}),Object(v.jsx)(c.a,{path:"/",children:Object(v.jsx)(q,{})})]})})})]})}o.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(be,{})}),document.getElementById("root"))},75:function(e){e.exports=JSON.parse('{"a":[{"title":"MoshirLearning","software":"Java, MySQL, TCP Sockets, MVC","description":"A class management software for students and professors (Similar to D2L). Professors can create courses, set the course active or inactive, enroll/unenroll students, upload assignments, download and grade submissions, send group emails to students. A student can view courses they\'re enrolled in and that are active, view and download assignments, view grades, upload assignment submissions, view other students enrolled in the class, and send an email to the professor. In the video, the program on the left is the professor and the program on the right is the student. This project was completed for ENSF 409 in 2017 and won outstanding project.","githubLink":"https://github.com/ThomasVy/MoshirLearning","video":"MoshirLearning.mp4"},{"title":"Spaceship Game","software":"C++, OpenGL","description":"Control a spaceship with WD key to move forward/back and mouse clicks to change the orientation of the ship. Gems randomly spawn on the map. Collect them all without touching the fires to win.","githubLink":"https://github.com/ThomasVy/Spaceship-game","video":"Spaceship.mp4"},{"title":"TicTacToe Game","software":"Java, TCP Sockets","description":"TicTacToe game using server and client communication over TCP sockets. Server starts and waits for two players to connect. Once two players connect, then the server asks for names and begins the match. Players place X\'s or O\'s in turns until one player completes a row/column/diagonal or when there\'s no legal moves left.","githubLink":"https://github.com/ThomasVy/TicTacToe-Game","video":"TicTacToe.mp4"},{"title":"Laravel Book Review","software":"Laravel, HTML/CSS, PHP, MySQL","description":"","githubLink":"https://github.com/ThomasVy/Laravel-Book-Review"},{"title":"Fractal Renderer","software":"C++, OpenGL","description":"Scene renderer to demonstrate fractal geometries (A geometry with repeating shapes in it). The scenes in order is: Sierpinski Triangle, Square and Diamonds, Koch Snowflake, and DragonCurve. Up to 7 iterations and each iteration has its own colour. Uses a GUI to change scenes or iterations, or use the left and right arrow key to change scenes and the up and down arrow key to increase or decrease iteration number.","githubLink":"https://github.com/ThomasVy/Shape-Rendering","video":"ShapeRender.mp4"},{"title":"Earth-Simulation","software":"C++, OpenGL","description":"Simulation of the Sun, Earth, and Moon. Uses Lambertian Shading to simulate the sun emitted from the Sun. Uses matrix manipulation to transform the planets. Press and hold left click while moving the mouse to rotate the camera around the sun. Use scroll wheel to zoom in and out from the sun.","githubLink":"https://github.com/ThomasVy/Earth-Simulation","video":"EarthSim.mp4"},{"title":"Book Exchange","software":"PHP, MySQL, HTML/CSS","description":"","githubLink":"https://github.com/ThomasVy/BookExchange"},{"title":"Peer-to-Peer Messaging App","software":"Python 3, TCP/UDP Sockets, Concurrent programming","description":"Messaging app that uses P2P to send messages along. In the beginning, users connect to the registry using UDP to get the lists of users. Then the users sends/receives peer messages and text snippets from peers by TCP. New users will recieve catch up messages to allow them to see previous messages sent before they joined. The registry will send a done message to let all the users quit. Uses Lamport timestamps to organize messages.","githubLink":"https://github.com/ThomasVy/P2P-Messaging-App","video":"P2PMessagingApp.mp4"},{"title":"Billiard Game","software":"Processing","description":"Pool game that you can play in single player or two player. Sink all your balls to win; if your cue ball sinks, you lose. When playing, press \'1\' to bring you back to the menu, press and hold spacebar to charge your shots. Press \'b\' to reset your shot power. After winning or losing, press any key to reset the game. ","githubLink":"https://github.com/ThomasVy/Billiard-Game","video":"BilliardGame.mp4"},{"title":"Ray Tracing Scenes","software":"C++, OpenGL","description":"Ray tracing scene renderer. Displays two real-time ray tracing scenes; change scenes with key 1 and key 2. Press T key to toggle refraction object in both scenes.","githubLink":"https://github.com/ThomasVy/RayTracingScenes","video":"RayTrace.mp4"}]}')},85:function(e,t){}},[[167,1,2]]]);
//# sourceMappingURL=main.da46364e.chunk.js.map