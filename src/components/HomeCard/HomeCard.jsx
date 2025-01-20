import { Button, Spacer } from '@chakra-ui/react'
import CardStyle from './HomeCard.module.css'
import { Link } from 'react-router-dom'

export function HomeCard({product}){
    return (
        <>
            <div className={CardStyle.container}>

                <img 
                    src={product.image} 
                    alt={'Imagem do produto: ' + product.title} 
                    className={CardStyle.productImage}
                />

                <Spacer height={8} />

                <p>R$ {product.price.toFixed(2)}</p>

                <p className={CardStyle.productName}>{product.title}</p>

                <Spacer height={4} />

                <Link to={'/catalog/' + product.id}>
                    <button
                        variant='filled'
                        className={CardStyle.button}
                    >
                        Comprar
                    </button>
                </Link>
            </div>

            <Spacer height={4} />
        </>
    )
}