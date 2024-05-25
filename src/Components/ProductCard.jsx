import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { FaRupeeSign } from 'react-icons/fa';
import React, { useContext, useState } from 'react';
import CartContext from '../Context/Cartcontext';
const ProductCard =React.memo (({ data }) => {

  const {dispatch}=useContext(CartContext);
 
  const [quantity, setQuantity] = useState(1); 

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };


  const addToCart=()=>{
    const overAllPrice=quantity*data.price
    const item={...data,quantity};
    const datas={item,overAllPrice}
    console.log(datas)
    dispatch({type:'ADD_TO_CART',payload:datas});
    
  }

  return (
    <div className=' ml-40 mt-3'>
      <Card maxW='md'>
        <CardBody>
          <Image
            src={data.image}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            height={'140px'}
            width={'100%'}
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{data.title}</Heading>
            <Text>
             {data.description}
            </Text>
            <Flex alignItems={'center'} color='blue.600' fontSize='2xl'>
              <FaRupeeSign color='black'/> {data.price}
            </Flex>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup justifyContent={'center'} spacing='2'>
            <Button variant='solid' colorScheme='blue' onClick={decreaseQuantity}>
              -
            </Button>
            <Text>{quantity}</Text>
            <Button variant='solid' colorScheme='blue' onClick={increaseQuantity}>
              +
            </Button>
            <Button onClick={()=>{addToCart()}} variant='solid' colorScheme='blue'>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
});

export default ProductCard;
