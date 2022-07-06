// ==UserScript==
// @name         Bing-Bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  for Bing
// @author       Grigorev Dmitriy
// @match        https://www.bing.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let keywords = ["купить авто", "продать авто", "договор купли продажи авто"];
let keyword = keywords[getRandom(0, keywords.length)];
let links = document.links;
let bingInput = document.getElementsByName("q")[0];
let bingSearch = document.getElementsByName("search")[0];


if (bingSearch !== undefined) {
  bingInput.value = keyword;
  bingSearch.click();
  } else {
  for (let i = 0; i < links.length; i++) {
    if (links[i].href.includes("auto.ru")) {
    let link = links[i];
    console.log("нашел строку " + links[i]);
    link.click();
    break;
    }
  }
}
function getRandom (min, max) {
  return Math.floor(Math.random()*(max - min) + min);
  }
