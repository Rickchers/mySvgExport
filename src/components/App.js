
// import Svg from "./Svg";
import Form from "./Form";

function App() {
  // const form = document.forms.myForm;
  // const input = form.elements.myInput;
  
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

  /*
  function makeLine(x, y, width, color) {
    var svgns = "http://www.w3.org/2000/svg";
    var myPath = document.createElementNS( svgns,'path' );

    //var coords = "M " + x + " " +(y-20) + " " + "L "  + (width+40).toString() + " " + (y-20);

    var coords = "M " + x + " " +(y+width) + " " + "L "  + x + " " + (y);

    console.log(coords);
    console.log(width.toString());

    myPath.setAttributeNS(null, 'stroke', color);
    myPath.setAttributeNS(null, 'stroke-width', '3px');
    //myPath.setAttributeNS(null, 'd', "M 0 h+b+(2*k)+13 L 0 h+b+(2*k)+30");
    //myPath.setAttributeNS(null, 'd', "M 0 -40 L 300 -40");
    myPath.setAttributeNS(null, 'd', coords);

    document.getElementById( 'mysvg' ).appendChild( myPath );
  }

  function makeHorLine(x, y, width, color) {
    var svgns = "http://www.w3.org/2000/svg";
    var myPath = document.createElementNS( svgns,'path' );

    var coords = "M " + x + " " +(y-20) + " " + "L "  + (width+40).toString() + " " + (y-20);
  
  
  

    
    console.log(width.toString());

    myPath.setAttributeNS(null, 'stroke', color);
    myPath.setAttributeNS(null, 'stroke-width', '3px');
    //myPath.setAttributeNS(null, 'd', "M 0 h+b+(2*k)+13 L 0 h+b+(2*k)+30");
    //myPath.setAttributeNS(null, 'd', "M 0 -40 L 300 -40");
    myPath.setAttributeNS(null, 'd', coords);

    document.getElementById( 'mysvg' ).appendChild( myPath );
  }
  */

  function makeLine(x, y, width) {
    var svgns = "http://www.w3.org/2000/svg";
    var line = document.createElementNS( svgns,'line' );

    line.setAttributeNS( null,'x1',x + "mm" );
    line.setAttributeNS( null,'y1',y + "mm" );
    line.setAttributeNS( null,'x2',x +"mm" );
    line.setAttributeNS( null,'y2',y + width + "mm" );    
    
    line.setAttributeNS( null,'stroke','cyan' );
    line.setAttributeNS( null,'stroke-width','4px' );

    document.getElementById( 'mysvg' ).appendChild( line );
  };

  function makeHorLine(x, y, width) {
    var svgns = "http://www.w3.org/2000/svg";
    var line = document.createElementNS( svgns,'line' );
    
    line.setAttributeNS( null,'x1',x + "mm" );
    line.setAttributeNS( null,'y1',y - 20 + "mm" );
    line.setAttributeNS( null,'x2',width + 40 +"mm" );
    line.setAttributeNS( null,'y2',y -20 + "mm" );    
    
    line.setAttributeNS( null,'stroke','cyan' );
    line.setAttributeNS( null,'stroke-width','4px' );
    
    document.getElementById( 'mysvg' ).appendChild( line );
    
  }



  function makeText (x, y, item) {
    var svgns = "http://www.w3.org/2000/svg";
    var myText = document.createElementNS( svgns,'text' );

    myText.setAttributeNS(null,"x",x+"mm");     
    myText.setAttributeNS(null,"y",y+"mm");

    myText.setAttributeNS(null,"font-size","30");
    
    myText.setAttributeNS(null,"dominant-baseline","central");        //выравнивание по вертикали
                                                    

    var textNode = document.createTextNode(item);
    myText.appendChild(textNode);
    document.getElementById("mysvg").appendChild(myText);

  };



  function sayHi(inputValue, inputClapanValue){
    //alert (inputClapanValue);
    let element = document.getElementById("mysvg");
      while (element.firstChild) {
      element.removeChild(element.firstChild);
      }

    const dims = inputValue.split('*');

    const l = (dims[0])*1;
    const b = (dims[1])*1;
    const h = (dims[2])*1;

    // const l = 300;          
    // const b = 400;
    // const h = 300;

    const Klapan = (inputClapanValue)*1;
    const Pripusk1 = 2;
    const Pripusk2 = 4;
    const Pripusk3 = 4;
    const Pripusk4 = 2;
    const PripuskVisota = 4;

    //sokrashenie raschetov
    const Klapan1 = l+Pripusk1-6;
    const Klapan2 = b+Pripusk2-6;
    const Klapan3 = l+Pripusk3-6;
    const Klapan4 = b+Pripusk4-6;
    const VisotaKlapana = (b+Pripusk2)/2;

    const Storona1 = l+Pripusk1;
    const Storona2 = b+Pripusk2;
    const Storona3 = l+Pripusk3;
    const Storona4 = b+Pripusk4;
    const Visota = h+PripuskVisota;

    
    makeRect(0, VisotaKlapana, Klapan, Visota);
    makeRect(Klapan, VisotaKlapana, Storona1, Visota);
    makeRect(Klapan+Storona1, VisotaKlapana, Storona2, Visota);
    makeRect(Klapan+Storona1+Storona2, VisotaKlapana, Storona3, Visota);
    makeRect(Klapan+Storona1+Storona2+Storona3, VisotaKlapana, Storona4, Visota);

    makeRect(Klapan+3, 0, Klapan1, VisotaKlapana);
    makeRect(Klapan+3+Klapan1+6, 0, Klapan2, VisotaKlapana);
    makeRect(Klapan+3+Klapan1+Klapan2+12, 0, Klapan3, VisotaKlapana);
    makeRect(Klapan+3+Klapan1+Klapan2+Klapan3+18, 0, Klapan4, VisotaKlapana);

    makeRect(Klapan+3, VisotaKlapana+Visota, Klapan1, VisotaKlapana);
    makeRect(Klapan+3+Klapan1+6, VisotaKlapana+Visota, Klapan2, VisotaKlapana);
    makeRect(Klapan+3+Klapan1+Klapan2+12, VisotaKlapana+Visota, Klapan3, VisotaKlapana);
    makeRect(Klapan+3+Klapan1+Klapan2+Klapan3+18, VisotaKlapana+Visota, Klapan4, VisotaKlapana);


    makeHorLine(0, Visota+VisotaKlapana+VisotaKlapana+60, Klapan+Storona1+Storona2+Storona3+Storona4-40);
    makeHorLine(0, Visota+VisotaKlapana+VisotaKlapana+100, Klapan+Storona1+Storona2+Storona3+Storona4-40);
    makeHorLine(Klapan+Storona1+Storona2+Storona3+Storona4, 20, Klapan+Storona1+Storona2+Storona3+Storona4+80);
    makeHorLine(Klapan+Storona1+Storona2+Storona3+Storona4, 20+VisotaKlapana, Klapan+Storona1+Storona2+Storona3+Storona4+25);
    makeHorLine(Klapan+Storona1+Storona2+Storona3+Storona4, 20+VisotaKlapana+Visota, Klapan+Storona1+Storona2+Storona3+Storona4+25);
    makeHorLine(Klapan+Storona1+Storona2+Storona3+Storona4, 20+VisotaKlapana+Visota+VisotaKlapana, Klapan+Storona1+Storona2+Storona3+Storona4+80);

    
    /*
    makeLine(0, VisotaKlapana+Visota, VisotaKlapana+80, 'cyan');
    makeLine(Klapan, VisotaKlapana+Visota, VisotaKlapana+45, 'cyan');
    makeLine(Klapan+Storona1, VisotaKlapana+Visota, VisotaKlapana+45, 'cyan');
    makeLine(Klapan+Storona1+Storona2, VisotaKlapana+Visota, VisotaKlapana+45, 'cyan');
    makeLine(Klapan+Storona1+Storona2+Storona3, VisotaKlapana+Visota, VisotaKlapana+45, 'cyan');
    makeLine(Klapan+Storona1+Storona2+Storona3+Storona4, VisotaKlapana+Visota, VisotaKlapana+80, 'cyan');
    makeLine(Klapan+Storona1+Storona2+Storona3+Storona4+60, 0, VisotaKlapana+Visota+VisotaKlapana, 'cyan');
    makeLine(Klapan+Storona1+Storona2+Storona3+Storona4+115, 0, VisotaKlapana+Visota+VisotaKlapana, 'cyan');
    */
    makeLine(0, VisotaKlapana+Visota, VisotaKlapana+80, 'cyan');
    makeLine(Klapan, VisotaKlapana+Visota, VisotaKlapana+45, 'cyan');
    makeLine(Klapan+Storona1, VisotaKlapana+Visota, VisotaKlapana+45, 'cyan');
    makeLine(Klapan+Storona1+Storona2, VisotaKlapana+Visota, VisotaKlapana+45, 'cyan');
    makeLine(Klapan+Storona1+Storona2+Storona3, VisotaKlapana+Visota, VisotaKlapana+45, 'cyan');
    makeLine(Klapan+Storona1+Storona2+Storona3+Storona4, VisotaKlapana+Visota, VisotaKlapana+80, 'cyan');


    makeLine(Klapan+Storona1+Storona2+Storona3+Storona4+50, 0, (VisotaKlapana/2) - 20, 'cyan');
    makeLine(Klapan+Storona1+Storona2+Storona3+Storona4+50, (VisotaKlapana/2) + 20, (VisotaKlapana/2) - 20, 'cyan');
    makeLine(Klapan+Storona1+Storona2+Storona3+Storona4+50, VisotaKlapana, (Visota/2)-20, 'cyan');
    makeLine(Klapan+Storona1+Storona2+Storona3+Storona4+50, VisotaKlapana+(Visota/2)+20, (Visota/2)-20, 'cyan');
    makeLine(Klapan+Storona1+Storona2+Storona3+Storona4+50, VisotaKlapana+Visota, (VisotaKlapana/2) - 20, 'cyan');
    makeLine(Klapan+Storona1+Storona2+Storona3+Storona4+50, VisotaKlapana+Visota+(VisotaKlapana/2) + 20, (VisotaKlapana/2) - 20, 'cyan');

    makeLine(Klapan+Storona1+Storona2+Storona3+Storona4+115, 0, VisotaKlapana+(Visota/2)-20, 'cyan');
    makeLine(Klapan+Storona1+Storona2+Storona3+Storona4+115, VisotaKlapana+(Visota/2)+20, VisotaKlapana+(Visota/2)-20, 'cyan');
      
    makeText((Klapan-25)/2, Visota+Storona2+20, Klapan);
    makeText(Klapan+(Storona1/2)-20, Visota+Storona2+20, Storona1);
    makeText(Klapan+Storona1+(Storona2/2)-20, Visota+Storona2+20, Storona2);
    makeText(Klapan+Storona1+Storona2+(Storona3/2)-20, Visota+Storona2+20, Storona3);
    makeText(Klapan+Storona1+Storona2+Storona3+(Storona4/2)-20, Visota+Storona2+20, Storona4);
    makeText((Klapan+Storona1+Storona2+Storona3+Storona4)/2-15, Visota+Storona2+60, Klapan+Storona1+Storona2+Storona3+Storona4);

    makeText(Klapan+Storona1+Storona2+Storona3+Storona4+40, (VisotaKlapana/2), VisotaKlapana);
    makeText(Klapan+Storona1+Storona2+Storona3+Storona4+40, VisotaKlapana+(Visota/2), Visota);
    makeText(Klapan+Storona1+Storona2+Storona3+Storona4+40, VisotaKlapana+Visota+(VisotaKlapana/2), VisotaKlapana);
    makeText(Klapan+Storona1+Storona2+Storona3+Storona4+105, VisotaKlapana+(Visota/2), Visota+VisotaKlapana+VisotaKlapana);

  }

  return (
    <div className="App">
      <Form
        sayHi={sayHi}
      />
      
    </div>
  );
}

export default App;
