    var form = document.getElementById("idForm");
    var idCard = document.getElementById("idCard");
    var cardPhoto = document.getElementById("cardPhoto");

     function submit() {
     var upperFName = document.getElementById("fname").value;
     var titleCaseFName = upperFName[0].toUpperCase() + (upperFName.slice(1).toLowerCase())
     var upperLName = document.getElementById("lname").value;
     var titleCaseLName = upperLName[0].toUpperCase() + (upperLName.slice(1).toLowerCase())
      document.getElementById("input-name").textContent =
       " " +titleCaseFName + " "+ titleCaseLName;
      document.getElementById("input-id").textContent =
       " " + document.getElementById("idnumber").value;
      document.getElementById("input-birthdate").textContent =
       " " + document.getElementById("dob").value;
      document.getElementById("input-email").textContent =
       " " + document.getElementById("email").value;
      document.getElementById("input-phone").textContent =
       " " + document.getElementById("phone").value;
      document.getElementById("Company-name").textContent =
        document.getElementById("company").value;
      document.getElementById("input-role").textContent =
       " " + document.getElementById("role").value;

      // Photo
      var photoInput = document.getElementById("photo");
      if (photoInput.files && photoInput.files[0]) {
        // console.log( URL.createObjectURL(photoInput.files[0]))
          cardPhoto.src =  URL.createObjectURL(photoInput.files[0]);
      }
      // Show card
      idCard.style.display = "block";

    };
