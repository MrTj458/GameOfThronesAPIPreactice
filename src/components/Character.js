import React from 'react'
import { Card } from 'semantic-ui-react'

const Character = ({ c }) => (
	<Card>
		<Card.Content>
			<Card.Header>{c.name}</Card.Header>
			{ c.titles && <Card.Meta>Titles: {c.titles.map(t => `${t}, `)}</Card.Meta> }
			{ c.house && <Card.Meta>House: {c.house}</Card.Meta> }
			<Card.Meta>Gender: {c.male ? 'Male' : 'Female'}</Card.Meta>
			{ c.spouse && <Card.Meta>Spouse: {c.spouse}</Card.Meta> }
			{ c.books &&<Card.Description><strong>Books:</strong> {c.books.map(b => `${b}, `)}</Card.Description> }
		</Card.Content>
	</Card>
)

export default Character
