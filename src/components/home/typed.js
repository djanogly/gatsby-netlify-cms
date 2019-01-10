import Typing from 'react-typing-animation';

const AnimatedTypingComponent = () => (
  <Typing>
    <span>Grassroots.</span>
    <Typing.Backspace count={20} />
    <span>Youth Empowerment.</span>
    <Typing.Backspace count={20} />
    <span>System Change.</span>
    <Typing.Backspace count={20} />
  </Typing>
);
