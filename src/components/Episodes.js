import React, { Fragment } from 'react'
import axios from 'axios'
import Season from './Season'
import {
	Header,
	Divider,
} from 'semantic-ui-react'


class Episodes extends React.Component {
	state = { episodes: [] }
	
	componentDidMount() {
		axios.get('https://api.got.show/api/episodes/')
			.then( res => this.setState({ episodes: res.data }) )
	}

	filter = (season) => {
		const { episodes } = this.state
		return episodes.filter(e => e.season === season)
	}

	render() {
		return (
			<Fragment>
				<Header as="h1" textAlign="center">Episodes</Header>
				<Divider />
				<Season num={1} s={this.filter(1)} />
				<Season num={2} s={this.filter(2)} />
				<Season num={3} s={this.filter(3)} />
				<Season num={4} s={this.filter(4)} />
				<Season num={5} s={this.filter(5)} />
			</Fragment>
		)
	}
}

export default Episodes
