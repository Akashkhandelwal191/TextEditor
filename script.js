/**
 * DONE: Update the text in the "Formatted Text" section as a user types in the textarea
 * DONE TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * DONE: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */


/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
const updateText = () =>{
  // CODE GOES HERE
  let userText = document.getElementById("text-input").value;
  
  document.getElementById('text-output').innerText = userText;
  
  
}



const makerefresh = () =>{
 
       document.getElementById("text-input").value = " ";
       document.getElementById('text-output').innerText = " ";
       
       if(document.getElementById('bold').classList.contains('active'))
       {
           makeBold(bold);
       }

       if(document.getElementById('italic').classList.contains('active'))
       {
         makeItalic(italic);
       }

       if(document.getElementById('underline').classList.contains('active'))
       {
         makeUnderline(underline);
       }
       alignText();
       
}

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
const makeBold =(elem)=>{
  //CODE GOES HERE
  elem.classList.toggle("active")
  document.getElementById('text-output').classList.toggle("bold")

}

/**
 * Toggle the italic class for the output text
 */
const makeItalic =(elem)=>{
  elem.classList.toggle("active")
  document.getElementById('text-output').classList.toggle("italic")
}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
const makeUnderline = (elem) =>{
    //CODE GOES HERE
    elem.classList.toggle("active")
    document.getElementById('text-output').classList.toggle("underline")
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
const alignText =(elem="", alignType="") => {
  // CODE GOES HERE
  document.getElementById('text-output').style.textAlign = alignType;
  buttonsList = document.getElementsByClassName("align")
  
  for (buttonEl of buttonsList)
  {
    buttonEl.classList.remove("active")
  }
  
  elem.classList.toggle("active")
 
  
}


function printInput()
{
      
 
    var print_div = document.getElementById("text-output");
    var print_area = window.open();
    print_area.document.write(print_div.innerHTML);
    print_area.document.close();
    print_area.focus();
    print_area.print();
    print_area.close();

}


function copied() {
  /* Get the text field */
  var copyText = document.getElementById("text-input");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}

