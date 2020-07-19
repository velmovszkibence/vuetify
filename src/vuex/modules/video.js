export const namespaced = true

export const state = {
    videos: [
        {
            id: 1,
            color: '#1F7087',
            title: 'Video Title',
            image_src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
            video_src: '/',
        },
        {
            id: 2,
            color: '#1F7087',
            title: 'Video Title',
            image_src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
            video_src: '/',
        },
        {
            id: 3,
            color: '#1F7087',
            title: 'Video Title',
            image_src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
            video_src: '/',
        },
        {
            id: 4,
            color: '#1F7087',
            title: 'Video Title',
            image_src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
            video_src: '/',
        },
    ]
}

export const actions = {}

export const mutations = {
    SET_VIDEOS(state, videoData) {
        state.videos = videoData
    }
}

export const getters = {
    getVideoById: state => id => {
        return state.videos.find(video => video.id === id)
    },
}
