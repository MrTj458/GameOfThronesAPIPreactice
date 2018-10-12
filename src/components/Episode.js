import React from 'react'
import { Card } from 'semantic-ui-react'

const Episode = ({e}) => (
	<Card>
		<Card.Content>
			<Card.Header>{e.name}</Card.Header>
			<Card.Meta>Season: {e.season}</Card.Meta>
			<Card.Meta>Episode: {e.nr}</Card.Meta>
			<Card.Meta>Director: {e.director}</Card.Meta>
		</Card.Content>
	</Card>
)

export default Episode
