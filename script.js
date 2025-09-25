function getFormvalue() {
    //Write your code here
 event.preventDefault(); // form submit थांबवतो (page reload होऊ नये म्हणून)

      // Input values घेणे
      const firstName = document.querySelector('[name="fname"]').value.trim();
      const lastName = document.querySelector('[name="lname"]').value.trim();

	alert(fname + " " + lname);
      
    }