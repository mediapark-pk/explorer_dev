import React from 'react';
import ReactDOM from 'react-dom';
import 'reflect-metadata';
import App from 'src/app/component/App';
import { Provider } from '@app/core';
import { container } from 'src/container';

ReactDOM.render((
    <Provider container={container}>
        <App/>
    </Provider>
), document.getElementById('app'));

