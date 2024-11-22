import React from 'react';
import CartPage from "./CartPage"

export const generateMetadata = () => {
    return {
        title: "Cart -  YesTube",
        description: "Cart -  YesTube"
    }
}

function page() {
    return <CartPage />
}

export default page