import React from 'react';
import { arePropsEqual } from '../../utils/utils';
import InfiniteScroll from 'react-infinite-scroll-component';
import Glass from '../glass/Glass';
import './Collection.css';
import Loader from '../loader/Loader';

const Collection = ({ glasses, totalCount, loadNextGlassesChunk }) => {
  return (
    <InfiniteScroll
      dataLength={glasses.length}
      next={loadNextGlassesChunk}
      hasMore={glasses.length < totalCount}
      loader={<Loader />}
      endMessage={
        <p style={{ textAlign: 'center', padding: '2rem', fontSize: '2rem' }}>
          <b> End Results</b>
        </p>
      }
    >
      <div className='collection'>
        {glasses.map((glass, index) => (
          <Glass glass={glass} key={index} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default React.memo(Collection, arePropsEqual);
