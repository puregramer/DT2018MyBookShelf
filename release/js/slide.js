"use strict";var $DT2017=$DT2017||{};$DT2017.slide=function(){var e={open:function(e){$DT2017.core.isShowingSlide=!0,this.append(e),$DT2017.core.isOfflineMode&&$DT2017.header.setOfflineMode()},append:function(e){var t=this,o=$alt.ce({tag:"div",id:"slideContainer",targetElement:e.targetElement}),a=$alt.ce({tag:"div","class":"slideBackground",targetElement:o});a.style.opacity=0,a.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),this.style.pointerEvents="none",t.close(o)},!1);var n=$alt.ce({tag:"div","class":"slideMenuBox",targetElement:o}),l=$alt.ce({tag:"div","class":"slideTitleBox",targetElement:n}),s=($alt.ce({tag:"div","class":"slideTitle",html:"메뉴",targetElement:l}),$alt.ce({tag:"div","class":"slideTel",html:'고객센터 : <a href="tel:15440079">1544-0079</a>',targetElement:l}),$alt.ce({tag:"img","class":"slideClose",src:"./images/slide/slideClose.png",targetElement:l}));s.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),t.close(o)},!1);var i=$alt.ce({tag:"img","class":"slideSetting",src:"./images/slide/slideSetting.png",targetElement:l});i.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),t.openSettingPop()},!1),$DT2017.responsive.enchantResponsive({responsivePointMobile:505,responsivePointTablet:770});var r=$alt.ce({tag:"div","class":"menuButtonContainer",targetElement:n});r.style.height=$DT2017.responsive.screenSize.height-66+"px";var c;switch($alt.detect.getPlatform()){case"WIN":case"RT":c=14;break;default:c=9}var d=n.clientWidth/2-c,u=$alt.ce({tag:"div","class":"slideUserInfoBox",targetElement:r});u.style.width=d+"px",u.style.height=d+"px",this.appendUserInfo({targetElement:u}),[{label:"학습 커뮤니티",name:"community",id:"wedorangCommunity"},{label:"공지사항",name:"notice",id:"slideNoticeBtn"},{label:"도움말",name:"help"},{label:"FAQ",name:"faq",id:"slideFaq"},{label:"인증코드",name:"code",id:"slideCode"}].forEach(function(e,a){var n=$alt.ce({tag:"div","class":"menuButtonElement",targetElement:r});n.style.width=d+"px",n.style.height=d+"px",n.style.backgroundImage="url(./images/slide/slideMenu_"+e.name+".png)",e.id&&n.setAttribute("id",e.id);var l=$alt.ce({tag:"div","class":"menuButtonText",html:e.label,targetElement:n});if(3===a){$alt.ce({tag:"div","class":"versionInfo",html:"ver "+$DT2017.core.version.replace("saltgamer.",""),targetElement:l})}var s=n.clientWidth,i=t.getSizeInfo(s);l.style.fontSize=i+"px",n.addEventListener("click",function(e){switch(e.preventDefault(),a){case 0:$DT2017.sub.appendCommunity();break;case 1:$DT2017.notify.appendNotifyContainer({targetElement:document.body});break;case 2:$DT2017.help.appendHelp();break;case 3:$DT2017.loading.show({opacity:.5,showLoadingIcon:!0}),$DT2017.apiBridge.getFaqList().then(function(e){console.log("~> faqList: ",e),$DT2017.core.faqList=e,$DT2017.notify.appendNotifyContainer({targetElement:document.body,mode:"faq"}),$DT2017.loading.hide()});break;case 4:$DT2017.apiBridge.goStoreByCode()}t.close(o)},!1),n.addEventListener("mouseover",function(t){t.preventDefault(),this.style.backgroundImage="url(./images/slide/slideMenu_"+e.name+"_over.png)",this.style.backgroundColor="#5b71d6",this.style.color="#fff"},!1),n.addEventListener("mouseout",function(t){t.preventDefault(),this.style.backgroundImage="url(./images/slide/slideMenu_"+e.name+".png)",this.style.backgroundColor="#fff",this.style.color="#333"},!1)}),n.style.left=-+n.clientWidth+"px",$ANIDom.addAni({delay:1,duration:500,target:n,ease:{type:"quintInOut",apply:"all"},start:{x:0,y:0,rot:0,scale:0,opacity:0},destination:{x:n.clientWidth,y:0,rot:0,scale:0,opacity:1},callBack:function(){}}),$ANIDom.addAni({delay:1,duration:500,target:a,ease:{type:"quintInOut",apply:"all"},start:{x:0,y:0,rot:0,scale:1,opacity:0},destination:{x:0,y:0,rot:0,scale:0,opacity:1},callBack:function(){}})},close:function(e){$DT2017.core.isShowingSlide=!1;var t=$alt.qs(".slideMenuBox"),o=$alt.qs(".slideBackground");$ANIDom.addAni({delay:1,duration:500,target:t,ease:{type:"quintInOut",apply:"all"},start:{x:t.clientWidth,y:0,rot:0,scale:0,opacity:1},destination:{x:-+t.clientWidth,y:0,rot:0,scale:0,opacity:0},callBack:function(){}}),$ANIDom.addAni({delay:1,duration:500,target:o,ease:{type:"quintInOut",apply:"all"},start:{x:0,y:0,rot:0,scale:1,opacity:1},destination:{x:0,y:0,rot:0,scale:0,opacity:-1},callBack:function(){document.body.removeChild(e)}})},openSettingPop:function(){console.log("%c ▶▷ [Native API] openSettingPopup ","color:#ff6600");var t={apiName:"openSettingPopup",parameters:{},callBack:"openSettingPopupCallBack"};window[t.callBack]=function(o){console.log("> ",o);var a=Object.keys(o);switch(a[0]){case"response":o.response.userInfo&&e.changeUserProfile(o.response.userInfo);break;case"error":$DT2017.notice.show({noticeText:o.error,buttonText:"확 인",clickEvent:function(){console.log("> clickEvent!"),$DT2017.notice.hide()}})}delete window[t.callBack]},$DT2017.apiBridge.sendMessageToNative(t.apiName,JSON.stringify(t));var o={response:{userInfo:{picture:"http://rang2.fusionsoft.co.kr:7056/images/thmb_prof.gif",name:"이만수",schoolName:"",schoolGrade:2,gradeGroup:"MI",userId:"keris"}}};setTimeout(function(){window[t.callBack](o)},1e3)},getSizeInfo:function(e){var t;return t=e<160?12:e<230?16:e<280?18:e<350?22:e<400?26:28},appendUserInfo:function(e){var t=this,o=$DT2017.core.userInfo?$DT2017.core.userInfo.picture:"./images/slide/defaultUserProfileImg.png",a=""===o||void 0===o?"./images/slide/defaultUserProfileImg.png":o,n=$alt.ce({tag:"img","class":"userProfileImg",src:a,targetElement:e.targetElement}),l=$alt.ce({tag:"div","class":"userSchoolName",html:($DT2017.core.userInfo?$DT2017.core.userInfo.schoolName:"정보 없음")+(parseInt($DT2017.core.userInfo.schoolGrade)?" / "+$DT2017.core.userInfo.schoolGrade+"학년":""),targetElement:e.targetElement}),s=$alt.ce({tag:"div","class":"userName",html:($DT2017.core.userInfo.name?$DT2017.core.userInfo.name+"님":"")+($DT2017.core.userInfo.name?" ("+$DT2017.core.userInfo.userId+")":$DT2017.core.userInfo.userId),targetElement:e.targetElement}),i=e.targetElement.clientWidth;n.style.width=.5*i+"px";var r=this.getSizeInfo(i);l.style.fontSize=r+"px",l.style.color="#023c73",s.style.fontSize=r+"px",s.style.color="#555",n.addEventListener("click",function(e){e.preventDefault(),t.openSettingPop()},!1)},changeUserProfile:function(e){if(console.log("-> changeUserProfile: ",e),e.picture){var t=$alt.qs(".userProfileImg");t&&(t.src=e.picture),$DT2017.core.userInfo&&($DT2017.core.userInfo.picture=e.picture,console.log("-$DT2017.core.userInfo.picture: ",$DT2017.core.userInfo.picture))}var o=$alt.qs(".userSchoolName");(e.schoolName||""===e.schoolName)&&(o&&(o.innerHTML=e.schoolName),$DT2017.core.userInfo&&($DT2017.core.userInfo.schoolName=e.schoolName)),e.schoolGrade&&($DT2017.core.userInfo&&($DT2017.core.userInfo.schoolGrade=e.schoolGrade),console.log("---> schoolGrade: ",$DT2017.core.userInfo.schoolGrade),o.innerHTML=o.innerHTML+(0!==parseInt(e.schoolGrade)?(""===e.schoolName?"":" / ")+e.schoolGrade+"학년":"")),e.gradeGroup&&$DT2017.core.userInfo&&($DT2017.core.userInfo.gradeGroup=e.gradeGroup)}};return e}();