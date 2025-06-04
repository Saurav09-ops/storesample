let item = document.querySelectorAll(".jsitem");
console.log(item[2].id);
item.forEach((a) => {
  a.addEventListener("mouseenter", () => {
    let i = a.id;
    document.querySelector(`.i${i}`).setAttribute("src", `./assest/${i}2.avif`);
  });
  a.addEventListener("mouseleave", () => {
    let i = a.id;
    document.querySelector(`.i${i}`).setAttribute("src", `./assest/${i}1.avif`);
  });
});

document.querySelector(".info").addEventListener("mouseenter", () => {
  setTimeout(() => {
    document.querySelector(".tit").setAttribute("style", "display:none");
  }, 350);
});

document.querySelector(".info").addEventListener("mouseleave", () => {
  document.querySelector(".tit").removeAttribute("style");
  document.querySelector(".tit").classList.add("test");
  setTimeout(() => {
    document.querySelector(".tit").classList.add("test2");
  }, 100);
  setTimeout(() => {
    document.querySelector(".tit").classList.remove("test");
    document.querySelector(".tit").classList.remove("test2");
  }, 200);
});
