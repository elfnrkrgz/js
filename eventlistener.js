//event oluşturulabilmesi için bir nesnenin seçilebilmesi lazım 
const btn = document.querySelector('#btnDeleteAll');
// btn.addEventListener('click',btnClick(){
//    // console.log('btn clicked')

// }); //kullanıcının yapacağı olayı parametre olarak verip ikinci parametre olarak da fonk oluşturulur.


function btnClick(){
    console.log('btn clicked');
} // neden ayrı bir fonksiyon olarak yazılıyor ? başka bir event içinde de kullanımı kolaylaştırmak için ayrı bir fonksiyon olarak yazılıyor.

// html sayfalarında a etiketlerine verilen href="#" kısmında bir linke gitmesi gerektiği görevi verilir ve href bunu yerine getirmek için
//sayfayı yeniler ve yukarı çıkar eğer biz bunu önlemek istiyorsak fonksiyonun içerisine 

//e parematresini vererek e.preventDefault (); olarak bunu ortadan kaldırabiliriz.


//kullanıcı mouseover , click gibi eylemler yaparak event gerçekleştirir.

//MOUSE EVENT DERSİ

//click

const btnn = document.querySelector(' #BtnDeleteAll');
const ul = document.querySelector('#task-list');

btn.addEventListener('click',eventHandler);

function eventHandler(event){
    console.log('event type : ${event.type}');
}

//double click
btn.addEventListener('dblclick',eventHandler);

//mouse down 
btn.addEventListener('mousedown',eventHandler);

//mouse up
btn.addEventListener('mouseup',eventHandler);

//mouse enter
btn.addEventListener('mouseenter',eventHandler);
//mouse over
btn.addEventListener('mouseover',eventHandler);


//seçilen elemanların koordinat düzlerimlerindeki konumlarını da event ile dinlemek mümkündür. Örneğin;
const h5 = document.querySelector('h5');
ul.addEventListener('mousemove',eventHandler);
function eventHandler(event){
    console.log(`event type: ${event.type}`);
    h5.textContent = `Mouse X : ${event.offsetX}
    Mouse Y: ${event.offsetY}`;
}


//Keyborad events lerde vardır google üzerinde kodları mevcut.
//not formları submit olabilmesi için action göstermeleri gerekmektedir. action değeri verildikten sonra submitlenir.


//event bubbling
const form= document.querySelector('form');
const cardBody = document.querySelector('.card-body');
const card = document.querySelector('.card');
const container = document.querySelector('.container');

form.addEventListener('click',function(){
    console.log('form');
    //e.stopPropagation();
});
form.addEventListener('click',function(){
    console.log('.card-body');
    //e.stopPropagation();
});

form.addEventListener('click',function(){
    console.log('.card');
    //e.stopPropagation();
});

form.addEventListener('click',function(){
    console.log('.container');
    //e.stopPropagation();
});

//içten dışa doğru aktarıp söz konusudur.Sayfa üzerinden form a tıklanıldığı zaman sırasıyla form,cardbody
//Card ve container de cevap verir fakat sadece container olduğunda en sonda olduğundan devamında bir şey olmadığından sadece container cevap verir
//bizler her zaman forma tıklanıldığında hepsinin gelmesini istemeyebiliriz bu noktada yapmak istediğimiz
//e.stopPropagation(); 'ununu eventlistener içerisine eklemeliyiz.



//event capturing yukarıdakinin aynısıdır fakat ama tersten sonra doğru ilerlenir.



//NOOOOOOTTTT

// local storage ve session storage arasındaki fark;
// local storage üzerinde kayıt edilen bilgiler tarayıcı kapatılsa dahi arka planda kayıt altında tutulur fakat session da olanlar sadece tarayıcı 
// açıkken kayıt altındadır url değiştirilip kapatıldığında sonradan bakılırsa bu bilgilerin silindiği görülecektir

//set item ile vermek istediğim itemleri 
//get item ile de almak istediğim itemleri alırım
//remove item ile eleman silinir
//clear elemanı ile tüm elemanlar silinir.