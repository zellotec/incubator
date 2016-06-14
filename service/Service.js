
Ext.define('Mba.ux.incubator.service.Service', {

    config: {
        serviceId: null
    },

    updateServiceId: function() {
        return BRBRelatorioVisita.service.Manager.register(this);
    },

    constructor: function(config) {
        this.initConfig(config);
    },

    init: Ext.emptyFn
});
