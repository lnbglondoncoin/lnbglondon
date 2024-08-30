import React from 'react'
import CryptoMainBanner from './_components/CryptoMainBanner'
import Converter from './_components/Converter'
import InvestmentDetails from './_components/InvestmentDetails'

const CryptocurrenciesLayout = ({children}) => {
  return (
    <div className="flex flex-col gap-10">
        <CryptoMainBanner />
        {children}
        <Converter />
        <InvestmentDetails />
    </div>
  )
}

export default CryptocurrenciesLayout