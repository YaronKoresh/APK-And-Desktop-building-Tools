import { Redirect, Route } from 'react-router-dom';
import react, { useState } from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import './more/pages/home';

export default function App() {
	return (
		<IonApp>
			<IonReactRouter>
				<IonRouterOutlet>
					<Route path="/" exact={true}>
						<Redirect to="/home" />
					</Route>
					<Route path="/home" exact={true}>
						{Home()}
					</Route>
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	)
}