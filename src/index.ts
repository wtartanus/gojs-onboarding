import * as go from 'gojs';

import { createDiagram } from './gojs/diagram/diagram';
import { createPalette } from './gojs/palette/palette';
import { exportToPng } from './gojs/utils/exportToPng';
import { updateDataProperty } from './gojs/utils/updateDataProperty';

import './styles.css';

window.addEventListener('load', () => {
    const diagramDiv = document.getElementById('diagram');
    const diagram = createDiagram(diagramDiv as HTMLDivElement);

    const paletteDiv = document.getElementById('palette') as HTMLDivElement;
    createPalette(paletteDiv);

    const nameInput = document.getElementById('name') as HTMLInputElement;
    nameInput.onchange = (e: Event) => updateDataProperty(diagram, e, 'text');

    const colorInput = document.getElementById('color') as HTMLInputElement;
    colorInput.onchange = (e: Event) => updateDataProperty(diagram, e, 'color');

    const typeInput = document.getElementById('type') as HTMLInputElement;
    typeInput.onchange = (e: Event) => updateDataProperty(diagram, e, 'category');

    const saveButton = document.getElementById('save') as HTMLElement;
    saveButton.onclick = () => localStorage.setItem('diagram', diagram.model.toJson());

    const loadButton = document.getElementById('load') as HTMLElement;
    loadButton.onclick = () => {
        const savedDiagram = localStorage.getItem('diagram');

        if (savedDiagram) {
            diagram.model = go.Model.fromJson(savedDiagram)
        }
    };

    const saveAsImageButton = document.getElementById('saveImage') as HTMLElement;
    saveAsImageButton.onclick = () => exportToPng(diagram);

    const undoButton = document.getElementById('undo') as HTMLElement;
    undoButton.onclick = () => diagram.commandHandler.undo();

    const redoButton = document.getElementById('redo') as HTMLElement;
    redoButton.onclick = () => diagram.commandHandler.redo();

    const zoomInButton = document.getElementById('zoomIn') as HTMLElement;
    zoomInButton.onclick = () => diagram.commandHandler.increaseZoom();

    const zoomOutButton = document.getElementById('zoomOut') as HTMLElement;
    zoomOutButton.onclick = () => diagram.commandHandler.decreaseZoom();

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
