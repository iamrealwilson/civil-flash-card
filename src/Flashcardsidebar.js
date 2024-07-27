import React, { useState } from 'react';


const FlashcardSidebar = () => {
  const [subject, setSubject] = useState(null);

  const handleSubjectClick = (subjectName) => {
    setSubject(subjectName);
    localStorage.setItem('item', subjectName);
  };

  const subjects = [
    { name: 'Civil Law', href: 'dashboard' },
    { name: 'Criminal Law', href: 'dashboard' },
    { name: 'Political Law', href: 'dashboard' },
    { name: 'Remedial Law', href: 'dashboard' },
    { name: 'Taxation Law', href: 'dashboard' },
    { name: 'Labor Law', href: 'dashboard' },
    { name: 'Legal Ethics Law', href: 'dashboard' },
    { name: 'Commercial Law', href: 'dashboard' },
    { name: 'Notes', href: 'dashboard' },

  ];

  return (
    <React.Fragment>
      <li className="sidebar-header">Menu</li>
      {subjects.map((subjectItem, index) => (
        <li
          key={index}
          className={`sidebar-item ${subject === subjectItem.name ? 'active' : ''}`}
          onClick={() => handleSubjectClick(subjectItem.name)}
        >
          <a className="sidebar-link" href={subjectItem.href}>
            <i className="align-middle" data-feather="book"></i>{' '}
            <span className="align-middle">{subjectItem.name}</span>
          </a>
        </li>
      ))}
      </React.Fragment> 
  );
};

export default FlashcardSidebar;