// let count = "";
// let i = 0;
// count = () => {

//     for (let i = 8; i<=22; i++){

//         let listtocount = document.querySelector('dom-count ul')
//         listtocount.forEach(function(item) {
//             item.innerHtml = i;
//         }
//     }
//  }  
//  function count(){
    
//     // let contar = document.createElement('p');
//     // contar.innerHTML = i;

//     for (let i = 8; i<=22; i++){
        
//         let contar = document.getElementById('dom-count');
//         contar.innerHTML = i;

//     }
//  }
function alerta(){
    
    let mylist = document.querySelectorAll('dom-count p');
    var text = ''; 
    
    for (Element of mylist){

        text += mylist;
    }
    alert(text);
}