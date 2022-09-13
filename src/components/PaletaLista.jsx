import './PaletaLista.css'
import { paletas } from '../mocks/paletas'

export const PaletaLista = () => {
  return (
    <div className='PaletaLista'>
      {paletas.map((paleta, index) => {
        return (
          <div className='PaletaListaItem'>
            <div>
              <div className='PaletaListaItem__titulo'>{paleta.titulo}</div>
              <div className='PaletaListaItem__preco'>
                R$ {paleta.preco.toFixed(2)}
              </div>
              <div className='PaletaListaItem__descricao'>
                {paleta.descricao}
              </div>
              <div className='PaletaListaItem__acoes Acoes'>
                <button className='Acoes__adicionar Acoes__adicionar--preencher'>
                  adicionar
                </button>
              </div>
            </div>
            <img
              className='PaletaListaItem__foto'
              src={paleta.foto}
              alt={paleta.titulo}
            />
          </div>
        )
      })}
    </div>
  )
}
