import React from "react";
import { Menu, Dropdown, Space } from "antd";
import UserImage from "../../assets/images/user.jpg";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "./UserDropdown.css";

export default function UserDropdown() {
	const menus = (
		<Menu>
			<Menu.Item key="1" icon={<ExitToAppIcon />}>
				<a target="_blank" rel="noopener noreferrer" href="https://www.google.com/">
					Sign Out
				</a>
			</Menu.Item>
		</Menu>
	);
	return (
		<Space direction="vertical">
			<Space wrap>
				<Dropdown overlay={menus} placement="bottomRight">
					<div className="header-user">
						<div className="header-user-text">
							<h3 className="user-name">Fadhil Yusuf</h3>
							<span className="user-title">Engineer</span>
						</div>
						<div className="header-image-container">
							<img src={UserImage} alt="user" className="user-image" />
						</div>
					</div>
				</Dropdown>
			</Space>
		</Space>
	);
}
