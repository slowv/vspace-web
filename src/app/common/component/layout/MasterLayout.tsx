import React, {Key, ReactNode, useState} from "react";
import {Breadcrumb, Layout, Menu, type MenuProps, theme} from "antd";
import {Outlet, Route, useNavigate} from "react-router-dom";
import {Logo} from "../logo/logo";
import {HeaderMaster} from "../header/header-master";
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {RouteRoot} from "../../../core/routeRoot";
const {Header, Content, Footer, Sider} = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: ReactNode,
    key: Key,
    icon?: ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined/>),
    getItem('Option 2', '2', <DesktopOutlined/>),
    getItem('User', 'sub1', <UserOutlined/>, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined/>, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined/>),
];

export const MasterLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    const navigate = useNavigate();


    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider
                style={{background: colorBgContainer}}
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                theme={'light'}
            >
                <Logo/>
                <Menu defaultSelectedKeys={['1']} mode="inline" items={items}/>
            </Sider>
            <Layout>
                <HeaderMaster/>
                <Content style={{margin: '20px 16px 0'}}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <RouteRoot/>
                        <Outlet/>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center', background: colorBgContainer}}>Vspace Design ©2023</Footer>
            </Layout>
        </Layout>
    );
}