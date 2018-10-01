import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';

import parallax1 from './parallax1.svg';
import grayground from './gray-08.svg';
import biggrayground from './biggrayground.svg';
import heightpic from './height_Height.svg';
import calendarpic from './calendar.svg';
import calnogray from './calnogray.svg';
import calcs from './calculations_Calculations.svg';
import pinkground from './pinkscrib_Tile.svg';
import bigpinkground from './bigpink-08.svg';
import purple from './purple-09.svg';
import bigpurp from './bigpurp.svg';
import title_heart from './title_heart.svg';
import boy from './breakup_boysquig-08.svg';
import girl from './unicornsquig-16.svg';
import bigpink from './redcover_Tile.svg';
import chart1 from './chart1-08.svg';
import heartchart1 from './heartchart-09.svg';
import heartchart2 from './heartchart1-10.svg';
import shit from "./Shitshit.png";

import CanvasCharts from './CanvasCharts';
import DecisionsChart from './DecisionsChart';
import MotherChart from './MotherChart';
import LoveChart from './LoveChart';
import LoveResponseChart from './LoveResponseChart';
import CheatChart from './CheatChart';
import AbuseChart from './AbuseChart';
import CollaborationChart from './CollaborationChart';
import PathChart from './PathChart';
import MetMomChart from './MetMomChart';
import MetDadChart from './MetDadChart';
import FullHeartChart from './FullHeartChart';
import EmptyHeartChart from './EmptyHeartChart';
import HeartlessChart from './HeartlessChart';
import PointsChart from './PointsChart';

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
        <div id="demheartless" class="heartless">
          <h3 id="h3demo">The lovers she's left in her wake...</h3>
          <div class="flex-first-container">
            <div class="flex-first">
              <img src={heightpic} alt="heart" />

              <h5>stood at 5'7" on average</h5>
            </div>
            <div class="flex-first">
              <img src={calnogray} alt="heart" />

                <h5>were 12.6 months older on average</h5>
            </div>
            <div class="flex-first">
  <img src={shit} alt="heart" />
              <h5>swore most frequently with the word "shit"</h5>
            </div>
          </div>

        </div>
      </div>

      {/* <div id="demographics2a">
        <img src={biggrayground} className="grayground" alt="heart" />
        <div class="heartless">
          <div class="flex-first-container">
            <div class="flex-first">
              <h6>overall caliber of broadness of partners' shoulders</h6>
              <h3>3.4 out of 5</h3>

            </div>
            <div class="flex-first">
                <h6>overall adorableness of partners' hand shapes</h6>
                <h3 id="handshape">2.6 out of 5</h3>

            </div>
          </div>

        </div>
        </div> */}
        {/* <div class="points">+2 bad person points for objectifying shoulders and hands</div> */}

      <div id="demographics2b">
        <img src={biggrayground} className="grayground" alt="heart" />

        <div class="heartless">
          <p class="mothertext">Number of partners who...</p>
          <div class="flex-first-container">
            <div class="flex-first-white">
                <h6>owned a "favorite" flanel shirt</h6>
                <h1>5</h1>
            </div>
            <div class="flex-first-white">
              <h6>had 30 freckles or more on his face</h6>
              <h1>4</h1>
            </div>
            <div class="flex-first-white">
              <h6>had a peculiar (physical) scar he refused to explain</h6>
              <h1 id="peculiar">2</h1>
          </div>
          <div class="flex-first-white">
            <h6>have been hit by a car more than once</h6>
            <h1>1</h1>
          </div>
        </div>

        </div>

      </div>
      <div class="points">+1 horrible human point for failing to specify that these groups are NOT mutually exclusive</div>
      <div class="points">+1 Terrible Tammy point for laughing at The Partner who got hit by a car (even though he was mostly fine)</div>
      <div class="points">+1 not good person point for labeling scars that are "none of her business" as "peculiar"</div>




      <div id="school-setting">
        <Parallax
          className="custom-class"
          offsetYMax={20}
          offsetYMin={-20}
          slowerScrollRate
          tag="figure"
        >
            <img id="pinkground" src={calcs}  className="title_banner" alt="heart" />
            <div class="heartless">
            <div id="firstchart" class="flex-grid">
              <div id="collab" class="col">
            <CollaborationChart />
          </div>
          <div id="pathchart" class="col">
            <PathChart />
          </div>
        </div>
      </div>
        </Parallax>
      </div>

      <div id="demographics3">
        <img src={bigpinkground} className="grayground" alt="heart" />
        <div class="heartless">
          <p class="mothertext">Number of dates...</p>
          <div class="flex-grid">
            <div id="asleep1" class="col">
              <h5> in the middle of which Alyssa has fallen asleep</h5>
              <h1>1</h1>
            </div>
            <div id="asleep2" class="col">
              <h5> during which Alyssa apolozied for having fallen asleep</h5>
              <h1 id="sleepzero">0</h1>
            </div>
          </div>
        </div>
      </div>
        <div class="points">+1 godawful human point for causing The Partner to question his sense of self </div>
        <div class="points">+1 nasty woman point for refusing to apologize </div>

      <div id="initial-relationship-pattern">
        <Parallax
          className="custom-class"
          offsetYMax={20}
          offsetYMin={-20}
          slowerScrollRate
          tag="figure"
        >
            <img id="pinkground" src={calcs}  className="title_banner" alt="heart" />
            <div class="heartless">
            {/* The lovers held intrests in ...
            [art.gif]
            ... in common.<br/> */}
            <div id="firstchart" class="flex-grid">
              <div id="decisionchart" class="col">
            <DecisionsChart />
          </div>
          <div id="motherchart" class="col">
            <MotherChart />
          </div>
        </div>
      </div>
        </Parallax>
      </div>

      <div id="parents">
        <img src={bigpinkground} className="grayground" alt="heart" />
        <div class="heartless">
          <p class="mothertext">On the topic of mothers, it wasn't common for The Partner to meet Alyssa's parents</p>
          <div class="flex-grid">
            <div id="metmom" class="col">
          <MetMomChart />
        </div>
        <div id="metdad" class="col">
          <MetDadChart />
        </div>
      </div>
        </div>
      </div>
        <div class="points">Should calling The Partner "boring" in all caps (because it's true) contribute to Alyssa's overall heartless monster score? <br/>I'm not sure. <br/> +1/2 brutal bastard point</div>


      <div id="i-love-yous">
        <img src={bigpinkground} className="grayground" alt="heart" />

        <div class="heartless">
          <div class="flex-grid">
            <div id="lovechart" class="col">
          <LoveChart />
        </div>
        <div id="loveresponse" class="col">
          <LoveResponseChart />
        </div>
      </div>
          <p id="note">* Alyssa might have run away screaming a few times.</p>
        </div>
      </div>
        <div class="points">+1 heartless point because running and screaming are NOT signs of respect </div>

        <div id="pointanalysis">
          <div class="heartless">
            <PointsChart />
        </div>
          <div class="points">+1 evil witch point to even things out </div>
          <div class="points">+1 heartless point for absent-mindedly assigning herself the previous evil witch point  </div>
        </div>

      <div id="conflict">
        <Parallax
          className="custom-class"
          offsetYMax={20}
          offsetYMin={-20}
          slowerScrollRate
          tag="figure"
        >
          <img id="pinkground" src={biggrayground}  className="title_banner" alt="heart" />
            <div class="heartless">
              <div id="conflictcharts" class="flex-grid">
                <div id="cheatchart" class="col">
              <CheatChart />
            </div>
            <div id="abusechart" class="col">
              <AbuseChart />
            </div>
          </div>
          </div>
          </Parallax>
    </div>
      <div class="points">I guess cheating usually would result in another heartless point, but everybody did it. <br/>Let's give this <br/>+1/2 frowned-upon person point </div>

      <div id="break-up">
        <div id="parallax-heart"></div>
        {/* <div class="heartless"> On average, relationships lasted 9 months.</div> */}
        <div id="breakup1" class="heartless"> Best breakup line said to Alyssa</div>
        <img id="boysquig" src={boy} alt="squig"/>
        <div id="breakup2" class="heartless"> Best breakup line said by Alyssa</div>
        <img id="girlsquig" src={girl} alt="squig"/>
      </div>



      <div id="love">
        <Parallax
          className="custom-class"
          offsetYMax={20}
          offsetYMin={-20}
          slowerScrollRate
          tag="figure"
        >
          <img id="heartchartback1" src={biggrayground}  className="heartchart_banner1" alt="heart" />
            <div class="heartless">
              <h3> Presence of mutual <b>love</b> during the relationship: <br/><b>66% of relationships</b></h3>
              {/* <img src={heartchart1}  className="heartchart"/> */}
              <div class="endchartdiv">
              <FullHeartChart />
            </div>
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
              <h3> Presence of mutual <b>genuine love and respect</b> during the relationship: <br/><b>0% of relationships</b>
              </h3>
              {/* <img src={heartchart2}  className="heartchart"/> */}
<div class="endchartdiv">
              <EmptyHeartChart />
            </div>
            </div>
          {/* </Parallax> */}
      </div>

      <div id="desire">
          <Parallax
            className="custom-class"
            offsetYMax={20}
            offsetYMin={-20}
            slowerScrollRate
            tag="figure"
          >
            <img id="heartchartback3" src={biggrayground}  className="heartchart_banner1" alt="heart" />
              <div class="heartless">
                <h3> Presence of mutual <b>desire for genuine love and respect</b> by the end of the relationship: <br/><b>66% of relationships</b>
                </h3>
                {/* <img id="endheart1" src={heartchart1}  className="heartchart"/> */}
<div class="endchartdiv">
                <FullHeartChart />
              </div>
              </div>
            </Parallax>
      </div>

      <div id="totalpoints">
        <div class="heartless">
          <h4>After evaluating 25 charts and various data points from Alyssa's past relationships, she's earned a measly 9 points of the heartless monster variety.</h4>
          <HeartlessChart />
          {/* <p> *Based on the number of charts and various data points provided above </p> */}
        </div>
      </div>
      <div id="final-thoughts">
        <div class="App-title">
          <h1>With all of this in mind, I guess the answer to our original question is <i>probably not</i>.</h1>
      </div>
      </div>

    </div>
    );
  }
}

export default Infographic;
