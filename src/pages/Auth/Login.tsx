import { useState, useEffect } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import './_auth.scss';

const Login = () => {
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState<boolean>(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };

  return (
    <div className="auth-layout">
      <div className="auth-card">
        <h4 className="auth-card-title">Login Now</h4>
        <p className="auth-card-description">Welcome, Please login to your account.</p>
        <Form
          form={form}          
          layout="vertical"
          onFinish={onFinish}
          className="flex-direction-column"
        >
          <Form.Item
            label="Name"
            name="username"
            // rules={[
            //   {
            //     required: true,
            //     message: 'Please input your username!',
            //   },
            // ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            // rules={[
            //   {
            //     required: true,
            //     message: 'Please input your password!',
            //   },
            // ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item shouldUpdate>
            {() => (
              <Button
                type="primary"
                htmlType="submit"
                disabled={
                  !clientReady ||
                  !form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length)
                    .length
                }
                block
              >
                Login Now
              </Button>
            )}
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
