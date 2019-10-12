import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './login.less';

const Login = props => {

  const { dispatch, form } = props;

  const { getFieldDecorator, validateFields } = form;

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        dispatch({
          type: 'login/login',
          payload: {
            ...values,
          },
        });
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.loginForm}>
      <Form.Item>
        {getFieldDecorator('account', {
          rules: [{ required: true, message: 'Please input your account!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
            placeholder="Account"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(<Checkbox>Remember me</Checkbox>)}
        <a className={styles.loginFormForgot} href="">
          Forgot password
        </a>
        <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );

};

export default connect()(Form.create()(Login));
