// ==UserScript==
// @name         Bing-Bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  for Bing
// @author       Grigorev Dmitriy
// @match        https://www.bing.com/*
// @match        https://auto.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let keywords = ["купить авто", "продать авто", "договор купли продажи авто"];
let keyword = keywords[getRandom(0, keywords.length)];
let links = document.links;
let bingInput = document.getElementsByName("q")[0];
let bingSearch = document.getElementsByName("search")[0];
let nextPage = document.getElementsByClassName("sb_pagS")[0];
let numberPage = document.getElementsByClassName("sb_pagN")[0];


if (bingSearch !== undefined) {
  let i = 0;
  let timerId = setInterval(() => {
    bingInput.value += keyword[i];
    i++;
    if(i == keyword.length) {
      clearInterval(timerId);
      bingSearch.click();
    }
  },250);
  }else if (location.hostname == "auto.ru") {

    setInterval(() => {
      let index = getRandom(0, links.length);

      if (getRandom(0, 101) >= 85) {
        location.href = "https://www.bing.com/";
      } else if (links[index].href.indexOf("auto.ru") !== -1){
        links[index].click();
        }
    }, getRandom(2000, 5000));
  } else {
    let nextBingPage = true;
    for (let i = 0; i < links.length; i++) {
      if (links[i].href.includes("https://auto.ru/")) {
        let link = links[i];
        nextBingPage = false;
         setTimeout(() => {
          link.click();
        }, getRandom(2000, 5000));

        break;
      }
    }
    if (nextPage.innerText == 3) {
      nextBingPage = false;
      location.href = "https://www.bing.com/";
    }
    if (nextBingPage) {
      setTimeout(() => {
        numberPage.click();
      }, getRandom(3000,7000));
    }

  }
function getRandom (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
