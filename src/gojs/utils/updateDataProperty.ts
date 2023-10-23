import * as go from 'gojs';

export const updateDataProperty = (diagram: go.Diagram, event: Event, property: string) => {
    const selectedNode = diagram.selection.first();

    if (!selectedNode || selectedNode.data.isGroup) {
        return;
    }

    const newValue = (event.target as HTMLInputElement).value;

    diagram.model.setDataProperty(selectedNode.data, property, newValue);
    diagram.updateAllRelationshipsFromData();
}