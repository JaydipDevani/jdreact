import React from 'react';
import Lcd_monitor_img from '../unisole/Images/Lcd_monitor.png'
import Hi_gamepad_img from '../unisole/Images/Hi_gamepad.png'
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Button,
} from '@mui/material';

const Bil_pay = () => {
  return (
    <Box>
      {/* Order Summary */}
      <Box>
        <Typography variant="h6">Order Summary</Typography>

        {/* Item 1 */}
        <Box display="flex" justifyContent="space-between" alignItems="center" my={2}>
          <Box display="flex" alignItems="center">
            <img src={Lcd_monitor_img} alt="LCD Monitor" className='w-auto h-auto' />
            <Typography variant="body1" ml={2}>
              LCD Monitor
            </Typography>
          </Box>
          <Typography variant="body1">₹650</Typography>
        </Box>

        {/* Item 2 */}
        <Box display="flex" justifyContent="space-between" alignItems="center" my={2}>
          <Box display="flex" alignItems="center">
            <img src={Hi_gamepad_img} alt="Gamepad" className='w-auto h-auto' />
            <Typography variant="body1" ml={2}>
              H1 Gamepad
            </Typography>
          </Box>
          <Typography variant="body1">₹1100</Typography>
        </Box>

        <hr />

        {/* Subtotal */}
        <Box display="flex" justifyContent="space-between" alignItems="center" my={2}>
          <Typography variant="body1">Subtotal:</Typography>
          <Typography variant="body1">₹1750</Typography>
        </Box>

        {/* Shipping */}
        <Box display="flex" justifyContent="space-between" alignItems="center" my={2}>
          <Typography variant="body1">Shipping:</Typography>
          <Typography variant="body1">Free</Typography>
        </Box>

        <hr />

        {/* Total */}
        <Box display="flex" justifyContent="space-between" alignItems="center" my={2}>
          <Typography variant="h6">Total:</Typography>
          <Typography variant="h6">₹1750</Typography>
        </Box>
      </Box>

      {/* Payment Options */}
      <Box mt={4}>
        <Typography variant="h6">Payment Options</Typography>
        <RadioGroup>
          <FormControlLabel value="bank" control={<Radio />} label="Bank" />
          <FormControlLabel value="cod" control={<Radio />} label="Cash on delivery" />
        </RadioGroup>
      </Box>

      {/* Coupon Code */}
      <Box mt={4} className='d-flex gap-3'>
        <TextField
          fullWidth
          label="Coupon Code"
          variant="outlined"
        />
        <Button variant="contained" color="primary" fullWidth mt={2} sx={{bgcolor:"text.primary"}}>
          Apply Coupon
        </Button>
      </Box>

      {/* Place Order Button */}
      <Button variant="contained" color="primary" fullWidth mt={4} className='mt-3 py-2' sx={{bgcolor:"text.primary"}}>
        Place Order
      </Button>
    </Box>
  );
};

export default Bil_pay;