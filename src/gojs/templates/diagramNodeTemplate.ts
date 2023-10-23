import * as go from 'gojs';

const $ = go.GraphObject.make;

export const createDiagramRoundedRectangleNodeTemplate = () => $(
    go.Node,
    {
        resizable: true,
        resizeObjectName: "RoundedRectangle",
        fromLinkable: true,
        toLinkable: true,
    },
    $(
        go.Panel,
        go.Panel.Auto,
        $(
            go.Shape,
            'RoundedRectangle',
            {
                fill: '#117a2d',
                desiredSize: new go.Size(150, 100),
                name: 'RoundedRectangle',
            },
            new go.Binding('width', 'width').makeTwoWay(),
            new go.Binding('height', 'height').makeTwoWay(),
            new go.Binding('fill', 'color')
        ),
        $(
            go.TextBlock,
            {
                text: 'GREEN'
            },
            new go.Binding('text', 'text')
        )
    )
);

export const createDiagramRectangleNodeTemplate = () => $(
    go.Node,
    {
        resizable: true,
        resizeObjectName: "Rectangle",
        fromLinkable: true,
        toLinkable: true,
    },
    $(
        go.Panel,
        go.Panel.Auto,
        $(
            go.Shape,
            'Rectangle',
            {
                fill: '#11447a',
                desiredSize: new go.Size(100, 100),
                name: 'Rectangle'
            },
            new go.Binding('fill', 'color')
        ),
        $(
            go.TextBlock,
            {
                text: 'BLUE'
            },
            new go.Binding('text', 'text')
        )
    )
);

export const createDiagramTriangleNodeTemplate = () => $(
    go.Node,
    {
        resizable: true,
        resizeObjectName: "Triangle",
        fromLinkable: true,
        toLinkable: true,
    },
    $(
        go.Panel,
        go.Panel.Auto,
        $(
            go.Shape,
            'Triangle',
            {
                fill: '#bd2839',
                desiredSize: new go.Size(100, 100),
                name: 'Triangle'
            },
            new go.Binding('fill', 'color')
        ),
        $(
            go.TextBlock,
            {
                text: 'RED'
            },
            new go.Binding('text', 'text')
        )
    )
);

export const createDiagramGroupNodeTemplate = () => $(
    go.Group,
    {
        resizable: true,
        resizeObjectName: 'GroupNode',
    },
    $(
        go.Panel,
        go.Panel.Vertical,
        $(
            go.Shape,
            'Rectangle',
            {
                fill: '#c8c9cc',
                desiredSize: new go.Size(100, 100),
                name: 'GroupNode'
            }
        ),
    ),
);