let showBtn = document.querySelector(".show-services .sevicesHTML i")
let showServicesBox = document.querySelector(".show-services-box")
let showServices = document.querySelector(".show-services")
console.log(showBtn)
showBtn.onclick = function() {
    if(showBtn.classList.value === "fas fa-chevron-right") {
        showBtn.classList.remove("fas", "fa-chevron-right")
        showBtn.classList.add("fas", "fa-chevron-down")
        showServicesBox.classList.toggle("active")
        showServices.style.marginBottom = "55px"

    }else {
        showBtn.classList.remove("fas", "fa-chevron-down")
        showBtn.classList.add("fas", "fa-chevron-right")
        showServicesBox.classList.toggle("active")
        showServices.style.marginBottom = "0px"

    }
}
//
let showcase = document.querySelector(".showcase")
let showcaseBtn = document.querySelector(".showcase-btn i")
let links = document.querySelector(".links")
// console.log(links)
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
   //
   let showSearchText = document.querySelector(".show-search-bar [type='text']");
   let showSearchSub = document.querySelector(".show-search-bar .showCase-submit");
   // let showSearchCon = document.querySelector(".search-container");
   // let searchValue = ["website" , "WEBSITE" , "??????????" , "??????????"]

   showSearchSub.onclick = function (e) {
       if (showSearchText.value == "website" || showSearchText.value == "WEBSITE" || showSearchText.value == "??????????" || showSearchText.value == "??????????" ||  showSearchText.value == "?????????? ??????????" ||  showSearchText.value == "?????????? ????????" || showSearchText.value == "????????" || showSearchText.value == "?????????? ??????????????") {
           showSearchText.value = ""
          open("web.html" ,"")
       }
       if (showSearchText.value == "??????????" || showSearchText.value == "??????????????" || showSearchText.value == "?????????????? ??????????????" || showSearchText.value == "??????????" ||  showSearchText.value == "ask" ||  showSearchText.value == "??FAQS" || showSearchText.value == "faqs") {
           showSearchText.value = ""
           open("ask.html" ,"")
       }
       if (showSearchText.value == "????????????????" || showSearchText.value == "main" ) {
           showSearchText.value = ""
          open("index.html" ,"")
       }
       if (showSearchText.value == "services" || showSearchText.value == "Services" || showSearchText.value == "??????????" ||   showSearchText.value == "????????") {
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
     let searchValue = ["website" , "WEBSITE" , "??????????" , "??????????"]
               console.log(searchText)
     searchSub.onclick = function (e) {
         if (searchText.value == "website" || searchText.value == "WEBSITE" || searchText.value == "??????????" || searchText.value == "??????????" ||  searchText.value == "?????????? ??????????" ||  searchText.value == "?????????? ????????" || searchText.value == "????????" || searchText.value == "?????????? ??????????????") {
             searchText.value = ""
            open("web.html" ,"")
         }
         if (searchText.value == "??????????" || searchText.value == "??????????????" || searchText.value == "?????????????? ??????????????" || searchText.value == "??????????" ||  searchText.value == "ask" ||  searchText.value == "??FAQS" || searchText.value == "faqs") {
             searchText.value = ""
             open("ask.html" ,"")
         }
         if (searchText.value == "????????????????" || searchText.value == "main" ) {
             searchText.value = ""
            open("index.html" ,"")
         } if (searchText.value == "services" || searchText.value == "Services" || searchText.value == "??????????" ||   searchText.value == "????????") {
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
     let communicationSearchText = document.querySelector(".communication-search-bar [type='text']");
     let communicationSearchSub = document.querySelector(".communication-search-bar .submit");
     communicationSearchSub.onclick = function (e) {
       if (communicationSearchText.value == "website" || communicationSearchText.value == "WEBSITE" || communicationSearchText.value == "??????????" || communicationSearchText.value == "??????????" ||  communicationSearchText.value == "?????????? ??????????" ||  communicationSearchText.value == "?????????? ????????" || communicationSearchText.value == "?????????? ??????????????" || communicationSearchText.value == "????????") {
           communicationSearchText.value = ""
          open("web.html" ,"")
     }
       if (communicationSearchText.value == "??????????" || communicationSearchText.value == "??????????????" || communicationSearchText.value == "?????????????? ??????????????" || communicationSearchText.value == "??????????" ||  communicationSearchText.value == "ask" ||  communicationSearchText.value == "??FAQS" || communicationSearchText.value == "faqs") {
           communicationSearchText.value = ""
           open("ask.html" ,"")
       }
       if (communicationSearchText.value == "????????????????" || communicationSearchText.value == "main" ) {
           communicationSearchText.value = ""
          open("index.html" ,"")
       }  if (communicationSearchText.value == "services" || communicationSearchText.value == "Services" || communicationSearchText.value == "??????????" ||   communicationSearchText.value == "????????") {
           communicationSearchText.value = ""
          open("services.html" ,"")
       } else if (communicationSearchText.value === ""){
           communicationSearchText.value = ""

       open("404.html" ,"")
       } else {
           communicationSearchText.value = ""

           open("404.html" ,"")
       }
     };
            let resultSearchText = document.querySelector(".result-search-bar [type='text']");
            let resultSearchSub = document.querySelector(".result-search-bar .submit");

            resultSearchSub.onclick = function (e) {
                  if (resultSearchText.value == "website" || resultSearchText.value == "WEBSITE" || resultSearchText.value == "??????????" || resultSearchText.value == "??????????"|| resultSearchText.value == "?????????? ??????????????" ||  resultSearchText.value == "?????????? ??????????" ||  resultSearchText.value == "?????????? ????????" || resultSearchText.value == "????????") {
                      resultSearchText.value = ""
                     open("web.html" ,"")
                  }
                  if (resultSearchText.value == "??????????" || resultSearchText.value == "??????????????" || resultSearchText.value == "?????????????? ??????????????" || resultSearchText.value == "??????????" ||  resultSearchText.value == "ask" ||  resultSearchText.value == "??FAQS" || resultSearchText.value == "faqs") {
                      resultSearchText.value = ""
                      open("ask.html" ,"")
                  }
                  if (resultSearchText.value == "????????????????" || resultSearchText.value == "main" ) {
                      resultSearchText.value = ""
                     open("index.html" ,"")
                  }
                if (resultSearchText.value == "services" || resultSearchText.value == "Services" || resultSearchText.value == "??????????" ||   resultSearchText.value == "????????") {
                    resultSearchText.value = ""
                    open("services.html" ,"")
                }else if (resultSearchText.value === ""){
                      resultSearchText.value = ""
                  open("404.html" ,"")
                  } else {
                      resultSearchText.value = ""
          
                      open("404.html" ,"")
                  }
                };
                

        
      //
      //
      //
      let mainSearch =document.querySelector(".main-search")
      let search =document.querySelector(".search")
      let searchClose = document.querySelector(".search-close-btn button")
    //   let search =document.querySelector(".search-bar .text")

// console.log(search)
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
// console.log(contactIconI)
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
    //   console.log(btnUp)
        btnUp.onclick = function () {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth",
        });
        };
        window.onscroll = function(){
            if(window.scrollY >= 500) {
              btnUp.style.opacity = "1"
              mainBtnUp.style.zIndex  = "100"
            }
            if(window.scrollY <= 500) {
              btnUp.style.opacity = "0"
              mainBtnUp.style.zINdex = "-100"
            }
            
        }
      //