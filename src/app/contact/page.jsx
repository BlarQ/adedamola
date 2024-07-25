"use client"
import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import Image from 'next/image';
import Swal from 'sweetalert2'

export default function Contact() {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Message: ''
    });

    const [isEmailValid, setIsEmailValid] = useState(true);

    const onSubmit = async (event) => {
        event.preventDefault();

        const dataToSend = { ...formData, access_key: "4a61942c-6775-4d33-b449-eb1572351c23" };
        const json = JSON.stringify(dataToSend);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            const result = await res.json();

            if (res.ok) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Message sent successfully!',
                    icon: 'success'
                });
                setFormData({ Name: '', Email: '', Message: '' });
            } else {
                console.error("Error:", result.message);
                Swal.fire({
                    title: 'Error!',
                    text: result.message || 'Something went wrong. Please try again!',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Please try again. Thanks!',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        // Email validation
        if (name === 'Email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setIsEmailValid(emailPattern.test(value));
        }

        setFormData({ ...formData, [name]: value });
    };

    const isFormValid = Object.values(formData).every((value) => value.trim() !== '') && isEmailValid;

    return (
        <div className='py-20 sm:py-10 px-5 sm:px-28 h-[92dvh]' id='contact'>
            <div className='flex flex-col items-start'>
                <h1 className='text-xl sm:text-3xl font-bold'>Contact Me</h1>
                <hr className='border-4 w-14 sm:w-20 border-[#4AC8A3] right-0' />
            </div>

            <div className='py-10 sm:py-24 flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center sm:space-x-28'>
                <Box
                    component="form"
                    className='sm:w-1/2'
                    noValidate
                    autoComplete="off"
                    onSubmit={onSubmit}
                >
                    <div className='flex flex-col gap-4'>
                        <TextField
                            label="Name"
                            size='small'
                            type='text'
                            name='Name'
                            value={formData.Name}
                            onChange={handleChange}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'gray',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#4AC8A3',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#4AC8A3',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'gray',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#4AC8A3',
                                },
                                '& .MuiOutlinedInput-root:focus-within': {
                                    outline: 'none',
                                }
                            }}
                        />
                        <TextField
                            label="Email"
                            size='small'
                            type='email'
                            name='Email'
                            value={formData.Email}
                            onChange={handleChange}
                            error={!isEmailValid}
                            helperText={!isEmailValid && "Please enter a valid email address"}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'gray',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#4AC8A3',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#4AC8A3',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'gray',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#4AC8A3',
                                },
                                '& .MuiOutlinedInput-root:focus-within': {
                                    outline: 'none',
                                }
                            }}
                        />
                        <TextField
                            label="Your Message"
                            multiline
                            minRows={4}
                            name='Message'
                            value={formData.Message}
                            onChange={handleChange}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'gray',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#4AC8A3',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#4AC8A3',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'gray',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#4AC8A3',
                                },
                                '& .MuiOutlinedInput-root:focus-within': {
                                    outline: 'none',
                                }
                            }}
                        />

                        <Button 
                            type='submit'
                            className='w-fit bg-[#4AC8A3] hover:bg-[#4ac8a3]'
                            variant="contained"
                            endIcon={<SendIcon />}
                            disabled={!isFormValid}
                        >
                            Send
                        </Button>
                    </div>
                </Box>

                <div className='sm:w-1/2'>
                    <Image className='w-full sm:w-[85%]' src='/Email.svg' width={50} height={50} alt='email Image' />
                </div>
            </div>
        </div>
    )
}
