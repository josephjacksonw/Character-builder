// event on load function that turns on the submit form
// we need the submit form to do something (run a different function) then run the output
// we'll output the text I guess

window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    text()
    document.querySelector("div#story").removeAttribute("class")
  };

}
//window.addEventListener("load", function() {
  //form.addEventListener("submit", handleSubmission);
//});

function text() {
  const a = document.getElementById("input1").value;
  //const b = document.getElementById("job").value;
  const c = document.getElementById("setting").value;
  const b = document.querySelector("input[name='job']:checked").value;
  
  document.querySelector("span#name").innerText = a;
  document.querySelector("span#job").innerText = b;
  document.querySelector("span#setting").innerText = c;
}

//function handleSubmission(e) {
 // e.preventDefault();
  //tell this to run a function
  //change the unhidden <p> to reflect the choices
  //text()



  //let story = document.getElementById("story");
  //story.setAttribute("class", "hidden")
  //story.removeAttribute("class")
  
//}