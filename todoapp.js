//UI vars
const form = document.querySelector('form');
const input=document.querySelector('#txtTaskName');
const btnDeleteAll=document.querySelector('#btnDeleteAll')
const taskList = document.querySelector('#task-list');


eventListeners();

function eventListeners(){
    form.addEventListener('submit',addNewItem);
}

//add new item
function addNewItem(e){
    if(input.value === ''){
        alert('add new item') //eğer kullanıcı hiçbir şey girmez ve submitlerse diye alert eklenildi.
    }

    //create li
    const li=document.createElement('li'); //kullanıcı listeye bir şey eklediğinde eklenebilmesi için yapılan ilk adım
    li.className='list-group-item-list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value)); //girilen değerin text olarak geri dönmesini sağlıyoruz.

    //Create a
    const a = document.createElement('a');
    a.classList='delete-item float-right';
    a.innerHTML='<i class="fas fa-times"></i>';
    a.setAttribute('href','#');

    // A to Li
    li.appendChild(a); //li etiketinin içerisinde a etiketinin gelmesini sağladık

    // add li to ul

    taskList.appendChild(li);

    //Clear input
    input.value= ''; //bunu yazarak input girildikten sonra input kutusunun içerisinin temizlenmesini sağlıyoruz.


    e.preventDefaault(); // sayfanın yenilenmesini engelledik.
}