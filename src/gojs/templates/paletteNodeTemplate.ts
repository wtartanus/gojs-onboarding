import * as go from 'gojs';

const $ = go.GraphObject.make;

export const createPaletteRoundedRectangleNodeTemplate = () => $(
    go.Node,
    $(
        go.Panel,
        go.Panel.Auto,
        $(
            go.Shape,
            'RoundedRectangle',
            {
                fill: '#117a2d',
                desiredSize: new go.Size(150, 100)
            }
        ),
        $(
            go.TextBlock,
            {
                text: 'GREEN'
            }
        )
    )
);

export const createPaletteRectangleNodeTemplate = () => $(
    go.Node,
    $(
        go.Panel,
        go.Panel.Auto,
        $(
            go.Shape,
            'Rectangle',
            {
                fill: '#11447a',
                desiredSize: new go.Size(100, 100)
            }
        ),
        $(
            go.TextBlock,
            {
                text: 'BLUE'
            }
        )
    )
);

export const createPaletteTriangleNodeTemplate = () => $(
    go.Node,
    $(
        go.Panel,
        go.Panel.Auto,
        $(
            go.Shape,
            'Triangle',
            {
                fill: '#bd2839',
                desiredSize: new go.Size(100, 100)
            }
        ),
        $(
            go.TextBlock,
            {
                text: 'RED'
            }
        )
    )
);

export const createPaletteGroupNodeTemplate = () => $(
    go.Node,
    $(
        go.Panel,
        go.Panel.Vertical,
        $(
            go.Shape,
            'Rectangle',
            {
                fill: '#c8c9cc',
                desiredSize: new go.Size(100, 100)
            }
        ),
        $(
            go.TextBlock,
            {
                text: 'GROUP',
            }
        )
    ),
);