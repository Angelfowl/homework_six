var PRODUCTS = [
    {
      itemTitle: "Backpack",
      itemThumbImg:
        "images/backpack.jpg",
      itemImg:
        "images/backpack.jpg",
      itemDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla lacus quis orci euismod, nec maximus mauris scelerisque. Etiam leo augue, eleifend at pretium et, porta eget tortor. Maecenas eu ante non ligula scelerisque placerat aliquam rutrum enim. Maecenas pulvinar porttitor augue at sodales. Suspendisse at augue quis arcu accumsan consectetur id vestibulum erat.",
      itemPrice: "$42.99"
    },
    {
      itemTitle: "Tent",
      itemThumbImg:
        "images/tent.jpg",
      itemImg:
        "images/tent.jpg",
      itemDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla lacus quis orci euismod, nec maximus mauris scelerisque. Etiam leo augue, eleifend at pretium et, porta eget tortor. Maecenas eu ante non ligula scelerisque placerat aliquam rutrum enim. Maecenas pulvinar porttitor augue at sodales. Suspendisse at augue quis arcu accumsan consectetur id vestibulum erat.",
      itemPrice: "$68.99"
    },
    {
      itemTitle: "Flashlight",
      itemThumbImg:
        "images/flashlight.jpg",
      itemImg:
        "images/flashlight.jpg",
      itemDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla lacus quis orci euismod, nec maximus mauris scelerisque. Etiam leo augue, eleifend at pretium et, porta eget tortor. Maecenas eu ante non ligula scelerisque placerat aliquam rutrum enim. Maecenas pulvinar porttitor augue at sodales. Suspendisse at augue quis arcu accumsan consectetur id vestibulum erat.",
      itemPrice: "$12.99"
    },
    {
      itemTitle: "Rations",
      itemThumbImg:
        "images/mealkit.jpg",
      itemImg:
        "images/mealkit.jpg",
      itemDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla lacus quis orci euismod, nec maximus mauris scelerisque. Etiam leo augue, eleifend at pretium et, porta eget tortor. Maecenas eu ante non ligula scelerisque placerat aliquam rutrum enim. Maecenas pulvinar porttitor augue at sodales. Suspendisse at augue quis arcu accumsan consectetur id vestibulum erat.",
      itemPrice: "$32.99"
    },
    {
      itemTitle: "Bottle",
      itemThumbImg:
        "images/bottle.jpg",
      itemImg:
        "images/bottle.jpg",
      itemDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla lacus quis orci euismod, nec maximus mauris scelerisque. Etiam leo augue, eleifend at pretium et, porta eget tortor. Maecenas eu ante non ligula scelerisque placerat aliquam rutrum enim. Maecenas pulvinar porttitor augue at sodales. Suspendisse at augue quis arcu accumsan consectetur id vestibulum erat.",
      itemPrice: "$8.99"
    },
    {
      itemTitle: "Army Knife",
      itemThumbImg:
        "images/armyKnife.jpg",
      itemImg:
        "images/armyKnife.jpg",
      itemDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla lacus quis orci euismod, nec maximus mauris scelerisque. Etiam leo augue, eleifend at pretium et, porta eget tortor. Maecenas eu ante non ligula scelerisque placerat aliquam rutrum enim. Maecenas pulvinar porttitor augue at sodales. Suspendisse at augue quis arcu accumsan consectetur id vestibulum erat.",
      itemPrice: "$6.99"
    },
    {
      itemTitle: "Camp Fire",
      itemThumbImg:
        "images/campfire.jpg",
      itemImg:
        "images/campfire.jpg",
      itemDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla lacus quis orci euismod, nec maximus mauris scelerisque. Etiam leo augue, eleifend at pretium et, porta eget tortor. Maecenas eu ante non ligula scelerisque placerat aliquam rutrum enim. Maecenas pulvinar porttitor augue at sodales. Suspendisse at augue quis arcu accumsan consectetur id vestibulum erat.",
      itemPrice: "$46.99+"
    },
    {
      itemTitle: "Boots",
      itemThumbImg:
        "images/boots.jpg",
      itemImg:
        "images/boots.jpg",
      itemDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla lacus quis orci euismod, nec maximus mauris scelerisque. Etiam leo augue, eleifend at pretium et, porta eget tortor. Maecenas eu ante non ligula scelerisque placerat aliquam rutrum enim. Maecenas pulvinar porttitor augue at sodales. Suspendisse at augue quis arcu accumsan consectetur id vestibulum erat.",
      itemPrice: "$92.00+"
    },
    {
      itemTitle: "Bear Spray",
      itemThumbImg:
        "images/bear.jpg",
      itemImg:
        "images/bear.jpg",
      itemDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla lacus quis orci euismod, nec maximus mauris scelerisque. Etiam leo augue, eleifend at pretium et, porta eget tortor. Maecenas eu ante non ligula scelerisque placerat aliquam rutrum enim. Maecenas pulvinar porttitor augue at sodales. Suspendisse at augue quis arcu accumsan consectetur id vestibulum erat.",
      itemPrice: "$16.99"
    },
    {
      itemTitle: "Weapons",
      itemThumbImg:
        "images/weapon.jpg",
      itemImg:
        "images/weapon.jpg",
      itemDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla lacus quis orci euismod, nec maximus mauris scelerisque. Etiam leo augue, eleifend at pretium et, porta eget tortor. Maecenas eu ante non ligula scelerisque placerat aliquam rutrum enim. Maecenas pulvinar porttitor augue at sodales. Suspendisse at augue quis arcu accumsan consectetur id vestibulum erat.",
      itemPrice: "$6.99+"
    }
  ];
  
  function loadData() {
    $.each(PRODUCTS, function (index, item) {
      $("#app").append(`<div id="${index}" class="camping-grid">
      <div class="camp-container">
        <div class="camp-img">
          <img src="${item.itemThumbImg}" alt="">
        </div>
        <div class="overlay">
        </div>
        <h3>${item.itemTitle}</h3>
      </div>
    </div>`);
    });
  
    initListeners();
  }
  
  function initListeners() {
    $(".camping-grid").click(function (e) {
      let itemIndex = e.currentTarget.id;
      console.log(itemIndex);
      $("#app").html(
        `<div class="productPage">
      <div class="productContainer">
        <h2>${PRODUCTS[itemIndex].itemTitle}</h2>
        <div class="productImg">
          <img src="${PRODUCTS[itemIndex].itemImg}" alt="">
        </div>
        <h4>Description</h4>
        <p>${PRODUCTS[itemIndex].itemDescription}</p>
        <div class="price">${PRODUCTS[itemIndex].itemPrice}</div>
        <div class="close">Close</div>
      </div>
    </div>`
      );
  
      addCloseListener();
    });
  }
  
  function addCloseListener() {
    $(".close").click(function () {
      $("#app").html("");
      loadData();
    });
  }
  
  $(document).ready(function () {
    loadData();
  });
  