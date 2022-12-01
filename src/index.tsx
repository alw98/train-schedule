import React from 'react';
import { render } from 'react-dom';
import { App } from 'App';
import 'Styles/styles';

const root = document.createElement('div');
document.body.appendChild(root);
render(<App />, root);
