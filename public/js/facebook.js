function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallBack(response);
  });
}

function statusChangeCallBack(response) {
  if (response.status == 'connected') {
    console.log('Successfuly logged in with Facebook');
    FB.api('./me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response){
  $("p").hide(".facebookLogin");
  $("h1").text("Marlon Cortez");
  $("img#photo").attr("src", response.picture.data.url);
}
