import LandingPanel from './';

export default {
    title: 'Components/Landing Panel',
    component: LandingPanel,
    parameters: {
        backgrounds: {
            default: 'dark'
        }
    }
}

export const Default = () => <LandingPanel />