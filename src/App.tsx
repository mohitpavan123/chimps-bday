import React, { useState } from 'react';
import BasicWishes from './BasicWishes';
import Messages from './Messages';
import CricketQuiz from './CricketQuiz';
import Memories from './Memories';
import YouTubeVideo from './YouTubeVideoWishes';
import { PrimaryButton, Stack } from '@fluentui/react';

const App: React.FC = () => {

  return (
    <div style={{ position: 'relative', backgroundColor: '#f3f3f3' }}>
      <div>
        <BasicWishes />
        <h1 style = {{fontWeight : '600px', width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '20px', fontSize : '50px' }}> Wishes </h1>
        <h4 style = {{ width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '20px', fontSize : '20px', paddingBottom : '50px' }}> 
          "Edo formality le bro, ee section teeseddam anukunna 😛"
        </h4>
        <Messages/>
        <h1 style = {{fontWeight : '600px', width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '20px', fontSize : '50px' }}> Truth or dare </h1>
        <h4 style = {{ width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '20px', fontSize : '20px', paddingBottom : '50px' }}> 
          "Saradaga konni truth or dare ques rasam frends, flip cheste kanipistay ques, silent ga avanni cheseyyadame nv..."
        </h4>
        <CricketQuiz />
        <h1 style = {{fontWeight : '600px', width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '20px', fontSize : '50px' }}> Memories </h1>
        <h4 style = {{ width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '20px', fontSize : '20px', paddingBottom : '50px' }}> 
          "Cards flip cheste konni memories kanipistay mowa, emjoy chimps..."
        </h4>
        <Memories />
        <h1 style = {{fontWeight : '600px', width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '20px', fontSize : '50px' }}> A small youtube video wishes for you! </h1>
        <h4 style = {{ width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '20px', fontSize : '20px', paddingBottom : '50px' }}> 
          "Finally oka chinna video neekosam choosi enjoy chey pandago frens."
        </h4>
        <YouTubeVideo />
        <h4 style = {{fontWeight : '400px', width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '20px', fontSize : '30px' }}>Idigo chinna gift kinda &nbsp;<a href="https://github.com/mohitpavan123/chimps-bday" target="_blank">code</a>&nbsp; rasam enjoy pandago.</h4>

        <h1 style = {{fontWeight : '600px', width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '20px', fontSize : '50px' }}>Happy birthday once again chimpuuu brooo!!</h1>

        
      </div>
{/*       
      <footer style={{ 
        position: 'absolute',
        bottom: 0, 
        width: '100%',
        backgroundColor: '#f3f3f3', 
        textAlign: 'center',
        height: '0vh',
      }}>
        <Stack horizontal horizontalAlign="center" verticalAlign='center' tokens={{ childrenGap: 10 }} styles={{ root: { position: 'relative', margin: '20px 0', alignItems: 'center', justifyContent: 'center' } }}>
          <PrimaryButton
            text="Basic Wishes"
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          />
          <PrimaryButton
            text="Messages"
            onClick={() => handlePageChange(2)}
            disabled={currentPage === 2}
          />
        </Stack>
      </footer> */}
    </div>
  );
};

export default App;