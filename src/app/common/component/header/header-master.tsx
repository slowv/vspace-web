import React, {useEffect, useState} from "react";
import {Flex, Input, Layout, Space, theme} from 'antd';
import {SearchOutlined} from "@ant-design/icons";
import './header-master.scss'

const {Header} = Layout;

export const HeaderMaster = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const [focus, setFocus] = useState<boolean>(false);

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        }
    }, []);

    const onKeyDown = (e: any) => {
        e.preventDefault();
        console.log(e)
        if (e.isComposing) {
            console.log(e);
        }
    }

    return (
        <Header style={{padding: '0', background: colorBgContainer}}>
            <Flex gap={'middle'} vertical={false} align={'center'} justify={'space-between'} style={{height: '100%'}}>
                <Flex vertical={false} align={'center'} className={'borderInlineStart'}>
                    <Input
                        bordered={false}
                        placeholder="Type keywords"
                        prefix={<SearchOutlined/>}
                        style={{marginLeft: 10}}
                        autoFocus={focus}
                        onBlur={() => setFocus(false)}
                        onFocus={() => setFocus(true)}
                    />
                    {
                        focus ?
                            <Space/> :
                            <span className={'search-shortcut'}>
                                Ctrl K
                            </span>
                    }
                </Flex>
                <Flex align={'center'} style={{marginRight: 20}}>
                    <div>SlowV</div>
                </Flex>
            </Flex>
        </Header>
    )
}