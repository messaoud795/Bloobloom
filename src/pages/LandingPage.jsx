import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './LandingPage.css';
import { arePropsEqual } from '../utils/utils';
import Collection from '../components/collection/Collection';
import Filters from '../components/filters/Filters';
import Header from '../components/header/Header';
import Loader from '../components/loader/Loader';
import { isEmpty } from 'lodash';
import './LandingPage.css';

const LandingPage = () => {
  const { glasses, total_count, loading, error } = useSelector(
    state => state.glasses
  );
  const [page, setPage] = useState(1);

  const loadNextGlassesChunk = () => {
    setPage(page => page + 1);
  };

  return (
    <div className='landing-page'>
      <div className='landing-page-header'>
        <Header />
        <Filters page={page} />
      </div>
      {isEmpty(glasses) && loading ? (
        <Loader />
      ) : (
        <>
          {isEmpty(glasses) ? (
            <span className='msg'>No Results Found</span>
          ) : (
            <Collection
              glasses={glasses}
              loadNextGlassesChunk={loadNextGlassesChunk}
              totalCount={total_count}
            />
          )}
        </>
      )}
      {error && <span className='msg error'>Error Loading Data</span>}
    </div>
  );
};

export default React.memo(LandingPage, arePropsEqual);
