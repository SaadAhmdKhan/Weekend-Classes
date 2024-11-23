var selectimgpath ;

function selectedimg(src){
    var imgbg = document.getElementsByClassName('bg-image')
    for (var i = 0; i < imgbg.length; i ++){
        imgbg[i].className = 'bg=image'

    }
    event.target.classList.add('selectedimg')
    selectimgpath = src
}

function submitPost() {
    var userName = document.getElementById("username");
    var title = document.getElementById("title");
    var description = document.getElementById("desc");
    var currentDateTime = new Date().toUTCString();
  
    var listingContainer = document.querySelector("#listingContainer");
  
    if (userName.value.trim() !== "") {
      if (title.value.trim() !== "") {
        if (description.value.trim() !== "") {
          listingContainer.innerHTML += `<div class="card my-4">
  <div class="card-header d-flex justify-content-between">
     <span>
      ~@${userName.value}
     </span>
     <span>
      ${currentDateTime}
     </span>
  </div>
  <div  style="background-image: url('${selectimgpath}')" class="card-body postCardBody">
      <h5 class="card-title">${title.value}</h5>
      <p class="card-text">${description.value}</p>
  </div>
  </div>`;
  
  
  userName.value = ''
  title.value = ''
  description.value = ''
        } else {
            Swal.fire({
                title: "Description",
                text: "Is Required",
              });
          
        }
      } else {
        Swal.fire({
            title: "Title",
            text: "Is Required",
          });
      }
    } else {
        Swal.fire({
            title: "UserName",
            text: "Is Required",
          });
    }
  }
  