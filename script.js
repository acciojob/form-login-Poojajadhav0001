function getFormvalue() {
      const form = document.forms[0];

      const firstName = form.fname.value.trim();
      const lastName = form.lname.value.trim();

      alert(firstName + " " + lastName);
    }