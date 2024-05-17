import React, { useContext } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import CartContext from '../Context/Cartcontext';
import CartComponent from './CartComponent'; // Assuming you have a CartComponent to render individual cart items

const Popup = () => {
    const { cart, setToggle } = useContext(CartContext);

    const onClose = () => {
        setToggle(0);
    }

    // Calculate total amount
 

    return (
        <Flex
            w={'50vw'}
            h={'49vh'}
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            bg="white"
            borderRadius="md"
            boxShadow="lg"
            p={6}
            overflowX={'auto'}
            flexDirection="column"
        >
            <Button
                position="absolute"
                top="10px"
                right="10px"
                variant="ghost"
                onClick={onClose}
            >
                Close
            </Button>
           {cart.totalAmount>0? <Text>Total Amount: {cart.totalAmount}</Text>:''}
            <Box flex={'row'} flexWrap={'wrap'} mt={4}>
              
                {cart.items.length>0?<>{cart.items.map(item => (
                    <CartComponent key={item.id} item={item} />
                ))}</>:<>Cart is empty</>}
            </Box>
        </Flex>
    );
};

export default Popup;
