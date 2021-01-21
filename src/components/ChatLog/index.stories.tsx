import ChatLog from '.'

export default {
    title: 'Components/Chat Log',
    component: ChatLog,
    parameters: {
        backgrounds: {
            default: 'dark'
        }
    }
}

export const Default = () => <ChatLog />