import { IoLogoPaypal } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io5";

const dataSosmed = [
  {
    id: 1,
    name: "paypal",
    icon: <IoLogoPaypal/>,
    url: 'https://react.dev'
  },
  {
    id: 2,
    name: "IG",
    icon: <AiFillInstagram/>,
    url: 'https://react.dev'
  },
  {
    id: 3,
    name: "YT",
    icon: <IoLogoYoutube/>,
    url: 'https://react.dev'

  },
]

export default function Footer (){
    return(
      <footer>   
      <ul>
        
          {dataSosmed.map(value => (
            <li key={value.id}>
              <a href={value.url}>{value.icon}</a>
              </li>
          ))}
        
      </ul>
   </footer>
    )
  };
  