import Progress from './';

export default {
    title: 'Components/Progress',
    component: Progress,
    decorators:  [(Progress) => <div style={{ width: 300 }}><Progress/></div>]
}

export const Default = () => <Progress value={10} max={100} label="Label" />