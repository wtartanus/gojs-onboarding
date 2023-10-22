import * as go from 'gojs';

export const canLinkNodes = (
    fromNode: go.Node,
    fromPort: go.GraphObject,
    toNode: go.Node,
    toPort: go.GraphObject) => 
{
    var fromNodeCategory = fromNode.data.category;
    var toNodeCategory = toNode.data.category;

    return fromNodeCategory !== toNodeCategory;
}