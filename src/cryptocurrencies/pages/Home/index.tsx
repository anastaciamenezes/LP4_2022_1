import { BaseSyntheticEvent,  useEffect, useState } from 'react'
import ReactLoading from 'react-loading'

import CryptoCard from '../../components/CryptoCard'
import { CurrencyFilter } from '../../components/CurrencyFilter'
import Price from '../../models/Price'
import CurrencyService from '../../services/CurrencyService'
import { currencies } from '../../utils'
import { Container, Filter, LoadingArea } from './styles'

const Home = () => {
  //Estado do componente - lista de preço [] inicializa com uma lista vazia
  /**
   * Utilizaremos um hook(useState) chamado useState
   * para armazenar valores dentro do estado
   * do componente
   */
  const [prices, setPrices] = useState<Price[]>([])
  const [pricesToBeDisplayed, setPricesToBeDisplayed] = useState<Price[]>([])
  const [isListLoaded, setIsListLoaded] = useState<boolean>(false)
  const [currency, setCurrency] = useState<string>('usd')
  const currencyService = new CurrencyService()

  const loadPrices = async () => {
    setIsListLoaded(false)
    const currentPrices = await currencyService.getPrices()
    setPrices(currentPrices)
    setPricesToBeDisplayed(currentPrices)
    setIsListLoaded(true)
  }
  /**
   * Invocar a função, pois ele não executa sozinho
   * utilizaremos um hook chamado useEffect para 
   * invocar o service de preços para nos trazer os
   * preços atuais assim que o componente Home for 
   * renderizado. Isto deverá ocorrer apenas uma vez 
   * após a renderização do componente.
   */
  useEffect(() => {
    loadPrices()
  }, [currency])

  const renderCryptoCard = (price: Price) => (
    <CryptoCard
      key={price.id}
      id={price.id}
      title={price.name}
      logo={price.image}
      price={price.currentPrice}
      priceChange={price.priceChange}
      currency={price.currency}
    />
  )
  /**
   * Pesquisa no original e mostra o resultado no alternativo criado
   */

  const filterPrices = (filter: string) => {
    if (filter) {
      const filteredPrices = prices.filter(p =>
        p.name.toLowerCase().includes(filter.toLocaleLowerCase())
      )
      setPricesToBeDisplayed(filteredPrices)
    } else {
      setPricesToBeDisplayed(prices)
    }
  }

  return (
    <Container>
      {isListLoaded ?(
        <div>
        <Filter
          placeholder="Type desired cryptocurrency"
          onKeyUp={(e: BaseSyntheticEvent) => filterPrices(e.target.value)}
        />
        <CurrencyFilter
          currencies={currencies}
          setCurrency={setCurrency}
          currencySelected={currency}
        />  
        {pricesToBeDisplayed.map(p => renderCryptoCard(p))}
      </div>
    )  
    : (  
      <LoadingArea>
        <ReactLoading
          type="spin"
          color="#8c14fc"
          width={'100%'} />
      </LoadingArea>
    )
  }
  </Container>
  )
}

export default Home