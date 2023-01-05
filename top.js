window.onscroll = function() {showbtn()};
function showbtn() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
   document.getElementById("Btn").style.opacity = "1";
  } else {
    document.getElementById("Btn").style.opacity = "0";
  }
}
function gobacktotop()
{
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

