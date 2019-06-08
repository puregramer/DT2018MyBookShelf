"use strict";var $DT2017=$DT2017||{};$DT2017.help=function(){var e={currentIndex:0,pages:[],pagesForDevice:[{src:"./images/help/help_content01.png",title:"로그인"},{src:"./images/help/help_content02.png",title:"슬라이드 메뉴"},{src:"./images/help/help_content03.png",title:"회원 정보 변경"},{src:"./images/help/help_content04.png",title:"FAQ"},{src:"ANDROID"===$alt.detect.getPlatform()?"./images/help/help_content05_android.png":"./images/help/help_content05.png",title:"내서재 상단 메뉴"},{src:"ANDROID"===$alt.detect.getPlatform()?"./images/help/help_content06_android.png":"./images/help/help_content06.png",title:"디지털교과서 내려받기"},{src:"./images/help/help_content07.png",title:"상세보기"},{src:"./images/help/help_content08.png",title:"디지털교과서 열기"},{src:"./images/help/help_content09_android.png",title:"쓸어서 넘기기(swipe flip)"},{src:"./images/help/help_content10.png",title:"하이라이트 슬라이드 보기"},{src:"./images/help/help_content11.png",title:"위두랑 전송"},{src:"./images/help/help_content12.png",title:"콘텐츠 차례"},{src:"./images/help/help_content13.png",title:"양면/단면보기"},{src:"./images/help/help_content14.png",title:"확대/축소 모드 변경"},{src:"./images/help/help_content15.png",title:"페이지 히스토리"}],pagesForWindow:[{src:"./images/help/help_content01.png",title:"로그인"},{src:"./images/help/help_content02.png",title:"슬라이드 메뉴"},{src:"./images/help/help_content03.png",title:"회원 정보 변경"},{src:"./images/help/help_content04.png",title:"FAQ"},{src:"./images/help/help_content05.png",title:"내서재 상단 메뉴"},{src:"./images/help/help_content06.png",title:"디지털교과서 내려받기"},{src:"./images/help/help_content07.png",title:"상세보기"},{src:"./images/help/help_content08.png",title:"디지털교과서 열기"},{src:"./images/help/help_content10.png",title:"하이라이트 슬라이드 보기"},{src:"./images/help/help_content11.png",title:"위두랑 전송"},{src:"./images/help/help_content12.png",title:"콘텐츠 차례"},{src:"./images/help/help_content13.png",title:"양면/단면보기"},{src:"./images/help/help_content14.png",title:"확대/축소 모드 변경"},{src:"./images/help/help_content15.png",title:"페이지 히스토리"}],appendHelp:function(){"ANDROID"===$alt.detect.getPlatform()||"IOS"===$alt.detect.getPlatform()?$DT2017.help.pages=$DT2017.help.pagesForDevice:$DT2017.help.pages=$DT2017.help.pagesForWindow,this.remove(),this.currentIndex=0;var t=this.getHelpBodySize(),l=$alt.ce({tag:"div",id:"helpContainer",targetElement:document.body});l.style.position="absolute",l.style.width="100%",l.style.height="100%",l.style.textAlign="center",l.style.zIndex=100,l.style.top="0px",l.style.backgroundColor="rgba(0, 0, 0, 0.7)";var n=$alt.ce({tag:"div",targetElement:l});n.style.position="absolute",n.style.top="50%",n.style.marginTop=t.cellAreaMarginTop,n.style.left="50%";var r=$alt.ce({tag:"div",id:"helpBody",targetElement:n});r.style.display="inline-block",r.style.width=t.bodyWidth,r.style.height=t.bodyHeight,n.style.marginLeft=-(r.clientWidth/2)+"px";var i=$alt.ce({tag:"div",id:"helpCloseArea",targetElement:l});i.style.width="100%",i.style.height="100%",i.addEventListener("click",function(t){t.preventDefault(),e.remove()},!1),this.initDotNav({target:r}),this.initPgaeImg({index:0,target:r,width:t.bodyWidth}),r.clientWidth>310&&this.initArrows({target:r}),$alt.addSwipeEvent({targetElement:r,callBack:function(t){switch(console.log("--> direction: ",t),console.log($DT2017.help.currentIndex),t){case"none":break;case"left":$DT2017.help.currentIndex<$DT2017.help.pages.length-1&&(e.currentIndex++,e.changeHelpBody());break;case"right":$DT2017.help.currentIndex>0&&(e.currentIndex--,e.changeHelpBody())}}})},remove:function(){var e=$alt.qs("#helpContainer");e&&document.body.removeChild(e)},getHelpBodySize:function(){var e,t,l;return $DT2017.responsive.screenSize.width<=$DT2017.responsive.responsivePointHiDPI.smallMobile||$DT2017.responsive.screenSize.height<=$DT2017.responsive.responsivePointHiDPI.mobileHeight?(e="310px",t="225px",l="-140px"):(e="600px",t="400px",l="-250px"),{bodyWidth:e,bodyHeight:t,cellAreaMarginTop:l}},initPgaeImg:function(e){var t=$alt.ce({tag:"div",id:"helpBodyTitle",html:this.pages[e.index].title,targetElement:e.target});t.style.color="#fff",t.style.fontSize="24px",t.style.marginBottom="5px";var l=$alt.ce({tag:"img",id:"helpPageImage",src:this.pages[e.index].src,targetElement:e.target});l.style.width=e.width},initDotNav:function(t){var l=$alt.ce({tag:"div",targetElement:t.target});l.style.position="absolute",l.style.bottom="-50px",l.style.width="100%",l.style.marginLeft="10px",l.style.display="none",this.pages.forEach(function(t,n){var r=$alt.ce({tag:"img","class":"helpDotImg",src:"./images/help/help_dot_normal.png",targetElement:l});r.style.cursor="pointer",r.style.width="23px",r.style.marginRight="15px",r.setAttribute("data-idx",n),n===e.currentIndex&&(r.src="./images/help/help_dot_over.png"),r.addEventListener("click",function(t){t.preventDefault();var l=this.getAttribute("data-idx");e.currentIndex=parseInt(l),e.changeHelpBody()},!1)})},initArrows:function(t){var l=$alt.ce({tag:"img",id:"helpPrevArrow",src:"./images/help/help_PrevArrow.png",targetElement:t.target});l.style.width="40px",l.style.position="absolute",l.style.left="-60px",l.style.top=t.target.clientHeight/2+"px",l.style.cursor="pointer";var n=$alt.ce({tag:"img",id:"helpNextArrow",src:"./images/help/help_NextArrow.png",targetElement:t.target});n.style.width="40px",n.style.position="absolute",n.style.right="-60px",n.style.top=t.target.clientHeight/2+"px",n.style.cursor="pointer",l.addEventListener("click",function(t){t.preventDefault(),e.currentIndex--,e.changeHelpBody(),console.log("-help.currentIndex: ",e.currentIndex)},!1),n.addEventListener("click",function(t){t.preventDefault(),e.currentIndex++,e.changeHelpBody(),console.log("-help.currentIndex: ",e.currentIndex)},!1),this.processDisable({helpPrevArrow:l,helpNextArrow:n})},changeHelpBody:function(){var e=$alt.qs("#helpPageImage"),t=$alt.qs("#helpBodyTitle"),l=$alt.qsa(".helpDotImg"),n=$alt.qs("#helpPrevArrow"),r=$alt.qs("#helpNextArrow");this.processDisable({helpPrevArrow:n,helpNextArrow:r}),e.src=this.pages[this.currentIndex].src,t.innerHTML=this.pages[this.currentIndex].title;for(var i=0;i<l.length;i++)l[i].src="./images/help/help_dot_normal.png";l[this.currentIndex].src="./images/help/help_dot_over.png"},processDisable:function(e){e.helpPrevArrow&&(e.helpPrevArrow.style.opacity=1,e.helpPrevArrow.style.pointerEvents="auto",e.helpNextArrow.style.opacity=1,e.helpNextArrow.style.pointerEvents="auto",0===this.currentIndex&&(e.helpPrevArrow.style.opacity=.3,e.helpPrevArrow.style.pointerEvents="none"),this.currentIndex===this.pages.length-1&&(e.helpNextArrow.style.opacity=.3,e.helpNextArrow.style.pointerEvents="none"))}};return e}();