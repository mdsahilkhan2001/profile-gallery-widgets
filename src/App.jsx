import React from 'react';
import TabsWidget from './components/TabsWidget';
import GalleryWidget from './components/GalleryWidget';

function App() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12"
      style={{
        background: 'linear-gradient(180deg, #373E44 -100%, #191B1F 100%)'
      }}
    >
      {/* Main Container */}
      <div className="w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8">
         
          <div className="hidden lg:block lg:flex-1 lg:min-w-[200px]"></div>

           
          <div className="w-full lg:w-auto flex flex-col items-center lg:items-end">
            
            <div className="w-full max-w-[720px]">
              <TabsWidget />
            </div>

            {/* Horizontal Divider Line Between Widgets */}
            <div className="my-6 w-full max-w-[720px] px-4 sm:px-0">
              <div
                className="h-[4px] rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #282828 0%, #F8F8F8 50%, #282828 100%)',
                  boxShadow: '0px 4px 4px 0px #00000040'
                }}
              ></div>
            </div>

             
            <div className="w-full max-w-[720px]">
              <GalleryWidget />
              {/* Horizontal Divider Line Between Widgets */}
              <div className="my-6 w-full max-w-[720px] px-4 sm:px-0">
                <div
                  className="h-[4px] rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #282828 0%, #F8F8F8 50%, #282828 100%)',
                    boxShadow: '0px 4px 4px 0px #00000040'
                  }}
                ></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
