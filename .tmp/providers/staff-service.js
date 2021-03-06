import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConnectionService } from './connection-service';
import 'rxjs/add/operator/map';
/*
  Generated class for the StaffService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export var StaffService = (function () {
    function StaffService(http, connection) {
        this.http = http;
        this.http = http;
        this.connection = connection;
        this.connection.getConnectionInfo();
    }
    StaffService.prototype.getStaffData = function () {
        return this.http.get("http://" + this.connection.ip + ":" + this.connection.port + "/DasherAPI/public/api2/getCompanyEmployees");
    };
    StaffService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    StaffService.ctorParameters = [
        { type: Http, },
        { type: ConnectionService, },
    ];
    return StaffService;
}());
