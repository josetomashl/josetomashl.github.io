import Icon from '@/components/common/Icon';
import Title from '@/components/common/Title';
import { COLORS } from '@/constants/colors';
import { ME } from '@/data/me';
import styles from './styles.module.scss';

export default function AboutPage() {
  return (
    <>
      <Title content='About Me' />
      <p>
        Welcome to my personal website! Here, you can find information about me, my skills, training and professional
        experience. Let me introduce myself...
      </p>
      <p>
        I am a Full Stack Engineer specialising in Node.js and TypeScript. Throughout my career, I have solved many
        problems, giving me ample experience in server-side development, database design and management, and building
        clear and intuitive user interfaces. I adapt quickly to different environments and technologies, maintaining a
        strong focus on code quality, scalability and the end-user experience.
      </p>
      <p>
        I am passionate about applying best practices and strengthening code through tests that ensure reliability and
        maintainability. I am committed to continuous learning and believe that team collaboration and effective
        communication are essential to the success of any project.
      </p>
      <section className={styles.container}>
        <h3>My core values</h3>
        <div className={styles.principles}>
          <div>
            <h4>
              Committed
              <Icon name='shield' size={32} color={COLORS.primary} />
            </h4>
            <span>Strong belief in the product and its value.</span>
          </div>
          <div>
            <h4>
              Proactive
              <Icon name='rocket' size={32} color={COLORS.primary} />
            </h4>
            <span>Always looking for improvement and innovation.</span>
          </div>
          <div>
            <h4>
              Collaborative
              <Icon name='group' size={32} color={COLORS.primary} />
            </h4>
            <span>Believes in the power of teamwork and communication.</span>
          </div>
          <div>
            <h4>
              Self-taught
              <Icon name='education' size={32} color={COLORS.primary} />
            </h4>
            <span>Seize every opportunity to learn something new.</span>
          </div>
        </div>
      </section>
      <section className={styles.container}>
        <h3>Personal details</h3>
        <div className={styles.personal}>
          <div>
            <Icon name='pin' size={22} />
            <span>Location: Murcia, Spain</span>
          </div>
          <div>
            <Icon name='computer' size={22} />
            <span>Work preferences: Hybrid (Spain) / Fully Remote</span>
          </div>
          <div>
            <Icon name='languages' size={22} />
            <span>{ME.languages.map((lang) => lang.name + ' (' + lang.qualification + ')').join(', ')}</span>
          </div>
          <div>
            <Icon name='chatInProgress' size={22} />
            <span>Availability: 09:00 - 14:00 / 15:00 - 18:00 (M-F)</span>
          </div>
        </div>
      </section>
    </>
  );
}
