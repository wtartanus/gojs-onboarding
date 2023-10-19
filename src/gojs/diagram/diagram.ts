import * as go from 'gojs';


const $ = go.GraphObject.make;

export const createDiagram = (diagramDiv: HTMLDivElement) => {
    const diagram = $(go.Diagram, diagramDiv);
    diagram.undoManager.isEnabled = true;
    (window as any).goJsDiagram = diagram;
    
    return diagram;
}