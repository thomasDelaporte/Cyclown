import React from 'react';

export default class Group extends React.PureComponent {

    constructor(props){
        super(props);

        this.state = {
            isOpen: false
        }
    }
    
    toggleOpen = () => {
        this.setState(({ isOpen }) => ({
            isOpen: !isOpen
        }));
    }
    
    render(){
        return (
            <div className="navigator-group">

                <div className="navigator-group-header" onClick={this.toggleOpen}>
                    <i className="icon icon-plus"></i>
                    <h2>{this.props.title}</h2>

                    <div className="navigator-group-header-actions">
                        <i className="icon icon-search"></i>
                        
                        <button className="btn btn-saved">
                            <i className="icon icon-storm"></i>
                        </button>
                    </div>
                </div>

                {this.state.isOpen &&
                    <ul className="navigator-group-content">

                        <li className="navigator-room">

                            <div className="navigator-room-users">
                                <i className="icon icon-user"></i>46
                            </div>

                            <h3>Club NX</h3>

                            <div className="navigator-room-infos">
                                <i className="icon icon-info"></i>
                            </div>
                        </li>

                        <li className="navigator-room">

                            <div className="navigator-room-users">
                                <i className="icon icon-user"></i>46
                            </div>

                            <h3>Club NX</h3>

                            <div className="navigator-room-infos">
                                <i className="icon icon-info"></i>
                            </div>
                        </li>
                    </ul>
                }
            </div>
        )
    }
}