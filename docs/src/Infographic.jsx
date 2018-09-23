import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';

import parallax1 from './parallax1.svg';
import grayground from './gray-08.svg';
import heightpic from './height_Height.svg';
import calendarpic from './calendar.svg';
import calcs from './calculations_Calculations.svg';
import pinkground from './pinkscrib_Tile.svg';
import purple from './purple-09.svg';
import title_heart from './title_heart.svg';
import boy from './breakup_boysquig-08.svg';
import girl from './breakup_girlsquig-09.svg';
import bigpink from './redcover_Tile.svg';

class Infographic extends Component {
  render() {
    return (
    <div>

      <div id="titletop">
        <h1 className="App-title">IS ALYSSA A HEARTLESS BITCH?</h1>
        <img src={title_heart} className="title_pic" alt="heart" />
        <img src={purple} className="title_banner" alt="heart" />
      </div>

      <div id="explain-title-block">
        <Parallax
          className="custom-class"
          offsetYMax={40}
          offsetYMin={-40}
          slowerScrollRate
          tag="figure"
        >
          <div class="heartless">
            <img src={parallax1} className="title_banner" alt="heart" />
            <h2>A quick look at her past relationships just might clue us into the answer.</h2>
        </div>
          </Parallax>
      </div>

      <div id="demographics">
        <img src={grayground} className="grayground" alt="heart" />
        <div class="heartless">
          The lovers she's left in her wake...
          <div class="flex-first-container">
            <div class="flex-first">
              <h3>stood at 5'7" on average</h3>
              <img src={heightpic} alt="heart" />
            </div>
            <div class="flex-first">
                <h3>were 12.6 months older</h3>
              <img src={calendarpic} alt="heart" />
            </div>
          </div>

        </div>
      </div>

      <div id="initial-relationship-pattern">
        <Parallax
          className="custom-class"
          offsetYMax={40}
          offsetYMin={-40}
          slowerScrollRate
          tag="figure"
        >
            <div class="heartless">
              {/* <img id="calcs" src={calcs} className="title_banner" alt="heart" /> */}
            The lovers held intrests in ...
            [art.gif]
            ... in common.<br/>
            <div class="flex-first-container">
              <div class="flex-first initrela">
            <iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR3BWWj-O25pXIqfjguwNBtiRoAmCJXr7mf4NPzFC07Yp8vFwAyw8qf_07v8Wsccj1oYaGpyPLl8sOM/pubchart?oid=1880613559&amp;format=interactive"></iframe> <br/>
</div>  <div class="flex-first initrela">
            <iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR3BWWj-O25pXIqfjguwNBtiRoAmCJXr7mf4NPzFC07Yp8vFwAyw8qf_07v8Wsccj1oYaGpyPLl8sOM/pubchart?oid=2091463890&amp;format=interactive"></iframe>
          </div>
        </div>
      </div>
        </Parallax>
      </div>

      <div id="i-love-yous">
        <img src={pinkground} className="grayground" alt="heart" />

        <div class="heartless">
          <div class="flex-first-container">
            <div class="flex-first initrela">
          <iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR3BWWj-O25pXIqfjguwNBtiRoAmCJXr7mf4NPzFC07Yp8vFwAyw8qf_07v8Wsccj1oYaGpyPLl8sOM/pubchart?oid=1992495119&amp;format=interactive"></iframe>
        </div>
        <div class="flex-first initrela">
          <iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR3BWWj-O25pXIqfjguwNBtiRoAmCJXr7mf4NPzFC07Yp8vFwAyw8qf_07v8Wsccj1oYaGpyPLl8sOM/pubchart?oid=520224158&amp;format=interactive"></iframe>
        </div>
      </div>
          <p id="note">* Alyssa might have run away screaming a few times.</p>
        </div>
      </div>

      <div id="conflict">
        <div class="flex-first-container">
          <div class="flex-first initrela">
        <iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR3BWWj-O25pXIqfjguwNBtiRoAmCJXr7mf4NPzFC07Yp8vFwAyw8qf_07v8Wsccj1oYaGpyPLl8sOM/pubchart?oid=1084158075&amp;format=interactive"></iframe>
      </div>
      <div class="flex-first initrela">
        <iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR3BWWj-O25pXIqfjguwNBtiRoAmCJXr7mf4NPzFC07Yp8vFwAyw8qf_07v8Wsccj1oYaGpyPLl8sOM/pubchart?oid=415365306&amp;format=interactive"></iframe>
      </div>
    </div>
    </div>

      <div id="break-up">
        <div id="parallax-heart"></div>
        <div class="heartless"> On average, relationships lasted 9 months.</div>
        <div class="heartless"> Best breakup line said to Alyssa</div>
        <img src={boy} alt="squig"/>
        <div class="heartless"> Best breakup line said by Alyssa</div>
        <img src={girl} alt="squig"/>
      </div>

      <div id="love">
        <Parallax
          className="custom-class"
          offsetYMax={40}
          offsetYMin={-40}
          slowerScrollRate
          tag="figure"
        >
          <img id="pinkground" src={pinkground}  className="title_banner" alt="heart" />
            <div class="heartless">
              <h3> Presence of mutual <b>love</b> during the relationship sits at [heart percent]</h3>
            </div>
          </Parallax>
      </div>

      <div id="respect">
        <Parallax
          className="custom-class"
          offsetYMax={40}
          offsetYMin={-40}
          slowerScrollRate
          tag="figure"
        >
          <img id="pinkground" src={pinkground}  className="title_banner" alt="heart" />
            <div class="heartless">
              <h3> Presence of mutual <b>genuine love and respect</b> during the relationship sits at [heart percent]
              </h3>
            </div>
          </Parallax>
      </div>

      <div id="desire">
          <Parallax
            className="custom-class"
            offsetYMax={40}
            offsetYMin={-40}
            slowerScrollRate
            tag="figure"
          >
            <img id="pinkground" src={pinkground}  className="title_banner" alt="heart" />
              <div class="heartless">
                <h3> Presence of mutual <b>desire for genuine love and respect</b> by the end of the relationship sits at [heart percent]
                </h3>
              </div>
            </Parallax>
      </div>

      {/* <div id="lessons-learned">
        [table this piece until the very end]
      </div> */}

      <div id="final-thoughts">
        <div class="App-title">
          <h1>
        With all of this in mind, if you think that Alyssa has no heart, then
        you're probably thinking that her partners don't either.<br/>
        Perhaps, we're all heartless<br/>
        and we're all screwed.</h1>
      </div>
      </div>

    </div>
    );
  }
}

export default Infographic;
