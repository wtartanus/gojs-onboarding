import * as go from 'gojs';


const $ = go.GraphObject.make;

export const createLinkTemplate = () => 
    $(
        go.Link,
        {
            routing: go.Link.Orthogonal,
            corner: 10,
            fromShortLength: 2,
            curve: go.Link.JumpGap
        },
        linkShape(),
        label(),
        arrowHead(),
    );

const linkShape = () => 
    $(go.Shape, {
        stroke: '#0e5924',
    });

const label = () => $(
    go.TextBlock,
    {
        segmentOffset: new go.Point(0.5, -10),
        segmentOrientation: go.Link.OrientUpright,
        text: 'LABEL'
    }
);

const arrowHead = () => 
    $(go.Shape, {
        toArrow: 'Standard',
        stroke: null,
        fill: '#0e5924'
    });
