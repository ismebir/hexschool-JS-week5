import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log("Hello world!");

let data = [
  {
    "id": 0,
    "name": "肥宅心碎賞櫻3日",
    "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    "area": "高雄",
    "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    "group": 87,
    "price": 1400,
    "rate": 10
  },
  {
    "id": 1,
    "name": "貓空纜車雙程票",
    "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台北",
    "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    "group": 99,
    "price": 240,
    "rate": 2
  },
  {
    "id": 2,
    "name": "台中谷關溫泉會1日",
    "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台中",
    "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    "group": 20,
    "price": 1765,
    "rate": 7
  }
];

// 新增 data 資訊
const ticketCardArea = document.querySelector('.ticketCard-area');

function addInfo() {
  let str = '';
  // 迴圈 for 三筆 data
  data.forEach(function (item) {
    str += `<li class="ticketCard col col-md-6 col-lg-4 mb-9">
    <div class="card h-100 shadow-style">
      <div class="position-relative">
        <img class="ticketCard-img card-img-top" src="${item.imgUrl}" alt="travel_1">
        <!-- 如果有 badge，使用 rounded-end 沒有效果 -->
        <span
          class="ticketCard-region badge-style bg-secondary text-white Noto-Sans-TC fs-5 py-2 px-5 position-absolute top-0 start-0">
          ${item.area}
        </span>
        <span
          class="ticketCard-rank badge-style d-block text-center bg-primary text-white Noto-Sans-TC fs-6 py-1 px-2 position-absolute bottom-0 start-0">
          ${item.rate}
        </span>
      </div>
      <!-- card-body: ticket-info -->
      <div class="card-body px-5 pt-5 pb-0">
        <a class="ticketCard-name text-decoration-none d-block fs-4 text-primary fw-medium pb-1 m-0 border-bottom border-2 border-primary text-truncate"
          href="#">${item.name}</a>
        <p class="ticketCard-description card-text fs-6 text-gray Noto-Sans-TC mt-4 mb-5">${item.description}
        </p>
      </div>
      <!-- number & price -->
      <div class="d-flex justify-content-between align-items-center px-5 pb-3">
        <div class="num-info d-flex align-items-center">
          <span class="material-icons text-primary me-1">
            info
          </span>
          <p class="ticketCard-num fs-6 text-primary fw-medium my-0">剩下最後 ${item.group} 組</p>
        </div>
        <div class="price-info d-flex align-items-center">
          <p class="fs-6 text-primary Noto-Sans-TC fw-medium mb-0 me-1">TWD</p>
          <p class="ticketCard-price fs-2 text-primary Roboto fw-medium mb-0">$${item.price}</p>
        </div>
      </div>
    </div>
  </li>`
  });
  // 新增至 ticketCardArea
  ticketCardArea.innerHTML = str;
}

// 執行新增資訊函式
addInfo();

// 篩選
const locationFilter = document.querySelector('.regionSearch');
const findAreaCount = document.querySelector('.findAreaCount');

locationFilter.addEventListener("change", function (e) {
  let str = "";
  let count = 0;

  data.forEach(function (item) {
    const listHTML = `<li class="ticketCard col col-md-6 col-lg-4 mb-9">
    <div class="card h-100 shadow-style">
      <div class="position-relative">
        <img class="ticketCard-img card-img-top" src="${item.imgUrl}" alt="travel_1">
        <!-- 如果有 badge，使用 rounded-end 沒有效果 -->
        <span
          class="ticketCard-region badge-style bg-secondary text-white Noto-Sans-TC fs-5 py-2 px-5 position-absolute top-0 start-0">
          ${item.area}
        </span>
        <span
          class="ticketCard-rank badge-style d-block text-center bg-primary text-white Noto-Sans-TC fs-6 py-1 px-2 position-absolute bottom-0 start-0">
          ${item.rate}
        </span>
      </div>
      <!-- card-body: ticket-info -->
      <div class="card-body px-5 pt-5 pb-0">
        <a class="ticketCard-name text-decoration-none d-block fs-4 text-primary fw-medium pb-1 m-0 border-bottom border-2 border-primary text-truncate"
          href="#">${item.name}</a>
        <p class="ticketCard-description card-text fs-6 text-gray Noto-Sans-TC mt-4 mb-5">${item.description}
        </p>
      </div>
      <!-- number & price -->
      <div class="d-flex justify-content-between align-items-center px-5 pb-3">
        <div class="num-info d-flex align-items-center">
          <span class="material-icons text-primary me-1">
            info
          </span>
          <p class="ticketCard-num fs-6 text-primary fw-medium my-0">剩下最後 ${item.group} 組</p>
        </div>
        <div class="price-info d-flex align-items-center">
          <p class="fs-6 text-primary Noto-Sans-TC fw-medium mb-0 me-1">TWD</p>
          <p class="ticketCard-price fs-2 text-primary Roboto fw-medium mb-0">$${item.price}</p>
        </div>
      </div>
    </div>
  </li>`;

    if (e.target.value == item.area) {
      str += listHTML;
      count += 1;
    } else if (e.target.value == '全部地區') {
      str += listHTML;
      // 如果寫 count += data.length; 會顯示 9 筆資料
      count = data.length;
    }
  })
  ticketCardArea.innerHTML = str;
  findAreaCount.textContent = `本次搜尋共 ${count} 筆資料`;
})

const ticketName = document.querySelector("#ticketName");
const ticketImgUrl = document.querySelector("#ticketImgUrl");
const ticketRegion = document.querySelector("#ticketRegion");
const ticketPrice = document.querySelector("#ticketPrice");
const ticketNum = document.querySelector("#ticketNum");
const ticketRate = document.querySelector("#ticketRate");
const ticketDescription = document.querySelector("#ticketDescription");
const addTicketBtn = document.querySelector(".addTicket-btn");

addTicketBtn.addEventListener("click", function (e) {
  console.log(ticketName.value, ticketImgUrl.value);
  let obj = {};

  // obj.id = data.length + 1;
  obj.name = ticketName.value;
  obj.imgUrl = ticketImgUrl.value;
  obj.area = ticketRegion.value;
  obj.description = ticketDescription.value;
  obj.group = ticketNum.value;
  obj.price = ticketPrice.value;
  obj.rate = ticketRate.value;
  data.push(obj);
  addInfo();

  ticketName.value = "";
  ticketImgUrl.value = "";
  ticketRegion.value = "";
  ticketDescription.value = "";
  ticketNum.value = "";
  ticketPrice.value = "";
  ticketRate.value = "";
})