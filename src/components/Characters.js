import React, { Fragment } from 'react'
import Character from './Character'
import axios from 'axios'
import {
	Header,
	Card,
	Divider
} from 'semantic-ui-react'

class Characters extends React.Component {
	state = { characters: [] }

	componentDidMount() {
		axios.get('https://api.got.show/api/characters/')
			.then( res => this.setState({ characters: res.data }) )
	}
	
	render() {
		const { characters } = this.state
		return (
			<Fragment>
				<Header as="h1" textAlign="center">Characters</Header>
				<Divider />
				<Card.Group itemsPerRow={4}>
					{ characters.map( c => 
							<Character key={c._id} c={c} />	
					)}
				</Card.Group>
			</Fragment>
		)
	}
}

export default Characters
