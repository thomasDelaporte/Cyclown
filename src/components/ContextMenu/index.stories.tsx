import ContextMenu, { PetContextMenu, AvatarContextMenu } from './'

export default {
    title: 'Components/Context Menu',
}

export const Default = () => <ContextMenu title="Thomas" />
export const Avatar = () => <AvatarContextMenu title="Thomas" />
export const Pet = () => <PetContextMenu title="Thomas" />
