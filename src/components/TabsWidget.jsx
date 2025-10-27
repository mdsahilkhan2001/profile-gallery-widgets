 import React, { useState } from 'react';

const TabsWidget = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [showTooltip, setShowTooltip] = useState(false);

  const tabContent = {
    about: `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...`,
    experiences: `Professional experience content goes here. Details about career journey, achievements, and key milestones in the professional life.`,
    recommended: `Recommended content and endorsements from colleagues, clients, and professional connections go here.`
  };

  return (
    <div 
      className="relative rounded-[20px] p-6 pb-8 shadow-2xl w-full max-w-[720px]"
      style={{
        height: '316px',
        background: '#363C43',
        boxShadow: '5.67px 5.67px 3.78px 0px #00000066'
      }}
    >
   
      <div className="absolute top-6 left-6">
        <div 
          className="w-[24px] h-[24px] rounded-full flex items-center justify-center text-white font-bold text-sm cursor-pointer hover:opacity-80 transition-all relative"
          style={{
            background: 'linear-gradient(327.89deg, #4A4E54 -1.73%, #A3ADBA 89.26%)',
            boxShadow: 'inset 0px 4px 4px 0px #00000040'
          }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          ?
          
        
          {showTooltip && (
            <div 
              className="absolute left-8 top-0 px-3 py-1 rounded-md text-white text-xs font-medium whitespace-nowrap z-10"
              style={{
                background: '#171717',
                boxShadow: '0px 4px 10px 2px #00000040'
              }}
            >
              About Me
            </div>
          )}
        </div>
      </div>

      {/* Tabs Container */}
      <div className="mt-12 mb-6">
        <div 
          className="flex gap-1 p-[6px] rounded-[23px] w-full"
          style={{
            background: '#171717'
          }}
        >
          <button
            onClick={() => setActiveTab('about')}
            className={`flex-1 px-6 py-3 rounded-[16px] font-medium text-[18px] transition-all duration-300 ${
              activeTab === 'about'
                ? 'text-white shadow-lg'
                : 'text-[#A3ADBA] hover:text-white'
            }`}
            style={{
              background: activeTab === 'about' ? '#28292F' : 'transparent',
              boxShadow: activeTab === 'about' ? '13.49px 16.87px 67.47px 8.43px #00000066 inset, -13.49px -16.87px 50.6px -16.87px #485B71 inset' : 'none'
            }}
          >
            About Me
          </button>
          
          <button
            onClick={() => setActiveTab('experiences')}
            className={`flex-1 px-6 py-3 rounded-[16px] font-medium text-[18px] transition-all duration-300 ${
              activeTab === 'experiences'
                ? 'text-white shadow-lg'
                : 'text-[#A3ADBA] hover:text-white'
            }`}
            style={{
              background: activeTab === 'experiences' ? '#28292F' : 'transparent',
              boxShadow: activeTab === 'experiences' ? '13.49px 16.87px 67.47px 8.43px #00000066 inset, -13.49px -16.87px 50.6px -16.87px #485B71 inset' : 'none'
            }}
          >
            Experiences
          </button>
          
          <button
            onClick={() => setActiveTab('recommended')}
            className={`flex-1 px-6 py-3 rounded-[16px] font-medium text-[18px] transition-all duration-300 ${
              activeTab === 'recommended'
                ? 'text-white shadow-lg'
                : 'text-[#A3ADBA] hover:text-white'
            }`}
            style={{
              background: activeTab === 'recommended' ? '#28292F' : 'transparent',
              boxShadow: activeTab === 'recommended' ? '13.49px 16.87px 67.47px 8.43px #00000066 inset, -13.49px -16.87px 50.6px -16.87px #485B71 inset' : 'none'
            }}
          >
            Recommended
          </button>
        </div>
      </div>

     
      <div className="relative flex gap-4 items-start mb-8">
        {/* Grid Icon (6 boxes) - Vertical on Left Side */}
        <div 
          className="grid grid-cols-2 grid-rows-3 flex-shrink-0 mt-6"
          style={{
            width: '24px',
            height: '30.69px',
            gap: '1.38px'
          }}
        >
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              style={{
                width: '9.31px',
                height: '9.31px',
                borderRadius: '1.16px',
                background: '#4A4E54',
                boxShadow: '0px 1px 2px 0px #00000040'
              }}
            ></div>
          ))}
        </div>

       
        <div 
          className="overflow-hidden flex-1"
          style={{
            maxWidth: '611px',
            height: '175px'
          }}
        >
          <p 
            className="whitespace-pre-line"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '20px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#969696'
            }}
          >
            {tabContent[activeTab]}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="rounded-lg flex-shrink-0 mt-2"
          style={{
            width: '8px',
            height: '64px',
            background: 'linear-gradient(177.32deg, #888989 5.6%, #4A4E54 93.28%)',
            boxShadow: '4px 4px 4.9px 0px #00000040'
          }}
        ></div>
      </div>
    </div>
  );
};

export default TabsWidget;
