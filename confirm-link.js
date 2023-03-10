/*
  확인 메세지 출력 후 이동하는 링크 구현

  만든이: 피카츄
*/

window.addEventListener("load", () => {
  const confirmLinkList = document.querySelectorAll(".confirm-link");
  for (let i = 0; i < confirmLinkList.length; i++) {
    confirmLinkList[i].addEventListener("click", (e) => {
      const text = this.dataset.confirmMsg || "정말 이동하시겠습니까?";
      e.preventDefault();
      console.log(text);
      const choice = window.confirm(text);
      // if (!choice) {
      //   e.preventDefault();
      // }
    });
  }
});
