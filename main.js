let MyNotesObject = [];
let deleted = [];


var d = new Date();
var x = d.getDay();
var y = d.getMonth();
var z = d.getFullYear()
let w = x + 10;
//var mydate = w + "-" + "0" + y + "-" + z;


var mydate = w + "-" + "0" + y + "-" + z;


var id = 1;

let MyText = document.getElementById("note");
function AddNotes() {
  let MyTitle = document.getElementById("title");
  let MyText = document.getElementById("note");


  let MyObject = {
    ID: id++,
    title: MyTitle.value,
    text: MyText.value,
    date: mydate
  };
  if (MyTitle.value == "") {
    document.getElementById("mess").innerHTML = "***Please Enter The Title***"
  }
  else {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      MyNotesObject = [];
    } else {

      notes = JSON.parse(notes);
    }


    MyNotesObject.push(MyObject);

    localStorage.setItem("notes", JSON.stringify(MyNotesObject));
    MyText.value = "";
    MyTitle.value = "";
    mydate.value = mydate;


  }
  showNotes()

};

// Function to show elements from localStorage
function showNotes() {

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    MyNotesObject = [];
  } else {
    MyNotesObject = JSON.parse(notes);
  }
  let html = "";
  MyNotesObject.forEach(function (element, index) {

    html += `<div class="viv" id="notess"><div class="display" style="width: 18rem;" id="notes">

    <p class="note-counter">Sr.No.- ${index + 1}</p> <input id="${index}" type="checkbox" id="check" oninput="myindex(this.id)">
      <h4 class="card-title" id="tutu"> ${element.title}</h4>
      <p class="date">Date: ${mydate}</p>
      <button id="${index}"onclick="deleteNote(this.id)" class="note-btnD">Delete Note</button>
      <button id="${index}"onclick="editNote(this.id)" class="note-btnE edit-btn">Edit Note</button>
    </div>
      </div>`

  });

  let notesElement = document.getElementById("notess");
  if (MyNotesObject.length != 0) {
    notesElement.innerHTML = html;
  }
  else {
    notesElement.innerHTML = `No Notes Yet! Add a note using AddNote.`;

  }

}

// Function to delete a notes
function deleteNote(index) {
  let checkk = document.getElementById("check");
  let confirmDel = confirm("Delete this note?");
  if (confirmDel == true || checkk == "on") {

    let deleted_notes = localStorage.getItem("deletee");


    if (deleted_notes == null) {
      deleted = [];
    } else {

      deleted_notes = JSON.parse(deleted_notes);
    }

    deleted.push(MyNotesObject[index])

    MyNotesObject.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(MyNotesObject));


    localStorage.setItem("deletee", JSON.stringify(deleted));



  }

  showNotes();
}



/*function deleteNote (index, editFlag = false){
  //  console.log(editFlag);
  let deleted = [];
  deleted = JSON.parse(localStorage.getItem("Deleted_note")) || [];
  let modifiedData =  MyNotesObject.filter((obj) => {
    
      deleted.push(obj);
   
  localStorage.setItem("Deleted_note", JSON.stringify(deleted));
  localStorage.setItem("data", JSON.stringify(modifiedData));
  MyNotesObject = modifiedData;
  MyNotesObject.splice(index, 1); 
  console.log( MyNotesObject);
  showNotes( MyNotesObject, editFlag);
  
});
}*/
let itemToRemove = [];
let notesElement = document.getElementById("notess");
function myindex(index) {
  let ind = MyNotesObject[index]
  deleted.push(ind);
  localStorage.setItem("deletee", JSON.stringify(deleted));
  itemToRemove.push(index);
  console.log(ind)



  //deleteNote(index)


}


function del() {
  for (let i = 0; i < itemToRemove.length; i++) {
    let delInd = itemToRemove[i];
    MyNotesObject.splice(delInd, 1)
    localStorage.setItem("notes", JSON.stringify(MyNotesObject));
    showNotes();
  }
}
// Function to Edit the Note
function editNote(index) {
  let notes = localStorage.getItem("notes");

  ti = MyNotesObject[index].title
  to = MyNotesObject[index].text
  addTitle = document.getElementById("title");
  let addText = document.getElementById("note");

  if (notes == null) {
    MyNotesObject = [];
  } else {
    MyNotesObject = JSON.parse(notes);
  }
  console.log(MyNotesObject);

  /*MyNotesObject.findIndex((element, index) => {
      addTitle.value = element.title;
      addText.value = element.text;
    })*/
  addTitle.value = ti;
  addText.value = to;
  MyNotesObject.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(MyNotesObject));

  showNotes();
}
function ShowAll() {
  showNotes();

}





/*let search_value = document.getElementById("search") //Search bar ID
console.log("event is fired  " + search_value);
search_value.addEventListener('input', function () {*/
function search() {
  let search_value = document.getElementById("searchh").value;
  //Search bar ID
  // search_value.addEventListener(input,function searchh(){



    let notecards = document.getElementsByClassName("viv"); // Parent elemet where u are displaing the card/notes details
  
  Array.from(notecards).forEach(function (element) {
    // Search bar value
    let tag_name = element.getElementsByTagName("h4")[0].innerText;

    console.log(tag_name);

    // Getting the tagname of the Title
    if (tag_name.includes(search_value)) {
      // Comparing the whether included
      console.log("its amazing")
      element.style.display = "block";

      // Display if its true
    } else {
      element.style.display = "none";
    }
  });



};
showNotes();
function backup() {
  let MyTitle = document.getElementById("title");
  let deleted_notes = localStorage.getItem("deletee");
  if (deleted_notes == null) {
    deleted = [];
  } else {
    deleted = JSON.parse(deleted_notes);
  }
  let html = "";
  deleted.forEach(function (element, index) {

    html += `<div class="viv" id="notess"><div class="display" style="width: 18rem;" id="notes">

    <p class="note-counter">Sr.No.- ${index + 1}</p> <input type="checkbox" id="check">
      <h4 class="card-title" id="tutu"> ${element.title}</h4>
      <p class="date">Date: ${mydate}</p>
      <button id="${index}"onclick="deleteNote(this.id)" class="note-btnD">Delete Note</button>
      <button id="${index}"onclick="editNote(this.id)" class="note-btnE edit-btn">Edit Note</button>
    </div>
      </div>`

  });

  let notesElement = document.getElementById("notess");
  if (deleted.length != 0) {
    notesElement.innerHTML = html;
  }
  else {
    notesElement.innerHTML = `No Notes Yet! Add a note using AddNote.`;

  }





}
function clear() {
  console.log(deleted)
  clear.deleted
  localStorage.setItem("deletee", JSON.stringify(deleted));
  backup();

}

function sort() {
  MyNotesObject.sort((a, b) => {
    let fa = a.title.toLowerCase();
    let fb = b.title.toLowerCase();
    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    } return 0;
  })
  localStorage.setItem("notes", JSON.stringify(MyNotesObject));
  showNotes();
}
showNotes();
