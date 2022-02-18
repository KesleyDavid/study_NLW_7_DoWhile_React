import logoImg from '../../assets/logo.svg';

import styles from './styles.module.scss';

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            I can't wait to start this event, it's definitely going to be the best of all time, let's go! 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/kesleydavid.png" alt="Kesley" />
            </div>
            <span>Kesley</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            This one is going to be just amazing! Let's learn everything about the assembly of GraphQL APIs. Not to mention the lectures and panels.
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/kesleydavid.png" alt="Kesley" />
            </div>
            <span>Kesley</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Undoubtedly the lectures will be useful for my career and for many 😍 #gorocket
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/kesleydavid.png" alt="Kesley" />
            </div>
            <span>Kesley</span>
          </div>
        </li>
      </ul>
    </div>
  )
}