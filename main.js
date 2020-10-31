/*
 * copyright (c) 2020 Roostertail Software. All right reserved.
 *


 */

// Toolbar Button
const _ = require( 'lodash' );

const REQUIREMENTTYPE = "SysMLRequirementView"
const ERRORS = {
    NOSELECTION: "Select a Requirements Node to being.",
    NOSUBREQ: "Select a Requirements with sub-requirements.",
    NOTREQUIREMENT: "Select a Requirement Node"
}

let fixIdAndRecurse = ( /* SysMLRequirementView.model */ model, /* string */ id, /* number */ index ) => {
    let newId = id + "." + (++index)
    
    if( model.ownedElements.length < 1 ){
        app.selections.selectModel( model );
        let m = app.selections.getSelected()
        app.engine.setProperty( m, 'id', newId );
        return
    } else {
        app.selections.selectModel( model );
        let m = app.selections.getSelected()
        app.engine.setProperty( m, 'id', newId );
        startUpdateRecursion( m );
    }
}

let startUpdateRecursion = ( /* SysMLRequirementView.model */ mainModel  ) => {
    let id = mainModel.id;

    _.forEach( mainModel.ownedElements, ( element, index ) =>{
        fixIdAndRecurse( element, id, index )
    } );

    return;
}

let startReindex = () => {
    // Get the selected node and complain if nothing is selected.

    let views = app.selections.getSelectedViews()
    if ( views.length < 1 ) {
        app.toast.info( ERRORS.NOSELECTION );
        return;
    }

    console.log( views[0])
    // check this is a Requirements Node
    if( views[0].constructor.name !=  REQUIREMENTTYPE ){
        app.toast.info( ERRORS.NOTREQUIREMENT );
        return
    };

    // Let's do some work
    startUpdateRecursion( app.selections.getSelected() )

    return;
}

let init = () => {
    app.commands.register( 'staruml-requirements-reindex:start-reindex', startReindex );
}

exports.init = init;
