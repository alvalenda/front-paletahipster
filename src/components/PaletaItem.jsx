export function PaletaItem({ paleta }) {
  return (
    <div className='PaletaListaItem'>
      <div>
        <div className='PaletaListaItem__titulo'>{paleta.titulo}</div>
        <div className='PaletaListaItem__preco'>
          R$ {paleta.preco.toFixed(2)}
        </div>
        <div className='PaletaListaItem__descricao'>{paleta.descricao}</div>
        <div className='PaletaListaItem__acoes Acoes'>
          <button className='Acoes__adicionar Acoes__adicionar--preencher'>
            adicionar
          </button>
        </div>
      </div>
      <img
        className='PaletaListaItem__foto'
        src={paleta.foto}
        alt={`Paleta de ${paleta.sabor}`}
      />
    </div>
  )
}

PaletaItem.defaultProps = {
  paleta: {
    titulo: 'titulo teste',
    preco: 8.0,
    descricao: 'descrição teste',
    foto: 'foto teste',
    sabor: 'sabot teste',
  },
}
