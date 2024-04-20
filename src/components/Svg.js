//import Rectangle from "./Rectangle";

function Svg(props) {
  console.log(props.myTest);
  return (
    <div>
      
        <svg
          id='mysvg'
          width="1280px"          
          height="600px"
          viewBox="0 0 7680 2400"
          >

        </svg>
        {/* <Rectangle /> */}
    </div>
    
  )
}
export default Svg;