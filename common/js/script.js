// ハンバーガーメニュー
$(function(){
    $('#hamburger').on('click',function(){
      $('#hamburger').toggleClass("open");
      $('#header_menu').slideToggle();
    });
  });

// ラジオボタン　リンク
$(document).ready(function () {
  // URLのクエリパラメータを取得
  const urlParams = new URLSearchParams(window.location.search);
  const tab = urlParams.get("tab");

  if (tab === "food") {
      document.querySelector(".food").checked = true;
  } else if (tab === "drink") {
      document.querySelector(".drink").checked = true;
  }
});