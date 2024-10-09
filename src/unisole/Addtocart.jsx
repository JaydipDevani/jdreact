import React from 'react';
import Lcd_monitor_img from '../unisole/Images/Lcd_monitor.png'
import Hi_gamepad_img from '../unisole/Images/Hi_gamepad.png'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container, Placeholder } from 'react-bootstrap';

const Addtocart = () => {
    const cartItems = [
        {
            id: 1,
            name: 'Air Pegasus 37 Running Shoes',
            image: Lcd_monitor_img,
            price: 650,
            quantity: 1,
        },
        {
            id: 2,
            name: 'Nike Cosmic Unity Men\'s Shoes',
            image: Hi_gamepad_img,
            price: 550,
            quantity: 1,
        },
    ];

    const handleRemoveItem = (itemId) => {
        // Handle item removal logic here
    };

    const handleQuantityChange = (itemId, newQuantity) => {
        // Handle quantity change logic here
    };

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Subtotal</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartItems.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>
                                    <img src={item.image} alt={item.name} style={{ width: 50, height: 50 }} />
                                    {item.name}
                                </TableCell>
                                <TableCell>${item.price}</TableCell>
                                <TableCell>
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        placeholder='Add quantity'
                                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                                    />
                                </TableCell>
                                <TableCell>${item.price * item.quantity}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => handleRemoveItem(item.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant="contained" color="" sx={{ border: "1px solid black" }}>
                        Return To Shop
                    </Button>
                    <Button variant="contained" color="" sx={{ border: "1px solid black" }}>
                        Update Cart
                    </Button>
                </div>
            </TableContainer>
        </Container>
    );
};

export default Addtocart;