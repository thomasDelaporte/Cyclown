import ChatHistory from './'

export default {
    title: 'Components/Chat History',
    component: ChatHistory,
    parameters: {
        backgrounds: {
            default: 'dark'
        }
    }
}

export const Default = () => <ChatHistory />