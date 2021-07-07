// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.
*/
function menuMaker() {

  let menu = document.createElement('div');

  menu.classList.add('menu');

  let container = document.querySelector('.header');
  container.prepend(menu);
 

//  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. Add those items to the <ul>

let list = document.createElement('ul');

menu.appendChild(list);

menuItems.forEach(data => {
  const listItem = document.createElement('li');
  listItem.textContent = data;
  list.appendChild(listItem);
    return listItem;  
  });

//  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').


let menuButton = document.querySelector('.menu-button');



// Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

menuButton.addEventListener('click', function() {
  menu.classList.toggle('.menu--open');
})
  // Step 5: Don't forget to return your div.menu.
return menu;

// Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
}

let container = document.querySelector('.header');

const newMenuItems = menuMaker(menuItems);
container.appendChild(newMenuItems);
