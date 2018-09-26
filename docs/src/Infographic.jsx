import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';

import parallax1 from './parallax1.svg';
import grayground from './gray-08.svg';
import biggrayground from './biggrayground.svg';
import heightpic from './height_Height.svg';
import calendarpic from './calendar.svg';
import calcs from './calculations_Calculations.svg';
import pinkground from './pinkscrib_Tile.svg';
import purple from './purple-09.svg';
import bigpurp from './bigpurp.svg';
import title_heart from './title_heart.svg';
import boy from './breakup_boysquig-08.svg';
import girl from './breakup_girlsquig-09.svg';
import bigpink from './redcover_Tile.svg';
import chart1 from './chart1-08.svg';
import heartchart1 from './heartchart-09.svg';
import heartchart2 from './heartchart1-10.svg';

class Infographic extends Component {
  render() {
    return (
    <div>

      <div id="titletop">
        <h1 className="App-title">IS ALYSSA A HEARTLESS MONSTER?</h1>
        <img src={title_heart} className="title_pic" alt="heart" />
        <img src={bigpurp} className="title_banner" alt="heart" />
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
        <img src={biggrayground} className="grayground" alt="heart" />
        <div class="heartless">
          <h3 id="h3demo">The lovers she's left in her wake...</h3>
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
            <img id="pinkground" src={calcs}  className="title_banner" alt="heart" />
            <div class="heartless">
            {/* The lovers held intrests in ...
            [art.gif]
            ... in common.<br/> */}
            <div class="flex-grid">
              <div class="col">
            <iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR3BWWj-O25pXIqfjguwNBtiRoAmCJXr7mf4NPzFC07Yp8vFwAyw8qf_07v8Wsccj1oYaGpyPLl8sOM/pubchart?oid=1880613559&amp;format=interactive"></iframe> <br/>
            {/* <img src={chart1} alt="oops"/> */}
          </div>
          <div class="col">
            <iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR3BWWj-O25pXIqfjguwNBtiRoAmCJXr7mf4NPzFC07Yp8vFwAyw8qf_07v8Wsccj1oYaGpyPLl8sOM/pubchart?oid=2091463890&amp;format=interactive"></iframe>
          </div>
        </div>
      </div>
        </Parallax>
      </div>

      <div id="i-love-yous">
        <img src={pinkground} className="grayground" alt="heart" />

        <div class="heartless">
          <div class="flex-grid">
            <div class="col">
          <iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR3BWWj-O25pXIqfjguwNBtiRoAmCJXr7mf4NPzFC07Yp8vFwAyw8qf_07v8Wsccj1oYaGpyPLl8sOM/pubchart?oid=1992495119&amp;format=interactive"></iframe>
        </div>
        <div class="col">
          <iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR3BWWj-O25pXIqfjguwNBtiRoAmCJXr7mf4NPzFC07Yp8vFwAyw8qf_07v8Wsccj1oYaGpyPLl8sOM/pubchart?oid=520224158&amp;format=interactive"></iframe>
        </div>
      </div>
          <p id="note">* Alyssa might have run away screaming a few times.</p>
        </div>
      </div>

      <div id="conflict">
        <Parallax
          className="custom-class"
          offsetYMax={40}
          offsetYMin={-40}
          slowerScrollRate
          tag="figure"
        >
          <img id="pinkground" src={biggrayground}  className="title_banner" alt="heart" />
            <div class="heartless">
              <div class="flex-grid">
                <div class="col">
              <iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR3BWWj-O25pXIqfjguwNBtiRoAmCJXr7mf4NPzFC07Yp8vFwAyw8qf_07v8Wsccj1oYaGpyPLl8sOM/pubchart?oid=1084158075&amp;format=interactive"></iframe>
            </div>
            <div class="col">
              <iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR3BWWj-O25pXIqfjguwNBtiRoAmCJXr7mf4NPzFC07Yp8vFwAyw8qf_07v8Wsccj1oYaGpyPLl8sOM/pubchart?oid=415365306&amp;format=interactive"></iframe>
            </div>
          </div>
            </div>
          </Parallax>
    </div>

      <div id="break-up">
        <div id="parallax-heart"></div>
        {/* <div class="heartless"> On average, relationships lasted 9 months.</div> */}
        <div class="heartless"> Best breakup line said to Alyssa</div>
        <img id="boysquig" src={boy} alt="squig"/>
        <div class="heartless"> Best breakup line said by Alyssa</div>
        <img id="girlsquig" src={girl} alt="squig"/>
      </div>

      <div id="love">
        <Parallax
          className="custom-class"
          offsetYMax={40}
          offsetYMin={-40}
          slowerScrollRate
          tag="figure"
        >
          <img id="heartchartback1" src={biggrayground}  className="heartchart_banner1" alt="heart" />
            <div class="heartless">
              <h3> Presence of mutual <b>love</b> during the relationship sits at <b>66%</b></h3>
              <img src={heartchart1}  className="heartchart"/>
            </div>
          </Parallax>
      </div>

      <div id="respect">
        {/* <Parallax
          className="custom-class"
          offsetYMax={40}
          offsetYMin={-40}
          slowerScrollRate
          tag="figure"
        > */}
          <img id="heartchartback2" src={biggrayground}  className="heartchart_banner1" alt="heart" />
            <div class="heartless">
              <h3> Presence of mutual <b>genuine love and respect</b> during the relationship sits at <b>0%</b>
              </h3>
              <img src={heartchart2}  className="heartchart"/>
            </div>
          {/* </Parallax> */}
      </div>

      <div id="desire">
          <Parallax
            className="custom-class"
            offsetYMax={40}
            offsetYMin={-40}
            slowerScrollRate
            tag="figure"
          >
            <img id="heartchartback3" src={biggrayground}  className="heartchart_banner1" alt="heart" />
              <div class="heartless">
                <h3> Presence of mutual <b>desire for genuine love and respect</b> by the end of the relationship sits at <b>66%</b>
                </h3>
                <img id="endheart1" src={heartchart1}  className="heartchart"/>
              </div>
            </Parallax>
      </div>

      {/* <div id="lessons-learned">
        [table this piece until the very end]
      </div> */}

      <div id="final-thoughts">
        <div class="App-title">
          <h1>With all of this in mind, I guess the answer we're looking for is <i>probably not</i>.</h1>
      </div>
      </div>

    </div>
    );
  }
}

export default Infographic;
