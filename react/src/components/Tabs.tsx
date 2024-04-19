import { useState } from 'react';

interface TabsProp {
  defaultTab?: string;
}

export default function Tabs({ defaultTab }: TabsProp) {
  const tabs = [
    {
      id: 'html',
      label: 'HTML',
      content:
        'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
    },
    {
      id: 'css',
      label: 'CSS',
      content:
        'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
    },
    {
      id: 'javascript',
      label: 'JavaScript',
      content:
        'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
    },
  ];
  const [activeTab, setActiveTab] = useState(defaultTab ?? 'html');

  const isActiveTab = (id: string) => id === activeTab;
  const handleTabClick = (id: string) => setActiveTab(id);

  return (
    <>
      <div className='tabs'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tabs__item ${
              isActiveTab(tab.id) ? 'tabs__item--active' : ''
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className='tabs-content'>
        {tabs.map((tab) => (
          <p key={tab.id} hidden={!isActiveTab(tab.id)}>
            {tab.content}
          </p>
        ))}
      </div>
    </>
  );
}
