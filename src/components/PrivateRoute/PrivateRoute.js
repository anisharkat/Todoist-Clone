// components/PrivateRoute.js
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

// مكون لحماية الصفحات بناءً على وجود الكوكيز
const PrivateRoute = ({ element }) => {
  const user = Cookies.get('user'); // استرجاع المستخدم من الكوكيز

  // إذا كان هناك مستخدم، عرض العنصر، خلاف ذلك إعادة التوجيه إلى صفحة تسجيل الدخول
  return user ? element : <Navigate to="/" />;
};

export default PrivateRoute;