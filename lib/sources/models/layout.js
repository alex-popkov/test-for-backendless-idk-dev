// This file was autogenerated by idk compile models.
// Please do not edit.

goog.provide( 'test.idk.models.Layout' );
goog.provide( 'test.idk.models.LayoutDatarow' );

goog.require( 'zz.models.Datarow' );
goog.require( 'zz.models.Dataset' );
goog.require( 'zz.models.enums.FieldType' );

goog.require( 'test.idk.models.Menu' );


/**
* @param {!zz.models.Dataset} dataset
* @param {?Array.<string>} opt_data
* @extends {zz.models.Datarow}
* @constructor
*/
test.idk.models.LayoutDatarow = function( dataset, opt_data ){

    /**
     * @type {string}
     */
    this.title = undefined;

    /**
     * @type {test.idk.models.Menu}
     */
    this.menu = undefined;



/**
* Call parent constructor.
*/
zz.models.Datarow.call( this, dataset, opt_data );
};

goog.inherits( test.idk.models.LayoutDatarow, zz.models.Datarow );

/**
* @param {goog.event.EventTarget=} opt_parent
* @param {Array.<Array>=} opt_data
* @extends {zz.models.Dataset}
* @constructor
*/
test.idk.models.Layout = function( opt_parent, opt_data ){

zz.models.Dataset.call( this, opt_parent, opt_data );
};
goog.inherits( test.idk.models.Layout, zz.models.Dataset );

/**
* Current dataset row type.
* @constructor
* @overwrite
* @type {test.idk.models.LayoutDatarow}
*/
test.idk.models.Layout.prototype.DatarowConstructor = test.idk.models.LayoutDatarow;

/**
* Return test.idk.models.LayoutDatarow schema object.
* @override
* @returns {Object}
*/
test.idk.models.Layout.prototype.getDatarowSchema = function( ){

return {
        title: {
                index: 0,
                type: zz.models.enums.FieldType.STRING,
                required: false
        },
        menu: {
                index: 1,
                type: test.idk.models.Menu,
                required: false
        }
};
};