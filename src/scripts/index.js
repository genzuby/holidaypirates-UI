const { HOTELS_API } = require("./apiconfig");
const axios = require("axios");
const css = require("../styles/index.scss");

window.onload = function() {
  loadInitPage();
  searchItems();
  onKeyEnterSearch();
};

function loadInitPage() {
  const header = `<h1>Welcome to Holiday Pirates</h1>
      <div class="serch-area">
        <select id="search-options">
          <option value="price">Pirce</option>
          <option value="rate">Rate</option>
          <option value="hotelName">Hotel Name</option>
          <option value="location">Location</option>
        </select>
        <input type="text" id="serach-hotels" />
      </div>`;
  document.querySelector("#header").innerHTML = header;
}
// get Hotels from API
export const getHotels = () =>
  new Promise((resolve, reject) => resolve(axios.get(HOTELS_API)));

export const getCurrnentPrice = price => {
  // find current Month price
  const date = new Date();
  const curMonth = date.getMonth();
  const currentPrice = price.find(val => val.month.includes(curMonth + 1));
  return currentPrice.seasonPirce;
};

function renderTotalCnt(cnt) {
  //display total count
  document.querySelector(
    "#card-header"
  ).innerHTML = `<p class="card-count">We found ${cnt} hotels for you!</p>`;
}

export const renderStar = rate => {
  // render rating info with star icons.
  const starcount = Math.floor(rate);
  const ishalf = Math.round(rate) > Math.floor(rate) ? true : false;
  const emptystar = 5 - Math.round(rate);

  let starHtml = `<div class="star-rating">`;

  if (starcount > 0) {
    for (let i = 0; i < starcount; i++) {
      starHtml += `<i class="fas fa-star 3x"></i>`;
    }
  }
  if (ishalf) {
    starHtml += `<i class="fas fa-star-half-alt 3x"></i>`;
  }

  if (emptystar > 0) {
    for (let i = 0; i < emptystar; i++) {
      starHtml += `<i class="far fa-star 3x"></i>`;
    }
  }
  starHtml += "</div>";

  return starHtml;
};

export const renderCards = info => {
  const space = "&nbsp";

  //make cards
  return info.reduce((tag, info) => {
    tag += `
      <div class="card">
        <div class="card-badge">€ ${getCurrnentPrice(info.price)}</div>
        <img src="${info.mainimg}" class="card-image"></img>
        <div class="card-info">
          <span class="card-item-name">
            <h1>${info.hotelName}</h1>
            ${space.repeat(4)}<h3>in ${info.location}</h3>
          </span>
          <span>${renderStar(info.rate)}</span>       
          <p>${info.hotelDesc}</p>
          <a href='#'>More Info</a>
        </div>
      </div>
      `;
    return tag;
  }, "");
};

function searchItems(option, keyword) {
  // make card list
  getHotels().then(res => {
    let initInfo;
    if (option === undefined && keyword === undefined) {
      // inital loading
      initInfo = res.data.filter(val => val.rate >= 3);
    } else {
      if (option === "rate") {
        // when user select rate as a search option
        // get higher or same rate
        initInfo = res.data.filter(val => val.rate >= parseInt(keyword));
      } else if (option === "price") {
        // when user select price as a search option
        // get cheaper or same price
        initInfo = res.data.filter(
          val => getCurrnentPrice(val.price) <= parseInt(keyword)
        );
      } else {
        //  else (mostly search text)
        initInfo = res.data.filter(
          val => val[option].toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        );
      }
    }

    const parent = document.querySelector("#card-body");

    // display total count of list
    renderTotalCnt(initInfo.length);

    if (initInfo.length === 0) {
      alert("No data found");
      return;
    }

    parent.innerHTML = "";
    parent.innerHTML = renderCards(initInfo);
  });
}

function onKeyEnterSearch() {
  // search hotel list using keyword
  const selectBox = document.querySelector("#search-options");
  let selectVal = "price";

  // get selected option value
  selectBox.addEventListener("change", e => {
    selectVal = selectBox.options[selectBox.selectedIndex].value;
  });

  // get data when user keydown enter
  document.querySelector("#serach-hotels").addEventListener("keydown", e => {
    if (e.keyCode === 13) {
      searchItems(selectVal, e.target.value);
    }
  });
}
