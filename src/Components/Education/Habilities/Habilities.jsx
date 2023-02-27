import React from 'react'
import { ProgressBar } from 'react-bootstrap';
import { ContainerHabilities, ContentProgressBar, Label } from './HabilitiesStyles';

const Habilities = () => {
  // grafica de https://echarts.apache.org/examples/en/editor.html?c=pie-roseType

  return (
    <ContainerHabilities>
      <ContentProgressBar>
        <Label htmlFor="">Javascript</Label>
        <ProgressBar variant="warning" animated now={77} />
      </ContentProgressBar>
      <ContentProgressBar>
        <Label htmlFor="">Html</Label>
        <ProgressBar variant="danger" animated now={83} />  
      </ContentProgressBar>
      <ContentProgressBar>
        <Label htmlFor="">Css</Label>
        <ProgressBar variant="primary" animated now={85} />
      </ContentProgressBar>
      <ContentProgressBar>
        <Label htmlFor="">React</Label>
        <ProgressBar variant="info" animated now={57} />  
      </ContentProgressBar>
      <ContentProgressBar>
        <Label htmlFor="">C#</Label>
        <ProgressBar variant="primary" animated now={30} />  
      </ContentProgressBar>
      <ContentProgressBar>
        <Label htmlFor="">jquery</Label>
        <ProgressBar variant="warning" animated now={65} />  
      </ContentProgressBar>
      <ContentProgressBar>
        <Label htmlFor="">SQL</Label>
        <ProgressBar variant="danger" animated now={34} />  
      </ContentProgressBar>
      <ContentProgressBar>
        <Label htmlFor="">Firebase</Label>
        <ProgressBar variant="warning" animated now={36} />
      </ContentProgressBar>
      <ContentProgressBar>
        <Label htmlFor="">Angular</Label>
        <ProgressBar variant="danger" animated now={49} />  
      </ContentProgressBar>
      <ContentProgressBar>
        <Label htmlFor="">MongoDB</Label>
        <ProgressBar variant="success" animated now={28} />        
      </ContentProgressBar>
    </ContainerHabilities>
  )
}

export default Habilities