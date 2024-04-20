function Rectangle() {
  //const myViewBox = "0 0 7680 2400";
  
  function makeRect(x, y, width, height){
    var svgns = "http://www.w3.org/2000/svg";
    var rectA = document.createElementNS( svgns,'rect' );
    
    rectA.setAttributeNS( null,'x',x+'mm' );
    rectA.setAttributeNS( null,'y',y+'mm' );
    rectA.setAttributeNS( null,'width',width.toString()+'mm' );
    rectA.setAttributeNS( null,'height',height.toString()+'mm' );
    rectA.setAttributeNS( null,'fill','transparent' );
    rectA.setAttributeNS( null,'stroke','red' );
    rectA.setAttributeNS( null,'stroke-width','1mm' );
    
    document.getElementById( 'mysvg' ).appendChild( rectA );
  }
  
  function sayHi(inputValue){

    const dims = inputValue.split('*');

    const l = (dims[0])*1;
    const b = (dims[1])*1;
    const h = (dims[2])*1;

    // const l = 300;          
    // const b = 400;
    // const h = 300;

    const k = 4;

    makeRect(0, (b+k)/2, 40, h+k);
    makeRect(40, (b+k)/2, l+0.5*k, h+k);
    makeRect(40+l+k/2, (b+k)/2, b+k, h+k);
    makeRect(40+l+b+k*1.5, (b+k)/2, l+k, h+k);
    makeRect(40+l+b+l+k*2.5, (b+k)/2, b+k/2, h+k);

    makeRect(43, 0, l-6+k/2, (b+k)/2);
    makeRect(40+3+l+k/2, 0, b-6+k, (b+k)/2);
    makeRect(40+3+l+k*1.5+b, 0, l-6+k, (b+k)/2);
    makeRect(40+3+l+k*2.5+b+l, 0, b-6+k/2, (b+k)/2);

    makeRect(43, (b+k)/2+h+k, l-6+k/2, (b+k)/2);
    makeRect(40+3+l+k/2, (b+k)/2+h+k, b-6+k, (b+k)/2);
    makeRect(40+3+l+k*1.5+b, (b+k)/2+h+k, l-6+k, (b+k)/2);
    makeRect(40+3+l+k*2.5+b+l, (b+k)/2+h+k, b-6+k/2, (b+k)/2);
  }

  sayHi('300*400*300');
  

  return (
    <div>
      <h1>Hello!</h1>
        {/* <svg
          id='mysvg'
          width="1280px"          
          height="600px"
          viewBox="0 0 7680 2400"
          >

        </svg> */}
    </div>
    
  )
}

export default Rectangle;
