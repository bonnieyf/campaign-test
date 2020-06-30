import React from 'react'
import { Link } from 'gatsby'
import {
  Grid,
  Product,
  Title,
  PriceTag
} from './styles'
import HoverImg from '~/components/ProductGrid/styles.css'
import datas from '~/components/ProductGrid/products.json'


const ProductGrid = () => {
    return (
      <Grid>
        {
          datas.map((data)=>(
            <Product key={data.id}>
              <Link to={`/product/${data.id}`} className="hoverImg">
                <img src={data.img1} className="normal"/>
                <img src={data.img2} className="hover"/>
              </Link>
              <Title>{ data.name }</Title>
              <PriceTag>{data.price}</PriceTag>
            </Product>
          ))
        }
        
      </Grid>
    );
}

export default ProductGrid
