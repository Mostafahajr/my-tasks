// var course = {
//     courseName:"PHP",
//     courseDesc:"dkjashdashdlkaj",
//     courseOwner:"mostafa hajr"
// };

// function courseInfo(course) {
//     let {courseName:courseName, courseDesc:courseDesc,courseOwner:courseOwner}=course;


//     console.log("name :"+courseName,",Desc :"+courseDesc, ",Owener :"+courseOwner);

// }

// courseInfo(course);



// -----------------------------------------

// class shape{
//     constructor(name){
        
        
//         this.name = name;
        
//         if (this.constructor === shape) {
//             throw "Can't instantiate abstract class!";
//           }
//     }

//     area() {
//         throw "no  data enter";   
//     }

//     pre(){
//         throw "no  data enter"; 
//     }
// }

// class rectangle extends shape{
//     constructor(name,l,w){
//         super(name);
//         this.l = l;
//         this.w = w;
//     }

//     area(){
//         return `name : ${this.name} , area : ${this.l*this.w}`;
//     }

//     pre(){
//         return `name : ${this.name} , premeter : ${(this.l+this.w) * 2}`;
//     }
// }
// class square extends shape{
//     constructor(name,l){
//         super(name);
//         this.l = l;
        
//     }

//     area(){
//         return `name : ${this.name} , area : ${this.l*this.l}`;
//     }

//     pre(){
//         return `name : ${this.name} , premeter : ${this.l * 4}`;
//     }
// }

// class circle extends shape{
//     constructor(name,raduis){
//         super(name);
//         this.raduis = raduis;
        
//     }

//     area(){
//         return `name : ${this.name} , area : ${(this.raduis*this.raduis)*3.14}`;

//     }

//     pre(){
//         return `name : ${this.name} , premeter : ${2*this.raduis*3.14}`;
//     }
// }



// let rec = new rectangle("rectangle",4,3);
// let squar = new square("square",4);
// let cir = new circle("circle",3);


// console.log(cir.area());

// ----------------------------------------------------------------

// let usersUrl = 'https://jsonplaceholder.typicode.com/users';
// let postsUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

// let tabsContainer = document.querySelector('.tabs');
// let postsContainer = document.querySelector('.posts tbody');

// // Fetch and display user tabs
// fetch(usersUrl)
//     .then(response => response.json())
//     .then(users => {
//         users.forEach(user => {
//             let tab = document.createElement('div');
//             tab.className = 'tab';
//             tab.textContent = user.name;
//             tab.dataset.userId = user.id;
//             tab.addEventListener('click', () => fetchUserPosts(user.id, tab));
//             tabsContainer.appendChild(tab);
//         });
//     })
//     .catch(error => console.error('Error fetching users:', error));


// async function fetchUserPosts(userId, tabElement) {
//     try {
//         let response = await fetch(`${postsUrl}${userId}`);
//         if (!response) {
//             throw new Error('Failed to fetch posts');
//         }
//         let posts = await response.json();
//         displayPosts(posts);
        
//         document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
//         tabElement.classList.add('active');
//     } catch (error) {
//         console.error('Error fetching posts:', error);
//     }
// }


// function displayPosts(posts) {
//     postsContainer.innerHTML = '';
//     posts.forEach((post, index) => {
//         let row = document.createElement('tr');
//         let cellIndex = document.createElement('td');
//         let cellTitle = document.createElement('td');
        
//         cellIndex.textContent = index + 1;
//         cellTitle.textContent = post.title;
        
//         row.appendChild(cellIndex);
//         row.appendChild(cellTitle);
//         postsContainer.appendChild(row);
//     });
// }

// --------------------------------------------------------------------


let usersUrl = "https://jsonplaceholder.typicode.com/users";
let postsUrl = "https://jsonplaceholder.typicode.com/posts?userId=";



fetch(usersUrl)
.then(response => response.json())
.then(users => {
    let tabs =``;
    users.forEach(user => {
        tabs += ` <li onclick ="get_posts(${user.id})">
                        ${user.name}
                    </li>`
    })

    document.getElementById("ul_body").innerHTML = tabs;
})


async function get_posts(userId) {
    try {
        let posts_json = await fetch(postsUrl+userId)
        let posts = await posts_json.json();
        console.log(posts);
        cartoona =``;
        posts.forEach(post => {
            cartoona += `
                 <div class="accordion my-3" id="post">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${post.id}" aria-expanded="true" aria-controls="collapse${post.id}">
                      ${post.title}
                    </button>
                  </h2>
                  <div id="collapse${post.id}" class="accordion-collapse collapse " data-bs-parent="#post">
                    <div class="accordion-body">
                    ${post.body}
                    </div>
                  </div>
                </div>
                
              </div>
            `
        });
        document.getElementById("content").innerHTML = cartoona;

    } catch (error) {
        
    }
}


