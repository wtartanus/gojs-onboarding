import * as go from 'gojs';
import { 
    createDiagramRoundedRectangleNodeTemplate,
    createDiagramRectangleNodeTemplate,
    createDiagramTriangleNodeTemplate,
    createDiagramGroupNodeTemplate
} from '../templates/diagramNodeTemplate';
import { createLinkTemplate } from '../templates/linkTemplate';
import { canLinkNodes } from '../utils/canLinkNodes';


const $ = go.GraphObject.make;

export const createDiagram = (diagramDiv: HTMLDivElement) => {
    const diagram = $(go.Diagram, diagramDiv);
    diagram.undoManager.isEnabled = true;
    diagram.nodeTemplateMap = new go.Map([
        { key: 'roundedRectangle', value: createDiagramRoundedRectangleNodeTemplate() },
        { key: 'rectangle', value: createDiagramRectangleNodeTemplate() },
        { key: 'triangle', value: createDiagramTriangleNodeTemplate() },
    ]);

    diagram.groupTemplateMap = new go.Map([
        { key: 'groupNode', value: createDiagramGroupNodeTemplate() }
    ]);

    diagram.linkTemplateMap = new go.Map([
        { key: '', value: createLinkTemplate() }
    ]);

    diagram.toolManager.linkingTool.linkValidation = canLinkNodes;
    diagram.toolManager.relinkingTool.linkValidation = canLinkNodes;

    (window as any).goJsDiagram = diagram;

    $(go.Overview, "overview", {
        observed: diagram,
        contentAlignment: go.Spot.Center,
    });
    
    return diagram;
}