import React, { useState } from 'react';
import { Text, Stack, Image, PrimaryButton } from '@fluentui/react';
import './FlipCard.css'; // We'll define styles here

const FlipCard: React.FC<{
    question: string;
    pic: string;
  }> = ({ question, pic }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(true);
  };


  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Image src={pic} alt="Card Front" width={300} height={400} />
        </div>
        <div className="flip-card-back">
            <Stack verticalAlign="center" horizontalAlign="center" styles={{ root: { height: '100%' } }}>
                <Text variant="xLarge">{question}</Text>
            </Stack>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
