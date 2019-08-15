import React , { Component } from 'react';
import { reqValidateUser } from '../../api'
import data from '../../utils/store';
import { getItem } from '../../utils/storage';
import { message , Spin } from 'antd';

import './index.less';

export default class Admin extends Component {
	state = {
		isLoading:true
	};
	checkUserLogin =() => {
		if(!data.user._id) {
			const user = getItem();
			if(!user) {
				this.props.history.replace('/login');
				return true;
			}

			//验证用户信息是否合法
			reqValidateUser(user._id)
				.then(() =>{
					data.user = user;
					//更新状态，显示admin页面
					this.setState({
						isLoading:false
					})
				})
				.catch(() => {
					//错误提示
					message.error("请先登录",3)
					this.props.history.replace('/login');
				});
			//需要loading
			return true;
		} else {
			//不需要Loading
			return  false
		}
	};
	render() {

		const isLoading = this.checkUserLogin();

		if(isLoading) return <Spin className="admin-loading" tip="loading....." size="large"/>;

		return <div>
			Admin
		</div>
	}
}