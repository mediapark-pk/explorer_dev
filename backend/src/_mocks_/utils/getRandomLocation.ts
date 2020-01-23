import * as geoip from 'geoip-lite';
import { getRandomNumber, getRandomDecimal } from '.';
import { Location } from '@app/common';

const ips = [
    '103.27.74.144',
    '103.27.74.145',
    '139.180.217.13',
    '139.180.218.20',
    '149.28.137.58',
    '157.230.34.97',
    '157.230.36.235',
    '157.230.38.234',
    '157.230.40.11',
    '159.65.132.221',
    '159.89.203.179',
    '167.114.138.20',
    '167.114.138.21',
    '167.114.138.22',
    '167.179.65.226',
    '178.128.106.0',
    '178.128.111.185',
    '178.128.213.139',
    '178.128.217.245',
    '178.128.39.250',
    '188.214.133.155',
    '178.128.87.10',
    '178.128.95.226',
    '116.203.237.179',
    '188.214.128.49',
    '188.214.128.80',
    '188.214.130.14',
    '206.189.119.219',
    '206.189.148.219',
    '206.189.157.106',
    '206.189.157.169',
    '206.189.22.64',
    '206.189.41.193',
    '206.189.44.175',
    '207.148.124.102',
    '207.148.66.51',
    '209.97.163.63',
    '45.32.102.156',
    '45.76.179.232',
    '46.166.160.34',
    '46.166.160.37',
    '46.166.165.22',
    '46.166.165.23',
    '46.166.165.36',
    '54.39.81.224',
    '54.39.81.225',
    '54.39.81.226',
    '66.42.48.14',
    '66.42.49.169',
    '66.42.59.195',
    '68.183.224.234',
    '80.211.34.143',
    '87.98.254.2',
    '93.115.26.149',
    '93.115.26.151',
    '93.115.26.152',
    '93.115.28.102',
    '93.115.28.176',
    '103.27.74.141',
    '104.248.251.141',
    '134.209.250.142',
    '139.180.134.42',
    '139.180.146.235',
    '139.180.211.153',
    '139.180.220.143',
    '149.28.135.17',
    '149.28.135.80',
    '149.28.151.231',
    '178.128.52.219',
    '178.128.59.10',
    '45.76.188.120',
    '45.76.182.5',
    '209.182.239.43',
    '176.31.56.247',
    '147.135.184.174',
    '95.216.2.10',
    '149.28.144.229',
    '142.93.109.204',
    '178.128.108.240',
    '45.77.231.21',
    '46.166.160.71',
    '206.189.236.105',
    '104.248.176.225',
    '95.216.2.11',
    '188.214.132.82',
    '188.214.133.83',
    '188.214.133.119',
    '188.214.133.116',
    '188.214.133.154',
    '188.214.133.143',
    '188.214.133.131',
    '188.214.133.152',
    '188.214.132.19',
    '188.214.132.58',
    '188.214.132.55',
    '139.180.135.79',
    '46.166.160.30',
    '103.200.4.29',
    '139.180.142.179',
    '178.128.219.24',
    '87.98.254.2',
    '133.130.76.125',
    '46.166.165.47',
    '66.42.59.140',
    '93.115.26.228',
    '134.209.100.140',
    '139.180.133.141',
    '157.7.130.196',
    '157.7.130.130',
    '157.7.133.65',
    '178.128.50.205',
    '188.214.133.142',
    '188.214.132.83',
    '188.214.132.13',
    '188.214.133.108',
    '188.214.133.135',
    '178.128.81.80',
    '207.148.124.29',
    '149.28.139.221',
    '45.77.169.106',
    '139.180.141.219',
    '207.148.71.188',
    '45.32.124.227',
    '45.76.184.73',
    '139.180.211.32',
    '45.76.149.1',
    '46.166.160.42',
    '188.214.130.4',
    '139.180.217.253',
    '46.166.160.48',
    '95.216.2.13',
    '209.182.239.49',
    '209.182.239.111',
    '93.115.26.227',
    '95.217.74.210',
];

export const getRandomLocation = (): Location => {
    const index = getRandomNumber(0, ips.length - 1);

    const geo = geoip.lookup(ips[index]);

    if (!geo) {
        return {
            lat: getRandomDecimal(-90, 90, 5),
            long: getRandomDecimal(-180, 180, 5),
        };
    }

    return {
        lat: geo.ll[0],
        long: geo.ll[1],
    };
};