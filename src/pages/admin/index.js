import React , { Component } from 'react';
import { Redirect } from 'react-router-dom';
import data from '../../utils/store';
import { getItem } from '../../utils/storage';

export default class Admin extends Component {
	render() {
		if(!data.user._id) {
			const user = getItem();
			if(!user) {
				return <Redirect to="/login"/>;
			}
			data.user = user;
		}


		return <div>
			Admin
		</div>
	}
}