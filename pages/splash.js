import Image from "next/image";
import Link from "next/link";
const Logo="/asset/logo.svg"


function Splash() {
  return (
    <div className="splashContainer" >
      <Image src={Logo}  alt=""
          width={100}
          height={100} 
          className="splashLogo"/>
      <h4 className="splashText">SUN NAVIGATION APP</h4>
   <button className="splashGO"><Link className="splashLink" href="./homePage">Go</Link></button>

    </div>
  );
}
export default Splash;
