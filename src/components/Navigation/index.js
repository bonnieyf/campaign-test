import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'

import StoreContext from '~/context/StoreContext'
import {
	Container,
	MenuLink,
	Wrapper
} from './styles'

import headerStyle from './header.css'

// const useQuantity = () => {
// 	const { store: {checkout} } = useContext(StoreContext)
// 	const items = checkout ? checkout.lineItems : []
// 	const total = reduce(items, (acc, item) => acc + item.quantity, 0)
// 	return [total !== 0, total]
// }

const Navigation = ({ siteTitle }) => {
//   const [hasItems, quantity] = useQuantity()
	return(	
		<Wrapper>
			<Container>
				<MenuLink to='/'>
				   <img className="logo" alt="Moshi Logo link to home" src="https://cdnblob.moshi.com/images/main/moshilogo_black.svg"/>
				</MenuLink>
			</Container>
		</Wrapper>
	)
}

Navigation.propTypes = {
	siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
	siteTitle: ``,
}

export default Navigation
