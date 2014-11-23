(function() {
    var javaClass = Java.type("com.bearsoft.rowset.changes.Command");
    javaClass.setPublisher(function(aDelegate) {
        return new P.Command(aDelegate);
    });
    
    /**
     * Generated constructor.
     * @constructor Command Command
     */
    P.Command = function () {
        var maxArgs = 0;
        var delegate = arguments.length > maxArgs ?
              arguments[maxArgs] 
            : new javaClass();

        Object.defineProperty(this, "unwrap", {
            value: function() {
                return delegate;
            }
        });
        if(P.Command.superclass)
            P.Command.superclass.constructor.apply(this, arguments);
        delegate.setPublished(this);
        Object.defineProperty(this, "consumed", {
            get: function() {
                var value = delegate.consumed;
                return P.boxAsJs(value);
            }
        });
        if(!P.Command){
            /**
             * Indicated if the change is consumed.
             * @property consumed
             * @memberOf Command
             */
            P.Command.prototype.consumed = true;
        }
        Object.defineProperty(this, "type", {
            get: function() {
                var value = delegate.type;
                return P.boxAsJs(value);
            }
        });
        if(!P.Command){
            /**
             * Indicates the change's type (Insert, Update, Delete or Command).
             * @property type
             * @memberOf Command
             */
            P.Command.prototype.type = '';
        }
        Object.defineProperty(this, "parameters", {
            get: function() {
                var value = delegate.parameters;
                return P.boxAsJs(value);
            }
        });
        if(!P.Command){
            /**
             * Parameters of command.
             * @property parameters
             * @memberOf Command
             */
            P.Command.prototype.parameters = [];
        }
        Object.defineProperty(this, "command", {
            get: function() {
                var value = delegate.command;
                return P.boxAsJs(value);
            }
        });
        if(!P.Command){
            /**
             * Command sql text to be applied in a database.
             * @property command
             * @memberOf Command
             */
            P.Command.prototype.command = '';
        }
    };
        /**
         * Consumes the change, so other validators and database applier won't apply it.
         * @method consume
         * @memberOf Command
         */
        P.Command.prototype.consume = function() {
            var delegate = this.unwrap();
            var value = delegate.consume();
            return P.boxAsJs(value);
        };

})();