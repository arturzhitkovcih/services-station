import React from 'react';

class MasterPage extends React.PureComponent {
    render() {
        return (
            <>
                {this.props.children}
            </>
        );
    }
}

export default MasterPage;
