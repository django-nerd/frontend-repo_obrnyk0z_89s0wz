import React, { useState } from 'react';
import WelcomeHero from './components/WelcomeHero';
import LoveDeclaration from './components/LoveDeclaration';
import ForeverSection from './components/ForeverSection';
import RomanticQuote from './components/RomanticQuote';

function App() {
  const [step, setStep] = useState(0);

  const next = () => setStep((s) => Math.min(s + 1, 3));

  return (
    <div className="font-serif">
      {step === 0 && <WelcomeHero onNext={next} />}
      {step === 1 && <LoveDeclaration onNext={next} />}
      {step === 2 && <ForeverSection onNext={next} />}
      {step === 3 && <RomanticQuote />}
    </div>
  );
}

export default App;
