import React, { Fragment, useEffect } from 'react'
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom'
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

// const DUMMY_DATA = [
// 	{ id: 'q1', author: 'Nimit', text: 'Kehte Hai Khuda ne iss jahan main sabhi ke liye.' },
// 	{ id: 'q2', author: 'Nimit', text: 'Kisi na kisi ko hai banaya har kisi ke liye' },
// ]

const DetailedQuotes = () => {
	const params = useParams();
	const match = useRouteMatch();

	const { sendRequest, data: quote } = useHttp(getSingleQuote, true);

	useEffect(() => {
		sendRequest(params.quoteId)
	}, [sendRequest, params])


	// const quote = DUMMY_DATA.find(quote => quote.id === params.quoteId);
	console.log(quote)
	if (!quote) {
		console.log(quote)
		return <p>Quote Empty</p>
	}

	return (
		<Fragment>
			<HighlightedQuote text={quote.text} author={quote.author} />
			<Route path={match.path} exact>
				<div>
					<Link className='btn--flat centered' to={`${match.url}/comments`}>
						<h4>View Comments</h4>
					</Link>
				</div>
			</Route>
			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</Fragment>
	)
}

export default DetailedQuotes