import react from "react";
import Card from './Card'
import { Box, Stack } from "@chakra-ui/react"
import axios from "axios";

        const Home = () => {


            const checkoutHandler = async (amount) => {
        
                const { data: { key } } = await axios.get("http://www.localhost:3000/api/getkey")
        
                const { data: { order } } = await axios.post("http://localhost:3000/api/checkout", {amount})
        
                const options = {
                    key,
                    amount: order.amount,
                    currency: "INR",
                    name: "Mahima Sharma",
                    description: "programmer",
                    // image: "https://avatars.githubusercontent.com/u/25058652?v=4",
                    image: "https://media.istockphoto.com/id/511072562/photo/trade-networking.jpg?s=1024x1024&w=is&k=20&c=xq3d64RB9R8t_mzTb7PptB7X8s_cqN7Qunnz5gyiGNc=",
                    order_id: order.id,
                    callback_url: "http://localhost:3000/api/paymentverification",
                    prefill: {
                        name: "Pranavi",
                        email: "pranavi.kumar@example.com",
                        contact: "9999999999"
                    },
                    notes: {
                        "address": "Razorpay Corporate Office"
                    },
                    theme: {
                        "color": "#121212"
                    }
                };
                const razor = new window.Razorpay(options);
                razor.open();
            }

    
    return(
        // <div>
        //     <h1>Hello World</h1>
        // </div>
        <Box>
            <Stack  h={"100vh"} alignItems="center" justifyContent="center" direction = {["column", "row"]}>
            <Card amount={5000} img={"https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png"} checkoutHandler={checkoutHandler} />
            <Card amount={3000} img={"http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"} checkoutHandler={checkoutHandler} />

            </Stack>
        </Box>
    )
    }

export default Home