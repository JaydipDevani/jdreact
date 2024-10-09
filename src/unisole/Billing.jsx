import React, { useState } from 'react';
import Bil_pay from './Bil_pay';
import {
    TextField,
    Button,
    Container,
    Typography,
    Grid,
    Paper,
} from '@mui/material';

const Billing = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        country: '',
        cardNumber: '',
        expiration: '',
        cvv: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send data to server)
        console.log('Form submitted:', formData);
    };

    return (
        <Container maxWidth="md" className='d-flex m-0 gap-5 w-100 m-auto'>
            <div className="w-50">
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Billing Information
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="name"
                                    label="Full Name"
                                    variant="outlined"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="email"
                                    label="Email Address"
                                    variant="outlined"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="address"
                                    label="Address"
                                    variant="outlined"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="city"
                                    label="City"
                                    variant="outlined"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="zip"
                                    label="ZIP Code"
                                    variant="outlined"
                                    value={formData.zip}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="country"
                                    label="Country"
                                    variant="outlined"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="cardNumber"
                                    label="Card Number"
                                    variant="outlined"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    required
                                    type="number"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    name="expiration"
                                    label="Expiration Date (MM/YY)"
                                    variant="outlined"
                                    value={formData.expiration}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    name="cvv"
                                    label="CVV"
                                    variant="outlined"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    required
                                    type="number"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary" fullWidth sx={{bgcolor:"text.primary"}}>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </div>
            <div className="w-50">
                <Bil_pay />
            </div>
        </Container>
    );
};

export default Billing;
