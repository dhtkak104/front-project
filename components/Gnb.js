import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

export default function Gnb() {
  const rotuer = useRouter();
  const pathname = rotuer.pathname; 
  
  let activeItem;
  if(pathname === '/') {
    activeItem = 'home';
  } else if(pathname === '/boards') {
    activeItem = 'boards';
  }
  
  function getLink(e, data) {
    if(data.name === 'home') {
      rotuer.push('/');
    } else if(data.name === 'boards') {
      rotuer.push('/boards');
    }
  }

  return (
    <Menu inverted>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={getLink}
      />
      <Menu.Item
        name='boards'
        active={activeItem === 'boards'}
        onClick={getLink}
      />
    </Menu>
  )
}