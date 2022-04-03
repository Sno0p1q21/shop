import React from 'react';
import cn from 'classnames/bind';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import style from '../style.scss';

const cx = cn.bind(style);

const mapData = {
  center: [54.261841, 48.315241],
  zoom: 15,
};

const coordinates = [
  [54.260221, 48.315393],
];

const MapSection = () => (
  <>
    <YMaps>
      <Map defaultState={mapData} className={cx('ya-map')}>
        {coordinates.map((target) => <Placemark key={target} geometry={target} />)}
      </Map>
    </YMaps>
  </>
);

export default MapSection;
