import React, { Fragment } from 'react'
import Episode from './Episode'
import {
	Card,
	Header,
	Divider,
} from 'semantic-ui-react'

const Season = ({num, s}) => (
	<Fragment>
		<Header as="h3" textAlign="center">Season {num}</Header>
		<Card.Group itemsPerRow={5}>
			{s.map(e =>
				<Episode key={e._id} e={e} />
			)}
		</Card.Group>
		<Divider />
	</Fragment>
)

export default Season
