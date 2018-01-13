/**
 * 2018-01-11 StanleyChen
 */

import React from 'react';
import { connect } from 'dva';
import { Form, Input, Icon, Button, Checkbox } from 'antd';
import styles from './LoginLayout.less';
// import { createAdmin } from '../services/login';

const FormItem = Form.Item;

class LoginLayout extends React.Component {

  handleSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if(!err) {
        this.props.dispatch({
          type:'login/adminLogin',
          payload: values,
        });
      }
    });
  }
    // (async () => {
    //   try {
    //     let res = await createAdmin();
    //     console.log('result', res)
    //   } catch(e) {
    //     console.log(e);
    //   }
    // })();

    // 简写
    // createAdmin({ name: "a", password: "123456" }).then(daye => console.log("result:", data))

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={styles.login_form}>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <Button type="primary" htmlType="submit" className={styles.login_form_button}>
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default connect(state => ({
  login: state.login
}))(Form.create()(LoginLayout));
