import BlankLayout from './BlankLayout';
import BasicLayout from './BasicLayout';

export default function(props) {
  if (props.location.pathname === '/user/login') {
    return <BlankLayout>{props.children}</BlankLayout>;
  }

  return <BasicLayout>{props.children}</BasicLayout>;
}
