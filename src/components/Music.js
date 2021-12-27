import React from 'react';
import './css/Music.css';
import cover1 from './css/images/photogallery/yesdevilgas.jpg';
import itunes from './css/images/music/itunes.png';
import _break from './audio/Break.wav';
import candlelight from './audio/Candlelight.wav';
import cowboy from './audio/Cowboy_Song.wav';
import d2d from './audio/Diamonds_to_Dust.wav';
import dfs from './audio/DFS.wav';
import giveItAShot from './audio/Give_it_a_Shot.wav';
import looseScrew from './audio/Loose_Screw.wav';
import mindPollution from './audio/Mind_Pollution.wav';
import smokeNmirrors from './audio/Smoke_and_Mirrors.wav';
import soSick from './audio/So_Sick.wav';


const MusicPage = () => {
  return (
    <div id="music">
      <ul className="nav thcoll justify-content-center">
        <li className="nav-item">
          <h5 className="text-center" id="alboom">The High Cost of Living Low </h5>
        </li>
      </ul>
      <div className="row justify-content-center">
        <div className="col img-container">
          <img id="album-cover" src={cover1} alt=""/>
          <div className="drop-down hcll">
            <button className="btn btn-danger buyalbum dropdown-toggle" id="buyalbum" data-toggle="dropdown" type="button" aria-haspopup="true" aria-expanded="false">Buy Album
              <div className="dropdown-menu" aria-labelledby="buyalbum"><a href="#!" className="dropdown-item"><img className="itunes" src={itunes} alt=""/></a></div>
            </button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center album">
        <div id="album-stuff">
          <ul className="nav nav-tabs justify-content-center album-tab">
            <li className="nav-item"><a href="#!" className="nav-link songs active">Songs</a></li>
            <li className="nav-item"><a href="#!" className="nav-link lyrics">Lyrics</a></li>
            <li className="nav-item"><a href="#!" className="nav-link credits">Credits</a></li>
          </ul>
          <ul className="list-group justify-content-center" id="songs">
            <li className="list-group-item justify-content-between d-flex align-items-center">
              <div className="shit">
                <div className="song-title">D.F.S.</div>
                <div>
                  <audio controls="" controlsList="nodownload">
                    <source src={dfs} type="audio/mpeg"/>               Your browser does not support the audio tag.
                  </audio>
                </div>
                <div className="drop-down">
                  <button className="badge badge-danger dropdown-toggle" id="song1dd" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Buy Song
                    <div className="dropdown-menu" aria-labelledby="song1dd"><a className="dropdown-item"><img className="itunes" src={itunes}/></a></div>
                  </button>
                </div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="shit">
                <div>So Sick</div>
                <div>
                  <audio controls="" controlsList="nodownload">
                    <source src={soSick} type="audio/mpeg"/>             Your browser does not support the audio tag.
                  </audio>
                </div>
                <div className="drop-down">
                  <button className="badge badge-danger dropdown-toggle" id="song2dd" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Buy Song
                    <div className="dropdown-menu" aria-labelledby="song2dd"><a className="dropdown-item"><img className="itunes" src={itunes}/></a></div>
                  </button>
                </div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="shit">
                <div>Break</div>
                <div>
                  <audio controls="" controlsList="nodownload">
                    <source src={_break} type="audio/mpeg"/>             Your browser does not support the audio tag.
                  </audio>
                </div>
                <div className="drop-down">
                  <button className="badge badge-danger dropdown-toggle" id="song3dd" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Buy Song
                    <div className="dropdown-menu" aria-labelledby="song3dd"><a className="dropdown-item"><img className="itunes" src={itunes}/></a></div>
                  </button>
                </div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="shit">
                <div>Give it a Shot</div>
                <div>
                  <audio controls="" controlsList="nodownload">
                    <source src={giveItAShot} type="audio/mpeg"/>                Your browser does not support the audio tag.
                  </audio>
                </div>
                <div className="drop-down">
                  <button className="badge badge-danger dropdown-toggle" id="song4dd" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Buy Song
                    <div className="dropdown-menu" aria-labelledby="song4dd"><a className="dropdown-item"><img className="itunes" src={itunes}/></a></div>
                  </button>
                </div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="shit">
                <div>Diamonds to Dust</div>
                <div>
                  <audio controls="" controlsList="nodownload">
                    <source src={d2d} type="audio/mpeg"/>                Your browser does not support the audio tag.
                  </audio>
                </div>
                <div className="drop-down">
                  <button className="badge badge-danger dropdown-toggle" id="song5dd" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Buy Song
                    <div className="dropdown-menu" aria-labelledby="song5dd"><a className="dropdown-item"><img className="itunes" src={itunes}/></a></div>
                  </button>
                </div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="shit">
                <div>Candlelight</div>
                <div>
                  <audio controls="" controlsList="nodownload">
                    <source src={candlelight} type="audio/mpeg"/>             Your browser does not support the audio tag.
                  </audio>
                </div>
                <div className="drop-down">
                  <button className="badge badge-danger dropdown-toggle" id="song6dd" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Buy Song
                    <div className="dropdown-menu" aria-labelledby="song6dd"><a className="dropdown-item"><img className="itunes" src={itunes}/></a></div>
                  </button>
                </div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="shit">
                <div>Mind Pollution</div>
                <div>
                  <audio controls="" controlsList="nodownload">
                    <source src={mindPollution} type="audio/mpeg"/>              Your browser does not support the audio tag.
                  </audio>
                </div>
                <div className="drop-down">
                  <button className="badge badge-danger dropdown-toggle" id="song7dd" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Buy Song
                    <div className="dropdown-menu" aria-labelledby="song7dd"><a className="dropdown-item"><img className="itunes" src={itunes}/></a></div>
                  </button>
                </div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="shit">
                <div>Loose Screw</div>
                <div>
                  <audio controls="" controlsList="nodownload">
                    <source src={looseScrew} type="audio/mpeg"/>             Your browser does not support the audio tag.
                  </audio>
                </div>
                <div className="drop-down">
                  <button className="badge badge-danger dropdown-toggle" id="song8dd" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Buy Song
                    <div className="dropdown-menu" aria-labelledby="song8dd"><a className="dropdown-item"><img className="itunes" src={itunes}/></a></div>
                  </button>
                </div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="shit">
                <div>Cowboy Song</div>
                <div>
                  <audio controls="" controlsList="nodownload">
                    <source src={cowboy} type="audio/wav"/>                Your browser does not support the audio tag.
                  </audio>
                </div>
                <div className="drop-down">
                  <button className="badge badge-danger dropdown-toggle" id="song8dd" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Buy Song
                    <div className="dropdown-menu" aria-labelledby="song8dd"><a className="dropdown-item"><img className="itunes" src={itunes}/></a></div>
                  </button>
                </div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="shit">
                <div>Smoke & Mirrors</div>
                <div>
                  <audio controls="" controlsList="nodownload">
                    <source src={smokeNmirrors} type="audio/mpeg"/>             Your browser does not support the audio tag.
                  </audio>
                </div>
                <div className="drop-down">
                  <button className="badge badge-danger dropdown-toggle" id="song8dd" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Buy Song
                    <div className="dropdown-menu" aria-labelledby="song8dd"><a className="dropdown-item"><img className="itunes" src={itunes}/></a></div>
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <ul className="list-group" id="lyrics">
            <ul className="nav justify-content-center">
              <li className="nav-item"><a href="#!" className="nav-link active" id="link2dfs">D.F.S.</a></li>
              <li className="nav-item"><a href="#!" className="nav-link" id="link2ss">So Sick</a></li>
              <li className="nav-item"><a href="#!" className="nav-link" id="link2brk">Break</a></li>
              <li className="nav-item"><a href="#!" className="nav-link" id="link2gas">Give it a Shot</a></li>
              <li className="nav-item"><a href="#!" className="nav-link" id="link2d2d">Diamonds to Dust</a></li>
              <li className="nav-item"><a href="#!" className="nav-link" id="link2cl">Candlelight</a></li>
              <li className="nav-item"><a href="#!" className="nav-link" id="link2mp">Mind Pollution</a></li>
              <li className="nav-item"><a href="#!" className="nav-link" id="link2ls">Loose Screw</a></li>
              <li className="nav-item"><a href="#!" className="nav-link" id="link2cs">Cowboy Song</a></li>
              <li className="nav-item"><a href="#!" className="nav-link" id="link2sm">Smoke & Mirrors</a></li>
            </ul>
            <li className="list-group-item" id="dfs">
              <h5>D.F.S.</h5>         I took a walk to see <br/>          See what I could find <br/>         Pushed the daisies up <br/>         and kicked the dirt around <br/>          This ain't enough for me <br/>          This ain't enough to feed <br/>         A starved and troubled mind <br/>         So tell me where am I to go? <br/><br/>         Into the ground <br/>         Up to the Sky <br/>         Around the bend <br/>         and to the other side <br/>         To Outer Space <br/>          Far from the Earth <br/>          Way past the stars <br/>          and to what lies beyond <br/><br/>          I'll take you under my wing <br/>         To a place close to my heart <br/>          Oh babe it don't have to end <br/>          Just slide it back to the start <br/>         All you gotta do is bite the apple <br/><br/>         You fell in my life <br/>         As simple and plain <br/>         As the moonlight <br/>          That lit up your face <br/>         I kissed my sorrows <br/>         A sweet good-bye <br/>          Until tomorrow <br/>          They were redefined <br/><br/>          I'll take you under my wing <br/>         To a place close to my heart <br/>          Oh babe it don't have to end <br/>          Just slide it back to the start <br/>         All you gotta do is bite the apple <br/><br/>
            </li>
            <li className="list-group-item" id="break">
              <h5>Break</h5>          I'm so sick and tired of hearing you talk your talk <br/>         Why dont we step outside, it's a nice day for a walk <br/>          Wake up and smell the roses <br/>         Cause it's the last time you ever will <br/>          You're a pain and everybody knows it <br/>          You're a thorn in my side <br/><br/>          Hey, you wanna put me in my place? <br/>          Go ahead and do it, I've been waiting for something to break <br/>          Oh you got a secret, oh you got a secret, a secret place <br/>          Now I'm gonna seek it out and take you down <br/>          Your face, I'll fucking break <br/>         Break <br/>         Break <br/>         Break <br/><br/>          Get your filthy hands off what's mine <br/>         Theres a lot you can't get through that thick skull you parasite <br/>          That's right, you wanna go? <br/>         You're in my sights, and I don't aim for show <br/><br/>          Hey, you wanna put me in my place? <br/>          Go ahead and do it, I've been waiting for something to break <br/>          Oh you got a secret, oh you got a secret, a secret place <br/>          Now I'm gonna sniff it out and take you down <br/>          Your face, I'll fucking break <br/>         Break <br/>         Break <br/>         Break <br/>
            </li>
            <li className="list-group-item" id="sosick">
              <h5>So Sick</h5>          Headaches and heartaches <br/>          Feels like I'm walking on a bed of nails <br/>          You can try to cage the beast <br/>         But the devil has his ways <br/>          When hell on earth feels like home sweet home <br/>         You know you're gonna burn <br/><br/>         This is to all of you self-righteous ignorant fucks <br/>         You pretentious gormandizers <br/>          Waste of air but who's to say? <br/>          The people we idolize, these golden gods<br/>         No better than the animals we all are <br/>         Savagely killing eachother off one by one <br/>         Turn a blind eye to their own self-destruction <br/>          Leaving others to mourn <br/><br/>          Such a sick world <br/>         Such a sick place <br/>         To be a sick man <br/>          So sick <br/><br/>          We pay our dues for every single sin <br/>          An eye for an eye and nobody will win <br/>         A knock at the door won't let anyone in <br/>         When you're pulling at the rope <br/>         Drinks, drugs, drags <br/>          Tip toe around death <br/><br/>         This is to all of you self-righteous ignorant fucks <br/>         You pretentious gormandizers <br/>          Waste of air but who's to say? <br/>          The people we idolize, these golden gods<br/>         No better than the animals we all are <br/>         Savagely killing eachother off one by one <br/>         Turn a blind eye to their own self-destruction <br/>          Leaving others to mourn <br/><br/>          Such a sick world <br/>         Such a sick place <br/>         To be a sick man <br/>          So sick <br/><br/>
            </li>
            <li className="list-group-item" id="giveitashot">
              <h5>Give it a Shot</h5>         Hold your fire, cover your tracks <br/>         Brace yourself for the next attack <br/>          Grab on tight and make your moves <br/>         You're gonna take a hit or two <br/><br/>         Put out a fight, yeah <br/>         Don't hesitate, a second thought may be a second too late <br/>         It's your time to strike, hey what are you waiting for? <br/>         Aim down the sights, and give it all you got, yeah<br/>         Just give it a shot<br/>          Give it a shot<br/>         Give it a shot <br/>          Give it a shot <br/><br/>         Place your bets and say your prayers <br/>          The heat is rising through the air <br/>          Shifting swift, a change of pace <br/>          There's no calling off the chase <br/><br/>         Put out a fight, yeah <br/>         Don't hesitate, a second thought may be a second too late <br/>         It's your time to strike, hey what are you waiting for? <br/>         Aim down the sights, and give it all you got, yeah<br/>         Just give it a shot<br/>          Give it a shot<br/>         Give it a shot <br/>          Give it a shot <br/><br/>
            </li>
            <li className="list-group-item" id="d2d">
              <h5>Diamonds to Dust</h5>         Step right in and make some chitter chatter <br/>         Light you on fire to get a little brighter <br/>          Taken by the scruff of your neck <br/>          and I promise to never forget <br/>         You got nine lives, something to hide <br/>         and a monkey on your back <br/>         Hey, the dogs are on your track <br/><br/>          Once you try you may never go back <br/>          You'll want it all in a pretty little stack <br/>         There'll come a time you'll cry <br/>         Why can't it all be mine <br/><br/>         Raise that flag, you know it won't matter <br/>         Now I just need to get a little tighter <br/>         Taken by the scruff of your neck <br/>          and I promise to never forget <br/>         You got nine lives, something to hide <br/>         and a monkey on your back <br/>         Hey, the dogs are on your track <br/><br/>          Once you try you may never go back <br/>          You'll want it all in a pretty little stack <br/>         There'll come a time you'll cry <br/>         Why can't it all be mine <br/>          Can't it all be mine <br/>          Diamonds to dust <br/><br/>
            </li>
            <li className="list-group-item" id="candlelight">
              <h5>Candlelight</h5>          I'm hungry and I feel like eating out tonight <br/>         No silverware, hands are fine <br/>         I've got self-control but with you in sight <br/>         I can't control my eyes <br/>         So come with me and we'll see the light <br/><br/>          Can it be love, it can't be lie <br/>         You're always on my mind helping me by <br/>          Telling me I can get through <br/>          Imagine if you'd love me too <br/>          It's okay, I'll be your candlelight <br/>         To get you through the night <br/>          Lead you away from the darkness <br/>         You'll be free my darling <br/><br/>          We've had a good run but your time has come <br/>         Time flies fast when you're having fun <br/>          One more kiss before you leave <br/>          Come on get on your knees <br/>         She came with me and we saw the light <br/><br/>          Can it be love, it can't be lie <br/>         You're always on my mind helping me by <br/>          Telling me I can get through <br/>          Imagine if you'd love me too <br/>          It's okay, I'll be your candlelight <br/>         To get you through the night <br/>          Lead you away from the darkness <br/>         You'll be free my darling <br/>         You'll be free my morning light <br/>
            </li>
            <li className="list-group-item" id="mindpollution">
              <h5>Mind Pollution</h5>         Sleepin' loose, hangin' tight <br/>         Lover due, love or die <br/>          Seein' through, seepin' tide <br/>          Morning blue, shakin' dry <br/>         Taken from the bakin' sun <br/>         Pointed with a loaded gun <br/>         Freakin' like a foe <br/>         Creakin' out the back door <br/>          Drivers blind, look behind <br/>          Chasin' fate another time <br/>         No ones gonna tell me how to live my life <br/>         Lead it on, deed is done <br/>          Pleadin' with a wish bone <br/>         Rev me up baby and I'll turn to stone <br/><br/>          No, I'll never say goodbye <br/>          I'll choke then take another bite <br/>         The truth is written on the lines <br/>         Crossed out and changed a million times <br/><br/>          Well as they say, the clock ticks on <br/>          I think it's time you looked away <br/>         Drowning in a sea of mind pollution <br/>         Can I take the heat? <br/><br/>         Breakin' new savin' frayed <br/>          Came in to, leavin' same <br/>          Day moon, check in stay <br/>         Seed to bloom, take away <br/>          Refry, search and find <br/>          Flyin' low, seekin' signs <br/>         Slick, sly,  power dies <br/>         Think I know why-y-y <br/>          Man down, M.I.A., <br/>         Stake out, keep the change <br/>          Nothing's ever gonna change my mind <br/>         Tip toe, round we go <br/>          Could've been a psycho <br/>          Weedin' out the blanks <br/>          Now I'm one eye closed <br/><br/>         No, I'll never say goodbye <br/>          I'll choke then take another bite <br/>         The truth is written on the lines <br/>         Crossed out and changed a million times <br/><br/>          Well as they say, the clock ticks on <br/>          I think it's time you looked away <br/>         Drowning in a sea of mind pollution <br/>         Can I take the heat? <br/><br/>
            </li>
            <li className="list-group-item" id="loosescrew">
              <h5>Loose Screw</h5>          If you wanna mess around <br/>          I wouldn't put your money down <br/>          Can't you see the situation <br/>         I'd be run outta town <br/><br/>          Oh, you're my little loose screw <br/>          Rough around the edges and so soft too <br/>          Oh, you're my little loose screw <br/>          Somebody better keep me away from you <br/><br/>          Here comes a revelation <br/>         I don't trust us alone <br/>          Try to temp my frustration <br/>          With some black leather on<br/><br/>          Oh, you're my little loose screw <br/>          Rough around the edges and so soft too <br/>          Oh, you're my little loose screw <br/>          Somebody better keep me away from you <br/><br/>          Oh, you're my little loose screw <br/>          Rough around the edges and so soft too <br/>          Oh, you're my little loose screw <br/>          Somebody better keep me away from you <br/><br/>
            </li>
            <li className="list-group-item" id="cowboysong">
              <h5>Cowboy Song</h5>          It's been a long, long time since I made it through <br/>         Seems now the winds have changed still there's nothing new <br/>          I hate to say it but we're falling through the cracks <br/>         Oh and honey theres just one thing left to say <br/><br/>         Yeah, you gotta let go, let go <br/>          Yeah, you gotta let go, let go of me <br/>          Yeah, you gotta let go, let go <br/>          Yeah, you gotta let go, let go of me, yeah <br/><br/>         Out in the mean, mean sea is where you led me on <br/>          I swam a million miles, 'till a notion dawned <br/>         What I have followed is only a mirage <br/>         Oh and honey theres just one thing left to say<br/><br/>          Yeah, you gotta let go, let go <br/>          Yeah, you gotta let go, let go of me <br/>          Yeah, you gotta let go, let go <br/>          Yeah, you gotta let go, let go of me, yeah <br/><br/>         Yeah, you gotta let go, let go <br/>          Yeah, you gotta let go, let go of me <br/>          Yeah, you gotta let go, let go <br/>          Yeah, you gotta let go, let go of me, yeah <br/><br/>
            </li>
            <li className="list-group-item" id="smokeandmirrors">
              <h5>Smoke & Mirrors</h5>          Deadly affliction in our bones <br/>          Radiation in our zones <br/><br/>         I see it in you, I see it in you <br/>          I see it in me, I see it in me <br/>          I see it in you, I see it in you <br/>          I see it in me, I see it in us <br/><br/>         Mirrors in a maze will take us to our graves <br/>          Lead the way down straight through the fire <br/>         As we go, we only get higher <br/><br/>         Deadly attraction in my dreams <br/>          Oh I'm addicted to your design <br/>          and I know, you're designed to please <br/>         So listen up my brothers <br/>          All we got is eachother <br/>         and that sure means something to me <br/><br/>          I see it in you, I see it in you <br/>          I see it in me, I see it in me <br/>          I see it in you, I see it in you <br/>          I see it in me, I see it in us <br/><br/>         Mirrors in a maze will take us to our graves <br/>          Lead the way down straight through the fire <br/>         As we go, we only get higher <br/>          Yeah <br/><br/>         Higher we will reach, higher we will reach <br/>          Heaven we will seize, heaven we will sieze <br/><br/>         A deep devotion, can't keep it to myself <br/>          Threw it in the ocean, back to the shelf <br/>          I'm through fighting this fight <br/>         I'll give it up to you <br/>          A sweet sacrifice, a piece of me to do <br/>          anything with, anywhere, whatever you would please <br/>          All I ask is if you would please remember me <br/>          All through your darknest nights <br/>          All through your brightest hours <br/>          Just know I will be forever by your side <br/><br/>         Mirrors in a maze will take us to our graves <br/>          Lead the way down straight through the fire <br/>         As we go, we only get higher <br/>          Yeah <br/><br/>         Higher we will reach, higher we will reach <br/>          Heaven we will seize, heaven we will sieze <br/><br/>
            </li>
          </ul>
          <div id="credits">
            <h6>D.F.S.</h6>
            <div>Vocals - Logan Barsell (written by Dez Monroe)</div>
            <div>Lead Guitar - Matt Abbott</div>
            <div>Drums - Eyan Stran</div>
            <div>Rhythm Guitar - Logan Barsell</div>
            <div>Bass - Nick Abbott</div>
            <h6>So Sick</h6>
            <div>Vocals - Logan Barsell (written by Logan Barsell and Eyan Stran)</div>
            <div>Lead Guitar - Matt Abbott</div>
            <div>Drums - Eyan Stran</div>
            <div>Rhythm Guitar - Logan Barsell</div>
            <div>Bass - Nick Abbott</div>
            <div>Back-up Vocals - Zach Scherer, Dez Monroe, Logan Barsell, Matt Abbott, Nick Abbott, and Eyan Stran</div>
            <h6>Break</h6>
            <div>Vocals - Logan Barsell (written by Logan Barsell)</div>
            <div>Lead Guitar - Matt Abbott</div>
            <div>Drums - Eyan Stran</div>
            <div>Rhythm Guitar - Logan Barsell</div>
            <div>Bass - Nick Abbott</div>
            <div>Back-up Vocals - Zach Scherer, Dez Monroe, Logan Barsell, Matt Abbott, Nick Abbott, and Eyan Stran</div>
            <h6>Give it a Shot</h6>
            <div>Vocals - Logan Barsell (written by Dez Monroe)</div>
            <div>Lead Guitar - Matt Abbott</div>
            <div>Drums - Eyan Stran</div>
            <div>Rhythm Guitar - Logan Barsell</div>
            <div>Bass - Nick Abbott</div>
            <div>Back-up Vocals - Zach Scherer, Dez Monroe, Logan Barsell, Matt Abbott, Nick Abbott, and Eyan Stran</div>
            <h6>Diamonds to Dust</h6>
            <div>Vocals - Logan Barsell (written by Dez Monroe)</div>
            <div>Lead Guitar - Matt Abbott</div>
            <div>Drums - Eyan Stran</div>
            <div>Rhythm Guitar - Logan Barsell</div>
            <div>Bass - Nick Abbott</div>
            <h6>Candlelight</h6>
            <div>Vocals - Logan Barsell (written by Logan Barsell)</div>
            <div>Lead Guitar - Matt Abbott</div>
            <div>Drums - Eyan Stran</div>
            <div>Rhythm Guitar - Logan Barsell</div>
            <div>Bass - Nick Abbott</div>
            <h6>Mind Pollution</h6>
            <div>Vocals - Logan Barsell (written by Logan Barsell)</div>
            <div>Lead Guitar - Matt Abbott</div>
            <div>Drums - Eyan Stran</div>
            <div>Rhythm Guitar - Logan Barsell</div>
            <div>Bass - Nick Abbott</div>
            <h6>Loose Screw</h6>
            <div>Vocals - Logan Barsell (written by Dez Monroe)</div>
            <div>Lead Guitar - Matt Abbott</div>
            <div>Drums - Eyan Stran</div>
            <div>Rhythm Guitar - Logan Barsell</div>
            <div>Bass - Nick Abbott</div>
            <h6>Cowboy Song</h6>
            <div>Vocals - Logan Barsell (written by Dez Monroe)</div>
            <div>Lead Guitar - Matt Abbott</div>
            <div>Drums - Eyan Stran</div>
            <div>Rhythm Guitar - Logan Barsell</div>
            <div>Bass - Nick Abbott</div>
            <div>Back-up Vocals - Zach Scherer, Dez Monroe, Logan Barsell, Matt Abbott, Nick Abbott, and Eyan Stran</div>
            <h6>Smoke & Mirrors</h6>
            <div>Vocals - Logan Barsell (written by Logan Barsell)</div>
            <div>Lead Guitar - Matt Abbott</div>
            <div>Drums - Eyan Stran</div>
            <div>Rhythm Guitar - Logan Barsell</div>
            <div>Bass - Nick Abbott</div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default MusicPage;