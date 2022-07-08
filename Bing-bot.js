// ==UserScript==
// @name         Bing-Bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  for Bing
// @author       Grigorev Dmitriy
// @match        https://www.bing.com/*
// @match        https://auto.ru/*
// @match        https://www.kia.ru/*
// @match        https://www.toyota.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let sites = {
  "https://auto.ru":["купить авто", "продать авто"],
  "kia.ru":["Модельный ряд Kia 2022", "Kia в России"],
  "https://www.toyota.ru":["Новые автомобили - модельный ряд | Toyota", "Официальный сайт Toyota: цены на автомобили Toyota"]
}

let site = Object.keys(sites)[getRandom(0, Object.keys(sites).length)];
let keywords = sites[site];
let keyword = keywords[getRandom(0, keywords.length)];

let links = document.links;
let bingInput = document.getElementsByName("q")[0];
let bingBtn = document.getElementsByName("search")[0];
let nextPage = document.getElementsByClassName("sb_pagS")[0];
let numberPage = document.getElementsByClassName("sb_pagN")[0];

if (bingBtn !== undefined) {
document.cookie = `site=${site}`;
}else if (location.hostname == "www.bing.com"){
site = getCookie("site");
} else {
site = location.hostname;
}

if (bingBtn !== undefined) {
  let i = 0;
  let timerId = setInterval(() => {
    bingInput.value += keyword[i];
    i++;
    if(i == keyword.length) {
      clearInterval(timerId);
      bingBtn.click();
    }
  }, 200);
  } else if (location.hostname == site) {

    setInterval(() => {
      let index = getRandom(0, links.length);

      if (getRandom(0, 101) >= 70) {
        location.href = "https://www.bing.com/";
      } else if (links[index].href.indexOf(site) !== -1){
        links[index].click();
        }
    }, getRandom(2000, 5000));
  } else {
    let nextBingPage = true;
    for (let i = 0; i < links.length; i++) {
      if (links[i].href.includes(site)) {
        let link = links[i];
        nextBingPage = false;
         setTimeout(() => {
          link.click();
        }, getRandom(2000, 5000));

        break;
      }
    }
    if (nextPage.innerText == "5") {
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
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
