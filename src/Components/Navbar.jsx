import { Flex, Spacer, Text, IconButton } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi'; 
import CartContext from '../Context/Cartcontext';
import { useContext } from 'react';
const Navbar = () => {
  const {cart,setToggle}=useContext(CartContext);
  return (
    <Flex align='center' justify='space-between' p='4' bg='blue.500' >
      <Text color={'white'} fontSize='xl'>Tej Mart</Text>    
      <Flex color={'white'} position={'relative'}>
      <IconButton
          aria-label='Cart'
          icon={<FiShoppingCart />}
          variant='ghost'
          colorScheme='white'
          mr='2'
          onClick={setToggle} 
        />
        <Text position={'absolute'}  top={'-6px'} right={'23px'}>{cart.items.length>0?cart.items.length:''}</Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
