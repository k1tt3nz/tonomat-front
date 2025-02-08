const videos = [
    {
        name: 'Видео 1',
        duration: 15,
        id: 1,
    },
    {
        name: 'Видео 2',
        duration: 5,
        id: 2,
    },
    {
        name: 'Видео 3',
        duration: 25,
        id: 3,
    },
]

export function VideoList() {
    return (
        <>
            <h1>Video List</h1>
            {
                videos.map((video) => {
                    return (
                        <div key={video.id}>
                            <p>Название: {video.name}</p>
                            <p>Длительность: {video.duration}</p>
                            <button>ГОЙДА!</button>
                        </div>
                    )
                })
            }
        </>
    );
}