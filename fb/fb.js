function cekkatasanti(str)
  {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return re.test(str);
  }

function cekpendaftaran(form)
  {
    if(form.username.value == "") {
      alert("Error: Username harus terisi!");
      form.username.focus();
      return false;
    }
    re = /^\w+$/;
    if(!re.test(form.username.value)) {
      alert("Error: Username yang diizinkan hanya angka, huruf, dan garis bawah!");
      form.username.focus();
      return false;
    }
    if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
      if(!cekkatasanti(form.pwd1.value)) {
        alert("Kata sandi salah, harus kombinasi dari angka, huruf, karakter unik dan terdiri dari min 6 digit!");
        form.pwd1.focus();
        return false;
      }
    } else {
      alert("Error: Kata sandi tidak sesuai!");
      form.pwd1.focus();
      return false;
    }
    alert("Selamat Datang");
    return true;
  }
           