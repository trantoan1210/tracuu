function tracuu(){
   let toan=+document.getElementById('toan').value;
    let van=+document.getElementById('van').value;
    let anh=+document.getElementById('anh').value;
    let kv=document.getElementById('kv').value;
  kq = toan + van + anh
  switch (kv){ 
      case'kv1' : 
       kq += 0.75 
      document.getElementById('kq').innerHTML= kq
      break;
      case'kv2' : 
      kq += 0.25
      document.getElementById('kq').innerHTML= kq
      break;
      case'kv2-nt' : 
      kq += 0.5 
      document.getElementById('kq').innerHTML= kq
      break;
      case'kv3' :
      document.getElementById('kq').innerHTML= kq
      break;
    define : alert('loi')
        
}
    
}