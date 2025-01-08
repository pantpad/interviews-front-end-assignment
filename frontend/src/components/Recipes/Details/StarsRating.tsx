export function StarsRating({ rating }: { rating: number }) {
    return (
        <div className={'flex flex-wrap'}>
            {[1, 2, 3, 4, 5].map((_, index) => {
                let starPath = '/assets/star-empty.svg'
                if (index < rating) {
                    starPath = '/assets/star.svg'
                }
                return <img src={starPath} alt={'star'} />
            })}
        </div>
    )
}
