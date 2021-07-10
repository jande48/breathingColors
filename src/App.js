
import './App.css';
import MainComp from './Components/mainComp'
import Modal from 'react-modal'
import React, {useRef, useEffect, useState} from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useSpring, useSprings,useTransition, animated, animate } from 'react-spring'
function App() {

  const [modalOpenArray, setModalOpenArray] = useState({'activated':'none'})
  const [colorTimeArray, setColorTimeArray] = useState([
    { opacity: 1, config: { duration: 1000 }, width: '100%', height: '92%', margin: '0px', padding: '0px', borderRadius: '15px', backgroundColor: 'red' },
    { opacity: 0, config: { duration: 1000 }, width: '100%', height: '92%', margin: '0px', padding: '0px',  borderRadius: '15px', backgroundColor: 'red' },
    { opacity: 1, config: { duration: 1000 }, width: '100%', height: '92%', margin: '0px', padding: '0px', borderRadius: '15px', backgroundColor: 'blue' },
    { opacity: 0, config: { duration: 1000 }, width: '100%', height: '92%', margin: '0px', padding: '0px', borderRadius: '15px', backgroundColor: 'blue' },

  ])
  const [colorTimeArrayClean, setColorTimeArrayClean] = useState([{id: 0, time: 3, color: 'maroon'}])
  const [numOfPhases, setNumberOfPhases] = useState(2)
  // const springs = useSprings(colorTimeArray.length, colorTimeArray.map(item => ({
  //   from: { opacity: 0,  config: { duration: 100 }, width: '100%', height: '92%', margin: '0px', padding: '0px',  borderRadius: '15px', backgroundColor: '#262626' }
  //   to: item,
  // })));
  const styles = useSpring({
    loop: true,
    to: colorTimeArray,
    from: { opacity: 0,  config: { duration: 100 }, width: '100%', height: '92%', margin: '0px', padding: '0px',  borderRadius: '15px', backgroundColor: '#262626' },
  })
  // const transitions = useTransition(colorTimeArray, {
  //   from: { opacity: 0,  config: { duration: 100 }, width: '100%', height: '92%', margin: '0px', padding: '0px',  borderRadius: '15px', backgroundColor: '#262626' },
  //   enter: item => { opacity: 1, width: '100%', height: '92%', margin: '0px', padding: '0px', borderRadius: '15px', backgroundColor: String(item['color']) },
  //   leave: { opacity: 0 },
  //   delay: 200,
  //   config: config.molasses,
  //   onRest: () => setItems([]),
  // })
  useEffect(() => {
    // Update the document title using the browser API
    
  },[colorTimeArrayClean]);

  Modal.setAppElement('#root');
  const cssDetail = 'blue';
  function getOpenModal(array){
    switch(array['activated']){
      case 'blankModal':
        //return <MainComp propsArray={colorTimeArray} propsArrayClean={colorTimeArrayClean} />;
        return <animated.div style={styles}></animated.div>
        // return <div>{springs.map(animation => (
        //   <animated.div key={0} style={animation}></animated.div>
        // ))}</div>  
      default:
        return <h1>Error</h1>
    }
  }


  function handleAddPhase(){
    console.log(colorTimeArrayClean)
    var temp = [...colorTimeArrayClean]
    temp.push({id: colorTimeArrayClean.length, time: 3, color: 'red'})
    setColorTimeArrayClean(temp)

  }
  function handleTimeChange(e){
    var tempColorTimeArray = colorTimeArrayClean
    tempColorTimeArray[parseInt(e.target.name)]['time'] = e.target.value
    setColorTimeArrayClean(tempColorTimeArray)

  }
  function handleColorChange(e, id){
    var color = ''
    if (e.value==='Black'){
      color='#000000'
    }else if(e.value==='Silver'){
      color='#C0C0C0'
    }else if(e.value==='Gray'){
      color='#808080'
    }else if(e.value==='White'){
      color='#FFFFFF'
    }else if(e.value==='Maroon'){
      color='#800000'
    }else if(e.value==='Red'){
      color='#FF0000'
    }else if(e.value==='Purple'){
      color='#800080'
    }else if(e.value==='Fuchsia'){
      color='#FF00FF'
    }else if(e.value==='Green'){
      color='#008000'
    }else if(e.value==='Lime'){
      color='#00FF00'
    }else if(e.value==='Olive'){
      color='#808000'
    }else if(e.value==='Yellow'){
      color='#FFFF00'
    }else if(e.value==='Navy'){
      color='#000080'
    }else if(e.value==='Blue'){
      color='#0000FF'
    }else if(e.value==='Teal'){
      color='#008080'
    }else if(e.value==='Aqua'){
      color='#00FFFF'
    }else if(e.value==='Orange'){
      color='#ff8c00'
    }

    
    var tempColorTimeArray = colorTimeArrayClean
    tempColorTimeArray[parseInt(id)]['color'] = color
    setColorTimeArrayClean(tempColorTimeArray)
  }
  function handleHexColorChange(e){
    var tempColorTimeArray = colorTimeArrayClean
    tempColorTimeArray[parseInt(e.target.id)]['color'] = e.target.value
    setColorTimeArrayClean(tempColorTimeArray)
  }
  function handleStartModal(){
    var out = []
    for (let j=0; j<10; j++){
    for (let i = 0; i < colorTimeArrayClean.length; i++) {
      out.push({ opacity: 1, config: { duration: parseInt(colorTimeArrayClean[i]['time']/2*1000) }, width: '100%', height: '92%', margin: '0px', padding: '0px', borderRadius: '15px', backgroundColor: String(colorTimeArrayClean[i]['color']) })
      out.push({ opacity: 0, config: { duration: parseInt(colorTimeArrayClean[i]['time']/2*1000) }, width: '100%', height: '92%', margin: '0px', padding: '0px', borderRadius: '15px', backgroundColor: String(colorTimeArrayClean[i]['color']) })
    }
    }
    setColorTimeArray(out)
    
    setModalOpenArray({'activated':'blankModal'})
  }
  const options = [
    'Maroon','Red','Orange','Yellow','Olive','Green','Purple','Fuchsia','Lime','Teal','Aqua','Blue','Navy','Black','Silver','White'
  ];
  const defaultOption = options[0];
  var timeColorListMobile = colorTimeArrayClean.map((el) => (
    // identify each element with an id to minimize DOM re-renders when deleting
    <div>
      <h3>Phase {el.id + 1}</h3>
    
    <div className="flexContainerTimeColor" key={el.id}>
      <div className="flexsideLeft">
        <h4>Duration (sec): </h4>
      </div>
    
      <div className="flexsideLeft">
        <input className="form-control mt-2" name={el.id} onChange={handleTimeChange}></input> 
      </div>
    </div>
    <div className="flexContainerTimeColor" key={el.id}>
      

      <div className="flexsideLeft">
        <h4>Color: </h4>
      </div>
    
      <div className="flexsideLeft">
        <Dropdown options={options} onChange={(e) => handleColorChange(e,el.id)} id={el.id} value={defaultOption} placeholder="Select an option" />
      </div>
    </div>
    <div className="flexContainerTimeColor" key={el.id}>
      <div className="flexsideLeft">
        <h4>-OR- Hex Color:</h4>
      </div>
      <div className="flexsideLeft">
        <input className="form-control mt-2" id={el.id} onChange={handleHexColorChange} placeholder="#FFFFFF"></input> 
      </div>
      {/* <button className="btn btn-danger" onClick={() => {props.deleteMessage(mes.id)}}>Delete</button> */}
    </div>
    </div>
  ))
  var timeColorList = colorTimeArrayClean.map((el) => (
    // identify each element with an id to minimize DOM re-renders when deleting
    <div>
      <h3>Phase {el.id + 1}</h3>
    
    <div className="flexContainerTimeColor" key={el.id}>
      <div className="flexsideLeft">
        <h4>Duration (sec): </h4>
      </div>
      <div className="flexsideLeft">
        <input className="form-control mt-2" name={el.id} onChange={handleTimeChange}></input> 
      </div>
      <div className="flexsideLeft">
        <h4>{el.colorTimeArrayClean}</h4>
      </div>
      <div className="flexsideLeft">
        <h4>Color: </h4>
      </div>
      <div className="flexsideLeft">
        <Dropdown options={options} onChange={(e) => handleColorChange(e,el.id)} id={el.id} value={defaultOption} placeholder="Select an option" />
      </div>
      <div className="flexsideLeft">
        <h4>-OR- Hex Color:</h4>
      </div>
      <div className="flexsideRight">
        <input className="form-control mt-2" id={el.id} onChange={handleHexColorChange} placeholder="#FFFFFF"></input> 
      </div>
      {/* <button className="btn btn-danger" onClick={() => {props.deleteMessage(mes.id)}}>Delete</button> */}
    </div>
    </div>
  ))
  var w = window.innerWidth;
  return (
   
    <div className="App">
      { w > 700 ? timeColorList : timeColorListMobile}
      <br/>
      <br/>
      <button type="button" className="btn btn-primary btn-lg" onClick={() => handleAddPhase()}>Add Another Phase</button>
      <br/>
      <br/>
      <button type="button" className="btn btn-danger btn-lg" onClick={() => handleStartModal()}>Start!</button>
      <div style={{outlineColor:'#262626'}}>     
        <Modal isOpen={modalOpenArray['activated']!=='none'} style={{
                overlay: {
                  backgroundColor: '#262626',
                  outlineColor: '#262626'
                },
                content: {
                  color: 'lightsteelblue',
                  backgroundColor: '#262626',
                  outlineColor: '#262626'
                },
                
              }}>
          {getOpenModal(modalOpenArray)}
          <div className="vertical-center">
            <button type="button" className="btn btn-light btn-lg" onClick={() => setModalOpenArray({'activated':'none'})}>Close</button>
          </div>
        </Modal>
      </div>
      
      
      
    </div>
  );
}

export default App;
