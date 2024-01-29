let mainEL = document.querySelector('main');
mainEL.style.backgroundColor = "var(--main-bg)";
mainEL.innerHTML = '<h1>DOM Manipulation</h1>';
mainEL.classList.add("flex-ctr")

const topMenuEL = document.getElementById("top-menu");
topMenuEL.style.height = "100%"
topMenuEL.style.backgroundColor = "var(--top-menu-bg)";
topMenuEL.classList.add("flex-around")

//Part 3
let subMenuEl = document.getElementById('sub-menu')
subMenuEl.style.height = "100%"
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

//Part 4

let topMenuLinks = topMenuEL.children

var menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
];

let intLinks = []



for (let i of menuLinks) {
    const link = document.createElement("a");
    link.innerText = i.text;
    link.href = `${i.href}`;
    link.id = i.text
    link.addEventListener('click', handleClick);
    topMenuEL.appendChild(link);
    //console.log(i.subLinks)

    // subLinks = menuLinks

    if (i.subLinks) {

        //  for(let slink of i.subLinks ){
        //     console.log(i.subLinks[0])

        // }
        // for(let x=0; x<= i.subLinks.length; x++)
        // if(i.subLinks[x]){
        //     console.log(i.subLinks[x])
        
        

        // }
        
        //break
    }
}

function closeClick(e){
    e.preventDefault()
    subMenuEl.style.top = "0";
}

function handleClick(e) {
    e.preventDefault();
    //console.log(e)
    clickedLink = e.target
    //console.log(clickedLink.id)
    clickedLink.classList.add("active");
    subMenuEl.style.height = "100%";

   // console.log(subLinks.text)

   if(clickedLink.id == "about"){
    mainEL.innerHTML = '<h1>ABOUT</h1>';
    mainEL.classList.add("flex-ctr")
   }

   if(clickedLink.id == "catalog"){
    // const link = document.createElement("a");
        // link.innerText = i.subLinks[x].text;
        // link.href = `${i.subLinks[x].href}`;
        // link.addEventListener('click', closeClick);
        // subMenuEl.appendChild(link);

   }
   if(clickedLink.id == "orders"){
    // const link = document.createElement("a");
        // link.innerText = i.subLinks[x].text;
        // link.href = `${i.subLinks[x].href}`;
        // link.addEventListener('click', closeClick);
        // subMenuEl.appendChild(link);
    
   }

   if(clickedLink.id == "account"){
    // const link = document.createElement("a");
        // link.innerText = i.subLinks[x].text;
        // link.href = `${i.subLinks[x].href}`;
        // link.addEventListener('click', closeClick);
        // subMenuEl.appendChild(link);
    
   }

    const otherLinks = document.querySelectorAll("a");
    otherLinks.forEach((link) => {
        //console.log(link)
        if (link !== clickedLink) {
          link.classList.remove("active");
        }
      });
}

 //console.log(subLinks)






