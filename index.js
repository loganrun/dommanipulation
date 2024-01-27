let mainEL = document.querySelector('main');
mainEL.style.backgroundColor = "var(--main-bg)";
mainEL.innerHTML = '<h1>DOM Manipulation</h1>';
mainEL.classList.add("flex-ctr")

const topMenuEL = document.getElementById("top-menu");
topMenuEL.style.height = "100%"
topMenuEL.style.backgroundColor = "var(--top-menu-bg)";
topMenuEL.classList.add("flex-around")

// var menuLinks = [
//   { text: "about", href: "/about" },
//   { text: "catalog", href: "/catalog" },
//   { text: "orders", href: "/orders" },
//   { text: "account", href: "/account" },
// ];

// menuLinks.forEach((i) => {
//       const link = document.createElement("a");
//       link.innerText = i.text;
//       link.href = `${i.href}`;
//       topMenuEL.appendChild(link);
//     });

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

for (let i of menuLinks) {
    const link = document.createElement("a");
    link.innerText = i.text;
    link.href = `${i.href}`;
    topMenuEL.appendChild(link);

    if (i.subLinks) {
        
        for(let x=0; x<3; x++){
            console.log(i.subLinks[x])

        }
    }


}






