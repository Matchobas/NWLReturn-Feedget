import bugImage from '../../assets/Bug.svg';
import ideaImage from '../../assets/Idea.svg';
import thoughtImage from '../../assets/Thought.svg';

import { useState } from 'react';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImage,
      alt: 'Imagem de um inseto roxo',
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImage,
      alt: 'Imagem de uma lâmpanda acesa',
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImage,
      alt: 'Imagem de um balão de pensamento',
    }
  },
}

export type FeedbackTypes = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackTypes | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function onFeedbackTypeRestart() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={onFeedbackTypeRestart} />
      ) : (
        <>
          {!feedbackType ? (
              <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
              <FeedbackContentStep 
                feedbackType={feedbackType} 
                onFeedbackRestartRequested={onFeedbackTypeRestart} 
                onFeedbackSent={() => setFeedbackSent(true)}
              />
            )
          }
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com carinho S2 por 
        <a className="underline underline-offset-1" href="https://github.com/Matchobas/" target="_blank"> Matheus</a>
      </footer>
    </div>
  );
}