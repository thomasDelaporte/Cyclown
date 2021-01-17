import React from 'react';

import LoadingState from '../states/loading';
import HotelState from '../states/hotel';
import RoomState from '../states/room';

export default {
    title: 'State'
}

export const Loading = (args) => <LoadingState {...args} />;
export const Hotel = (args) => <HotelState {...args} />;
export const Room = (args) => <RoomState {...args} />;