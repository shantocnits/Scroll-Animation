function reveal(){
    let item = document.querySelectorAll("h2");
    for (var i = 0; i < item.length; i++){
      let windowHeight = window.innerHeight;
      let elementTop = item[i].getBoundingClientRect().top;
      let elementVisible = 300;

      if (elementTop < windowHeight - elementVisible){
        item[i].classList.add("active");
      } else {
        item[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll" , reveal);