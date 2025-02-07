function randompasswordgenerator(){
    var randomstring='asdfghjkl1234567890/mnbvcxz!@#$%&poiyyt6789jhgffdmnbvcxzaqwetyuiioASDEWRTYGFDDERTTTFVVCXTTUIKKIMKM'
    var randompassword=''
  for(i=0;i<7;i++){
    var randomnum = Math.floor(Math.random()*randomstring.length-1)
      randompassword+= randomstring[randomnum] }
  document.getElementById("input-range").innerHTML= `<span>${randompassword}</span>`
  }