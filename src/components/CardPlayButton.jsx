import { Pause, Play } from './Player'
import { usePlayerStore } from '@/store/playerStore'

export function CardPlayButton({ id, size = 'small' }) {
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
			})
	}

	const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-6 h-6'

	return (
		<button
			onClick={handleClick}
			className="card-play-button rounded-full bg-green-500 p-4 cursor-pointer hover:scale-105 transition hover:bg-green-400">
			{isPlayingPlaylist ? <Pause className={iconClassName} /> : <Play className={iconClassName} />}
		</button>
	)
}
