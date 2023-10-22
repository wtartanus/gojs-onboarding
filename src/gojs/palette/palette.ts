import * as go from 'gojs';

import { 
    createPaletteRoundedRectangleNodeTemplate,
    createPaletteRectangleNodeTemplate,
    createPaletteTriangleNodeTemplate,
    createPaletteGroupNodeTemplate
} from '../templates/paletteNodeTemplate';

const $ = go.GraphObject.make;

export const createPalette = (paletteDiv: HTMLDivElement) => {
    const palette = $(go.Palette, paletteDiv);

    palette.nodeTemplateMap = new go.Map([
        { key: 'roundedRectangle', value: createPaletteRoundedRectangleNodeTemplate() },
        { key: 'rectangle', value: createPaletteRectangleNodeTemplate() },
        { key: 'triangle', value: createPaletteTriangleNodeTemplate() },
    ]);

    palette.groupTemplateMap = new go.Map([
        { key: 'groupNode', value: createPaletteGroupNodeTemplate() }
    ]);

    palette.model.nodeDataArray = [
        { category: 'roundedRectangle', text: 'green', color: 'green' },
        { category: 'rectangle', text: 'blue', color: 'blue' },
        { category: 'triangle', text: 'red', color: 'red' },
        { category: 'groupNode', isGroup: true }
    ];

    palette.padding = 20;
}