import React, { useState, useContext, useMemo } from 'react';
import ProductCard from './ProductCard';
import CartContext from '../Context/Cartcontext';
import Popup from './Popup';
import { Box, Select, Flex } from '@chakra-ui/react';

const ShowProducts = () => {
  const data = useMemo(() => [
    {
      id: 1,
      image: '/productimages/beauty.jpg',
      price: 120,
      title: 'Beauty',
      description: 'This is beauty product'
    },
    {
      id: 2,
      image: '/productimages/beauty2.jpg',
      price: 400,
      title: 'Beauty',
      description: 'This is beauty product'
    },
    {
      id: 3,
      image: '/productimages/camera.jpg',
      price: 1000,
      title: 'Camera',
      description: 'This is a camera product'
    },
    {
      id: 4,
      image: '/productimages/clothes.jpg',
      price: 3000,
      title: 'Cloth',
      description: 'This is cloth product'
    },
    {
      id: 5,
      image: '/productimages/shoes.jpg',
      title: 'Shoes',
      description: 'This is Shoes Product',
      price: 6000
    }
  ], []);

  const { togglePopup } = useContext(CartContext);
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  const filteredData = useMemo(() => {
    if (!selectedPriceRange) return data;
    
    const [min, max] = selectedPriceRange.split('-').map(Number);
    return data.filter(item => item.price >= min && item.price <= max);
  }, [selectedPriceRange, data]);

  const handlePriceRangeChange = (e) => {
    setSelectedPriceRange(e.target.value);
  };

  return (
    <div>
      <Box w={'20vw'} p={4}>
        <Select placeholder="Filter by price" onChange={handlePriceRangeChange} value={selectedPriceRange}>
          <option value="0-500">₹0 - ₹500</option>
          <option value="501-1000">₹501 - ₹1000</option>
          <option value="1001-3000">₹1001 - ₹3000</option>
          <option value="3001-6000">₹3001 - ₹6000</option>
        </Select>
      </Box>
      <Flex flexWrap="wrap" ml={10} mt={5}>
        {filteredData.map((u) => (
          <ProductCard key={u.id} data={u} />
        ))}
      </Flex>
      {togglePopup && <Popup />}
    </div>
  );
};

export default ShowProducts;
