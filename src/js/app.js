import {
   getId,
   getClass,
   getAll,
   listener,
   getName,
   ajax,
   ruteImg,
   rutePeticion,
} from './library/library';




// =============== Section menu  ==============
let active = getId("icon-hamburger"),
   menu = getId("menu-principal"),
   header = getId("header-principal");


// Active menu
listener(active, 'click', () => {
   header.classList.toggle("active")

})

//  active text
listener(menu, 'click', (e) => {
   let a = e.target.parentElement,
      span = e.target.parentElement.parentElement,
      li = getAll('menu-item')



   if (a.nodeName == "LI") {
      clearItem(li)
      a.classList.add('active')
   } else if (span.nodeName == "LI") {
      clearItem(li)
      span.classList.add('active')
   }
   header.classList.toggle("active")
})

//  clear item active 
let clearItem = (li) => {
   li.forEach(item => {
      item.classList.remove('active')
   });
}