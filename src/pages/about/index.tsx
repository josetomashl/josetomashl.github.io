import Icon from '@/components/Icon';
import Title from '@/components/Title';
import styles from './styles.module.scss';

export default function AboutPage() {
  return (
    <>
      <Title content='About Me' />
      <p>
        Welcome to my personal website! Here you can find information about me, my skills, training, professional
        experience, and projects.
      </p>
      <section className={styles.container}>
        <h3>My core values</h3>
        <div className={styles.principles}>
          <div>
            <h4>
              Committed
              <Icon name='shield' size={24} />
            </h4>
            <p>Strong belief in the product and its value.</p>
          </div>
          <div>
            <h4>
              Proactive
              <Icon name='rocket' size={24} />
            </h4>
            <p>Always looking for ways to improve and innovate.</p>
          </div>
          <div>
            <h4>
              Collaborative
              <Icon name='group' size={24} />
            </h4>
            <p>Believes in the power of teamwork and communication.</p>
          </div>
          <div>
            <h4>
              Self-taught
              <Icon name='education' size={24} />
            </h4>
            <p>Constantly seeking knowledge and new skills to improve.</p>
          </div>
        </div>
      </section>
    </>
  );
}
