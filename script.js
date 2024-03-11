let userinfo = JSON.parse(localStorage.getItem("items")) || [];

function checkinfo() {
  let username = document.getElementById("user").value;
  let password = document.getElementById("pass").value;
  if (username == "" && password=="" ){
    document.getElementById('massage').innerHTML ="Please enter your Username and password "
  }
  else{

    let existingUser = userinfo.find(
      (user) => user.user_information === username
    );
  
    if (existingUser) {
      if (password === existingUser.password) {
        document.getElementById('massage').innerHTML = "Login success";
      } else  {
        document.getElementById('massage').innerHTML= "Wrong password";
      }}
  }
 
}

//for register
function databank() {
  let username = document.getElementById("user").value;
  let password = document.getElementById("pass").value;
  let role = document.getElementById("role").value;
  if (username == "" || password == "") {
    document.getElementById('massage').innerHTML ="Please fill out all fields";
  }
  else{
    userinfo.push({ user_information: username, password: password, role: role });
    localStorage.setItem("items", JSON.stringify(userinfo));

  }
  
  document.getElementById("user").value="";
  document.getElementById("pass").value="";
  
  setTimeout(function() {
    location.reload();
  }, 3000);

  let existingUser = userinfo.find(
    (user) => user.user_information === username
  );

  if (existingUser) {
    document.getElementById('massage').innerHTML="User already exist ";
  }
  console.log(JSON.parse(localStorage.getItem("items")));


}