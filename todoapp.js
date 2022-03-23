//UI vars
const form = document.querySelector('form');
const input=document.querySelector('#txtTaskName');
const btnDeleteAll=document.querySelector('#btnDeleteAll')
const taskList = document.querySelector('#task-list');
// const items = ['item1','item2'];


//eventlisteners
eventListeners();

function eventListeners(){
    form.addEventListener('submit',addNewItem);
    //delete item
    taskList.addEventListener('click',deleteItem);
    //delete all item
    btnDeleteAll.addEventListener('click',deleteAllItem);

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

//delete an item

function  deleteItem(e);{
    ıf(e.target.className==='fas fa-times')
    {
        console.log(e.target);
        e.target.parentElement.parentElement.remove();
    }
         // fas dediğiiz i etiketi olduğundan bir üst eleman olan a etiketine ve onunda bir üst elemanı olan asıl silmek istediğimiz li etiketine çıkmak için iki kere parent element kullandık.
    
    e.preventDefaault();
}

//delete all item
function deleteAllItem();{
  
    taskList.innerHTML=''; // tüm li ileri temizlemiş oluyoruz bu komut ile.

    e.preventDefaault();

}