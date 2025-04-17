function parseUplink(device, payload) {

    var data = payload.asBytes()
    for (let i = 0; i < data.length; i++) {
        data[i] = data[i].toString(2).padStart(8, '0');
        // env.log(data[i])
    }

    if (data[0] == 0x01) {
        
        //*Update Port 1 endpoints --------------------------------------------------------------------------------

        var e = device.endpoints.byAddress("1.1");
        if (e != null){
            var dataUpdated = parseInt(data[1] + data[2] + data[3] + data[4], 2)
            var dataUpdatedMM = dataUpdated / 1000
            e.updateVoltageSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("1.2");
        if (e != null){
            var dataUpdated = parseInt(data[5] + data[6] + data[7] + data[8], 2)
            var dataUpdatedMM = dataUpdated / 1000
            e.updateVoltageSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("1.3");
        if (e != null){
            var dataUpdated = parseInt(data[9] + data[10] + data[11] + data[12], 2)
            var dataUpdatedMM = dataUpdated / 1000
            e.updateVoltageSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("1.4");
        if (e != null){ 
            var dataUpdated = parseInt(data[13] + data[14] + data[15] + data[16], 2)
            var dataUpdatedMM = dataUpdated / 1000
            e.updateCurrentSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("1.5"); 
        if (e != null){
            var dataUpdated = parseInt(data[17] + data[18] + data[19] + data[20], 2)
            var dataUpdatedMM = dataUpdated / 1000
            e.updateCurrentSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("1.6");
        if (e != null){
            var dataUpdated = parseInt(data[21] + data[22] + data[23] + data[24], 2)
            var dataUpdatedMM = dataUpdated / 1000
            e.updateCurrentSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("1.7");
        if (e != null){
            var dataUpdated = parseInt(data[25] + data[26] + data[27] + data[28], 2)
            var dataUpdatedMM = dataUpdated / 1000
           e.updateFrequencySensorStatus(dataUpdatedMM);
        }   
        var e = device.endpoints.byAddress("1.8");
        if (e != null){
            var dataUpdated = parseInt(data[29] + data[30] + data[31] + data[32], 2)
            var dataUpdatedMM = dataUpdated * 100
            e.updateActivePowerSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("1.9");
        if (e != null){
            var dataUpdated = parseInt(data[33] + data[34] + data[35] + data[36], 2)
            var dataUpdatedMM = dataUpdated * 100
            e.updateReactivePowerSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("1.10");
        if (e != null){
            var dataUpdated = parseInt(data[37] + data[38] + data[39] + data[40], 2)
            var dataUpdatedMM = dataUpdated / 100
            e.updateGenericSensorStatus(dataUpdatedMM);
        }   
        var e = device.endpoints.byAddress("1.11");
        if (e != null){
            var dataUpdated = parseInt(data[41] + data[42] + data[43] + data[44], 2)
            var dataUpdatedMM = dataUpdated / 1000
            e.updateCosPhiSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("1.12");
        if (e != null){
            var dataUpdated = parseInt(data[45] + data[46] + data[47] + data[48], 2)
            var dataUpdatedMM = dataUpdated / 1000
            e.updateCosPhiSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("1.13");
        if (e != null){
            var dataUpdated = parseInt(data[49] + data[50] + data[51] + data[52], 2)
            var dataUpdatedMM = dataUpdated / 1000
            e.updateCosPhiSensorStatus(dataUpdatedMM);
        }
    } else {

        //*Update Port 2 endpoints --------------------------------------------------------------------------------

        var e = device.endpoints.byAddress("2.1");
        if (e != null){
            var dataUpdated = parseInt(data[1] + data[2] + data[3] + data[4], 2)
            var dataUpdatedMM = dataUpdated / 1000
            e.updateVoltageSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("2.2");
        if (e != null){
            var dataUpdated = parseInt(data[5] + data[6] + data[7] + data[8], 2)
            var dataUpdatedMM = dataUpdated / 1000
            e.updateVoltageSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("2.3");
        if (e != null){
            var dataUpdated = parseInt(data[9] + data[10] + data[11] + data[12], 2)
            var dataUpdatedMM = dataUpdated / 1000
            e.updateVoltageSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("2.4");
        if (e != null){ 
            var dataUpdated = parseInt(data[13] + data[14] + data[15] + data[16], 2)
            var dataUpdatedMM = dataUpdated / 1000
            e.updateCurrentSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("2.5"); 
        if (e != null){
            var dataUpdated = parseInt(data[17] + data[18] + data[19] + data[20], 2)
            var dataUpdatedMM = dataUpdated / 1000
            e.updateCurrentSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("2.6");
        if (e != null){
            var dataUpdated = parseInt(data[21] + data[22] + data[23] + data[24], 2)
            var dataUpdatedMM = dataUpdated / 1000
            e.updateCurrentSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("2.7");
        if (e != null){
            var dataUpdated = parseInt(data[25] + data[26] + data[27] + data[28], 2)
            var dataUpdatedMM = dataUpdated / 1000
            e.updateFrequencySensorStatus(dataUpdatedMM);
        }   
        var e = device.endpoints.byAddress("2.8");
        if (e != null){
            var dataUpdated = parseInt(data[29] + data[30] + data[31] + data[32], 2)
            var dataUpdatedMM = dataUpdated * 100
            e.updateActivePowerSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("2.9");
        if (e != null){
            var dataUpdated = parseInt(data[33] + data[34] + data[35] + data[36], 2)
            var dataUpdatedMM = dataUpdated * 100
            e.updateReactivePowerSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("2.10");
        if (e != null){
            var dataUpdated = parseInt(data[37] + data[38] + data[39] + data[40], 2)
            var dataUpdatedMM = dataUpdated / 100
            e.updateGenericSensorStatus(dataUpdatedMM);
        }   
        var e = device.endpoints.byAddress("2.11");
        if (e != null){
            var dataUpdated = parseInt(data[41] + data[42] + data[43] + data[44], 2)
            var dataUpdatedMM = dataUpdated / 1000
            e.updateCosPhiSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("2.12");
        if (e != null){
            var dataUpdated = parseInt(data[45] + data[46] + data[47] + data[48], 2)
            var dataUpdatedMM = dataUpdated / 1000
            e.updateCosPhiSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("2.13");
        if (e != null){
            var dataUpdated = parseInt(data[49] + data[50] + data[51] + data[52], 2)
            var dataUpdatedMM = dataUpdated / 1000
            e.updateCosPhiSensorStatus(dataUpdatedMM);
        }
    }
}
