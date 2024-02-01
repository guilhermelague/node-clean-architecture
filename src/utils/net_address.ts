import os from 'os';

export default class NetAddress {

  static getIP() {
    const ifaces = os.networkInterfaces();
    let ip = '';
    Object.keys(ifaces).forEach((ifname: string) => {
      let alias = 0;
    
      ifaces[ifname]?.forEach((iface: os.NetworkInterfaceInfo) => {
        if ('IPv4' !== iface.family || iface.internal !== false) {
          return;
        }
    
        if (alias >= 1) {
          ip = `${ifname}: ${alias}, ${iface.address}`;
        } else {
          ip = `${ifname}: ${iface.address}`;
        }
        ++alias;
      });
    });
  
    return ip;
  }
}