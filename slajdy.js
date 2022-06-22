<script type="text/javascript">
  ile=2; //ile jest obrazkow
  //no need to edit below
  i=0;
  function galeria(){
    document.getElementById('obrazek').src=i+'.jpg';
    if(i<ile-1){
      i++
    }else{
      i=0
    }
    setTimeout('galeria()',1000)
  }
  window.onload=function(){
    for(x=0; x<ile; x++){
      new Image().src=x+'.jpg'
    }
    galeria()
  }
  </script>
