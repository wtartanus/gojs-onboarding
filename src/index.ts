import * as go from 'gojs';

import { createDiagram } from './gojs/diagram/diagram';
import { createPalette } from './gojs/palette/palette';

import './styles.css';

window.addEventListener('load', () => {
    const diagramDiv = document.getElementById('diagram');
    const diagram = createDiagram(diagramDiv as HTMLDivElement);

    const paletteDiv = document.getElementById('palette') as HTMLDivElement;
    createPalette(paletteDiv);

    const nameInput = document.getElementById('name') as HTMLInputElement;
    nameInput.onchange = (e: Event) => {
        const selectedNode = diagram.selection.first();

        if (!selectedNode || selectedNode.data.isGroup) {
            return;
        }

        const newValue = (e.target as HTMLInputElement).value;

        diagram.model.setDataProperty(selectedNode.data, 'text', newValue);
        diagram.updateAllRelationshipsFromData();
    }

    const colorInput = document.getElementById('color') as HTMLInputElement;
    colorInput.onchange = (e: Event) => {
        const selectedNode = diagram.selection.first();

        if (!selectedNode || selectedNode.data.isGroup) {
            return;
        }

        const newValue = (e.target as HTMLInputElement).value;

        diagram.model.setDataProperty(selectedNode.data, 'color', newValue);
        diagram.updateAllRelationshipsFromData();
    }

    const typeInput = document.getElementById('type') as HTMLInputElement;
    typeInput.onchange = (e: Event) => {
        const selectedNode = diagram.selection.first();

        if (!selectedNode || selectedNode.data.isGroup) {
            return;
        }

        const newValue = (e.target as HTMLInputElement).value;

        diagram.model.setDataProperty(selectedNode.data, 'category', newValue);
        diagram.updateAllRelationshipsFromData();
    }

    const settingsForm = document.getElementById('settingsForm') as HTMLFormElement;
    settingsForm.onsubmit = (e) => {
        e.preventDefault();
    }

    diagram.addDiagramListener("ChangedSelection", (e: go.DiagramEvent) => {
        const selectedNode = e.diagram.selection.first();

        if (selectedNode && !selectedNode.data.isGroup) {
            (document.getElementById('name') as HTMLInputElement).value = selectedNode.data.text;
            (document.getElementById('color') as HTMLSelectElement).value = selectedNode.data.color;
            (document.getElementById('type') as HTMLSelectElement).value = selectedNode.data.category;
        } else {
            (document.getElementById('name') as HTMLInputElement).value = '';
            (document.getElementById('color') as HTMLSelectElement).value = '';
            (document.getElementById('type') as HTMLSelectElement).value = '';
        }
    });
});
