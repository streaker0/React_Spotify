import React from 'react'

export default function TrackSearchResult({track,chooseTrack}) {
	function playMusic(){
		chooseTrack(track)
	}
	return (
		<div className = "d-flex m-2 align-items-center" style={{cursor: 'pointer'}}
		onClick = {playMusic}>
			<img src={track.albumUrl} alt={track.title} style={{height:'64px', width:'64px'}}/>
			<div className=" m-2">
				<div>{track.title}</div>
				<div className="text-muted">{track.artist}</div>
			</div>
			
		</div>
	)
}
