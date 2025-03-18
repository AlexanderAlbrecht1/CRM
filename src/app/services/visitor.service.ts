import { Injectable } from '@angular/core';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { environment } from '../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  constructor() {}

  async getFingerprint(): Promise<string> {
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    return result.visitorId;
  }

  async getIpData(): Promise<any> {
    try {
      const response = await fetch(`https://ipinfo.io/json?token=${environment.ipInfoToken}`);
      return response.json();
    } catch (error) {
      console.error('Fehler beim Abrufen der IP-Daten:', error);
      return null;
    }
  }

  async logVisitor(): Promise<void> {
    try {
      const fingerprint = await this.getFingerprint();
      const ipData = await this.getIpData();

      const visitorData = {
        fingerprint,
        ip: ipData?.ip || 'Unbekannt',
        location: ipData?.city + ', ' + ipData?.country || 'Unbekannt',
        // userAgent: navigator.userAgent,
        timestamp: new Date().toISOString()
      };

      console.log('Besucherdaten:', visitorData);
    } catch (error) {
      console.error('Fehler beim Loggen des Besuchers:', error);
    }
  }
}
