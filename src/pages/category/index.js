import React, { Component,Fragment } from 'react';
import { Card, Button, Icon, Table } from 'antd';

import './index.less';

export default class Category extends Component {
	render() {

		const columns = [
			{
				title: '品类名称',//列的标题
				dataIndex: 'categoryName',
				// render: text => <a>{text}</a>,
			},
			{
				title: '操作',//列的标题
				className: 'column-money',//列的类名
				dataIndex: 'operation',
				render: () => {
					return <Fragment>
						<Button type="link">修改名称</Button>
						<Button type="link">查看其子品类</Button>
					</Fragment>
				}
			},

		];

		const data = [
			{
				_id: '1',
				categoryName: '手机111',
			},
			{
				_id: '2',
				categoryName: '手机222',
			},
			{
				_id: '3',
				categoryName: '手机333',
			},
			{
				_id: '4',
				categoryName: '手机444',
			},
		];

		return <Card title="一级分类列表" extra={<Button type="primary"><Icon type="plus"/>添加品类</Button>}>
			<Table
				columns={columns}
				dataSource={data}
				bordered
				pagination={{
					showQuickJumper:true,//显示快速跳转
					showSizeChanger:true,// 显示修改每页显示数量
					pageSizeOptions:['3', '6', '9', '12'],// 修改每页显示数量
					defaultPageSize:3// 默认显示数量
				}}
				rowKey="_id"
			/>,
		</Card>
	}
}