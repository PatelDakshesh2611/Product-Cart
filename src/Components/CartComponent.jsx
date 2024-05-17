import React, { useContext, useState, useRef } from 'react';
import {
  Box,
  Text,
  Button,
  Image,
  Flex,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay
} from '@chakra-ui/react';
import { FaRupeeSign } from 'react-icons/fa';
import CartContext from '../Context/Cartcontext';

const CartComponent = ({ item }) => {
  const { dispatch } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: item.id } });
    onClose();
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={4} display="flex" alignItems="center">
      <Image src={item.image} alt={item.title} boxSize="80px" objectFit="cover" mr={4} />
      <Box>
        <Text fontSize="xl">{item.title}</Text>
        <Flex justifyContent={'center'} alignItems={'center'} fontSize="md">
          Price: <FaRupeeSign />{item.price * item.quantity}
        </Flex>
        <Text fontSize="md">Quantity: {item.quantity}</Text>
        <Button colorScheme="red" size="sm" onClick={handleOpen}>
          Remove
        </Button>
      </Box>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Remove Item
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to remove this item from the cart?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleRemove} ml={3}>
                Remove
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default CartComponent;

