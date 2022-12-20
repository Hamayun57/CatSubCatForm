//CategoryCounter
var counter = 1;
//ArrayForStoringCategoryDivId
var dynamicInput = [];
//IdForCategoriesParent'sDiv
dynamicInput[0] = "cat";
//SubcategoryCounter
var subCatCounter = 0;
//ArrayForStoringSubcategoryDivId
var dynamicInputsSubCat = [];

//onClick function for Add Category
function addInput() {
  var newdiv = document.createElement("div");

  

  newdiv.id = "cat_" + counter;
  dynamicInput[counter] = newdiv.id;
  newdiv.innerHTML =
    '<br><input type="text" name="myInputs[]" placeholder="Enter A Category" class="m-2"> <input type="button" value="Category -" class="m-2 btn btn-warning" onClick="removeInput(\'' +
    dynamicInput[counter] +
    '\')"><input type="button" class="m-2 btn btn-primary" value="SubCategory +"  onClick="addSubInput(\'' +
    dynamicInput[counter] +
    '\')"> <Button id="btn_up" type="button" class="btn  btn-success  category_up" onClick="addUpCat(\'' + dynamicInput[counter]+ '\')"> up </Button> <Button id="btn_down" type="button" class="btn btn-warning category_down" onClick="clickDownCat(\''+dynamicInput[counter]+'\')"> down </Button> ';
  document.getElementById(dynamicInput[0]).appendChild(newdiv);
  newdiv.style.border = '1px solid black';
  newdiv.style.marginBottom = '1rem';
  if(newdiv.previousElementSibling == null){
    newdiv.querySelector('#btn_down').style.display = 'none';
    newdiv.querySelector('#btn_up').style.display = 'none';
  }
  else{
    if(dynamicInput.length <= 3){
      newdiv.parentElement.firstElementChild.querySelector('#btn_up').style.display = 'none';
      newdiv.parentElement.firstElementChild.querySelector('#btn_down').style.display = 'inline';
      newdiv.querySelector('#btn_up').style.display = 'inline';
      newdiv.querySelector('#btn_down').style.display = 'none';
    }
    else{
      newdiv.parentElement.firstElementChild.querySelector('#btn_up').style.display = 'none';
      newdiv.parentElement.firstElementChild.querySelector('#btn_down').style.display = 'inline';
      newdiv.previousElementSibling.querySelector('#btn_up').style.display = 'inline';
      newdiv.previousElementSibling.querySelector('#btn_down').style.display = 'inline';
      newdiv.querySelector('#btn_up').style.display = 'inline';
      newdiv.querySelector('#btn_down').style.display = 'none';
    }
    
  }

 counter++;
}

//onClick function for Add SubCategory
function addSubInput(id) {
  // console.log(id);

  var subCat = document.createElement("div");

  subCat.id = id + "_subCat_" + subCatCounter;
  // console.log(subCat.id);
  dynamicInputsSubCat[subCatCounter] = subCat.id;


  subCat.innerHTML =
    ' <br><input type="text" name="myInputs[]" placeholder="Enter A Sub Category" class="m-2"> <input type="button" value="Subcategory -" class="m-2 btn btn-warning" onClick="removeASubCat(\'' +
    dynamicInputsSubCat[subCatCounter] +
    '\')"> <Button id="btn_up" type="button" class="btn  btn-success" onClick="addUpSubCat(\'' + dynamicInputsSubCat[subCatCounter]+ '\')"> up </Button> <Button id="btn_down" type="button" class="btn btn-warning" onClick="clickDownSubCat(\''+dynamicInputsSubCat[subCatCounter]+'\')"> down </Button> ';
  document.getElementById(id).appendChild(subCat);
  
  var previousElementSibiling_of_firstSubCat = document.getElementById('btn_down');
  
if(subCat.previousElementSibling.id == previousElementSibiling_of_firstSubCat.id
  && subCat.nextElementSibling == null){
    subCat.lastChild.previousElementSibling.style.display = 'none';
    subCat.lastChild.previousElementSibling.previousElementSibling.style.display ='none';
       

}else if(subCat.previousElementSibling == previousElementSibiling_of_firstSubCat.nextElementSibling 
  && subCat.nextElementSibling == null){
           subCat.previousElementSibling.lastChild.previousElementSibling.style.display = 'inline';
           subCat.lastChild.previousElementSibling.style.display = 'none';
  }


if(subCat.previousElementSibling.id != previousElementSibiling_of_firstSubCat.id){
 
  subCat.previousElementSibling.lastChild.previousElementSibling.style.display = 'inline';
  subCat.lastChild.previousElementSibling.style.display = 'none';

}


subCatCounter++;


}
//onClick function for Delete Category
function removeInput(id) {
  let numb = document.getElementById(id).querySelectorAll("div").length;
  var index = dynamicInput.indexOf(elem);

  
  if (numb > 0) {
    alert("First Remove Sub_Categories Of this Category");
  } else {


    var elem = id;
    elem = document.getElementById(elem);
    
    
    
    //condition to show down button if only one element exists
    if(elem.nextElementSibling == null && elem.previousElementSibling == null){

      
        dynamicInput.splice(index, 1); 
      
         return elem.remove();

   
    }
    // condition to show down button on first element if has many element siblings
    if(elem.previousElementSibling == null && elem.nextElementSibling != null){
      var btn_up = elem.nextElementSibling.querySelector('#btn_up');
      btn_up.style.display = 'none';
      
      dynamicInput.splice(index, 1); 
      return elem.remove();
     
    }
    //condition to delete any sibiling between first and last sibling elements
    if(elem.nextElementSibling != null && elem.previousElementSibling != null){
      
      dynamicInput.splice(index, 1); 
       return elem.remove();
     
       }
      if(elem.nextElementSibling == null && elem.previousElementSibling !=null){
        if(elem.previousElementSibling.id != elem.parentNode.firstChild.nextElementSibling.id){
           elem.previousElementSibling.querySelector('#btn_down').style.display = 'none';
           
           dynamicInput.splice(index, 1); 
           return elem.remove();
        
        }else{
          elem.previousElementSibling.querySelector('#btn_down').style.display = 'none';
            
             dynamicInput.splice(index, 1); 
           return elem.remove();
         
        }

      }  
   
}
  
}
//onClick function for Delete SubCategory
function removeASubCat(id) {
  var elem = id;
  elem = document.getElementById(elem);
  var elem_parent = elem.parentNode;
  var btn_before_subcat = elem_parent.querySelector("#btn_down");
  var numbOfSubCat = (elem_parent.querySelectorAll('div').length);
  var index = dynamicInputsSubCat.indexOf(id);
  if(numbOfSubCat > 2){
   
      elem.remove();
      btn_before_subcat.nextElementSibling.lastChild.previousElementSibling.previousElementSibling.style.display='none';
      elem_parent.lastChild.lastChild.previousElementSibling.style.display = 'none';
    
          dynamicInputsSubCat.splice(index, 1); 
     
      // return elem.remove();
  }
  if(numbOfSubCat == 2){
    elem.remove();
    btn_before_subcat.nextElementSibling.lastChild.previousElementSibling.previousElementSibling.style.display='none';
    btn_before_subcat.nextElementSibling.lastChild.previousElementSibling.style.display ='none';
    dynamicInputsSubCat.splice(index, 1); 
  }
  if(numbOfSubCat == 1){
    elem.remove();
    dynamicInputsSubCat.splice(index, 1); 
  }
   
}
// //btn_up
function addUpCat(id){
 var current_Element = document.getElementById(id);
 var previous_Element = document.getElementById(id).previousElementSibling;
  current_Element.parentNode.insertBefore(current_Element, previous_Element);
  
 if(dynamicInput.length <4){
   console.log(current_Element);
  if(current_Element.previousElementSibling == null){
    current_Element.querySelector('#btn_up').style.display = 'none';
    current_Element.querySelector('#btn_down').style.display = 'inline';
    current_Element.nextElementSibling.querySelector('#btn_up').style.display = 'inline';
    current_Element.nextElementSibling.querySelector('#btn_down').style.display = 'none';
  }
  else {
    current_Element.querySelector('#btn_up').style.display = 'inline';
    current_Element.querySelector('#btn_down').style.display = 'inline';
    current_Element.nextElementSibling.querySelector('#btn_up').style.display = 'inline';
    current_Element.nextElementSibling.querySelector('#btn_down').style.display = 'none';

  }


 }
 else {
  if(dynamicInput.length < 5){
 
    if(current_Element.previousElementSibling == null){
      current_Element.querySelector('#btn_up').style.display = 'none';
      current_Element.querySelector('#btn_down').style.display = 'inline';
      current_Element.nextElementSibling.querySelector('#btn_up').style.display = 'inline';
      current_Element.nextElementSibling.querySelector('#btn_down').style.display = 'inline';
    }
    else{
      if(current_Element.nextElementSibling.nextElementSibling == null){

         current_Element.querySelector('#btn_up').style.display = 'inline';
         current_Element.querySelector('#btn_down').style.display = 'inline';
         current_Element.nextElementSibling.querySelector('#btn_up').style.display = 'inline';
         current_Element.nextElementSibling.querySelector('#btn_down').style.display = 'none';
      }
      else{
        current_Element.querySelector('#btn_up').style.display = 'inline';
        current_Element.querySelector('#btn_down').style.display = 'inline';
        current_Element.nextElementSibling.querySelector('#btn_up').style.display = 'inline';
        current_Element.nextElementSibling.querySelector('#btn_down').style.display = 'inline';
      }
    }

  }
  else{
      if(current_Element.previousElementSibling == null){
        current_Element.querySelector('#btn_up').style.display = 'none';
        current_Element.querySelector('#btn_down').style.display = 'inline';
        current_Element.nextElementSibling.querySelector('#btn_up').style.display = 'inline';
        current_Element.nextElementSibling.querySelector('#btn_down').style.display = 'inline';
      }
      else{
        if(current_Element.nextElementSibling.nextElementSibling == null){

           current_Element.querySelector('#btn_up').style.display = 'inline';
           current_Element.querySelector('#btn_down').style.display = 'inline';
           current_Element.nextElementSibling.querySelector('#btn_up').style.display = 'inline';
           current_Element.nextElementSibling.querySelector('#btn_down').style.display = 'none';
        }
        else{
          current_Element.querySelector('#btn_up').style.display = 'inline';
          current_Element.querySelector('#btn_down').style.display = 'inline';
          current_Element.nextElementSibling.querySelector('#btn_up').style.display = 'inline';
          current_Element.nextElementSibling.querySelector('#btn_down').style.display = 'inline';
        }
      }
  }
 
 

 }
}
function clickDownCat(id){
  // var current_Element = document.getElementById(id);
  // var next_Element = document.getElementById(id).nextElementSibling;
  // next_Element.insertAdjacentElement("afterend", current_Element);
  // console.log(current_Element);
  // console.log(next_Element);
  var current_Element = document.getElementById(id);
  var next_Element = document.getElementById(id).nextElementSibling;
  next_Element.parentNode.insertBefore(next_Element, current_Element);
  if(dynamicInput.length <4){
  
    if(next_Element.previousElementSibling == null){
      next_Element.querySelector('#btn_up').style.display = 'none';
      next_Element.querySelector('#btn_down').style.display = 'inline';
      next_Element.nextElementSibling.querySelector('#btn_up').style.display = 'inline';
      next_Element.nextElementSibling.querySelector('#btn_down').style.display = 'none';
    }
    else {
      next_Element.querySelector('#btn_up').style.display = 'inline';
      next_Element.querySelector('#btn_down').style.display = 'inline';
      next_Element.nextElementSibling.querySelector('#btn_up').style.display = 'inline';
      next_Element.nextElementSibling.querySelector('#btn_down').style.display = 'none';
  
    }
  
  
   }
   else {
    if(dynamicInput.length < 5){
   
      if(next_Element.previousElementSibling == null){
        next_Element.querySelector('#btn_up').style.display = 'none';
        next_Element.querySelector('#btn_down').style.display = 'inline';
        next_Element.nextElementSibling.querySelector('#btn_up').style.display = 'inline';
        next_Element.nextElementSibling.querySelector('#btn_down').style.display = 'inline';
      }
      else{
        if(next_Element.nextElementSibling.nextElementSibling == null){
  
           next_Element.querySelector('#btn_up').style.display = 'inline';
           next_Element.querySelector('#btn_down').style.display = 'inline';
           next_Element.nextElementSibling.querySelector('#btn_up').style.display = 'inline';
           next_Element.nextElementSibling.querySelector('#btn_down').style.display = 'none';
        }
        else{
          next_Element.querySelector('#btn_up').style.display = 'inline';
          next_Element.querySelector('#btn_down').style.display = 'inline';
          next_Element.nextElementSibling.querySelector('#btn_up').style.display = 'inline';
          next_Element.nextElementSibling.querySelector('#btn_down').style.display = 'inline';
        }
      }
  
    }
    else{
        if(next_Element.previousElementSibling == null){
          next_Element.querySelector('#btn_up').style.display = 'none';
          next_Element.querySelector('#btn_down').style.display = 'inline';
          next_Element.nextElementSibling.querySelector('#btn_up').style.display = 'inline';
          next_Element.nextElementSibling.querySelector('#btn_down').style.display = 'inline';
        }
        else{
          if(next_Element.nextElementSibling.nextElementSibling == null){
  
             next_Element.querySelector('#btn_up').style.display = 'inline';
             next_Element.querySelector('#btn_down').style.display = 'inline';
             next_Element.nextElementSibling.querySelector('#btn_up').style.display = 'inline';
             next_Element.nextElementSibling.querySelector('#btn_down').style.display = 'none';
          }
          else{
           next_Element.querySelector('#btn_up').style.display = 'inline';
           next_Element.querySelector('#btn_down').style.display = 'inline';
           next_Element.nextElementSibling.querySelector('#btn_up').style.display = 'inline';
           next_Element.nextElementSibling.querySelector('#btn_down').style.display = 'inline';
          }
        }
    }
   
   
  
   }
   
}
function addUpSubCat(id){
  var current_Element = document.getElementById(id).firstChild.nextElementSibling.nextElementSibling;
  var temp_current = current_Element.value;
  var previous_Element = document.getElementById(id).previousElementSibling.firstChild.nextElementSibling.nextElementSibling;
  var temp_previous = previous_Element.value;
  previous_Element.value = temp_current;
  current_Element.value = temp_previous;

 
 
 }
 function clickDownSubCat(id){
   var current_Element = document.getElementById(id).firstChild.nextElementSibling.nextElementSibling;
   var temp_current = current_Element.value;
   var next_Element = document.getElementById(id).nextElementSibling.firstChild.nextElementSibling.nextElementSibling;
   var temp_next = next_Element.value;
   current_Element.value = temp_next;
   next_Element.value = temp_current;

 }