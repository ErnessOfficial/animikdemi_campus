
import React from 'react';

interface TextContentProps {
  content: string[];
}

const TextContent: React.FC<TextContentProps> = ({ content }) => {
  return (
    <div className="space-y-4 text-[#101021]">
      {content.map((paragraph, index) => {
        if (paragraph.startsWith('•')) {
          return <p key={index}><strong>{paragraph.substring(1).trim()}</strong></p>;
        }
        if (paragraph.startsWith('i:')) {
          return <p key={index} className="italic">{paragraph.substring(2).trim()}</p>;
        }
        return <p key={index}>{paragraph}</p>;
      })}
    </div>
  );
};

export default TextContent;
