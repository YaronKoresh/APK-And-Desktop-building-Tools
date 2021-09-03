import { Redirect, Route } from 'react-router-dom';
import react, { useState } from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import './more/pages/home';
import './more/pages/code';
import './more/pages/guide';
import './more/pages/about';

export default function App() {
	return (
		<IonApp>
			<IonReactRouter>
				<IonRouterOutlet>
					<Route path="/" exact={true} component={Home()} />
					<Route path="/home" exact={true} component={Home()} />
					<Route path="/code" exact={true} component={Code()} />
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	)
}
