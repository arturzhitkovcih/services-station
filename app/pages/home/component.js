import React from 'react';

import './index.scss';

const baseClassName = 'home-page';

class HomePage extends React.PureComponent {
    getClassNames = () => {
        return {
            component: baseClassName,
            content: `${baseClassName}__content`
        };
    };

    render() {
        const classNames = this.getClassNames();

        return (
            <div className={classNames.component}>
                <div className={classNames.content}>
                    <h1>Home</h1>
                </div>
            </div>
        );
    }
}

export default HomePage;
