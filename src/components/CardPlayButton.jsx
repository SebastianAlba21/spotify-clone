import { Pause, Play } from './Player'
import { usePlayerStore } from '@/store/playerStore'

export function CardPlayButton({ id }) {
	const { isPlaying, currentMusic, setIsPlaying, setCurrentMusic } = usePlayerStore(state => state)
	const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id
	const handleClick = () => {
		if (isPlayingPlaylist) {
			setIsPlaying(false)
			return
		}

		fetch(`api/get-info-playlist.json?id=${id}`)
			.then(res => res.json())
			.then(data => {
				const { playlist, songs } = data
				setIsPlaying(true)
				setCurrentMusic({ songs, playlist, song: songs[0] })
				console.log({ songs, playlist })
			})
	}

	return (
		<button
			onClick={handleClick}
			className="card-play-button rounded-full bg-green-500 p-4 cursor-pointer">
			{isPlayingPlaylist ? <Pause /> : <Play />}
		</button>
	)
}
