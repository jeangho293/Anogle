import userIdRouter from './_userId';
import signInRouter from './sign-in';

export default [...signInRouter, ...userIdRouter];
