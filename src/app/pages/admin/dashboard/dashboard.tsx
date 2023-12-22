import React from 'react';
import {Breadcrumb, Flex, Space} from "antd";
import {useNavigate} from "react-router-dom";

export const Dashboard = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Breadcrumb
                items={[
                    {title: 'Admin'},
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    {title: <a href='' onClick={() => navigate('/admin/app')}>Dashboard</a>}
                ]}
            />
            <Flex className={'mt-20'}>
                <div>
                    Dashboard
                </div>
            </Flex>
        </div>
    )
}