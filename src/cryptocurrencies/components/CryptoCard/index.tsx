import { Card, CryptoLogo, CryptoTitle, Price, ViewLink } from './styles'

import { formatCurrency } from '../../utils'

type Props = {
  id: string
  logo: string
  title: string
  price: number
  priceChange: number
  currency: string

}
/**
*const priceIncreasedStyle = {
*  color: '#26c281'
*}

*const priceDecreasedStyle = {
*  color: '#ff4c30'
*}
*/
export const CryptoCard = ({id, logo, title, price, priceChange, currency }: Props) => {
/**
  const priceStyle =
      priceChange >= 0
      ? priceIncreasedStyle
      : priceDecreasedStyle
 */
  return (
    <ViewLink to={`/crypto/${id}/${title}/${currency}`}>
      <Card key={id}>
        <CryptoLogo src={logo} alt={`${title} logo`} />
        <CryptoTitle>{title}</CryptoTitle>

        <Price priceVariance={priceChange} >
          {formatCurrency(currency, price)} </Price>
      </Card>
    </ViewLink>  
  )
}

export default CryptoCard