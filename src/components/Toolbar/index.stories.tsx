import Toolbar, { Friends } from './';

export default {
    title: 'Components/Toolbar',
    component: Toolbar
}

export const Default = () => <Toolbar />
export const DefaultFriends = () => <Friends friends={['Hello']} />