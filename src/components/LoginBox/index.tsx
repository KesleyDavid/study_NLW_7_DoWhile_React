import { useContext } from 'react';

import { AuthContext } from '../../contexts/auth';

import { VscGithubInverted} from 'react-icons/vsc';

import styles from './styles.module.scss';

export function LoginBox() {
  const { signInUrl, user } = useContext(AuthContext)
  
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Sign in and share your message</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size="24" />
        Login with github
      </a>
    </div>
  )
}