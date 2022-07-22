const addNote = document.querySelector(".icon-box-add");
const tasksContainer = document.querySelector(".container");
const input = document.querySelector("input");
const heart= ` <span class="icon-heart"></span> `

//  to add new task

addNote.addEventListener("click", (eo) => {
  eo.preventDefault();
  const newTask = ` <div class="tasks">
  <span class="icon-star-full"></span>
  <p> ${input.value} </p>
  <div class="bin-Angry">
      <span class="icon-bin"></span>
      <span class="icon-angry2"></span>
  </div>
</div>`;

  tasksContainer.innerHTML += newTask;
  input.value='';
});



//  to make changes at the single task div

tasksContainer.addEventListener("click", (eo) => {
    
    
  switch (eo.target.className) {
    
    case "icon-star-full":
      eo.target.classList.add('goldenStar');
      tasksContainer.prepend(eo.target.parentElement)
      break;

      case "icon-star-full goldenStar":
      eo.target.classList.remove('goldenStar');
      break;

      case "icon-bin":
        eo.target.parentElement.parentElement.remove();
 break;

 case "icon-angry2" :
  eo.target.classList='icon-heart'; 
  eo.target.parentElement.parentElement.getElementsByTagName("p")[0].classList.add('textDecor');
  //html  هذا الكود الذي يغير في بنية 
  // يجب ان يكون في نهاية اكواد نفس القوس
  // eo.target.parentElement.innerHTML+=heart;
  // و لكننا استخدمنا طريقة مباشرة و سهلة بتغيير الكلاس
  break;

  case 'icon-heart':
    eo.target.classList=('icon-angry2');
    eo.target.parentElement.parentElement.getElementsByTagName("p")[0].classList.remove('textDecor');

  
default:

  break;
  



      
     
  }
});




