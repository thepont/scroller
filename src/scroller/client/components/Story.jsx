import React from 'react';
import {ScrollLayer} from './ScrollLayer';
import { useParams } from 'react-router-dom'

const PageDetails = {
    start: {
        locationX: 0,
        next: '/story/toulouse',
        text: ''
    },
    toulouse: {
        locationX: 1,
        next: '/story/grenoble',
        text: 'Marie lived in Toulouse, She fed on cheese and wine,'
    },
    grenoble: {
        locationX: 9600,
        previous: '/story/toulouse',
        next: '/story/duck1',
        text: 'Originally from Grenoble, but moved to see what she could find.'
    },
    duck1: {
        locationX: 10300,
        previous: '/story/grenoble',
        next: '/story/duck2',
        text: 'Monsanto corp genetically engineered a her an elephant sized duck,'
    },
    duck2: {
        locationX: 12000,
        previous: '/story/duck1',
        next: '/story/melbourne',
        text: 'She flew it cross the world, her mount certainly did not suck'
    },
    melbourne: {
        locationX: 12001,
        previous: '/story/duck2',
        next: '/story/outback',
        text: 'She arrived in "old" Melboune town, the land of brillant coffee'
    },
    outback: {
        locationX: 14500,
        previous: '/story/melbourne',
        next: '/story/end1',
        text: 'And drove cross country, befriended a wallaby named hoppy'
    },
    end1: {
        locationX: 15000,
        previous: '/story/outback',
        next: '/story/end2',
        text: 'Hoppy and her lived all happy'
    },
    end2: {
        locationX: 16001,
        previous: '/story/end1',
        text: 'And she hang around with coding Paul, Je t\'aime he said to her.'
    }
}

import {Link} from 'react-router-dom';

export const Story = (props) => {
    const {id} = useParams();
    var style = {
        height: props.height,
        backgroundColor: 'black',
        color:'white',
        textShadow:" -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
    }
    var fixedStyle = {
        position: 'fixed',
        top: 'calc(50% - 257px)',
        width: '100%',
    }
    var skyBlue = {
         backgroundColor: '#7EC0EE',
         height: '514px',
         width: '100%'
    }

    var pageDetails = PageDetails[id] || PageDetails['start'];
    
    var nextNav = pageDetails.next ? <Link style={{zIndex:'20',fontSize:'2em', position: "absolute", bottom:20, right:20, fontFamily: "Barriecito", color: "wheat" }} to={pageDetails.next}>Next</Link> : null;
    var previousNav = pageDetails.previous ? <Link style={{zIndex:'20',fontSize:'2em', position: "absolute", bottom:20, left:20, fontFamily: "Barriecito" , color: "wheat"}} to={pageDetails.previous}>Previous</Link> : null;
    
    // const nextNav = null;
    // const previousNav = null;
    return <div style={style}>
                <span style={{width:'100%', zIndex:'20',fontSize:'2em', padding:'0.5em', fontFamily: "Barriecito"}}>{pageDetails.text}</span>
                <div style={fixedStyle}>
                    
                    <div style={skyBlue}>
                        <ScrollLayer zIndex={0} step={-0.5} currentScroll={pageDetails.locationX} width={'100%'} image={'/images/clouds1.png'} startX={0} stopX={0}/>
                        <ScrollLayer zIndex={5} step={-0.03} currentScroll={pageDetails.locationX} width={516}  image={'/images/start.png'} startX={0} stopX={0}/>
                        
                        <ScrollLayer zIndex={0} step={-0.08} currentScroll={pageDetails.locationX} width={3228}  image={'/images/mountain1.png'} startX={PageDetails.toulouse.locationX} stopX={PageDetails.grenoble.locationX}/>
                        <ScrollLayer zIndex={1} step={-0.1} currentScroll={pageDetails.locationX} width={2221} image={'/images/bg1.png'} startX={PageDetails.toulouse.locationX} stopX={PageDetails.grenoble.locationX}/>
                        <ScrollLayer zIndex={2} step={-0.17} currentScroll={pageDetails.locationX} width={3228} image={'/images/rail.png'} startX={PageDetails.toulouse.locationX} stopX={PageDetails.grenoble.locationX}/>
                        <ScrollLayer zIndex={3} step={-0.102} currentScroll={pageDetails.locationX} width={2221} image={'/images/train.png'} startX={PageDetails.toulouse.locationX} stopX={PageDetails.grenoble.locationX}/>
                        <ScrollLayer zIndex={4} step={-0.2} currentScroll={pageDetails.locationX} width={3228} image={'/images/fg1.png'} startX={PageDetails.toulouse.locationX} stopX={PageDetails.grenoble.locationX}/>
                        <ScrollLayer zIndex={4} step={-0.228} currentScroll={pageDetails.locationX} width={3228} image={'/images/fg2.png'} startX={PageDetails.toulouse.locationX} stopX={PageDetails.grenoble.locationX}/>
                        
                        
                        <ScrollLayer zIndex={0} step={-0.5} currentScroll={pageDetails.locationX} width={4000} image={'/images/clouds1.png'} startX={9601} stopX={12000}/>
                        <ScrollLayer zIndex={1} step={-0.1} currentScroll={pageDetails.locationX} width={667} image={'/images/duck1.png'} startX={10000} stopX={10300}/>
                        <ScrollLayer zIndex={3} step={-1.2} currentScroll={pageDetails.locationX} width={4000} image={'/images/clouds2.png'} startX={9601} stopX={12000}/>
                        <ScrollLayer zIndex={1} step={-0.01} currentScroll={pageDetails.locationX} width={731} image={'/images/duck2.png'} startX={10301} stopX={12000}/>
                        
                        <ScrollLayer zIndex={0} step={-0.3} currentScroll={pageDetails.locationX} width={900} image={'/images/melbounesky.png'} startX={12001} stopX={14500}/>
                        <ScrollLayer zIndex={1} step={-0.41} currentScroll={pageDetails.locationX} width={3400} image={'/images/trees2.png'} startX={12001} stopX={14500}/>
                        <ScrollLayer zIndex={2} step={-0.45} currentScroll={pageDetails.locationX} width={3400} image={'/images/trees1.png'} startX={12001} stopX={14500}/>
                        <ScrollLayer zIndex={3} step={-0.5} currentScroll={pageDetails.locationX} width={3400} image={'/images/fedsq.png'} startX={12001} stopX={14500}/>
                        <ScrollLayer zIndex={4} step={-0.54} currentScroll={pageDetails.locationX} width={900} image={'/images/flinders.png'} startX={12001} stopX={14500}/>
                        <ScrollLayer zIndex={5} step={0.02} currentScroll={pageDetails.locationX} width={3400} image={'/images/car.png'} startX={12001} stopX={14500}/>
                        
                        <ScrollLayer zIndex={3} step={-1.5} currentScroll={pageDetails.locationX} width={2000} image={'/images/wallaby.png'} startX={14501} stopX={15000}/>
                        <ScrollLayer zIndex={2} step={-2.3} currentScroll={pageDetails.locationX} width={2000} image={'/images/marie-end.png'} startX={14501} stopX={15000}/>
                        
                        <ScrollLayer zIndex={3} step={-1.2} currentScroll={pageDetails.locationX} width={2000} image={'/images/paul-end.png'} startX={15001} stopX={16001}/>
                    </div>
                    
                    <div style={{width:'100%', zIndex:'20'}}>
                        {previousNav}
                        {nextNav}
                    </div>
                </div>
        </div>
}
