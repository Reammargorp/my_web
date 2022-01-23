let showBtn = document.querySelector(".show-services .sevicesHTML i")
let showServicesBox = document.querySelector(".show-services-box")
let showServices = document.querySelector(".show-services")
console.log(showBtn)
showBtn.onclick = function() {
    if(showBtn.classList.value === "fas fa-chevron-right") {
        showBtn.classList.remove("fas", "fa-chevron-right")
        showBtn.classList.add("fas", "fa-chevron-down")
        showServicesBox.classList.toggle("active")
        showServices.style.marginBottom = "60px"

    }else {
        showBtn.classList.remove("fas", "fa-chevron-down")
        showBtn.classList.add("fas", "fa-chevron-right")
        showServicesBox.classList.toggle("active")
        showServices.style.marginBottom = "0px"

    }
}
//
//
let showcase = document.querySelector(".showcase")
let showcaseBtn = document.querySelector(".showcase-btn i")
let links = document.querySelector(".links")
console.log(links)
showcaseBtn.onclick = function() {
    if(showcaseBtn.classList.value === "fas fa-bars") {
        showcaseBtn.classList.remove("fas", "fa-bars")
        showcaseBtn.classList.add("fas", "fa-times")
        showcase.classList.toggle("active")
        document.body.style.overflowY = "hidden"
//      showcase.style.marginRight = "-300px"//     document.body.style.paddingRight = "300px"
        // links.style.left = "-100%"
    }else {  
        showcaseBtn.classList.remove("fas", "fa-times")
        showcaseBtn.classList.add("fas", "fa-bars")
        showcase.classList.toggle("active") 
        showcase.style.marginRight = "0px"
        document.body.style.paddingRight = "0px"
        // links.style.marginRight = "0px"
        // links.style.marginleft = "-1000px"

    }

}
//
let electricOne = document.querySelector(".electric-one")
let electricTwo = document.querySelector(".electric-two")
let btnOne = document.querySelector(".btn-one")
let btnTwo = document.querySelector(".btn-two")
let titleBox = document.querySelector(".title-box")
let titleTextOne = document.querySelector(".title-box .One")
let titleTextTwo = document.querySelector(".title-box .Two")
let infoBox = document.querySelector(".info-box")
let infoTextTwo = document.querySelector(".info-box .One")
let infoTextOne = document.querySelector(".info-box .Two")
let KnowMoreOne = document.querySelector(".a-box .One")
let KnowMoreTwo = document.querySelector(".a-box .Two")

// console.log(titleTextTwo)
btnOne.onclick = function() {
    electricOne.classList.toggle("active")
    electricTwo.classList.toggle("active")
    if(electricOne.classList.contains("active"))  {
        titleTextOne.classList.toggle("active")
        titleTextTwo.classList.toggle("active")
        infoTextTwo.classList.toggle("active")
        infoTextOne.classList.toggle("active")
        KnowMoreOne.classList.toggle("active") 
        KnowMoreTwo.classList.toggle("active") 
      } else if (electricTwo.classList.contains("active")) {
        titleTextTwo.classList.toggle("active")
        titleTextOne.classList.toggle("active")
        infoTextTwo.classList.toggle("active")
        infoTextOne.classList.toggle("active")
        KnowMoreOne.classList.toggle("active") 
        KnowMoreTwo.classList.toggle("active") 
    }
}
btnTwo.onclick = function() {
    electricOne.classList.toggle("active")
    electricTwo.classList.toggle("active")
    if(electricOne.classList.contains("active"))  {
        titleTextOne.classList.toggle("active")
        titleTextTwo.classList.toggle("active")
        infoTextTwo.classList.toggle("active")
        infoTextOne.classList.toggle("active")
        KnowMoreOne.classList.toggle("active") 
        KnowMoreTwo.classList.toggle("active") 
      } else if (electricTwo.classList.contains("active")) {
        titleTextTwo.classList.toggle("active")
        titleTextOne.classList.toggle("active")
        infoTextTwo.classList.toggle("active")
        infoTextOne.classList.toggle("active")
        KnowMoreOne.classList.toggle("active") 
        KnowMoreTwo.classList.toggle("active") 
    }
}

setInterval( function (){
    electricOne.classList.toggle("active")
    electricTwo.classList.toggle("active")

    titleTextOne.classList.toggle("active")
    titleTextTwo.classList.toggle("active")
    infoTextTwo.classList.toggle("active")
    infoTextOne.classList.toggle("active")
    KnowMoreOne.classList.toggle("active") 
    KnowMoreTwo.classList.toggle("active") 

},5000)

let cursorX = document.querySelector(".showcase .overlay")

cursorX.onclick = function() {
    showcase.classList.toggle("active")
    showcaseBtn.classList.remove("fas", "fa-times")
    showcaseBtn.classList.add("fas", "fa-bars")
    document.body.style.overflowY = "visible"

}
//
let closeBtn = document.querySelector(".close-btn button")
closeBtn.onclick = function() {
    showcase.classList.toggle("active")
    showcaseBtn.classList.remove("fas", "fa-times")
    showcaseBtn.classList.add("fas", "fa-bars")
    document.body.style.overflowY = "visible"

}

//
let mySkBtn = document.querySelector(".mySkills")
let mySkBorder = document.querySelector(".mySkills .borderOne")
let whoBtn = document.querySelector(".who")
let whoBorder = document.querySelector(".who .borderTwo")
let skills = document.querySelector("skills-box")
let whoMe = document.querySelector(".whoMe")
let skillsBox = document.querySelector(".skills-box")
let progSpan = document.querySelectorAll(".the-progress span")
let works = document.querySelector(".works")
let nums =document.querySelectorAll(".num")

let started = false;
console.log(nums)

  
  function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
      el.textContent++;
      if (el.textContent == goal) {
        clearInterval(count);
      }
    }, 1500 / goal);
  }

//   startCount(document.querySelectorAll(".num")[0]);


mySkBtn.onclick = function() {
    mySkBorder.classList.add("active")
    whoBorder.classList.remove("active")
    skillsBox.classList.add("active")
    whoMe.classList.remove("active")
    // for(let i = 0 ; i < 4 ; i++) {
}
whoBtn.onclick = function() {
    mySkBorder.classList.remove("active")
    whoBorder.classList.add("active")
    skillsBox.classList.remove("active")
    whoMe.classList.add("active")
    // works.style.marginTop = "-1%"
    

}


// let progSpan = document.querySelector(".the-progress span")



//
let reviewTwo = document.querySelector(".review-box-two")
let reviewOne = document.querySelector(".review-box-one")
let slickDots = document.querySelectorAll(".slick-dots li")
setInterval( function (){
    reviewTwo.classList.toggle("active")
    reviewOne.classList.toggle("active")
    for(let i = 0 ;i < slickDots.length; i++) {
        slickDots[i].classList.toggle("active")
    }
    // slickDots[1].classList.toggle("active")
},3000)


                slickDots.forEach((li) => {
                    li.addEventListener("click"  ,(e) => {
                        slickDots.forEach((li) => {
                            li.classList.remove("active")
                        })
                        reviewTwo.classList.toggle("active")
                        reviewOne.classList.toggle("active")
                        e.currentTarget.classList.add("active")
                    })
                }) 



    /////

    let mail = document.querySelector(".mail")
    let phone = document.querySelector(".phone")
    let address = document.querySelector(".address")
        let info = document.querySelector(".info")
    mail.onclick =function() {
        open("mailto:yassienwyh0@gmail.com")
    }
      phone.onclick =function() {
        open("tel:201558854716")
    }   
    address.onclick =function() {
        open("https://www.google.com/maps/place/%D8%AA%D9%82%D9%86%D9%8A%D8%A9+%D8%AF%D9%88%D8%AA+%D9%83%D9%88%D9%85%E2%80%AD/@30.038355,31.2044092,17z/data=!3m1!4b1!4m5!3m4!1s0x145847017326238d:0x5dd5dff64a203fca!8m2!3d30.038355!4d31.2022205?hl=ar")
    }

    //
    let showSearchText = document.querySelector(".show-search-bar [type='text']");
    let showSearchSub = document.querySelector(".show-search-bar .showCase-submit");
    // let showSearchCon = document.querySelector(".search-container");
    // let searchValue = ["website" , "WEBSITE" , "مواقع" , "انشاء"]

    showSearchSub.onclick = function (e) {
        if (showSearchText.value == "website" || showSearchText.value == "WEBSITE" || showSearchText.value == "انشاء" || showSearchText.value == "مواقع" ||  showSearchText.value == "انشاء مواقع" ||  showSearchText.value == "انشاء موقع" || showSearchText.value == "موقع" || showSearchText.value == "انشاء المواقع") {
            showSearchText.value = ""
           open("web.html" ,"")
        }
        if (showSearchText.value == "اسئله" || showSearchText.value == "الاسئله" || showSearchText.value == "الاسئله الشائعه" || showSearchText.value == "مواقع" ||  showSearchText.value == "ask" ||  showSearchText.value == "اFAQS" || showSearchText.value == "faqs") {
            showSearchText.value = ""
            open("ask.html" ,"")
        }
        if (showSearchText.value == "الرئيسيه" || showSearchText.value == "main" ) {
            showSearchText.value = ""
           open("main.html" ,"")
        }
        if (showSearchText.value == "services" || showSearchText.value == "Services" || showSearchText.value == "خدمات" ||   showSearchText.value == "خدمه") {
            showSearchText.value = ""
           open("services.html" ,"")
        } else if (showSearchText.value === ""){
            showSearchText.value = ""

        open("404.html" ,"")
        } else {
            showSearchText.value = ""

            open("404.html" ,"")
        }
      };
      

      //
      let searchText = document.querySelector(".search-bar [type='text']");
      let searchSub = document.querySelector(".search-bar .submit");
      let searchCon = document.querySelector(".search-container");
      let searchValue = ["website" , "WEBSITE" , "مواقع" , "انشاء"]
                console.log(searchText)
      searchSub.onclick = function (e) {
          if (searchText.value == "website" || searchText.value == "WEBSITE" || searchText.value == "انشاء" || searchText.value == "مواقع" ||  searchText.value == "انشاء مواقع" ||  searchText.value == "انشاء موقع" || searchText.value == "موقع" || searchText.value == "انشاء المواقع") {
              searchText.value = ""
             open("web.html" ,"")
          }
          if (searchText.value == "اسئله" || searchText.value == "الاسئله" || searchText.value == "الاسئله الشائعه" || searchText.value == "مواقع" ||  searchText.value == "ask" ||  searchText.value == "اFAQS" || searchText.value == "faqs") {
              searchText.value = ""
              open("ask.html" ,"")
          }
          if (searchText.value == "الرئيسيه" || searchText.value == "main" ) {
              searchText.value = ""
             open("main.html" ,"")
          } if (searchText.value == "services" || searchText.value == "Services" || searchText.value == "خدمات" ||   searchText.value == "خدمه") {
            searchText.value = ""
           open("services.html" ,"")
        } else if (searchText.value === ""){
              searchText.value = ""
  
          open("404.html" ,"")
          } else {
              searchText.value = ""
  
              open("404.html" ,"")
          }
        };
        
        
      //
            //
            //
      //
            //
      //
      let mainSearch =document.querySelector(".main-search")
      let search =document.querySelector(".search")
      let searchClose = document.querySelector(".search-close-btn button")
    //   let search =document.querySelector(".search-bar .text")

console.log(search)
      searchClose.onclick =function() {
          mainSearch.classList.toggle("active")
          searchText.classList.toggle("active")
          document.body.style.overflowY = "visible"

    }
    search.onclick = function() {
          mainSearch.classList.toggle("active") 
            searchText.classList.toggle("active")
            document.body.style.overflowY = "hidden"
        }

      //
      let socialIcon = document.querySelector(".contact-us .social")
      let contactIcon = document.querySelector(".contact-us .contact-icon")
      let contactIconI = document.querySelector(".contact-us .contact-icon i")
console.log(contactIconI)
      contactIcon.onclick = function() {
          socialIcon.classList.toggle("active")
          if(contactIconI.classList.value === "fas fa-comment-dots") {
              contactIconI.classList.remove("fas" ,"fa-comment-dots")
              contactIconI.classList.add("fas", "fa-times")
          }else {
              contactIconI.classList.remove("fas","fa-times")
              contactIconI.classList.add("fas","fa-comment-dots")
          }
      }
      //


      //

      let btnUp = document.querySelector(".btn-up button")
      let mainBtnUp = document.querySelector(".btn-up")
      console.log(btnUp)
      btnUp.onclick = function () {
          window.scrollTo({
              left: 0,
              top: 0,
              behavior: "smooth",
            });
        };
        
      
        let specialSec = document.querySelector(".special")
        let cloudBox = document.querySelector(".special .cloud-box")
        let moneyBox = document.querySelector(".special .money-box")
        let mobileBox = document.querySelector(".special .mobile-box")
        let workHandSec = document.querySelector(".works .main-box .hands ")
        let workDesignSec = document.querySelector(".works .main-box .designer")
        let workWebSec = document.querySelector(".works .main-box .website")
        let workExpertSec = document.querySelector(".works .main-box .expert")
        let reviewBox = document.querySelector(".review")
        let reviewSec = document.querySelector(".review")
        let skillSec = document.querySelector(".skill")
        let footer =document.querySelector(".footer")
        console.log()
        window.onscroll = function(){
            if(window.scrollY >= 500) {
              btnUp.style.opacity = "1"
              mainBtnUp.style.zIndex  = "100"
            }
            if(window.scrollY <= 500) {
              btnUp.style.opacity = "0"
              mainBtnUp.style.zINdex = "-100"
            }
            if(window.scrollY >= specialSec.offsetTop -400) {
                specialSec.classList.add("active")
                cloudBox.classList.add("active")
                mobileBox.classList.add("active")
                moneyBox.classList.add("active")
              }
              if(window.scrollY >= skillSec.offsetTop -300) {
                progSpan[0].style.width = "90%"
                progSpan[1].style.width = "85%"
                progSpan[2].style.width = "76%"
                skillsBox.classList.add("toggle")
              }

            if(window.scrollY >= works.offsetTop -300) {
                workHandSec.classList.add("active")
                workDesignSec.classList.add("active")
                workWebSec.classList.add("active")
                workExpertSec.classList.add("active")
                    if (!started) {
                        nums.forEach((num) => startCount(num))
                    }
                    started = true
                }
        
            if(window.scrollY >= reviewSec.offsetTop - 300) {
                    reviewBox.classList.add("active")
        }
            if(window.scrollY >= info.offsetTop - 300) {
                    info.classList.add("active")
        }
        
            if(window.scrollY >= footer.offsetTop - 500) {
                    footer.classList.add("active")
        }
        
        }
      //         
