const opts = {
    key_press: [
        {   // square right
            key1: "w",
            key2: "o",
            w: tg_w,
            o: tg_o,
            coding: tg_w == "square" ? "incongruent" : "congruent",
            //target_object: "square",
            target_position: "right",
            canvas: {
                focalColor: 'blue',
                focalShape: 'square',
                focalNumber: 1,
                elemSize: 90,
                total: 2,
                gap: 80,
                start_with: 'other',
                otherShape: 'circle',
                otherColor: 'white',
                sort: 'split_grid'
            }
        },        
        {   // circle right
            key1: "w",
            key2: "o",
            w: tg_w,
            o: tg_o,
            coding: tg_w == "square" ? "congruent" : "incongruent",
            //target_object: "circle",
            target_position: "right",
            canvas: {
                focalColor: 'blue',
                focalShape: 'circle',
                focalNumber: 1,
                elemSize: 90,
                total: 2,
                gap: 80,
                start_with: 'other',
                otherShape: 'square',
                otherColor: 'white',
                sort: 'split_grid'
            }
        },        
        {   // square left
            key1: "w",
            key2: "o",
            w: tg_w,
            o: tg_o,
            coding: tg_w == "square" ? "congruent" : "incongruent",
            //target_object: "square",
            target_position: "left",
            canvas: {
                focalColor: 'blue',
                focalShape: 'square',
                focalNumber: 1,
                elemSize: 90,
                total: 2,
                gap: 80,
                start_with: 'focal',
                otherShape: 'circle',
                otherColor: 'white',
                sort: 'split_grid'
            }
        },        
        {   // circle left
            key1: "w",
            key2: "o",
            w: tg_w,
            o: tg_o,
            coding: tg_w == "square" ? "incongruent" : "congruent",
            //target_object: "circle",
            target_position: "left",
            canvas: {
                focalColor: 'blue',
                focalShape: 'circle',
                focalNumber: 1,
                elemSize: 90,
                total: 2,
                gap: 80,
                start_with: 'focal',
                otherShape: 'square',
                otherColor: 'white',
                sort: 'split_grid'
            }
        },
        /*
        FAR CUES
        */
       {   // square right
        key1: "w",
        key2: "o",
        w: tg_w,
        o: tg_o,
        coding: tg_w == "square" ? "incongruent" : "congruent",
        //target_object: "square",
        target_position: "right",
        canvas: {
            focalColor: 'blue',
            focalShape: 'square',
            focalNumber: 1,
            elemSize: 90,
            total: 2,
            gap: 250,
            start_with: 'other',
            otherShape: 'circle',
            otherColor: 'white',
            sort: 'split_grid'
        }
    },        
    {   // circle right
        key1: "w",
        key2: "o",
        w: tg_w,
        o: tg_o,
        coding: tg_w == "square" ? "congruent" : "incongruent",
        //target_object: "circle",
        target_position: "right",
        canvas: {
            focalColor: 'blue',
            focalShape: 'circle',
            focalNumber: 1,
            elemSize: 90,
            total: 2,
            gap: 250,
            start_with: 'other',
            otherShape: 'square',
            otherColor: 'white',
            sort: 'split_grid'
        }
    },        
    {   // square left
        key1: "w",
        key2: "o",
        w: tg_w,
        o: tg_o,
        coding: tg_w == "square" ? "congruent" : "incongruent",
        //target_object: "square",
        target_position: "left",
        canvas: {
            focalColor: 'blue',
            focalShape: 'square',
            focalNumber: 1,
            elemSize: 90,
            total: 2,
            gap: 250,
            start_with: 'focal',
            otherShape: 'circle',
            otherColor: 'white',
            sort: 'split_grid'
        }
    },        
    {   // circle left
        key1: "w",
        key2: "o",
        w: tg_w,
        o: tg_o,
        coding: tg_w == "square" ? "incongruent" : "congruent",
        //target_object: "circle",
        target_position: "left",
        canvas: {
            focalColor: 'blue',
            focalShape: 'circle',
            focalNumber: 1,
            elemSize: 90,
            total: 2,
            gap: 250,
            start_with: 'focal',
            otherShape: 'square',
            otherColor: 'white',
            sort: 'split_grid'
        }
    }
    ]
};