
import React from 'react';

interface TextContentProps {
  content: string[];
}

const TextContent: React.FC<TextContentProps> = ({ content }) => {
  return (
    <div className="space-y-4 text-[#101021]">
      {content.map((paragraph, index) => (
        <p key={index}>{paragraph.startsWith('•') ? <strong>{paragraph}</strong> : paragraph}</p>
      ))}
    </div>
  );
};

export default TextContent;
