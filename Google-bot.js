// ==UserScript==
// @name         Google-Bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  For google
// @author       Grigorev Dmitriy
// @match        https://www.google.com/*
// @match        https://napli.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let keywords = ["10 самых популярных шрифтов от Google", "вывод произвольных полей wordpress", "Отключение редакций и ревизий в Wordpress"];
let keyword = keywords[getRandom(0, keywords.length)];

let links = document.links;
let googleInput = document.getElementsByName("q")[0];
let btnK = document.getElementsByName("btnK")[0];

if (btnK !== undefined) {
  let i = 0;
  let timerId = setInterval(function() {
    googleInput.value += keyword[i];
    i++;
    if(i== keyword.length) {
      clearInterval(timerId);
      btnK.click();
    }
  },700)
  }else if (location.hostname == "napli.ru") {
    console.log("Мы на napli.ru");
    setInterval(() => {
      let index = getRandom(0, links.length);

      if (getRandom(0,101) >= 70) {
        location.href = "https://www.google.com/";
      } else if (links[index].href.indexOf("napli.ru") !== -1){
        //console.log(links);
        links[index].click();}
    }, getRandom(2000, 5000));
  } else {
    let nextGooglePage = true;
    for (let i = 0; i < links.length; i++) {
      if (links[i].href.includes("napli.ru")) {
        let link = links[i];
        nextGooglePage = false;
        console.log("нашел строку " + links[i]);
        setTimeout(()=>{
          link.click();
        }, getRandom(2000, 5000));

        break;
      }
    }
    if (document.querySelector(".YyVfkd").innerText == "5") {
      nextGooglePage = false;
      location.href = "https://www.google.com/"
    }
    if (nextGooglePage) {
      setTimeout(() => {
        pnnext.click();
      }, getRandom(3000,7000));
    }

  }


function getRandom (min, max) {
  return Math.floor(Math.random()*(max - min) + min);
}
