import React, { Component } from 'react';
import { Button } from "antd";
import { withRouter } from 'react-router-dom';



import './index.less';

 class HeaderMain extends Component {
	render() {
		return <div className="header-main">
			<div className="header-main-top">
				<span>欢迎，xxx</span>
				<Button type="link">退出</Button>
			</div>
			<div className="header-main-bottom">
				<h3>xx管理</h3>
				<div>
					<span>xxx时间</span>
					<img src="http://api.map.baidu.com/images/weather/day/qing.png" alt="weather"/>
					<span>晴</span>
				</div>
			</div>
		</div>
	}
}

export default withRouter(HeaderMain);