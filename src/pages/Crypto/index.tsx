import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { CurrencyFilter } from '../../components/CurrencyFilter'
import CryptoCoin from "../../models/CryptoCoin"
import CurrencyService from "../../services/CurrencyService"
import { currencies, formatCurrency } from '../../utils'
import { BackButton, BackLink, BackLinkPanel, Container, CryptoPanel, PanelRow, RowKey, RowValue } from "./styles"
type Params = {
  id: string
  name: string
  currency: string
}

const Crypto = () => {
/**
 * Utilizaremos o hook useParams para
 * resgatar os parametros recebidos no
 * componente da página
 */
  const { id, name, currency = '' } = useParams<Params>()
  const [currencySelected, setCurrencySelected] = useState<string>(currency)
  const [cryptoCoin, setCryptoCoin] = useState<CryptoCoin>({
    id: '',
    name: '',
    change24h: 0,
    volume24h: 0,
    marketCap: 0,
    price: 0,
    currencyType: ''
  })

  const currencyService = new CurrencyService()

  const loadCryptoCoin = async () => {
    if (id && name) {
      const crypto = await currencyService.getCoin(id, name, currencySelected)
      setCryptoCoin(crypto)
    }
  }

  useEffect(() => {
    loadCryptoCoin()
  }, [currencySelected])


  return (
    <Container>
      <CurrencyFilter
        currencies={currencies}
        setCurrency={setCurrencySelected}
        currencySelected={currencySelected}
      />
        <CryptoPanel>
          <PanelRow>
              <RowKey>Coin:</RowKey>
              <RowValue>{cryptoCoin.name}</RowValue>
          </PanelRow>
          <PanelRow>
              <RowKey>Value:</RowKey>
              <RowValue>{formatCurrency(currencySelected, cryptoCoin.price)}</RowValue>
          </PanelRow>
          <PanelRow>
              <RowKey>Market Cap:</RowKey>
              <RowValue>{formatCurrency(currencySelected, cryptoCoin.marketCap)}</RowValue>
          </PanelRow>
          <PanelRow>
              <RowKey>24h Volume:</RowKey>
              <RowValue>{formatCurrency(currencySelected, cryptoCoin.volume24h)}</RowValue>
          </PanelRow> 
          <PanelRow>
          <RowKey>24h Change ({cryptoCoin.currencyType.toUpperCase()}):</RowKey>
              <RowValue>{cryptoCoin.change24h.toFixed(4)}%</RowValue>
          </PanelRow>
      </CryptoPanel>

      <BackLinkPanel>
          <BackLink to='/'>
              <BackButton>Back to currencies</BackButton>
          </BackLink>
      </BackLinkPanel>      
  </Container>
  )
}

export default Crypto