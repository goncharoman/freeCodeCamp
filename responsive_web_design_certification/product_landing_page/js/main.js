function changeSingBtn() {
  if ($(window).width() <= 425) $("#singBtn").html("Sing");
  else $("#singBtn").html("Sing Up");
}

$("#singBtn").ready(changeSingBtn);
