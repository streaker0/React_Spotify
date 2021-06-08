import React ,{useState} from 'react'
import useAuth from  './useAuth'
import {Container, Form} from 'react-bootstrap'
import SpotifyWebApi from 'spotify-web-api-node'
export default function Dashboard({code}) {
	const accessToken = useAuth(code) 
	const [search,setSearch] = useState("")
	return (
		<Container className="d-flex flex-column py-2" style={{height:"100vh"}}>
			<Form.Control type = 'search' placeholder="Search Songs/Artist" value = {search} onChange={ e=>setSearch(e.target.value)}/>
			<div className="flex-grow-1 my-2" style={{overflowY:"auto"}}>
				Songs
			</div>
			<div>Player</div>
		</Container>
	)
}
