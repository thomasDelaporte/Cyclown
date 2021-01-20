import Dialog from './index';

export default {
    title: 'Components/Dialog',
    component: Dialog,
    decorators: [(Dialog) => <div style={{ width: 500 }}><Dialog /></div>]
}

export const Default = (args) => <Dialog {...args} title="Oui">hello world</Dialog>