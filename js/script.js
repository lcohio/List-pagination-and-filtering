/******************************************
List Filter and Pagination
******************************************/
   
// Global Variables

const headerDiv = document.getElementsByClassName('page-header')[0];
const studentName = document.getElementsByTagName('h3');
const studentList = document.getElementsByClassName('student-item');
const numberOfItems = 10;

// Function creates a range of list items and displays them respective to
// the page number the user clicks

const showActivePage = (list, page) => {
   const upper = page*numberOfItems - 1;
   const lower = upper - 9;
   for(let i=0; i<list.length; i+=1) {
      if(i>=lower && i<=upper) {
         list[i].style.display = 'block';
      } else {
         list[i].style.display = 'none';
      }
   }
}

// Function creates a search component element

const searchComponent = () => {
   const searchDiv = document.createElement('div');
   searchDiv.className = 'search-component';
   const searchBox = document.createElement('input');
   searchBox.id = 'search';
   searchBox.placeholder = 'Search';
   searchBox.setAttribute('onKeyUp', 'filterList()');
   searchDiv.appendChild(searchBox);
   headerDiv.appendChild(searchDiv);
}

// Call the function to render search box to DOM

searchComponent();

// Function creates pagination buttons and handles their clicks

const appendPageLinks = (list) => {
   const allPages = Math.ceil(list.length/numberOfItems);
   const paginationDiv = document.createElement('div');
   paginationDiv.className = 'pagination';
   const pageDiv = document.getElementsByClassName('page')[0];
   pageDiv.appendChild(paginationDiv);
   const pageList = document.createElement('ul');
   paginationDiv.appendChild(pageList);
   for(let i=1; i<=allPages; i+=1) {
      const pageListItem = document.createElement('li');
      const pageLink = document.createElement('a');
      pageList.appendChild(pageListItem);
      pageListItem.appendChild(pageLink);
      pageLink.textContent = i;
      pageLink.addEventListener('click', (e) => {
         showActivePage(studentList, e.target.textContent);
      });
   }    
}

// Function enables search behavior to hide unmatched searches

const filterList = () => {
   let input = document.getElementById('search').value; 
   input = input.toLowerCase();    
   for (i=0; i<studentList.length; i+=1) {  
      if (studentList[i].textContent.toLowerCase().includes(input)) { 
         studentList[i].style.display = ''; 
      } else {
         studentList[i].style.display = 'none';             
      }
   }
}



// Call showActivePage() so 10 items are displayed when the DOM loads

showActivePage(studentList, 1);

// Call appendPageLinks() so the pagination buttons are rendered when the DOM loads

appendPageLinks(studentList);




