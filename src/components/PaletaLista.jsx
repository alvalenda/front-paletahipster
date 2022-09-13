import './PaletaLista.css'
import { paletas } from '../mocks/paletas'
import { PaletaItem } from './PaletaItem'

export const PaletaLista = () => {
  return (
    <div className='PaletaLista'>
      {paletas.map((paleta, index) => {
        return <PaletaItem key={index} paleta={paleta} />
      })}
    </div>
  )
}
