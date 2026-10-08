'use client';
import React, { useState } from 'react';
import { createContext } from 'react'

export const BazarContext = createContext({});

const BazarProvider = ({ children }: { children: React.ReactNode }) => {
    const [maxPrice, setMaxPrice] = useState<number>(0);
    const [minPrice, setMinPrice] = useState<number>(0);
    const [avgPrice, setAvgPrice] = useState<number>(0);
    const shareData = {
        maxPrice,
        setMaxPrice,
        minPrice,
        setMinPrice,
        avgPrice,
        setAvgPrice
    }

    return (
        <BazarContext.Provider value={{shareData}}>
            {children}
        </BazarContext.Provider>
    );
};

export default BazarProvider;